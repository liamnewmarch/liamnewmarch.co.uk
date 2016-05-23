# liamnewmarch.co.uk

This repo contains the source for [liamnewmarch.co.uk][site].


## Development

The site is statically built using [Grow][grow] and deployed to [Google App Engine][gae]. Development happens locally using Grow’s development server. Other than initial setup, most common tasks (build, serve, deploy) are controlled by [Grunt][grunt].


## Running locally

First install the following: [Grow][grow], [Node/npm][node], [Sass][sass], and [Grunt][grunt].

Next install npm dependencies:

    grow install

Now start a local development server:

    grunt serve

Watch the output and when it’s finished scrolling point your favourite web browser to [localhost:4000][local].


[site]: https://liamnewmarch.co.uk
[grow]: https://grow.io/
[gae]: https://cloud.google.com/appengine/
[sass]: http://sass-lang.com/install
[node]: https://nodejs.org/en/
[grunt]: http://gruntjs.com/getting-started
[local]: http://localhost:4000
