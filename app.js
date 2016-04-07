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
    //vertSpacer.textContent = String.fromCharCode(160); // OR vertSpacer.textContent = '\xa0';
});
//
//    BUTTON BUTTONS
//
document.getElementById('buttonLeftBottom').addEventListener('click', function() {
    buttonWrapperBottom.style = 'line-height:2;font-size:xx-large;';
});
document.getElementById('buttonRightBottom').addEventListener('click', function() {
    vertSpacerBottom.style = 'line-height:2;padding:0.1em;font-size:xx-large;';   
    //vertSpacerBottom.textContent = String.fromCharCode(160); // OR vertSpacerBottom.textContent = '\xa0';
});
//
var vertSpacer = document.getElementById('vertSpacer');
var buttonWrapper = document.getElementById('buttonWrapper');
//
var vertSpacerBottom = document.getElementById('vertSpacerBottom');
var buttonWrapperBottom = document.getElementById('buttonWrapperBottom');
// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);
