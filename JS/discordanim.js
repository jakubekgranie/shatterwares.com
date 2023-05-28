function discordAnim()
{
    var footerimage = document.getElementById('footerimage_discord').classList;
    var dcicon = document.getElementById('dcicon').classList;

    footerimage.toggle('invert');
    footerimage.toggle('footerimage_discord');
    footerimage.toggle('footerimage_discord_inv');
    dcicon.toggle('discordicon');
    dcicon.toggle('discordicontransformed');
}