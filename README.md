# Source for liamnewmarch.co.uk

This repo contains the source code for my website [liamnewmarch.co.uk][site].


## Building

### Prerequisites

Make sure you have the following installed.

- [Jekyll][jekyll]
- [Sass][sass]
- [Node/npm][node]
- [Grunt][grunt]
- [Bower][bower]

Jekyll and Sass can both be installed as Ruby gems, npm is installed alongside Node.js, and Grunt and Bower can be installed via npm.


### Setup

With the dependancies above met, run the following via the command line:

```
# Check out this repo
git checkout https://github.com/liamnewmarch/liamnewmarch.github.io.git liamnewmarch.co.uk

# Change directory
cd liamnewmarch.co.uk/

# Fetch dependancies
npm install
bower install

# Compile assets
grunt

# Start a Jekyll server
jekyll serve 4000
```

Watch the output and when it’s finished scrolling point your favourite web browser to [localhost:4000][local].


[site]: http://liamnewmarch.co.uk
[jekyll]: http://jekyllrb.com/
[sass]: http://sass-lang.com/install
[node]: http://nodejs.org/
[grunt]: http://gruntjs.com/getting-started
[bower]: http://bower.io/#install-bower
[local]: http://localhost:4000
