interface HomeText {
  carousel: string;
  title: string;
  body1: string;
  body2: string;
}

export const homeText: {
  portuguese: HomeText;
  english: HomeText;
} = {
  portuguese: {
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
  },
  english: {
    carousel:
      'Technology and <br>' +
      'Education for <br>' +
      'Social <br>' +
      'Transformation',
    title: 'Everyone can be a reality changer!',
    body1:
      'É com base nessa visão que apostamos no diálogo entre a' +
      'educação e a tecnologia para desenvolver cursos, projetos,' +
      ' experimentos e traquitanas que têm como premissa a transformação' +
      'social, cultural e ambiental. ',
    body2:
      'É com base nessa visão que apostamos no diálogo entre a' +
      'educação e a tecnologia para desenvolver cursos, projetos,' +
      ' experimentos e traquitanas que têm como premissa a transformação' +
      'social, cultural e ambiental. ',
  },
};
