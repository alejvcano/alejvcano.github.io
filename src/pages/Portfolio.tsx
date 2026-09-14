import { projects } from '@/data/projects';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';

/**
 * Research page with masonry grid
 * Features smooth animations and responsive layout
 */
export default function Portfolio() {

  return (
    <>
      <SEOHead 
        title="Research"
        description="Browse my complete research portfolio featuring mechanistic modeling, phenomenological modeling, epidemiology, climate systems, systems biology, and network science projects."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-4">
              Research
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
              A collection of research spanning diverse complex systems and modeling approaches
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid - Edge to edge */}
      <section className="py-12 md:py-16 px-2 md:px-4">
        <PortfolioGrid projects={projects} />
      </section>

        {/* Bottom spacing */}
        <div className="h-24" />
      </div>
    </>
  );
}
