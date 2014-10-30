---
title: Home
layout: main
---

# Hello

I am Liam, a web developer at [Potato](https://p.ota.to) in London.

I like to build things – take a look at my [GitHub](https://github.com/liamnewmarch/) to see some of the things I’ve been working on.

## Blog

Here are some the things I have written recently:

{% for post in site.posts %}
*	[{{ post.title }}]({{ post.url }})
{% endfor %}
