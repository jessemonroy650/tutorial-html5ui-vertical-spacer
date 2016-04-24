# Tutorial: HTML5 &ndash; Notes on creating vertical blank space  #
Date: 2016-04-23<br>
Last Update: 2016-04-23

There are couple important points to make before going into the
tutorial. As such this tutorial has four sections. The last
section has the solution in code

- &lt;span&gt; vs &lt;div&gt; makes a difference
- *min-height:* vs *line-height:*
- &amp;nbsp; (nonbreaking space) has a Unicode equivalent
- Creating Vertical Blank Space

The final solution can be used with either a block-level element (like div) or and inline element (like span). However, both have side effects. The same goes when using `min-height:`. On this, solution turns out to be `line-height:`. Lastly, sometimes there needs to be some character in the "flow" so that layout works as expected. Typically a &amp;nbsp; can be used, however dynamically creating such structure would require the use of `innerHTML` - which can create a security issue. (innerHTMl-security.md)

## &lt;span&gt; vs &lt;div&gt; makes a difference ##

First, let's look a general definition from [hotdog.com](http://htmldog.com/guides/html/intermediate/spandiv/)

> The difference between `span` and `div` is that a `span` element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a `div` (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.

One other side effect of concern is that `div` has margins, but `span` does not. This is because `span` is use to group or wrap other inline elements and/or text, rather than block level elements. 


## *min-height:* vs *line-height:* ##

The `min-height` property is used to set the minimum height of a given element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.

On block level elements, the `line-height` property specifies the minimum height of line boxes within the element.

On non-replaced inline elements, `line-height` specifies the height that is used to calculate line box height. On replaced inline elements such as buttons or other input elements, `line-height` has no effect. 

## &amp;nbsp; (nonbreaking space) has a Unicode equivalent ##

Occasionally, the layout cannot be fully seen unless some character is inserted into the flow.

    String.fromCharCode(160); // OR vertSpacer.textContent = '\xa0';

http://stackoverflow.com/questions/5237989/nonbreaking-space

## Creating Vertical Blank Space ##

    top left
    min-height:2em;font-size:xx-large;
    top right
    min-height:2em;padding:0.1em;font-size:xx-large;

    bottom left
    line-height:2;font-size:xx-large;
    bottom right
    line-height:2;padding:0.1em;font-size:xx-large;



- ref: [WS3C Generic containers - the div and span elements](https://www.w3.org/wiki/Generic_containers_-_the_div_and_span_elements)
