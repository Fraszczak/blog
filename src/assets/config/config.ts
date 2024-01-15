export type Author = { name: string; imgSrc: string };

export type Authors = {
  [K in 'pf']: Author;
};

export type Config = {
  authors: Authors;
};

const AUTHORS: Authors = {
  pf: {
    name: 'Piotr Fraszczak',
    imgSrc: '/authors/pfraszczak.jpg',
  },
};

export const blogConfig: Config = {
  authors: AUTHORS,
};
