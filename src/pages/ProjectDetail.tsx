import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, FlaskConical, Info, BookOpen, ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { SEOHead } from '@/components/seo/SEOHead';
import { getProjectBySlug } from '@/data/projects';
import { Lightbox } from '@/components/portfolio/Lightbox';

/**
 * Project detail page with hero image, gallery, and full-screen lightbox
 * Features smooth animations and immersive image viewing experience
 */
export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 404 if project not found
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.description}
        image={project.coverImage}
        type="article"
      />

      <div className="min-h-screen">
        {/* Hero Image - 70vh */}
        <motion.div
          className="relative w-full h-[70vh] overflow-hidden bg-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          {(() => {
            const credits: Record<string, string> = {
              'size-structured-fish-populations': 'Photo by Sebastian Pena Lambarri',
              'neural-circuit-dynamics': 'Photo by Jin Yeong Kim',
              'fish-populations-abrupt-shifts': 'Photo by Olaf Jensen',
            };
            const credit = credits[project.slug];
            if (!credit) return null;
            return (
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      aria-label="Photo credit"
                      className="absolute top-4 right-4 z-10 inline-flex items-center justify-center size-8 rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 transition-colors"
                    >
                      <Info className="size-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="left">{credit}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })()}
        </motion.div>

        {/* Project Info Section */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Title and Category */}
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground font-light">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-2 capitalize">
                  <span>•</span>
                  <span>{project.category.replace(/-/g, ' ')}</span>
                </div>
                {project.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4" />
                    <span>{project.location}</span>
                  </div>
                )}
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl font-light leading-relaxed text-foreground">
                {project.description}
              </p>
            </div>

            {/* Technical Details */}
            {project.methodology && (
              <div className="pt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm font-light tracking-wide text-muted-foreground">
                  <FlaskConical className="size-4" />
                  <span>Methodology</span>
                </div>
                <p className="font-light text-foreground">{project.methodology}</p>
              </div>
            )}

            {project.publications && project.publications.length > 0 && (
              <div className="pt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm font-light tracking-wide text-muted-foreground">
                  <BookOpen className="size-4" />
                  <span>Publications</span>
                </div>
                <ul className="space-y-2">
                  {project.publications.map((pub) => (
                    <li key={pub.citation} className="font-light text-foreground flex gap-2 leading-relaxed">
                      <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                      <span>
                        {pub.citation}
                        {pub.url && (
                          <>
                            {' '}
                            <a
                              href={pub.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Open journal article"
                              className="inline-flex items-center align-baseline text-muted-foreground hover:text-foreground"
                            >
                              <ExternalLink className="size-3.5" />
                            </a>
                          </>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </section>

        {/* Lightbox */}
        <Lightbox
          images={project.images}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          onNavigate={setCurrentImageIndex}
        />
      </div>
    </>
  );
}
