Problems occured:

1. class navbar-fixed-top and jumbotron were overlapping each other
Solution was to provide padding to the body element.

2. In case images are of different sizes, use:
image {
 width: 100%;
 height: 250px;
 background-size: cover
 background-position: center center;

}
provide this image class to the img tag or create another div tag and include img tag in it.

3. Font-awesome icons not working. Probably the CDN has changed.

4. Used Google chrome developer tools to inspect various styles that were not applied because of a higher specificity of the class. Resolved that.
