/**
 * Created by session2 on 10/20/15.
 */

$(document).ready(function()
{
    $("button").click(function()
    {
        var userText = prompt("Enter a new description: ");

        alert(this);
        if(userText.length > 55)
        {
            userText = userText.substring(0, 54);
            alert("You put too much text! It had to be shortened.");
        }

        $("p").text(userText);
    });

    $("img").click(function()
    {
        alert("The image was clicked");

        if(this.value == "img1")
        {
            $(this).attr('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2000px-HTML5_logo_and_wordmark.svg.png');
        }

    });
});