module.exports = {

  'build': {
    description: 'Build static assets',
    tasks: ['sass', 'uglify', 'autoprefixer']
  },

  'default': {
    description: 'Build static assets and serve locally',
    tasks: ['build']
  },

  'deploy-dev': {
    description: 'Build static assets and deploy a dev version',
    tasks: ['build', 'shell:grow-build', 'shell:deploy-dev']
  },

  'deploy-live': {
    description: 'Build static assets and deploy a live version',
    tasks: ['build', 'shell:grow-build', 'shell:deploy-live']
  },

  'serve': {
    description: 'Build static assets and serve locally',
    tasks: ['build', 'shell:serve']
  },
};
