export type Author = { name: string; imgSrc: string };

export type Authors = {
  [K in 'pf' | 'rs']: Author;
};

export type Config = {
  authors: Authors;
};

const AUTHORS: Authors = {
  pf: {
    name: 'Piotr Fraszczak',
    imgSrc: '/images/authors/pfraszczak.jpg',
  },
  rs: {
    name: 'Rafał Szczuka',
    imgSrc: '/images/authors/rszczuka.jpg',
  },
};

export const blogConfig: Config = {
  authors: AUTHORS,
};
