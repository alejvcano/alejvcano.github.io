import type { Project } from '@/types';
import fishPopulationsImage from '@/assets/project-fish-populations.jpg';
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
    id: '2',
    title: 'Climate Tipping Points',
    category: 'climate-systems',
    year: '2024',
    slug: 'climate-tipping-points',
    coverImage:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjJ8&ixlib=rb-4.1.0&q=80&w=1080',
    description:
      'A phenomenological approach to identifying early warning signals of critical transitions in the Earth system. Using long-term climate datasets and novel statistical indicators, this work reveals signatures of approaching tipping points in Arctic sea ice, Amazon rainforest, and Atlantic circulation.',
    institution: 'Santa Fe Institute',
    methodology: 'Critical slowing down analysis, deep learning surrogates, stochastic differential equations',
    location: 'Global',
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
    id: '3',
    title: 'Neural Circuit Dynamics',
    category: 'systems-biology',
    year: '2023',
    slug: 'neural-circuit-dynamics',
    coverImage:
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjR8&ixlib=rb-4.1.0&q=80&w=1080',
    description:
      'Mechanistic modeling of cortical microcircuit dynamics using Hodgkin-Huxley and Wilson-Cowan frameworks. This project explores how synaptic plasticity rules shape emergent collective behaviors and memory formation in recurrent neural networks.',
    institution: 'University of Oxford, Mathematical Institute',
    methodology: 'Hodgkin-Huxley equations, mean-field theory, numerical bifurcation analysis',
    location: 'Oxford, UK',
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
    id: '4',
    title: 'Urban Mobility Patterns',
    category: 'network-science',
    year: '2023',
    slug: 'urban-mobility-patterns',
    coverImage:
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjZ8&ixlib=rb-4.1.0&q=80&w=1080',
    description:
      'A phenomenological study of human movement in cities using mobile phone data and public transit records. By fitting generative models to mobility patterns, this work reveals universal scaling laws and predicts the impact of infrastructure changes on congestion and accessibility.',
    institution: 'MIT Media Lab',
    methodology: 'Gravity models, radiation model, network centrality, maximum entropy',
    location: 'Boston, USA',
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
    id: '5',
    title: 'Host-Pathogen Coevolution',
    category: 'mechanistic-modeling',
    year: '2022',
    slug: 'host-pathogen-coevolution',
    coverImage:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njh8&ixlib=rb-4.1.0&q=80&w=1080',
    description:
      'A mechanistic eco-evolutionary model of host-pathogen interactions incorporating immune memory, antigenic variation, and transmission dynamics. The framework explains the oscillatory patterns observed in long-term infection data and predicts evolutionary escape trajectories.',
    institution: 'CNRS, Paris',
    methodology: 'Adaptive dynamics, integro-differential equations, phylogenetic modeling',
    location: 'France',
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
    id: '6',
    title: 'Chaotic Synchronisation',
    category: 'chaos',
    year: '2017 / 2021',
    slug: 'chaotic-synchronisation',
    coverImage: chaoticSyncImage,
    description:
      'Emergence of chimera states, clusters and asymmetric collective patterns in networks of coupled chaotic oscillators. The work explores how robust-chaos and hyperbolic dynamics give rise to coexisting coherent and incoherent domains under global and non-local coupling.',
    institution: 'Universidad de Los Andes, Mérida, Venezuela',
    methodology: 'Coupled map lattices, hyperbolic and robust-chaos maps, global and non-local coupling',
    location: 'Venezuela & Ecuador',
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
