var check = 0;
var lastButton;

// setHeader nad preloadBackground's shared variables.
const bgImages = ["dbh-1.png", "dbh-2.jpg", "deltarune-2.jpg", "deltarune-4.jpg", "hk-1.jpg", "hk-2.jpg", "tf-1.jpg", "tf-2.png", "deltarune-5.jpg", "deltarune-6.jpg"];
const path = "RESOURCES/SHWHP_RES/";
let random = Math.floor((Math.random()*100))%bgImages.length;

if(sessionStorage.getItem("lastRandomNum")) while(random == sessionStorage.getItem("lastRandomNum")){ // Prevent duplicates upon reloads
    random = Math.floor((Math.random()*100))%bgImages.length;
    sessionStorage.setItem("lastRandomNum", random);
}

function startAnimation1(){
    // after full site load -> remove user interaction limitations
    document.getElementsByTagName("style")[0].remove();
    animationForwarder('skip', 'load', 'anim-alternateOpacityShift', 0);
    animationForwarder('skip', 'load', 'dp-none', 500);

    // scramble animation
    const waitTime = 50; //defines animation's length (waitTime * length + 0.2s)
    const slogan =  "ShatterWares: the future starts now."; 
    const length = slogan.length;
    const nodeList = document.querySelectorAll(".headerLetter");

    function loopedLetterRand(i){ // for every external loop call, start from one letter further.
        for(; i < length; i++){
            nodeList[i].innerHTML = String.fromCharCode(Math.floor((Math.random() * 100))%95 + 32); // 32 - 126
        }
    }
    
    loopedLetterRand(0); // randomize everything once befote the process begins
    setTimeout(() => {
        for(let i = 0; i < document.querySelectorAll(".nav-button").length; i++){
            animationForwarder('navSlash' + (i + 1) + '-1', 'navSlash' + (i + 1) + '-2', 'anim-navBlink', 90); // Guest animation
        }

        for(let i = 0; i < length; i++){ // for each letter
            setTimeout(() => {
                loopedLetterRand(i)
                nodeList[i].innerHTML = slogan[i]; // separated so all symbols would be scrambled initially (look up)
            }, waitTime * i);
        }
    }, 250); // setTimeout used to belate the main animation (loading screen's fadeOut might make it partially invisible)
}

