/**
 * Created by session2 on 10/20/15.
 */

function changeText(id)
{
    var userText = prompt("Enter a new description: ");

    if(userText.length > 55)
    {
        userText = userText.substring(0, 54);
        alert("You put too much text! It had to be shortened.");
    }

    $("#" + id + " p").text(userText);
}

$(document).ready(function()
{
    $('#img1').click(function()
    {
        $('#img1').attr('src', 'http://static.trustedreviews.com/94/000033020/8e70/Fallout-4.jpg')
    });

    $('#img2').click(function()
    {
        $('#img2').attr('src', 'http://blogs-images.forbes.com/insertcoin/files/2015/06/taken-king4.jpg')
    });

    $('#img3').click(function()
    {
        $('#img3').attr('src', 'http://b-i.forbesimg.com/carolpinchefsky/files/2013/06/TheLastofUsPoster.jpg')
    });

    $('#img4').click(function()
    {
        $('#img4').attr('src', 'https://farm1.staticflickr.com/580/20341452773_e420d76385_b.jpg')
    });

    $('#img5').click(function()
    {
        $('#img5').attr('src', 'https://i.ytimg.com/vi/gmYs6qufw78/maxresdefault.jpg')
    });

    $('#img6').click(function()
    {
        $('#img6').attr('src', 'http://3ebd2a0c0ea48a333aea-1f531def8e8befb67be56667ce3edd11.r77.cf1.rackcdn.com/7edc3dc4531beeb7302fd0aeb843807cecb0a7ae.jpg__620x349_q85_crop_upscale.jpg')
    });

    $('#img7').click(function()
    {
        $('#img7').attr('src', 'https://psmedia.playstation.com/is/image/psmedia/minecraft-listing-thumb-01-ps4-ps3-psv-us-15aug14?$Icon$')
    });

    $('#img8').click(function()
    {
        $('#img8').attr('src', 'http://www.bioshockinfinite.com/images/media/downloads/Falling_Desktop_1920x1200.jpg')
    });

    $('#img9').click(function()
    {
        $('#img9').attr('src', 'http://suckerpunch.playstation.com/images/stories/second-son-key-art.gif')
    });
});
