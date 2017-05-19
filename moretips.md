# Additional Tips, Tricks, and Lessons Learned

## Overview

The README was growing too large so I decided to separate some resources into a separate Markdown file. Several Scratch projects and p5 sketches are linked in the Table of Contents section of that document. I wanted to include some additional _gotchas_ and _lessons learned_ that came up as we helped youth transition from Scratch to JavaScript. Let's dive in!

## The Coordinate Plane

One of the biggest _gotchas_ is related to the **Coordinate Plane**. When our youth first learn about sprite motion in Scratch, we teach horizontal and vertical motion as shifts along the coordinate plane.

On the left of the image is the plane as used in Scratch:

![Coordinate Plane - Scratch](http://learn.digitalharbor.org/wp-content/uploads/2015/06/Screen-Shot-2015-06-22-at-2.15.41-PM.png)

On the right of the image is the plane as used in p5 (and most HTML5 based game development):

This is one of the key considerations for helping youth move from Scratch to p5\. One way that we address this transition is by focusing on the concept of _coordinate motion_ in Scratch, showing that motion in one direction _increments_ the x and y values, and motion in the opposite direction _decrements_ those values. When presented in this way, youth recognize the concept behind coordinate motion and can transfer their learning into a new coordinate system. Even though the p5 coordinate system is different than Scratch's, youth understand the concept and are able to adapt to the origin being in the top left corner instead of the middle of the canvas.

Spending time with graph paper and having youth create _physical prototypes_ of their sketches helped youth become accustomed to the new origin location. Once they made that conceptual leap, they could leverage their previous knowledge of motion based on incrementing and decrementing x and y values.

## Prototyping

One constant throughout the Scratch and JavaScript portion of the course was the concept of _prototyping_ with wireframes. The first step of every project, whether it was created with Scratch or with p5, was to create a basic wireframe for the game. These included a basic drawing of the background and sprites, as well as a short list of the intended mechanics. From there, the youth would then list out the steps and programming logic required in the mechanics. Doing this from the very beginning of the course helped youth connect with the programming concepts in their games. This was helpful with p5, as youth had a roadmap to what they wanted to accomplish that included the logic that they would need to include. It's tempting to skip this step, especially when time is tight, but in our experience the inclusion of basic wireframe prototyping was invaluable to internalizing the programming concepts.
