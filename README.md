# Transitioning From Scratch to JavaScript

## Introduction and Overview

This is a collection of resources/takeaways related to my "Scratch to JavaScript" demo at the [2017 Maker Ed Convening](http://makered.org/maker-educator-convening-2017/). This includes a table of contents linking to a [Scratch](https://scratch.mit.edu/) studio with some projects and then several links to [p5js](https://p5js.org/) projects. Much of this pulls from examples and resources for the [Digital Harbor Foundation](http://www.digitalharbor.org/) _Game Workshop_ youth course.

## Initial Goal

The main goal for my presentation is to demonstrate and share some of our examples and lessons learned as we helped youth transition from the visual, block based programming in Scratch to a syntax programming language. We chose JavaScript for this purpose. More specifically, we chose p5js - the JavaScript library that is an update/JavaScript version of the original [Processing](https://processing.org/) programming language. Due to the emphasis on visual arts and interactivity, Processing, and by extension p5, is a highly engaging platform. The ability to quickly prototype and run a _sketch_ helps retain some of the _immediate engagement_ built in to Scratch.

The _Game Workshop_ course is 14 weeks long, with youth working for roughly 7 weeks in Scratch and then 7 weeks in JavaScript with the p5 library. The youth were already comfortable with Scratch basics prior to the course, so the 7 weeks focused mainly on refining computational thinking and solidifying programming foundations. The visual nature of Scratch enabled facilitators to emphasize these concepts and build confidence with creative problem solving.

The transition into JavaScript started with the very basics. Even with the content designed specifically to build on existing Scratch skills, our facilitators found that having some _one-to-one_ examples (or as close to that as possible) was extremely beneficial for the youth. Being able to see how a mechanic, or concept, is expressed in Scratch alongside a similar concept written in JavaScript really helped to maintain excitement and deepen understanding.

## Diving In

When we first started using p5, we used the p5 desktop editor. However, during the course this editor became deprecated. We had our youth continue to use it throughout the course, but we plan to switch to using a text editor such as [Atom - my personal favorite](https://atom.io/) and a live-server package to run sketches. This has the added benefit of giving youth some practice time using a text editor and live server.

However, our program staff also used the _alpha version_ of the [p5.js Web Editor](https://alpha.editor.p5js.org/). This is a super early edition so you may encounter some bugs, but it's a **fantastic** way to dive in and test out some concepts! To do that, follow these quick steps:

1. Navigate to one of the code examples below
2. Click the _sketch.js_ file
3. Paste the _entire_ file contents into the web editor

  - Note: Make sure to _select all_ and replace. Don't leave any stray { }!

4. Click the **Play** icon to run the sketch!

5. Hit the **Stop** icon when done!

Check out the [Getting Started](https://p5js.org/get-started/) section on the p5js site for a deeper introduction to p5, especially if you're interested in using a text editor/live server.

## Table of Contents

Here is a collection of links to both the Scratch projects and Scratch studio as well as quick links to the p5 sketches contained in this repo. Many of the Scratch and p5 examples are meant to be presented in tandem with a brief overview/walkthrough of the code structure.

One suggestion is to first demo both the Scratch project and then the p5 sketch to establish a visual point of reference. Next, can be a step by step-by-step overview of the Scratch code structure, emphasizing the logic and block relationships. Then, facilitators can do a walkthrough of the p5 code, pointing out the underlying logic and structure and how it corresponds and relates to the Scratch blocks.

### Links to Scratch Projects

- [Hello World! - Color Switcher](https://scratch.mit.edu/projects/161447388/)
- [Background Changer - Random Number](https://scratch.mit.edu/projects/161453700/)
- [Mouse Press - Color Change](https://scratch.mit.edu/projects/161454475/)
- [Conditional Statement - Color Changing Circle](https://scratch.mit.edu/projects/161455913/)
- [Conditional Statement - Sprite Motion](https://scratch.mit.edu/projects/104209850/)
- [Function Call](https://scratch.mit.edu/projects/150462023/#player)

### Links to p5 Sketches

- [Hello World!](https://github.com/jonathanprozzi/scratch-to-js/tree/master/sketchbook/helloWorld)
- [Background Changer - Random Number](https://github.com/jonathanprozzi/scratch-to-js/tree/master/sketchbook/backgroundChange)
- [Mouse Interaction](https://github.com/jonathanprozzi/scratch-to-js/tree/master/sketchbook/interactMouse)
- [Condtional Statements](https://github.com/jonathanprozzi/scratch-to-js/tree/master/sketchbook/conditionalOne)
- [Keypress Interaction](https://github.com/jonathanprozzi/scratch-to-js/tree/master/sketchbook/interactKeys)
- [Keypress Motion](https://github.com/jonathanprozzi/scratch-to-js/tree/master/sketchbook/keyPressMotion)
- [Simple Vertical Motion](https://github.com/jonathanprozzi/scratch-to-js/tree/master/sketchbook/simpleVertical)
- [Loops Part One: Without the Loop!](https://github.com/jonathanprozzi/scratch-to-js/tree/master/sketchbook/noLoopDrawing)
- [Loops Part Two: With the Loop!](https://github.com/jonathanprozzi/scratch-to-js/tree/master/sketchbook/loopDrawing)
- [Basic Function Drawing](https://github.com/jonathanprozzi/scratch-to-js/tree/master/sketchbook/functionBasic)

... Have side by side demo

## How to Use These Resources

One way that our facilitators found success with these resources is to show the Scratch example in a walkthrough, and then switch and do a demo and walkthrough of the corresponding p5 sketch. While the correspondence isn't always there, this provided enough of an _anchor_ for the learning and the youth were able to deepen their understanding.

Even breaking down comparisons through contrived demonstrations is useful. Showing side by side examples of how _conditional logic_ is handled in Scratch and in JavaScript is helpful for new learners. This is also true when explaining a concept such as _looping_. In fact, the **function draw()** that is part of p5 is a convenient parallel for the _forever loop_ that is nearly omnipresent in Scratch programs.

These are the starting point for a toolkit. My goal is to continue to build both the Scratch projects and corresponding p5js sketches that parallel each other. Much of my initial p5 learning was accelerated by [Daniel Shiffman's amazing videos](https://www.youtube.com/user/shiffman) and I'm eager to pay it forward with these resources and presentation.

In the last 3 weeks of the _Game Workshop_ course, our youth integrated the wonderful and accessible [p5.play library](http://p5play.molleindustria.org/). This library extends p5 and provides additional tools for creating games, while still preserving the accessibility and beginner friendliness of p5.

## Why p5?

I've been asked why we chose to teach our youth p5js in our programming progression. The beginner friendliness of p5 and the incredible, growing community around it are excellent entry points to the overwhelming world of JavaScript. I love the power, flexibility, and ubiquity of JavaScript and see it as a language with massive potential and learning pathways for youth, but I also recognize that these strengths are often also some of the pitfalls of the language. The incredible amount of libraries, frameworks, and toolsets can be confusing when searching for an entry point. As with everything else, we at DHF always seek a balance between _accessibility_ and _applicability_. The applicability and demand for JavaScript is obvious and continuing to grow. P5 helps with making JavaScript more accessible to beginners.

Scratch allows for teaching programming concepts and computational thinking while providing an entry point with some _easy wins_ for youth. Since Processing (and p5) was initially designed to be a programming language for visual artists, much of these _easy wins_ are transferrable. While that's the case there often is still a need for a _bridge_ from the visual Scratch and the syntax and (occasionally) quirky idiom of JavaScript. This is especially true for youth who are brand new to programming. Hopefully these tools will help educators that are looking for the next step beyond Scratch!

## Next Steps

Once the core foundations have been established, youth can create (or recreate!) their Scratch projects in p5\. The p5.play library helps greatly with this as it handles some of the heavy lifting behind the scenes. If youth really absorb the basics and are looking to continue with JavaScript game development, there are other powerful frameworks and libraries that can be used as the next step. One such framework is [Phaser.io](http://phaser.io/).

--------------------------------------------------------------------------------

## License

These resources are available under the Creative Commons 3 License:

_Attribution_ -- You must attribute the work in the manner specified by the author or licensor (but not in any way that suggests that they endorse you or your use of the work).

_Noncommercial_ -- You may not use this work for commercial purposes.

_Share Alike_ -- If you alter, transform, or build upon this work, you may distribute the resulting work only under the same or similar license to this one.

_Source_: [Creative Commons Link](http://creativecommons.org/licenses/by-nc-sa/3.0/)
