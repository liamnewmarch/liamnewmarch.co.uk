---
title: A small bookmarklet for resolution testing
layout: post
bookmarklet: <bookmarklet src="/assets/js/bookmarklet.resolution-test.js">Resolution test</bookmarklet>
---

Here’s a quick bookmarklet I just cooked up.

Say you want to quickly see how the page you’re currently on looks at a certain resolution. You _could_ fire up DevTools, click the “Emulation” tab, click the “Screen” tab, check “Emulate screen” and choose a resolution… Or you could drag this bookmarklet to your bookmarks toolbar:

{{ page.bookmarklet }}

Here’s a the indented source for those who want to see how it works:

{% highlight JavaScript %}
(function(s) {
  open(location, null, 'width=' + s[0] + ', height=' + s[1])
})(
  prompt('Please enter a resolution in the form WWWWxYYYY', '1024x768').split('x')
)
{% endhighlight %}

Simple, eh? Even though `window.open` normally triggers a blocked popup warning, this isn’t the case for bookmarklets. Tested so far on OS X with Chrome, Firefox and Safari.
