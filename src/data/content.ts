export const profile = {
  name: 'Derrick Gunawan',
  title: 'Computer Science & Applied Mathematics Undergraduate',
  university: 'BINUS University',
  tagline: 'Exploring data and solving problems through technology and mathematics.',
  interests: ['Data Science', 'Machine Learning', 'Web Development', 'Software Development'],
  email: 'derrickgunawan05@gmail.com',
  linkedin: 'https://www.linkedin.com/in/derrick-gunawan/',
  github: 'https://github.com/DerrickGunawan02',
  resume: '', // [ADD LINK] e.g. '/resume.pdf'
  about: [
    'I am a Computer Science & Applied Mathematics undergraduate at BINUS University with an interest in data science, software & web development, machine learning, and algorithms.',
    'I enjoy working on private & collaborative projects where technical problem solving can be combined with practical applications.',
  ],
  facts: [
    { label: 'Education', value: 'BINUS University' },
    { label: 'Field', value: 'Computer Science & Applied Mathematics' },
    { label: 'Focus', value: 'Data Science' },
    { label: 'Status', value: 'Undergraduate' },
    { label: 'GPA', value: '3.04' },
  ],
}

export type ProjectCategory = 'Computer Vision' | 'NLP'
export type Project = {
  title: string
  category: ProjectCategory
  description: string
  technologies: string[]
  /** External URL opened by the "Visit Project" button (Google Drive folder). */
  link: string
}
// To add a project, append an object here — the card, filter and link update automatically.
export const projects: Project[] = [
  {
    title: "Fruit Image Reconstruction with Variational Autoencoders",
    category: "Computer Vision",
    description: "This project explores whether generative models can learn what makes fruit look fresh or rotten.",
    technologies: ["Python", "PyTorch", "Deep Learning"],
    link: "https://drive.google.com/drive/folders/1GZgzRchNWpGTnor-7NxFAi_3ZHtxBMp3?usp=drive_link",
  },
  {
    title: "IndoBERT Sports Article Classification",
    category: "NLP",
    description: "Developed a model to automatically classify Indonesian sports news into relevant topics, similar to how news websites organize their articles.",
    technologies: ["Python", "IndoBERT", "NLP"],
    link: "https://drive.google.com/drive/folders/1NBt3rogxBqdUulVVTbMJY6DxIEyJAPXR?usp=drive_link",
  },
  {
    title: "Text Emotion Detector",
    category: "NLP",
    description: "I compared two deep learning approaches to detect various emotions (joy, sadness, anger, fear, love, surprise).",
    technologies: ["Python", "Deep Learning", "NLP"],
    link: "https://drive.google.com/drive/folders/1479BoPanrZKUYnNomF1-02wSK8UyTLtR?usp=drive_link",
  },
  {
    title: "Topic & Audience Segmentation of Indonesian YouTube Comments",
    category: "NLP",
    description: "Collected and clustered YouTube comments to uncover the audience groups in Indonesia's AI-in-education conversation.",
    technologies: ["Python", "TF-IDF", "Machine Learning"],
    link: "https://drive.google.com/drive/folders/13H21aLtsaEilyKytwIS7tcRbC3tH1DPQ?usp=drive_link",
  },
]

export type Certificate = { src: string; alt: string }
export type Role = { title: string; dates: string; arrangement: string; description: string; skills: string[]; certificate?: Certificate }
export type Org = { name: string; initials: string; logo?: string; roles: Role[] }
export const experience: Org[] = [
  { name: 'HIMMAT BINUS University', initials: 'HB', roles: [
    { title: 'Production Staff', dates: 'Jun 2025 · 1 month', arrangement: 'Jakarta, Indonesia · On-site',
      description: 'Contributed as part of the production team for a university event, supporting event execution and coordination.',
      skills: ['Project Management', 'Public Speaking'] } ] },
  { name: 'BINUS English Club (BNEC)', initials: 'BN', roles: [
    { title: 'Public Relations & Registration Officer', dates: 'Aug 2024 – Sep 2024 · 2 months', arrangement: 'Hybrid',
      description: 'Engaged with potential participants, promoted BNEC, and assisted prospective participants throughout the registration process.',
      skills: ['Teamwork', 'Communication', 'Public Relations'] },
    { title: 'Staff of Design & Product — Asian English Olympics', dates: 'Oct 2023 – Jul 2024 · 10 months', arrangement: 'Remote',
      description: "Served as part of BNEC's Board of Management, contributing to design and product-related needs for the Asian English Olympics.",
      skills: ['Design', 'Teamwork'], certificate: {
        // Replace this file in public/images/ to update the certificate.
        src: '/images/certificate-bnec.png',
        alt: 'Certificate awarded to Derrick Gunawan as Staff of Design and Product in The 2024 Asian English Olympics, organized by BNEC',
      } } ] },
]

export const skillGroups = [
  { title: 'Programming & Development', items: ['Python', 'C', 'JavaScript', 'HTML', 'CSS', 'SQL'] },
  { title: 'Tools', items: ['GitHub', 'VS Code', 'Dev-C++', 'Jupyter Notebook', 'mySQL', 'Microsoft Office'] },
  { title: 'Creative / Communication', items: ['Indonesian — Native', 'English — Professional', 'Mandarin — Conversational'] },
]
export const education = { school: 'BINUS University', degree: 'Computer Science & Applied Mathematics', level: 'Undergraduate', gpa: '3.04', graduation: '[ADD EXPECTED GRADUATION]' }
