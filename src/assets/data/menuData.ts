export const dataMenu: {
  id: number;
  text: string;
  parentId: number | null;
}[] = [
  { id: 1, text: 'Home', parentId: null },
  { id: 2, text: 'Nossos projetos', parentId: null },
  { id: 3, text: 'Sobre nós', parentId: null },
  //first level child
  { id: 4, parentId: 2, text: 'Laboratórios' },
  { id: 5, parentId: 2, text: 'Materiais pedagógicos' },
  { id: 6, parentId: 2, text: 'Programação e robótica' },
  { id: 7, parentId: 2, text: 'Sustentabilidade' },
  { id: 8, parentId: 2, text: 'Tutoriais de tecnologia' },
  { id: 9, parentId: 3, text: 'Metodologia' },
  { id: 10, parentId: 3, text: 'Equipe' },
  { id: 11, parentId: 3, text: 'Notícias' },
  { id: 12, parentId: 3, text: 'Parceiros' },
];
