import { motion } from 'framer-motion';
import { Twitter, Linkedin } from 'lucide-react';
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                About
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                Researcher & Complex Systems Modeler
              </p>
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
                  <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                    {researcherInfo.name}
                  </h2>
                  <p className="text-xl text-muted-foreground font-light tracking-wide">
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

                {/* Approach */}
                <div className="space-y-4">
                  <h3 className="text-xl font-light tracking-wide">Research Approach</h3>
                  {researcherInfo.approach.split('\n\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base md:text-lg font-light leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Awards */}
                <div className="space-y-4">
                  <h3 className="text-xl font-light tracking-wide">Awards & Recognition</h3>
                  <ul className="space-y-2">
                    {researcherInfo.awards.map((award, index) => (
                      <li
                        key={index}
                        className="text-sm font-light text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-foreground mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Institutions */}
                <div className="space-y-4">
                  <h3 className="text-xl font-light tracking-wide">Institutions & Collaborations</h3>
                  <ul className="space-y-2">
                    {researcherInfo.institutions.map((inst, index) => (
                      <li
                        key={index}
                        className="text-sm font-light text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-foreground mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                        {inst}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="pt-4 space-y-2">
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Email: </span>
                    <a
                      href={`mailto:${researcherInfo.email}`}
                      className="text-foreground hover:text-muted-foreground transition-colors"
                    >
                      {researcherInfo.email}
                    </a>
                  </div>
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Location: </span>
                    <span className="text-foreground">{researcherInfo.location}</span>
                  </div>
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Education: </span>
                    <span className="text-foreground">{researcherInfo.education}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
