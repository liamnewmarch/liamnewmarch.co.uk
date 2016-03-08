# Source for liamnewmarch.co.uk

This repo contains the source code for my website [liamnewmarch.co.uk][site].


## Building

### Prerequisites

Make sure you have the following installed.

- [Jekyll][jekyll]
- [Sass][sass]
- [Node/npm][node]
- [Grunt][grunt]

Jekyll and Sass can both be installed as Ruby gems, npm is installed alongside Node.js and Grunt can be installed via npm.


### Setup

With the dependancies above met, run the following via the command line:

```
# Check out this repo
git checkout https://github.com/liamnewmarch/liamnewmarch.co.uk

# Change directory
cd liamnewmarch.co.uk/

# Fetch dependancies
npm install

# Compile assets
grunt build

# Start a local server
grunt serve
```

Watch the output and when it’s finished scrolling point your favourite web browser to [localhost:4000][local].


[site]: https://liamnewmarch.co.uk
[jekyll]: https://jekyllrb.com/
[sass]: http://sass-lang.com/install
[node]: https://nodejs.org/en/
[grunt]: http://gruntjs.com/getting-started
[bower]: http://bower.io/#install-bower
[local]: http://localhost:4000
