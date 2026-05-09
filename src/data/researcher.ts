import type { ResearcherInfo } from '@/types';
import portrait from '@/assets/portrait.jpg';

export const researcherInfo: ResearcherInfo = {
  name: 'Alejandro V Cano',
  tagline: 'Researcher [MARBEC, Sète, France]',
  heroIntroduction:
    'Using mechanistic and phenomenological models to describe complex natural systems',
  biography: `I work at the interface of physics, evolutionary biology and ecology, building mechanistic and phenomenological models of how complex living systems — from genomes to individuals, from populations to communities — unfold in time and respond to perturbations.

My research combines nonlinear time-series analysis, dynamical systems, causal inference and theory-guided machine learning. I use these tools to study the resilience and predictability of ecological dynamics, the dynamical footprints of fish populations under climate and fishing pressures, and the role of mutational biases in shaping the evolution of pathogens and cancer-related human genes.

I am equally invested in developing open, reproducible software for ecological time-series analysis, and in collaborating across disciplines to address questions of stability, sustainability and conservation.`,
  approach: `I build models that are simple enough to teach us something and rich enough to describe what we observe. Mechanistic models let us ask "what if" and probe causality; phenomenological models help reveal emergent patterns hidden in data. Together they form a powerful toolkit for understanding complex systems.`,
  awards: [
    'ICTP scholarship — Hands-on Research in Complex Systems summer school, Trieste (2016)',
    'Universidad de Los Andes scholarship — VII Encontro De Verão De Física Do ITA, Brazil (2012)',
  ],
  institutions: [
    'MARBEC — IRD, Sète, France',
    'ISEM — CNRS, Montpellier, France',
    'ETH Zürich, Switzerland',
    'Universidad de Los Andes, Mérida, Venezuela',
  ],
  education: 'PhD in Environmental Sciences, ETH Zurich (2022)',
  location: 'Sète, France',
  email: 'alejandro.cano@ird.fr',
  phone: '',
  availability: 'Always open to collaborate (:',
  socialLinks: {
    googleScholar: 'https://scholar.google.com/citations?user=WN5kHncAAAAJ&hl=en',
    github: 'https://github.com/alejvcano/',
    orcid: 'https://orcid.org/0000-0003-4728-8489',
  },
  portraitImage: portrait,
};
