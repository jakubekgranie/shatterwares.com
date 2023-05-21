function changeLanguage() 
{
    if(document.documentElement.getAttribute("lang") == "pl")
    {
        document.getElementById('langswap').classList.add("england");
        document.getElementById('langswap').classList.remove("poland");
        document.documentElement.setAttribute('lang', "en");
    }
    else
    {
        document.getElementById('langswap').classList.add("poland");
        document.getElementById('langswap').classList.remove("england");
        document.documentElement.setAttribute('lang', "pl");
    }
}
function discordAnim()
{
    if(document.getElementById('dcicon').classList.contains('discordicontransformed') == false)
    {
        document.getElementById('footerimagediscord').classList.add('invert');
        document.getElementById('dcolor').classList.remove('colora');
        document.getElementById('dcolor').classList.add('colorb');
        document.getElementById('dcicon').classList.remove('discordicon');
        document.getElementById('dcicon').classList.add('discordicontransformed');
    }
    else
    {
        document.getElementById('footerimagediscord').classList.remove('invert');
        document.getElementById('dcolor').classList.remove('colorb');
        document.getElementById('dcolor').classList.add('colora');
        document.getElementById('dcicon').classList.add('discordicon');
        document.getElementById('dcicon').classList.remove('discordicontransformed');
    }
}