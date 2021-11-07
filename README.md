# Project Title

Basic Slider Page

## Overview

### What can / should be done with the app or web site

-   See a functional slider

-   Be able to see the page on mobile or desktop

### Screenshot

![](./preview.png)

## My process

My process to build web pages is: HTML, then CSS (although sometimes it is just to give me an idea of what the web will look like), and finally JavaScript

For this mini project some of my thoughts were:

-   "I must make the slider usable no matter how many testimonials I have" (since the slider must continue to work regardless of whether it has 2, 5, 10 or 1000 testimonials)
-   Like many sliders, "this one must also change even if the user does nothing"
-   "I have to think of a way to be able to add so many testimonials without having to write EVERYTHING from scratch (I must have a template, so that they are all the same)"

### Built with

-   HTML5
-   CSS
    -   Flexbox
    -   Grid
-   SASS
-   Vanilla JS

### What I learned

-   Upload a web page with [Netlify](https://www.netlify.com/)
-   Better separate my code from JS (in independent functions)
-   Use JS modules

```html
<head>
	<script src="./src/javascript/scripts.js" type="module"></script>
</head>
```

```JavaScript
import { users } from "./classes/users.js";

export const users = [];
```

### Continued development

I must improve the setInterval, since I did not know how to do that every time the button is pressed the interval should stop and start again

### Links

-   [Live Site](https://stoic-kare-8a8efc.netlify.app/)
