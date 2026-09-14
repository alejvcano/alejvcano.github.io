import type { Project } from '@/types';
import fishPopulationsImage from '@/assets/project-fish-populations.jpg';
import fishAbruptShiftsImage from '@/assets/project-fish-abrupt-shifts.jpg';
import lakeRegimeShiftsImage from '@/assets/project-lake-regime-shifts.jpg';
import forestEcosystemsImage from '@/assets/project-forest-ecosystems.jpg.asset.json';
import behaviourDynamicsImage from '@/assets/project-behaviour-dynamics.jpg';
import mutationBiasImage from '@/assets/project-mutation-bias.jpg';
import chaoticSyncImage from '@/assets/project-chaotic-synchronisation.jpg';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Spatiotemporal Dynamics of Size-Structured Fish Populations',
    category: 'marine-ecology',
    year: '2026',
    slug: 'size-structured-fish-populations',
    coverImage: fishPopulationsImage,
    description:
      'A modelling framework for the spatiotemporal dynamics of size-structured fish populations, coupling individual growth, size-dependent mortality and spatial heterogeneity to study how exploitation and environmental forcing reshape size spectra and stability. We have a particular interest in modelling demersal communities and their response to fishing and climate pressures.',
    institution: 'MARBEC — IRD, Sète, France',
    methodology: 'APECOSM, size-spectrum and size-structured population models, spatial integro-differential equations',
    location: 'France',
    images: [],
  },
  {
    id: '5',
    title: 'Resilience and Sensitivity of Exploited Fish Populations',
    category: 'marine-ecology',
    year: '2025 / 2026',
    slug: 'fish-populations-abrupt-shifts',
    coverImage: fishAbruptShiftsImage,
    description:
      'A global, data-driven research line on the dynamics of exploited fish stocks. We combine dynamical footprint analysis to identify populations whose biomass trajectories are most prone to abrupt shifts with sensitivity analyses that quantify how stock trajectories respond to climate forcing and human exploitation. Together, these approaches integrate stock-assessment time series with nonlinear indicators of resilience and causal attribution to flag stocks at elevated risk of collapse and to inform precautionary management.',
    methodology: 'Dynamical footprint analysis, nonlinear time-series indicators, resilience metrics, causality assessment, global stock-assessment data',
    location: 'France & USA',
    publications: [
      {
        citation: 'R. Benerradi, V. Dakos, A. V. Cano. "Sensitivity of fish stock trajectories to climate forcing and human exploitation at a global scale." Journal of the Royal Society Interface (2026).',
        url: 'https://doi.org/10.1098/rsif.2025.1040',
      },
      {
        citation: 'A. V. Cano, O. P. Jensen, V. Dakos. "Identifying fish populations prone to abrupt shifts via dynamical footprint analysis." PNAS (2025).',
        url: 'https://doi.org/10.1073/pnas.2505461122',
      },
    ],
    images: [
      {
        id: '4-1',
        src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjZ8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Origin-destination flow map',
        aspectRatio: 'landscape',
      },
      {
        id: '4-2',
        src: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njd8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Transit network graph visualization',
        aspectRatio: 'portrait',
      },
      {
        id: '4-3',
        src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njd8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Mobility scaling law plot',
        aspectRatio: 'landscape',
      },
      {
        id: '4-4',
        src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njd8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Congestion simulation heatmap',
        aspectRatio: 'landscape',
      },
    ],
  },
  {
    id: '2',
    title: 'Early Warning for Lake Regime Shifts',
    category: 'lake-ecosystems',
    year: '2026',
    slug: 'early-warning-lake-regime-shifts',
    coverImage: lakeRegimeShiftsImage,
    description:
      'Building a probability-based risk framework to anticipate regime shifts in lake ecosystems.',
    methodology: 'Critical slowing down, time-series analysis, resilience indicators, AI models',
    location: 'France & China',
    images: [],
  },
  {
    id: '3',
    title: 'Catastrophic Shifts in Forest Ecosystems',
    category: 'forest-ecosystems',
    year: '2026',
    slug: 'climate-tipping-points',
    coverImage: forestEcosystemsImage.url,
    description:
      'A phenomenological approach to identifying early warning signals of critical transitions in the Earth system. Using long-term climate datasets and novel statistical indicators, this work reveals signatures of approaching tipping points in Arctic sea ice, Amazon rainforest, and Atlantic circulation.',
    methodology: 'Critical slowing down analysis, remote sensing, machine learning, stochastic differential equations',
    location: 'France, Italy',
    images: [
      {
        id: '2-1',
        src: 'https://images.unsplash.com/photo-1509023464722-92d3b0a3a4e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjJ8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Arctic ice extent anomaly plot',
        aspectRatio: 'portrait',
      },
      {
        id: '2-2',
        src: 'https://images.unsplash.com/photo-1569163139599-0f4517e36f51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjN8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Bifurcation diagram of climate state',
        aspectRatio: 'landscape',
      },
      {
        id: '2-3',
        src: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjN8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Early warning indicator time series',
        aspectRatio: 'landscape',
      },
      {
        id: '2-4',
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjN8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Amazon deforestation simulation output',
        aspectRatio: 'portrait',
      },
    ],
  },
  {
    id: '4',
    title: 'Dynamics of Sickness Behaviour',
    category: 'behaviour-dynamics',
    year: '2025 / 2026',
    slug: 'neural-circuit-dynamics',
    coverImage: behaviourDynamicsImage,
    description:
      'Using high-resolution activity time series from individual Drosophila to detect physiological state transitions. The work develops dynamical statistical indicators that anticipate infection-related mortality, and disentangles adaptive sickness behaviour from the behavioural signatures of injury and infection pathology at fine temporal scales.',
    methodology: 'High-resolution behavioural time-series analysis, dynamical indicators, critical slowing down, mixed-effects modelling',
    location: 'France, Scotland',
    publications: [
      {
        citation: 'A. V. Cano, D. Newman, K. M. Monteith, V. Dakos, P. F. Vale. "Fine-scale behavioural dynamics separates adaptive sickness behaviour from injury and infection pathology." bioRxiv (2026).',
      },
      {
        citation: 'M. A. M. Kutzer, S. Abdullateef, A. V. Cano, I. L. Soare-Nguyen, K. Monteith, et al. "Detecting infection-related mortality using dynamical statistical indicators of high-resolution activity time series." bioRxiv (2025).',
      },
    ],
    images: [
      {
        id: '3-1',
        src: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1382?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjR8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Phase portrait of neural population activity',
        aspectRatio: 'landscape',
      },
      {
        id: '3-2',
        src: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjV8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Raster plot of spiking neurons',
        aspectRatio: 'portrait',
      },
      {
        id: '3-3',
        src: 'https://images.unsplash.com/photo-1507413245164-6160d8298b53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjV8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Connectivity matrix of microcircuit',
        aspectRatio: 'square',
      },
      {
        id: '3-4',
        src: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjV8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Bifurcation diagram of firing rate',
        aspectRatio: 'landscape',
      },
    ],
  },
  {
    id: '6',
    title: 'Mutation Bias and the Predictability of Evolution',
    category: 'evolution',
    year: '2020 / 2026',
    slug: 'mutation-bias',
    coverImage: mutationBiasImage,
    description:
      'How biases in the production of genetic variation shape adaptive evolution. This line of work shows that mutation rates and composition biases leave detectable footprints in the spectrum of adaptive substitutions, induce correlations between selection coefficients and mutation rates, and contribute to the predictability of evolutionary outcomes across systems ranging from pathogens to cancer-related human genes.',
    methodology: 'Genotype-phenotype maps, population genetics, origin-fixation models, mutational scanning data analysis, comparative genomics, statistical inference',
    location: 'Switzerland, France, Spain & USA',
    publications: [
      {
        citation: 'A. V. Cano*, B. L. Gitschlag*, H. Rozhonová, A. Stoltzfus, D. M. McCandlish, J. L. Payne. "Mutation bias and the predictability of evolution." Philosophical Transactions B (2023).',
        url: 'https://doi.org/10.1098/rstb.2022.0055',
      },
      {
        citation: 'A. V. Cano*, B. L. Gitschlag*, J. L. Payne, D. M. McCandlish, A. Stoltzfus. "Mutation and selection induce correlations between selection coefficients and mutation rates." The American Naturalist (2023).',
        url: 'https://doi.org/10.1086/726014',
      },
      {
        citation: 'A. V. Cano, H. Rozhonová, A. Stoltzfus, D. M. McCandlish, J. L. Payne. "Mutation bias shapes the spectrum of adaptive substitutions." PNAS (2022).',
        url: 'https://doi.org/10.1073/pnas.2119720119',
      },
      {
        citation: 'S. Manrubia, J. A. Cuesta, A. V. Cano et al. "From genotypes to organisms: state-of-the-art and perspectives of a cornerstone in evolutionary dynamics." Physics of Life Reviews (2021).',
        url: 'https://doi.org/10.1016/j.plrev.2021.03.004',
      },
      {
        citation: 'A. V. Cano, J. L. Payne. "Mutation bias interacts with composition bias to influence adaptive evolution." PLoS Computational Biology (2020).',
        url: 'https://doi.org/10.1371/journal.pcbi.1008296',
      },
      {
        citation: 'A. Cano, A. Couce, J. Masel, J. L. Payne, A. Stoltzfus, J. F. Storz. "Misrepresenting biases in arrival: a comment on Svensson (2022)." EcoEvoRxiv (2022).',
      },
    ],
    images: [
      {
        id: '5-1',
        src: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njh8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Phylogenetic tree of pathogen strains',
        aspectRatio: 'landscape',
      },
      {
        id: '5-2',
        src: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njh8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Antigenic landscape visualization',
        aspectRatio: 'landscape',
      },
      {
        id: '5-3',
        src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njl8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Coevolutionary trajectory plot',
        aspectRatio: 'portrait',
      },
      {
        id: '5-4',
        src: 'https://images.unsplash.com/photo-1579165466741-7f35a8db60cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njl8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Immune response dynamics chart',
        aspectRatio: 'landscape',
      },
    ],
  },
  {
    id: '7',
    title: 'Chaotic Synchronisation',
    category: 'chaos-theory',
    year: '2017 / 2021',
    slug: 'chaotic-synchronisation',
    coverImage: chaoticSyncImage,
    description:
      'Emergence of chimera states, clusters and asymmetric collective patterns in networks of coupled chaotic oscillators. The work explores how robust-chaos and hyperbolic dynamics give rise to coexisting coherent and incoherent domains under global and non-local coupling.',
    institution: 'Universidad de Los Andes, Mérida, Venezuela',
    methodology: 'Coupled map lattices, hyperbolic and robust-chaos maps, global and non-local coupling',
    location: 'Venezuela & Ecuador',
    publications: [
      {
        citation: 'M. G. Cosenza, O. Alvarez-Llamoza, A. V. Cano. "Chimeras and clusters emerging from robust-chaos dynamics." Complexity (2021).',
        url: 'https://doi.org/10.1155/2021/8878301',
      },
      {
        citation: 'A. V. Cano, M. G. Cosenza. "Asymmetric cluster and chimera dynamics in globally coupled systems." Chaos 28 (2018).',
        url: 'https://doi.org/10.1063/1.5043398',
      },
      {
        citation: 'A. V. Cano, M. G. Cosenza. "Chimeras and clusters in networks of hyperbolic chaotic oscillators." Physical Review E (2017).',
        url: 'https://journals.aps.org/pre/abstract/10.1103/PhysRevE.95.030202',
      },
    ],
    images: [
      {
        id: '6-1',
        src: 'https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzB8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Vegetation index time series',
        aspectRatio: 'landscape',
      },
      {
        id: '6-2',
        src: 'https://images.unsplash.com/photo-1500829243541-74b677fecc30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzB8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Attractor reconstruction plot',
        aspectRatio: 'landscape',
      },
      {
        id: '6-3',
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzB8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Resilience indicator across biomes',
        aspectRatio: 'portrait',
      },
      {
        id: '6-4',
        src: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzF8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Perturbation experiment results',
        aspectRatio: 'landscape',
      },
    ],
  },
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter((project) => project.category === category);
};

// Helper function to get featured projects (first 4)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

// Helper function to get next/previous project
export const getAdjacentProjects = (
  currentSlug: string
): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);

  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next:
      currentIndex < projects.length - 1
        ? projects[currentIndex + 1]
        : null,
  };
};
