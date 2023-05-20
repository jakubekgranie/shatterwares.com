function changeLanguage() 
{
    var currentlang = document.documentElement.getAttribute("lang");
    var element = document.getElementById('langswap');
    var country1 = "england";
    var country2 = "poland";
    if(currentlang == "pl")
    {
        element.classList.add(country1);
        element.classList.remove(country2);
        document.documentElement.setAttribute('lang', "en");
    }
    else
    {
        element.classList.add(country2);
        element.classList.remove(country1);
        document.documentElement.setAttribute('lang', "pl");
    }
}

/*
id: langswap
*/