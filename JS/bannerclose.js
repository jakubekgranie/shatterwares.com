function bannerClose(bannerid){
    document.getElementById(bannerid).style.display='none';
    if (bannerid == "bner1")
    {
        document.getElementById('bner2').style.top = "5vw";
    }
}