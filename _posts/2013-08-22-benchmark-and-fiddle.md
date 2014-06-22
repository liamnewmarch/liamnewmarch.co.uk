---
title: Benchmark and Fiddle, two web tools for testing ideas
layout: post
---

Over the years I’ve made a couple of tools that I find useful for quickly testing web ideas. I thought it would be a good idea to share some of these with the world, in case anyone else finds them useful.

A small disclaimer: these aren’t professional, enterprise-ready tools – just experiments I’ve built to help me understand things. Also, don’t rely on these things being around forever or always working. Having said all that I really do hope someone finds them useful – get in touch with me [on twitter][twitter-link] if you do.

I have two things I want to share with you now – some of my other tools need a bit of polish before I push them out to the world.

## Benchmark

The first of these is called [Benchmark][benchmark-link] and is a JavaScript A/B benchmarking tool. You can supply two small scripts and run them consecutively to find out how they compare.

For example you could supply these two snippets to find out which snippet runs more quickly:

```
var a = {};
```
and
```
var b = new Object();
```

I get 13046 runs/ms for the first instance, and 9099 runs/ms for that second. More runs means faster execution, so `var a = {};` is the winner here.

This is not going to be a very scientific result, but I do find it useful to quickly check my refactoring if I’m not sure of the most efficient way to write something.

## Fiddle

The next tool I built is called [Fiddle][fiddle-link] and a is a super-simple JavaScript idea scratchpad.

The setup might seem familiar, clicking the tabs allows you to write HTML, CSS and JavaScript. Clicking the “run” tab will run the code together, but (magically) does so without sending a request to the server. I’ve bundled it all up using the HTML5 Application Cache so if you access the URL once, that’ll be enough to use it offline whenever you please.

I built this after getting frustrated with the slow server performance of [JSFiddle][jsfiddle-link] and thinking “why does this need to touch the server anyway?”. Nowadays I use [JS Bin][jsbin-link] a lot but in those rare occasions where I don’t have internet access or only have my phone on me I use [Fiddle][fiddle-link].

[twitter-link]: http://twitter.com/liamnewmarch
[benchmark-link]: http://benchmark.liamnewmarch.co.uk
[fiddle-link]: http://fiddle.liamnewmarch.co.uk
[jsfiddle-link]: http://jsfiddle.net
[jsbin-link]: http://jsbin.com
