function changeLanguage() 
{
    var langbutton = document.getElementById('langswap').classList;
    var htmllang = document.documentElement;
    
    langbutton.toggle("england");
    langbutton.toggle("poland");
    if(document.documentElement.getAttribute("lang") == "pl")
    {
        htmllang.setAttribute('lang', "en");
    }
    else
    {
        htmllang.setAttribute('lang', "pl");
    }
}