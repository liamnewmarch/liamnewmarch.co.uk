---
title: Home
layout: main
---

# Hello

My name is Liam, I’m a <span class="insert-age">twenty-something</span> web developer living and working in London. I work at [Potato][potato-link] as a front end developer, where I make things for Google. Previously I was lead developer at [WPA Pinfold][wpa-link] where I made things for National Grid, npower, and the University of Leeds.


[wpa-link]: http://wpa-pinfold.co.uk
[potato-link]: https://p.ota.to


# Recent blog posts

{% for post in site.posts %}
*	[{{ post.title }}]({{ post.url }})
{% endfor %}
