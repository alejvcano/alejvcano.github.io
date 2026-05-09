import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { researcherInfo } from '@/data/researcher';
import { SEOHead } from '@/components/seo/SEOHead';
import { Separator } from '@/components/ui/separator';

const inPreparation = [
  'R. Benerradi, V. Dakos, A. V. Cano. "Sensitivity of fish stock trajectories to climate forcing and human exploitation at a global scale" — under review.',
  'A. V. Cano, D. Newman, K. M. Monteith, V. Dakos, P. F. Vale. "Fine-scale behavioural dynamics separates adaptive sickness behaviour from injury and infection pathology." bioRxiv (2026) — under review.',
  'M. A. M. Kutzer, S. Abdullateef, A. V. Cano, I. L. Soare-Nguyen, K. Monteith, et al. "Detecting infection-related mortality using dynamical statistical indicators of high-resolution activity time series." bioRxiv (2025) — under review.',
  'A. Cano, A. Couce, J. Masel, J. L. Payne, A. Stoltzfus, J. F. Storz. "Misrepresenting biases in arrival: a comment on Svensson (2022)." EcoEvoRxiv (2022) — under review.',
];

const publications: { citation: string; url: string }[] = [
  { citation: 'A. V. Cano, O. P. Jensen, V. Dakos. "Identifying fish populations prone to abrupt shifts via dynamical footprint analysis." PNAS (2025).', url: 'https://doi.org/10.1073/pnas.2505461122' },
  { citation: 'A. V. Cano*, B. L. Gitschlag*, H. Rozhonová, A. Stoltzfus, D. M. McCandlish, J. L. Payne. "Mutation bias and the predictability of evolution." Philosophical Transactions B (2023).', url: 'https://doi.org/10.1098/rstb.2022.0055' },
  { citation: 'A. V. Cano*, B. L. Gitschlag*, J. L. Payne, D. M. McCandlish, A. Stoltzfus. "Mutation and selection induce correlations between selection coefficients and mutation rates." The American Naturalist (2023).', url: 'https://doi.org/10.1086/726014' },
  { citation: 'A. V. Cano, H. Rozhonová, A. Stoltzfus, D. M. McCandlish, J. L. Payne. "Mutation bias shapes the spectrum of adaptive substitutions." PNAS (2022).', url: 'https://doi.org/10.1073/pnas.2119720119' },
  { citation: 'S. Manrubia, J. A. Cuesta, A. V. Cano et al. "From genotypes to organisms: state-of-the-art and perspectives of a cornerstone in evolutionary dynamics." Physics of Life Reviews (2021).', url: 'https://doi.org/10.1016/j.plrev.2021.03.004' },
  { citation: 'M. G. Cosenza, O. Alvarez-Llamoza, A. V. Cano. "Chimeras and clusters emerging from robust-chaos dynamics." Complexity (2021).', url: 'https://doi.org/10.1155/2021/8878301' },
  { citation: 'A. V. Cano, J. L. Payne. "Mutation bias interacts with composition bias to influence adaptive evolution." PLoS Computational Biology (2020).', url: 'https://doi.org/10.1371/journal.pcbi.1008296' },
  { citation: 'A. V. Cano, M. G. Cosenza. "Asymmetric cluster and chimera dynamics in globally coupled systems." Chaos 28 (2018).', url: 'https://doi.org/10.1063/1.5043398' },
  { citation: 'A. V. Cano, M. G. Cosenza. "Chimeras and clusters in networks of hyperbolic chaotic oscillators." Physical Review E (2017).', url: 'https://journals.aps.org/pre/abstract/10.1103/PhysRevE.95.030202' },
];

export default function Publications() {
  return (
    <>
      <SEOHead title="Publications" description={`Publications by ${researcherInfo.name}.`} />

      <div className="min-h-screen">
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <motion.h1
              className="text-4xl md:text-5xl font-light tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Publications
            </motion.h1>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <Group title="Under review / in preparation" items={inPreparation} />
            <Separator />
            <PublicationsGroup title="Publications" items={publications} />
          </div>
        </section>
      </div>
    </>
  );
}

function Group({ title, items }: { title: string; items: string[] }) {
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

function PublicationsGroup({ title, items }: { title: string; items: { citation: string; url: string }[] }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-light tracking-wide">{title}</h2>
      <ul className="space-y-2">
        {items.map((t) => (
          <li key={t.citation} className="text-base font-light text-muted-foreground flex gap-2 leading-relaxed">
            <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
            <span>
              {t.citation}{' '}
              <a
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open journal article"
                className="inline-flex items-center align-baseline hover:text-foreground"
              >
                <ExternalLink className="size-3.5" />
              </a>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}