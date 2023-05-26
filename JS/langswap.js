function changeLanguage() 
{
    var langbutton = document.getElementById('langswap').classList;
    var htmllang = document.documentElement;
    
    if(document.documentElement.getAttribute("lang") == "pl")
    {
        langbutton.add("england");
        langbutton.remove("poland");
        htmllang.setAttribute('lang', "en");
    }
    else
    {
        langbutton.add("poland");
        langbutton.remove("england");
        htmllang.setAttribute('lang', "pl");
    }
}
function discordAnim()
{
    var footerimage = document.getElementById('footerimage_discord').classList;
    var dcicon = document.getElementById('dcicon').classList;

    if(dcicon.contains('discordicontransformed') == false)
    {
        footerimage.toggle('invert');
        footerimage.toggle('footerimage_discord');
        footerimage.toggle('footerimage_discord_inv');
        dcicon.toggle('discordicon');
        dcicon.toggle('discordicontransformed');
    }
    else
    {
        footerimage.toggle('invert');
        footerimage.toggle('footerimage_discord');
        footerimage.toggle('footerimage_discord_inv');
        dcicon.toggle('discordicon');
        dcicon.toggle('discordicontransformed');
    }
}