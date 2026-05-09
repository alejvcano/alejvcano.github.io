import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, FlaskConical, Building2, Info } from 'lucide-react';
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
          {project.slug === 'size-structured-fish-populations' && (
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
                <TooltipContent side="left">
                  Photo by Sebastian Pena Lambarri
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
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
                  <>
                    <span>•</span>
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4" />
                      <span>{project.location}</span>
                    </div>
                  </>
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
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              {project.methodology && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-light tracking-wide text-muted-foreground">
                    <FlaskConical className="size-4" />
                    <span>Methodology</span>
                  </div>
                  <p className="font-light text-foreground">{project.methodology}</p>
                </div>
              )}
              {project.institution && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-light tracking-wide text-muted-foreground">
                    <Building2 className="size-4" />
                    <span>Institution</span>
                  </div>
                  <p className="font-light text-foreground">{project.institution}</p>
                </div>
              )}
            </div>
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
