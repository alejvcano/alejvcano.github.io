import type { ResearcherInfo } from '@/types';
import portrait from '@/assets/portrait.jpg';

export const researcherInfo: ResearcherInfo = {
  name: 'Alejandro V Cano',
  tagline: 'Researcher',
  heroIntroduction:
    'Creating mechanistic and phenomenological models to describe complex systems.',
  biography: `Alejandro V Cano is a postdoctoral researcher working at the interface of physics, evolutionary biology and ecology. His work develops mechanistic and phenomenological models to understand how complex systems — from molecular evolution to fish populations — unfold in time and respond to perturbations.

He is currently a postdoc at the Institute of Marine Biodiversity, Exploitation and Conservation (MARBEC, IRD) in Sète, France, after a postdoc at the Institut des Sciences de l'Evolution (ISEM, CNRS) in Montpellier. He earned his PhD in Environmental Sciences from ETH Zurich (2022) under Joshua L. Payne, and an MSc in Fundamental Physics from Universidad de Los Andes (Mérida, Venezuela) under Mario Cosenza.

His recent research focuses on dynamical footprints of ecological time series, abrupt shifts in fish populations, and the role of mutation bias in shaping the predictability of evolution.`,
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
  availability: 'Open to collaborations on complex systems, evolution and ecological dynamics.',
  socialLinks: {
    googleScholar: 'https://scholar.google.com/citations?user=WN5kHncAAAAJ&hl=en',
    github: 'https://github.com/alejvcano/',
  },
  portraitImage: portrait,
};
