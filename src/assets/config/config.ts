import { Authors, Config } from 'src/models/config';

const AUTHORS: Authors = {
  pf: {
    name: 'Piotr Fraszczak',
    imgSrc: '/images/authors/pfraszczak.jpg',
    socialMedia: {
      GitHub: 'https://github.com/Fraszczak',
      Linkedin: 'https://www.linkedin.com/in/12071995/',
    },
  },
  rs: {
    name: 'Rafał Szczuka',
    imgSrc: '/images/authors/rszczuka.jpg',
    socialMedia: {
      GitHub: 'https://github.com/RafalSzczuka',
    },
  },
};

export const blogConfig: Config = {
  authors: AUTHORS,
};
