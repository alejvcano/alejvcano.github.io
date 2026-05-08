import { motion } from 'framer-motion';
import { researcherInfo } from '@/data/researcher';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from 'next-themes';
import attractorHeroDark from '@/assets/attractor-hero-dark.jpg';
import attractorHeroLight from '@/assets/attractor-hero-light.jpg';

/**
 * Homepage with immersive hero section and featured projects grid
 * Showcases researcher's best work with minimal, elegant design
 */
export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const { resolvedTheme } = useTheme();
  const attractorHero = resolvedTheme === 'light' ? attractorHeroLight : attractorHeroDark;

  return (
    <>
      <SEOHead />

      <div className="min-h-screen">
        {/* Hero Section - Full viewport with featured image */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-background">
            <img
              src={attractorHero}
              alt="Strange attractor visualization"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background/70" />
          </div>

          {/* Hero Content */}
          <div className="relative h-full flex flex-col items-center justify-start pt-32 md:pt-40 px-6">
            <motion.div
              className="text-center space-y-6 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1
                className="text-2xl md:text-4xl lg:text-5xl font-light tracking-wide text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {researcherInfo.name}
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl font-light tracking-wide text-foreground/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {researcherInfo.tagline}
              </motion.p>

              <motion.p
                className="text-base md:text-lg font-light leading-relaxed text-foreground/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {researcherInfo.heroIntroduction}
              </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <ScrollIndicator />
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-light tracking-wide">
                  About My Research
                </h2>
                <div className="space-y-4 text-lg font-light leading-relaxed text-muted-foreground">
                  <p>
                    {researcherInfo.biography.split('\n\n')[0]}
                  </p>
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors group"
                >
                  <span>Learn More About Me</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-24 md:py-32 border-t border-border">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4 px-6">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide">
                Featured Research
              </h2>
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                A selection of recent projects
              </p>
            </div>
          </ScrollReveal>

          {/* Projects Grid - Edge to edge with minimal gaps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                aspectRatio="landscape"
                showCategory={true}
                index={index}
              />
            ))}
          </div>

          {/* View All Link */}
          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-16 px-6">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>View All Research</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}
