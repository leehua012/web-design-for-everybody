function upDate(previewPic)
{
    var x=document.getElementById("image");
    document.getElementById("image").innerHTML=previewPic.alt;
    x.style.backgroundImage='url('+previewPic.src+')';
}

function unDo()
{

    var x=document.getElementById("image");
    x.style.backgroundColor="#8e68ff";
    document.getElementById("image").innerHTML="Hover over an image below to display here";
}