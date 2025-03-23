interface Menu {
  title: string;
  subMenuItems: { title: string; url: string }[];
}

export const menuText: {
  portuguese: Menu[];
  english: Menu[];
} = {
  portuguese: [
    {
      title: 'Projetos',
      subMenuItems: [
        {
          title: 'Laboratórios',
          url: '/lab',
        },
        {
          title: 'Materiais Pedagógicos',
          url: '/education',
        },
        {
          title: 'Programação e Robótica',
          url: '/programming',
        },
        {
          title: 'Sustentabilidade',
          url: '/eco',
        },
        {
          title: 'Tutoriais de Tecnologia',
          url: '/tutorials',
        },
      ],
    },
    {
      title: 'Sobre nós',
      subMenuItems: [
        {
          title: 'Metodologia',
          url: '/methodology',
        },
        {
          title: 'Equipe',
          url: '/team',
        },
        {
          title: 'Notícias',
          url: '/news',
        },
        {
          title: 'Parceiros',
          url: '/partners',
        },
      ],
    },
    {
      title: 'Social',
      subMenuItems: [
        {
          title: 'Instagram',
          url: '/methodology',
        },
        {
          title: 'Linkedin',
          url: '/team',
        },
        {
          title: 'Português',
          url: '/news',
        },
        {
          title: 'Inglês',
          url: '/partners',
        },
      ],
    },
  ],
  english: [
    {
      title: 'Our Projects',
      subMenuItems: [
        {
          title: 'Laboratories',
          url: '/lab',
        },
        {
          title: 'PEDAGOGICAL MATERIALS',
          url: '/education',
        },
        {
          title: 'Programming and Robotics',
          url: '/programming',
        },
        {
          title: 'Sustainability',
          url: '/eco',
        },
        {
          title: 'Technology Tutorials',
          url: '/tutorials',
        },
      ],
    },
    {
      title: 'About us',
      subMenuItems: [
        {
          title: 'Methodology',
          url: '/methodology',
        },
        {
          title: 'Team',
          url: '/team',
        },
        {
          title: 'News',
          url: '/news',
        },
        {
          title: 'Partners',
          url: '/partners',
        },
      ],
    },
  ],
};
