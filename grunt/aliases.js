module.exports = {

  'build': {
    description: 'Build static assets',
    tasks: ['sass', 'uglify', 'autoprefixer', 'shell:jekyll-build']
  },

  'default': {
    description: 'Build static assets and serve locally',
    tasks: ['build']
  },

  'deploy-dev': {
    description: 'Build static assets and deploy a dev version',
    tasks: ['build', 'shell:deploy-dev']
  },

  'deploy-live': {
    description: 'Build static assets and deploy a live version',
    tasks: ['build', 'shell:deploy-live']
  },

  'serve': {
    description: 'Build static assets and serve locally',
    tasks: ['build', 'shell:jekyll-serve']
  },
};
