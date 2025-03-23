interface Lab {
  title: string;
  body1: string;
  body2: string;
}

export const labText: { portuguese: Lab; english: Lab } = {
  portuguese: {
    title: 'Laboratórios de Tecnologias Cidadãs',
    body1:
      'São projetos de educação não-formal, com caráter experimental e temporário, que desenvolvem processos colaborativos em comunidades para a construção de soluções ambientais e sociais, a partir do uso de tecnologias abertas e de baixo custo.',
    body2:
      'Tem como objetivos experimentar as novas tecnologias e entender como elas podem contribuir para a solução de desafios locais. Já foram criadas soluções para desafios ligados ao uso inteligente da água e das Energias Renováveis.',
  },
  english: {
    title: 'Citizen Technologies Laboratories',
    body1:
      'São projetos de educação não-formal, com caráter experimental e temporário, que desenvolvem processos colaborativos em comunidades para a construção de soluções ambientais e sociais, a partir do uso de tecnologias abertas e de baixo custo.',
    body2:
      'Tem como objetivos experimentar as novas tecnologias e entender como elas podem contribuir para a solução de desafios locais. Já foram criadas soluções para desafios ligados ao uso inteligente da água e das Energias Renováveis.',
  },
};
