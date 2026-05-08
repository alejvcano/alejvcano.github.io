import { motion } from 'framer-motion';
import { researcherInfo } from '@/data/researcher';
import { SEOHead } from '@/components/seo/SEOHead';
import { Separator } from '@/components/ui/separator';

interface CVEntry {
  period: string;
  title: string;
  org: string;
  detail?: string;
}

const experience: CVEntry[] = [
  {
    period: '2023 — Present',
    title: 'Researcher, Complex Systems Modeling',
    org: 'Max Planck Institute for Dynamics and Self-Organization',
    detail: 'Developing mechanistic and phenomenological models of collective dynamics.',
  },
  {
    period: '2021 — 2023',
    title: 'Marie Skłodowska-Curie Fellow',
    org: 'University of Oxford, Mathematical Institute',
    detail: 'Modeling epidemic spread and tipping points in coupled networks.',
  },
  {
    period: '2019 — 2021',
    title: 'Postdoctoral Researcher',
    org: 'Santa Fe Institute',
    detail: 'Phenomenological models of emergent behavior in biological systems.',
  },
];

const education: CVEntry[] = [
  { period: '2015 — 2019', title: 'PhD in Applied Mathematics', org: 'University of Cambridge' },
  { period: '2013 — 2015', title: 'MSc in Theoretical Physics', org: 'ETH Zürich' },
  { period: '2009 — 2013', title: 'BSc in Physics', org: 'Universidad Nacional' },
];

const selectedTalks = [
  'Conference on Complex Systems — Keynote (2024)',
  'NetSci International School and Conference on Network Science (2023)',
  'SIAM Conference on Applications of Dynamical Systems (2022)',
];

export default function CV() {
  return (
    <>
      <SEOHead title="CV" description={`Curriculum vitae of ${researcherInfo.name}.`} />

      <div className="min-h-screen">
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <motion.h1
              className="text-5xl md:text-6xl font-light tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Curriculum Vitae
            </motion.h1>
            <p className="text-lg text-muted-foreground font-light">
              {researcherInfo.name} — {researcherInfo.tagline}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            <Section title="Experience" entries={experience} />
            <Separator />
            <Section title="Education" entries={education} />
            <Separator />

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-wide">Selected Talks</h2>
              <ul className="space-y-2">
                {selectedTalks.map((t) => (
                  <li key={t} className="text-base font-light text-muted-foreground flex gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-wide">Awards</h2>
              <ul className="space-y-2">
                {researcherInfo.awards.map((a) => (
                  <li key={a} className="text-base font-light text-muted-foreground flex gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div className="space-y-2">
              <h2 className="text-2xl font-light tracking-wide">Contact</h2>
              <p className="text-base font-light text-muted-foreground">{researcherInfo.email}</p>
              <p className="text-base font-light text-muted-foreground">{researcherInfo.location}</p>
              {researcherInfo.socialLinks.googleScholar && (
                <a
                  href={researcherInfo.socialLinks.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-base font-light underline underline-offset-4 hover:text-foreground text-muted-foreground"
                >
                  Google Scholar
                </a>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function Section({ title, entries }: { title: string; entries: CVEntry[] }) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-light tracking-wide">{title}</h2>
      <div className="space-y-8">
        {entries.map((e) => (
          <div key={`${e.period}-${e.title}`} className="grid md:grid-cols-[180px_1fr] gap-2 md:gap-8">
            <div className="text-sm text-muted-foreground font-light pt-1">{e.period}</div>
            <div className="space-y-1">
              <div className="text-lg font-light">{e.title}</div>
              <div className="text-base text-muted-foreground font-light">{e.org}</div>
              {e.detail && (
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{e.detail}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}