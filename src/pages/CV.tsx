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
    period: '02/2026 — present',
    title: 'Postdoctoral researcher',
    org: 'MARBEC — Institute of Marine Biodiversity, Exploitation and Conservation, IRD, Sète, France',
  },
  {
    period: '09/2023 — 01/2026',
    title: 'Postdoctoral researcher',
    org: 'ISEM — Institut des Sciences de l\u2019Evolution, CNRS, Montpellier, France',
  },
  {
    period: '09/2017 — 08/2022',
    title: 'PhD researcher',
    org: 'ETH Zurich, Switzerland',
  },
  {
    period: '07/2016 — 07/2017',
    title: 'Professor (Instructor)',
    org: 'Engineering Department, Universidad de Los Andes, Mérida, Venezuela',
  },
];

const education: CVEntry[] = [
  {
    period: '2022',
    title: 'PhD in Environmental Sciences',
    org: 'ETH Zurich, Switzerland',
    detail: 'Supervisor: Prof. Dr. Joshua L. Payne.',
  },
  {
    period: '2017',
    title: 'Magister Scientiae in Fundamental Physics',
    org: 'Universidad de Los Andes, Mérida, Venezuela',
    detail: 'Supervisor: Prof. Dr. Mario Cosenza.',
  },
  {
    period: '2015',
    title: 'Bachelor in Physics',
    org: 'Universidad de Los Andes, Mérida, Venezuela',
  },
];

const conferences = [
  '06/2024 — 16ème Colloque, Association Française d\u2019Halieutique, Sète, France (Talk)',
  '08/2022 — ESEB 2022, Prague, Czech Republic (Poster)',
  '06/2020 — SIB days 2020, online, Switzerland (Talk)',
  '08/2019 — ESEB 2019, Turku, Finland (Poster)',
  '07/2019 — SMBE 2019, Manchester, United Kingdom (Poster)',
  '06/2019 — Modelling Ecology & Evolution, Zurich, Switzerland (Talk)',
  '10/2018 — Munster Evolution Meeting, Munster, Germany (Poster)',
  '06/2018 — SIB days 2018, Biel/Bienne, Switzerland (Poster)',
  '12/2014 — VIII Congreso Nacional de Física, Tucacas, Venezuela (Talk)',
  '02/2012 — VII Encontro De Verão De Física Do ITA, São José dos Campos, Brazil (Poster)',
];

const supervision = [
  'Co-supervision of Raphaël Benerradi, MSc Thesis (2024) — ISEM, Montpellier.',
  'Co-supervision of Alexis Girot, Bachelor\u2019s Project (2020) — ISEM, Montpellier.',
  'Co-supervision of Daniela Schildknecht, MSc Thesis (2020) — ETH Zurich.',
  'Co-supervision of Hana Parízková, MSc Project (2020) — ETH Zurich.',
  'Co-supervision of Daniela Schildknecht, MSc Project (2019) — ETH Zurich.',
  'Professor (Instructor) (2016 – 2017) — Universidad de Los Andes, Mérida.',
  'Teaching Assistant (2012 – 2015) — Universidad de Los Andes, Mérida.',
];

const skills = {
  languages:
    'Native Spanish · Fluent English · Fluent French · Advanced Portuguese · Basic Catalan · Basic German.',
};

export default function CV() {
  return (
    <>
      <SEOHead title="CV" description={`Curriculum vitae of ${researcherInfo.name}.`} />

      <div className="min-h-screen">
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <motion.h1
              className="text-2xl md:text-3xl font-light tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Curriculum Vitae
            </motion.h1>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            <Section title="Experience" entries={experience} />
            <Separator />
            <Section title="Education" entries={education} />
            <Separator />

            <BulletList title="Teaching & supervision" items={supervision} />
            <Separator />
            <BulletList title="Conference presentations" items={conferences} />
            <Separator />
            <div className="space-y-3">
              <h2 className="text-2xl font-light tracking-wide">Languages</h2>
              <p className="text-base font-light leading-relaxed text-muted-foreground">{skills.languages}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function BulletList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-light tracking-wide">{title}</h2>
      <ul className="space-y-2">
        {items.map((t) => (
          <li key={t} className="text-base font-light text-muted-foreground flex gap-2 leading-relaxed">
            <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
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