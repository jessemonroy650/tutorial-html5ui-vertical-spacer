# Tutorial: HTML5 &ndash; Notes on creating vertical blank space  #
Date: 2016-04-23<br>
Last Update: 2016-04-23

There are several important points to make before going into this
tutorial. 

- onDeviceReady is required for Phonegap
- &amp;nbsp; (nonbreaking space) has a Unicode equivalent
- &lt;span&gt; vs &lt;div&gt; makes a difference

## *min-height:* vs *line-height:* ##


// http://stackoverflow.com/questions/5237989/nonbreaking-space
//
function  onDeviceReady() {
    // console.log('onDeviceReady');
    document.getElementById('isstate').innerHTML = 'onDeviceReady';
};
//
//    TOP BUTTONS
//
document.getElementById('buttonLeft').addEventListener('click', function() {
    buttonWrapper.style = 'min-height:2em;font-size:xx-large;';
});
document.getElementById('buttonRight').addEventListener('click', function() {
    vertSpacer.style = 'min-height:2em;padding:0.1em;font-size:xx-large;';   
    vertSpacer.textContent = String.fromCharCode(160); // OR vertSpacer.textContent = '\xa0';
});
//
//    BOTTOM BUTTONS
//
document.getElementById('buttonLeftBottom').addEventListener('click', function() {
    buttonWrapperBottom.style = 'line-height:2;font-size:xx-large;';
});
document.getElementById('buttonRightBottom').addEventListener('click', function() {
    vertSpacerBottom.style = 'line-height:2;padding:0.1em;font-size:xx-large;';   
    vertSpacerBottom.textContent = String.fromCharCode(160); // OR vertSpacerBottom.textContent = '\xa0';
});
//
var vertSpacer = document.getElementById('vertSpacer');
var buttonWrapper = document.getElementById('buttonWrapper');
//
var vertSpacerBottom = document.getElementById('vertSpacerBottom');
var buttonWrapperBottom = document.getElementById('buttonWrapperBottom');
// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);
