---
title: Building io.js on OSX
layout: post
---

[io.js][iojs] is a fork and drop-in replacement for [Node.js][nodejs]. From a technical standpoint it’s essentially Node.js running an updated version of V8, this means io.js is compatible with npm and the majority of modules originally written for Node.js. See [the InfoWorld interview][infoworld] for more information and the political reasons behind the fork.

Unlike Node.js, there isn’t a package installer for io.js yet; building from source is the only option for now. Building io.js isn’t difficult but requires a bit of command line knowledge. Here are the steps I took.

To build io.js for OS X we first need to clone the repo. Since we’re not developing io.js we can pass the `--depth=0` flag which will cut out the git history.

```
git clone --depth=0 https://github.com/iojs/io.js.git
cd io.js
```

Next configure and make the project.

```
./configure
make
```

When that’s done we can install io.js. We need to use `sudo` for this because it installs to `/usr/local/bin`. This will add symlinks so that `iojs` and `node` commands both point to the io.js binary.

```
sudo make install
```

If there were no errors, io.js should now be installed! Check [the io.js page on ES6][iojs-es6] to see which new language features you can play with.

[iojs]: https://iojs.org
[nodejs]: https://nodejs.org
[infoworld]: http://www.infoworld.com/article/2855057/application-development/why-iojs-decided-to-fork-nodejs.html
[github]: https://github.com/iojs/io.js
[iojs-es6]: https://iojs.org/es6.html
