const production = process.env.NODE_ENV === 'production';

module.exports = {
  description: 'Front-end web developer living in London, working at Potato.',
  title: 'Liam Newmarch',
  url: production ? 'https://liamnewmarch.co.uk' : 'http://localhost:8080',
};
