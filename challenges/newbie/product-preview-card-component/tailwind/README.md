# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa).

## Table of contents

- [Frontend Mentor - Product preview card component solution](#frontend-mentor---product-preview-card-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Links

- [Live site](https://nico-or.github.io/frontend-mentor/challenges/newbie/product-preview-card-component/tailwind/index.html)

## My process

### Built with

- [Tailwind CSS](https://tailwindcss.com/)
- [Google Fonts](https://fonts.google.com/)

### What I learned

I learn the basics of Tailwind's _responsive design_. In particular, how to condition certain rules to the viewport size.

I got to remmeber the existence of the `picture` HTML element.
After unsuccesfully trying to make the image switching with `<img srcset="..." sizes="..."/>` I found a [CSS-Tricks](https://css-tricks.com/) article that covered responsive images.

Had to actually re-learn that the `picture` element even existed.

### Continued development

I could not implement the image switching between layouts using the native `<img srcset="..." sizes="...">` element.
Most of the trouble seems to come from the fact that the desktop image is in fact narrower than the mobile one, reversing the logic presented in most of the references I could find to this new HTML functionality.

### Useful resources

- [Google Fonts API documentation](https://developers.google.com/fonts/docs/getting_started).
- [Tailwind CSS documentation](https://tailwindcss.com/docs/)
- [CSS-Tricks Responsive Iages Guide](https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/) - Good reference for both `img`and `picture` HTML elements..
