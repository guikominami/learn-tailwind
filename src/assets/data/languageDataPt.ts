export const menuText: {
  title: string;
  subMenuItems: { title: string; url: string }[];
}[] = [
  {
    title: 'projetos',
    subMenuItems: [
      {
        title: 'Laboratórios',
        url: '/labs',
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
    title: 'sobre nós',
    subMenuItems: [
      {
        title: 'Metodologia',
        url: '/Methodology',
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
];

export const homeText: {
  carousel: string;
  title: string;
  body1: string;
  body2: string;
} = {
  carousel:
    'Tecnologia e <br>' +
    'Educação para <br>' +
    'Transformação <br>' +
    'Social',
  title: 'Todos e todas podem ser transformadores de realidades!',
  body1:
    'É com base nessa visão que apostamos no diálogo entre a' +
    'educação e a tecnologia para desenvolver cursos, projetos,' +
    ' experimentos e traquitanas que têm como premissa a transformação' +
    'social, cultural e ambiental. ',
  body2:
    'Eletrônica, fabricação digital, robótica e programação aliados à sustentabilidade, à inclusão, à mobilização social' +
    'e a conteúdos e conhecimentos utilizados para cocriar soluções, reflexões e caminhos para seguirmos' +
    'coletivamente.',
};
