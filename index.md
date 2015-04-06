---
title: Home
layout: main
---

# About

My name is Liam Newmarch and I’m a <insert-age date-of-birth="1987/12/01">twenty-odd</insert-age> year old web developer. I live in London and work for a company called [Potato](https://p.ota.to) where I make things for Google. [Read more](/about/)


# Development

I’m primarily a front end developer but have plenty of experience with back end development too. I’m big on AngularJS, build processes and styling. On the server side I’m used to working with Django (at Potato we pair Django with Google App Engine) but am also familiar with io.js (formerly Node.js) and PHP frameworks.

I host most of my projects on [GitHub](https://github.com/liamnewmarch) and use a combination of GitHub Pages, Google App Engine and my [Raspberry Pi](http://www.raspberrypi.org) for hosting.


# Recent blog posts

{% for post in site.posts limit:5 %}
-   [{{ post.title }}]({{ post.url }})
    <time datetime="{{ post.date | date: %Y-%m-%d}}">
        {{ post.date | date: "%B %-d, %Y" }}
    </time>
{% endfor %}
