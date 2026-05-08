import { motion } from 'framer-motion';
import { researcherInfo } from '@/data/researcher';
import { SEOHead } from '@/components/seo/SEOHead';
import { Separator } from '@/components/ui/separator';

const inPreparation = [
  'A. V. Cano*, M. Pelissier*, V. Dakos. "ecoFAST: a tool for dynamical Footprint Analysis, Shapes and Trends of ecological time series" — under review.',
  'R. Benerradi, V. Dakos, A. V. Cano. "Sensitivity of fish stock trajectories to climate forcing and human exploitation at a global scale" — under review.',
  'A. V. Cano, V. Dakos, P. Vale. "Dynamical footprints uncover the relationships between immune responses and locomotor activity in Drosophila" — in preparation.',
];

const publications = [
  'A. V. Cano, O. P. Jensen, V. Dakos. "Identifying fish populations prone to abrupt shifts via dynamical footprint analysis." PNAS (2025).',
  'A. V. Cano*, B. L. Gitschlag*, H. Rozhonová, A. Stoltzfus, D. M. McCandlish, J. L. Payne. "Mutation bias and the predictability of evolution." Philosophical Transactions B (2023).',
  'A. V. Cano*, B. L. Gitschlag*, J. L. Payne, D. M. McCandlish, A. Stoltzfus. "Mutation and selection induce correlations between selection coefficients and mutation rates." The American Naturalist (2023).',
  'A. V. Cano, H. Rozhonová, A. Stoltzfus, D. M. McCandlish, J. L. Payne. "Mutation bias shapes the spectrum of adaptive substitutions." PNAS (2022).',
  'S. Manrubia, J. A. Cuesta, A. V. Cano et al. "From genotypes to organisms: state-of-the-art and perspectives of a cornerstone in evolutionary dynamics." Physics of Life Reviews (2021).',
  'M. G. Cosenza, O. Alvarez-Llamoza, A. V. Cano. "Chimeras and clusters emerging from robust-chaos dynamics." Complexity (2021).',
  'A. V. Cano, J. L. Payne. "Mutation bias interacts with composition bias to influence adaptive evolution." PLoS Computational Biology (2020).',
  'A. V. Cano, M. G. Cosenza. "Asymmetric cluster and chimera dynamics in globally coupled systems." Chaos 28 (2018).',
  'A. V. Cano, M. G. Cosenza. "Chimeras and clusters in networks of hyperbolic chaotic oscillators." Physical Review E (2017).',
];

export default function Publications() {
  return (
    <>
      <SEOHead title="Publications" description={`Publications by ${researcherInfo.name}.`} />

      <div className="min-h-screen">
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <motion.h1
              className="text-5xl md:text-6xl font-light tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Publications
            </motion.h1>
            <p className="text-lg text-muted-foreground font-light">
              {researcherInfo.name}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <Group title="Under review / in preparation" items={inPreparation} />
            <Separator />
            <Group title="Publications" items={publications} />
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