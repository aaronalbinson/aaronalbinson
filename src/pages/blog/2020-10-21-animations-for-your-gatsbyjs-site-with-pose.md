---
templateKey: blog-post
title: Animations for your GatsbyJS site with Pose
blogImage: /img/1_-ywvlouozzbivlycscwclw-2x.png
date: 2020-10-21T21:18:25.891Z
description: >-
  GatsbyJS static site generator is awesome for creating super fast sites. With
  full performance setup your pages should load straight away.


  Sometimes you need a bit of animation to make the site that little bit more interesting and with Pose we can do exactly that.
tags:
  - gatsbyjs
  - animations
---
Gatsby already has a sweet plugin for [page transitions](https://www.gatsbyjs.org/packages/gatsby-plugin-page-transitions/) but for in-page animations were going to have a look at [Pose](https://popmotion.io/pose/) by Popmotion which sells itself as *“a truly simple animation library for React, React Native, and Vue”*.

In this example I’m going to use a basic template that GatsbyJS provides with the Kaldi theme. It provides us with a few pages including a blog and a couple of forms. It’s basically a fully responsive website that we can add some animations to.

## Installation

First we need to install pose to our site with

`yarn add react-pose`

or

`npm install react-pose --save`

We’ll need to import Pose for each component that we want to add animations to with `import posed from 'react-pose';`

## Hover animations

We can use `posed` to create any animated HTML or SVG element, here we’ll use it to create a div.

```
const Box = posed.div({
});
```

Then in the render we include the Box element we just created. We’ll wrap each blog post within this `Box`

```
<Box className="box">
...
</Box>
```

Next up is adding the animation to the box we created:

```
const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.1,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.3)"
  }
});
```

This will increase the scale of the box when hovered. It’s a pretty simple and neat example of how we can quickly add a hover effect to our elements in a static website.

It [turns out quite well](https://5bff40a9e4708539f3037ba9--gatsbyjs-pose.netlify.com/), and [the code](https://github.com/aaronalbinson/gatsby-starter-pose/blob/c5e702b6e855d2f35ebb077bf143ff4727bcffb5/src/pages/index.js#L11) is pretty easy to follow.

## Image Zoom

One example on the Pose documentation shows how we can zoom into an image on click and zoom back out again when the image is clicked again. This seems like a nice light and simple alternative to a lightbox.

The images we’ll be zooming are on the products page of the gatsby-starter template: <https://gatsbyjs-pose.netlify.com/products>

We’ll make a new component called `ImageZoom` that uses the `PreviewCompatibleImage` component that came with the gatsby-starter.

```
import React from "react";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

class ImageZoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div>
        <PreviewCompatibleImage imageInfo={this.props.imageInfo} />
      </div>
    );
  }
}

export default ImageZoom;
```

We need to import posed again, define our animated `posed.div` to create our new `Zoomable` div.

```
const Zoomable = posed.div({
  fullscreen: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw"
    height: "100vh"
    flip: true,
    zIndex: "1"
  },
  idle: {
    position: "static",
    width: "100%",
    height: "auto",
    flip: true,
    zIndex: "1"
  }
});
```

[Read more about the FLIP technique here](https://popmotion.io/pose/learn/flip/)

We’re going to use state to control when the image is zoomed in or not so we’ll set the active state.

```
state = {
  active: false
};
```

We can wrap our new `Zoomable` item around the image with the pose settings and `onClick` function.

```
render() {
  return (
    <Zoomable
      className="zoomable"
      pose={this.state.active ? "fullscreen" : "idle"}
      onClick={this.toggleZoom}
    >
      <PreviewCompatibleImage imageInfo={this.props.imageInfo} />
    </Zoomable>
  );
}
```

And set up our functions for swapping the state when our `Zoomable` item is clicked.

```
zoomIn() {
  this.setState({ active: true });
}

zoomOut = () => {
  this.setState({ active: false });
};

toggleZoom = () => (this.state.active ? this.zoomOut() : this.zoomIn());
```

Now that our new component is ready to use, let’s import it into the products page and use this instead of the `PreviewCompatibleImage`.

```
...
<article className="tile is-child">
  <ImageZoom imageInfo={main.image1} />
</article>
...
```

That’s it, a really simple lightbox effect with Pose within our GatsbyJS static site. [Here’s the result](https://5c055b0d0ff8d46fc650df00--gatsbyjs-pose.netlify.com/products) and [the code](https://github.com/aaronalbinson/gatsby-starter-pose/blob/pose-image-zoom/src/components/ImageZoom.js).

### Other inspiration and useful links

There’s a lot that you can do with Pose and after having a small play around with it I think it has it’s part to play in simple animations for websites. Here’s [a really nice example](https://twitter.com/vince_parulan/status/1058111363757813760) of Vince Parulan creating a lovely animated menu with Pose.

An article by Google on [CSS Versus JavaScript Animations](https://developers.google.com/web/fundamentals/design-and-ux/animations/css-vs-javascript).