function anFrwdPreset(){
    if(check == 0){
        check = 1;
        anFrwdDoubleExec('sectionlang1', 'sectionlang2', 'slash1-lang', 'slash2-lang', 'anim-fadeintb', 250, 'anim-blink', 100);
        animationForwarder('skip', 'langCentral', 'anim-fadeinmod', 650)
    }
}
function langPicker(buttonid){
    if(lastButton != buttonid){
        // For ease of use
        const langDiv = document.getElementById('sectionlang1');
        const langParagraph = document.getElementById('sectionlang2');
        const langHeading = document.getElementById('sectionlang1p2');
        const langNames = ['cpp','html','js','css'];

        // If exists, remove the highlight of an icon and add it to the latest clicked one
        if(lastButton != null){
            const lastImage = 'icon-' + lastButton;
            document.getElementById(lastImage).classList.remove('lang-icon-onclick');
        }
        const latestImage = 'icon-' + buttonid;
        document.getElementById(latestImage).classList.add('lang-icon-onclick');

        lastButton = buttonid;
    
        // Specify the style of the unavailable cursor
        const n_a = "not-allowed";

        // Prevent user from interacting with the module while changing and indicate it via a suitable cursor change
        for(let i = 0; i < 4; i++){
            document.getElementById(langNames[i]).onclick = "null";
            document.getElementById(langNames[i]).style.cursor = n_a;
        }

        // After execution (1s), rollback the changes
        setTimeout(() => {for(let i = 0; i < 4; i++){
                document.getElementById(langNames[i]).style.cursor = null;
            }
            document.getElementById(buttonid).style.cursor = n_a;
        }, 1000);

        // To prevent style conflicts
        if(langDiv.classList.contains('anim-fadeintb') == true){
            langDiv.classList.remove('anim-fadeintb');
            langParagraph.classList.remove('anim-fadeintb');
        }
        if(langDiv.classList.contains('op-0') == true){
            langDiv.classList.remove('op-0');
            langParagraph.classList.remove('op-0');
        }

        // Commence the animation, notice the cascade-like injections
        langDiv.classList.add('animSwitchByFadeInLang');
        setTimeout(() => {langParagraph.classList.add('animSwitchByFadeInLang')}, 100);

        // Remove animations to allow replay
        setTimeout(() => {
            setTimeout(() => {
                langDiv.classList.remove('animSwitchByFadeInLang');
                langParagraph.classList.remove('animSwitchByFadeInLang');
                for(let i = 0; i < 4; i++){
                    document.getElementById(langNames[i]).onclick = function() {langPicker(langNames[i])};
                }}, 490);

            // Add suitable text
            const titles = ['C++','HTML','Javascript','CSS'];
            const descriptions = ["C++ is one of the most renowned programming languages in the world, used in making a wide variety of programs/apps, mostly direct executables. I want to be fully competent at it, even though it is not one of the languages I'll need as a webmaster.","HTML's my personal favorite for obvious reasons: its potential for shaping something creative when associated, nesting style and overall not limiting my imagination. I just love doing stuff in it.","Javascript is one of my recent 'discoveries'. Immediately after I dived into it, determination sprung into action. Being very powerful, my persona constantly tries to learn something new about it to empower my web developer adventures with fancy techniques.","There's not much to say here except for that it's a critical extension of html, or at least I perceive it as. Being a key to expressing one's power, I admire the fact that I'll carry it between the palms of my hand till the very end."]
            for(let i = 0; i < 4; i++){
                if(buttonid == langNames[i]){
                    langHeading.textContent = titles[i];
                    langParagraph.textContent = descriptions[i];
                }
            }
        }, 510);
    }
}
function langStats(){
    anFrwdDoubleExec('sectionlang12', 'sectionlang22', 'slash1-lang2', 'slash2-lang2', 'anim-fadeintb', 250, 'anim-blink', 100);

    const ids = ['html', 'css', 'cpp', 'js'];
    setTimeout(() => {
        for(let i = 0; i < 4; i++){
            setTimeout(() => {document.getElementById('holder_' + ids[i]).classList.add('holder-transformations')}, (i * 25));
        }
    }, 500);
    setTimeout(() => {
        for(let i = 0; i < 4; i++){
            setTimeout(() => {document.getElementById('baricon_' + ids[i]).classList.add('icon-image-transformations')}, (i * 100));
            setTimeout(() => {unravelBars(ids[i])}, (i * 100 + 225));
        }
    }, 725)
}
function unravelBars(langId){
    for(let i = 0; i < 10; i++){
        setTimeout(() => {
            let bar = "bar_" + langId + (i + 1);
            document.getElementById(bar).classList.add('anim-fadeintr2');
        }
        , (90 * i));
    }
}

function anFrwdDoubleExec(identifier, identifier2, identifier3, identifier4 ,anim_id, wait_time, anim_id2, wait_time2){
    animationForwarder(identifier, identifier2, anim_id, wait_time);
    animationForwarder(identifier3, identifier4, anim_id2, wait_time2);
}
function animationForwarder(identifier, identifier2, anim_id, wait_time){
    if(identifier != 'skip'){
        document.getElementById(identifier).classList.add(anim_id);
    }
    setTimeout(() => {document.getElementById(identifier2).classList.add(anim_id)}, wait_time);
}
function rainbow(){
    //Remove the onmouseover event to prevent the button from flickering
    const socials = document.getElementById('socials');
    const socials_trigger = document.getElementById('socials_trigger')
    socials_trigger.onmouseover = null;
    setTimeout(() => socials_trigger.onmouseover = function() {rainbow()}, 500);

    socials.classList.add('anim-truefadeinrainbow');
    setTimeout(() => socials.classList.remove('anim-truefadeinrainbow'), 500); //Replay the animation
}
function toggleUpdateScreenVisibility(){
    const updateScreen = document.getElementById('updateScreen');
    const animOShift = "anim-opacityShift";
    updateScreen.classList.toggle("dp-none");
    updateScreen.classList.toggle(animOShift);

    anFrwdDoubleExec('updateScreen', 'updateNotes', 'skip', 'updateStar', animOShift, 100, 'anim-fadeInTL', 100);
} 
function preloadBackground(){
    const displayPreload = document.createElement("img");

    displayPreload.setAttribute("src", path + bgImages[random]);
    document.getElementById("preload").appendChild(displayPreload);
}
function setHeader(){
    document.getElementById("header").setAttribute("style", "background-image: url('" + path + bgImages[random] + "')");
}