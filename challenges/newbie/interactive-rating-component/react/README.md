# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Frontend Mentor - Interactive rating component solution](#frontend-mentor---interactive-rating-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- [Live site](https://nico-or.github.io/frontend-mentor/challenges/newbie/interactive-rating-component/react/index.html)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Google Fonts](https://fonts.google.com/)

### What I learned

Since this seemed like a simple component I choose to make this challenge an oportunity to start learning React.
I had used it with the documentation examples, but this was my first time building a component from scratch.

I choose to use the CDN versions React and Babel instead of preparing a proper project using a compilation and bundling steps, since it was a small project and didn't planned to use any Sass-like solution for styling.

The most interesting challenges where related to the rating score:

- which component needed to host the rating score state?
- how to transfer the rating score from the first view to the next one?
- how to apply the orange style to the score value after clicking?
- what happens if a user hits submit before clicking a rating?
- To implement the rating selector I used [state hooks](https://reactjs.org/docs/hooks-state.html) to [lift the state up](https://reactjs.org/docs/lifting-state-up.html) in the component tree.

To render the _thank you_ view after submiting the review I used [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).

The main pain during development was the single `.js/jsx` file.
I didn't try to make the files modules so I had to work with a relatevely large file, which lead to a lot of jumping around and couldn't make separate CSS files for each component.

### Continued development

In future projects I should attempt to:

- use `create-react-app` and Webpack to build the project.
- build the components as individual modules.
- implement automated component testing.
- apply a CSS framework like Bootstrap or Tailwind to the app.
