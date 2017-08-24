PAGE TRANSITION INTO ANOTHER PAGE

Basically the idea is to morph an SVG path while transitioning into another page up, creating an interesting flow. 

For javascript anime.js is used.
For text effects Charming is used.

The fixed content lies beneath the intro content, and once we move the intro content up, it gets revealed. At the same time we morph the SVG path into the one defined in the pathdata:id. When creating the two paths, one needs to make sure that they both have the same amount of points so that the morphing happens smoothly.