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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-4">
                About
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Portrait and Biography - Split Layout */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Portrait Image */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-sm bg-muted">
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
                  {researcherInfo.socialLinks.googleScholar && (
                    <a
                      href={researcherInfo.socialLinks.googleScholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="Google Scholar"
                    >
                      <svg
                        className="size-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                        <path d="M5 13.18v4L12 21l7-3.82v-4" />
                      </svg>
                    </a>
                  )}
                  {researcherInfo.socialLinks.github && (
                    <a
                      href={researcherInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="size-5" />
                    </a>
                  )}
                  {researcherInfo.socialLinks.orcid && (
                    <a
                      href={researcherInfo.socialLinks.orcid}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="ORCID"
                    >
                      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947 0 .525-.422.947-.947.947a.95.95 0 010-1.894zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/>
                      </svg>
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
