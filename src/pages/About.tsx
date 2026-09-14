import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { researcherInfo } from '@/data/researcher';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

/**
 * About page with researcher biography and professional information
 * Features split layout with portrait image and comprehensive biography
 */
export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description={`Learn about ${researcherInfo.name}, ${researcherInfo.tagline}. ${researcherInfo.biography.split('\n\n')[0]}`}
        image={researcherInfo.portraitImage}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide mb-4">
                About
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Portrait and Biography - Split Layout */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
              {/* Portrait Image */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-sm bg-muted max-w-[50%] md:max-w-none">
                  <img
                    src={researcherInfo.portraitImage}
                    alt={researcherInfo.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  {researcherInfo.socialLinks.twitter && (
                    <a
                      href={researcherInfo.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="size-5" />
                    </a>
                  )}
                  {researcherInfo.socialLinks.linkedin && (
                    <a
                      href={researcherInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="size-5" />
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Biography and Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {/* Name and Tagline */}
                <div className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-light tracking-wide">
                    {researcherInfo.name}
                  </h2>
                  <p className="text-lg text-muted-foreground font-light tracking-wide">
                    {researcherInfo.tagline}
                  </p>
                </div>

                <Separator />

                {/* Biography */}
                <div className="space-y-4">
                  {researcherInfo.biography.split('\n\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base md:text-lg font-light leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
