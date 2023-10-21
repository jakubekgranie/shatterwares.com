function discordAnim()
{
    var footerimage = document.getElementById('footerimage_discord').classList;
    var dcicon = document.getElementById('dcicon').classList;

    footerimage.toggle('invert');
    footerimage.toggle('transimage');
    footerimage.toggle('footerimage_discord');
    footerimage.toggle('footerimage_discord_inv');
    dcicon.toggle('discordicon');
    dcicon.toggle('flex');
    dcicon.toggle('fx-ai-c');
    dcicon.toggle('fx-jc-left');
    dcicon.toggle('brad-5');
    dcicon.toggle('bgfull');
    document.getElementById('footerimage_discord_p').classList.toggle('preload');
    dcicon.toggle('discordicontransformed');
}