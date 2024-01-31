import { Authors, Config } from 'src/models/config';

const AUTHORS: Authors = {
  pf: {
    name: 'Piotr Fraszczak',
    imgSrc: '/images/authors/pfraszczak.jpg',
    socialMedia: {},
  },
  rs: {
    name: 'Rafał Szczuka',
    imgSrc: '/images/authors/rszczuka.jpg',
    socialMedia: {},
  },
};

export const blogConfig: Config = {
  authors: AUTHORS,
};
