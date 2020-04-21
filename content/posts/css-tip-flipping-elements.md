---
layout: post

tags: blog
title: 'CSS tip: flipping elements'
description: Mirror the real world by flipping your icons with CSS rather than rotating.
original:
  site: Medium
  url: https://medium.com/@liamnewmarch/css-tip-flipping-elements-875742eb5186
date: 2018-07-25
---

Sometimes when you’re building a web app there are icons and other bits of UI that are the same as other bits, but flipped.

Next and previous arrows are a good example of this. To save on bytes (and to some extent the hassle of creating images) it’s becoming increasingly common to export one image and create its flipped mirror by using the `transform: rotate` function in CSS.

```css
.next,
.previous {
  background-image: url('/images/arrow.png');
}

.previous {
  transform: rotate(180deg);
}
```

This works for images that are vertically symmetrical but for anything else the result will be upside down. For that reason it’s a better practice to use transform: scaleX or transform: scaleY instead, this way your images will be natural mirror images.

```css
.previous {
  transform: scaleX(-1);
}
```

[Check out this example](https://codepen.io/liamnewmarch/embed/xJrpxW) to see it in action.
