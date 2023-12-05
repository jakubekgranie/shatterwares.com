var lastButton;

window.onload = () => {
    //regulateScroll(); INCOMPATIBLE WITH THE UPDATE LOG
    function sessionRandExchange(sessionName, len){
        let rand = Math.floor((Math.random()*100))%len;

        if(typeof sessionStorage.getItem(sessionName) !== undefined) 
            while(rand == sessionStorage.getItem(sessionName)) 
                rand = Math.floor((Math.random()*100))%len;

        sessionStorage.setItem(sessionName, rand);
    }

    const names = ["Delve", "Explore", "Reveal", "Decode", "Uncover", "Discover", "Enhance", "Iterate"];
    sessionRandExchange("lastRandomName", names.length);
    document.getElementById("navSpec").innerHTML = " " + names[sessionStorage.getItem("lastRandomName")];

    const bgImages = ["dbh-1.webp", "dbh-2.jpg", "deltarune-2.jpg", "deltarune-4.jpg", "hk-1.jpg", "hk-2.jpg", "tf-1.jpg", "tf-2.webp", "deltarune-5.jpg", "deltarune-6.jpg"];
    const path = "RESOURCES/SHWHP_RES/";
    sessionRandExchange("lastRandomNum", bgImages.length);

    document.getElementById("header").setAttribute("style", "background-image: url('" + path + bgImages[sessionStorage.getItem("lastRandomNum")] + "')");

    // after full site load -> remove user interaction limitations
    document.getElementsByTagName("style")[0].remove();
    animationForwarder('skip', 'load', 'anim-alternateOpacityShift');
    animationForwarder('skip', 'load', 'dp-none', 250);

    // scramble animation
    const waitTime = 50; //defines animation's length (waitTime * length + 0.2s)
    const slogan =  "ShatterWares: the future starts now."; 
    const length = slogan.length;
    const nodeList = document.querySelectorAll(".headerLetter");

    function loopedLetterRand(i){ // for every external loop call, start from one letter further.
        for(; i < length; i++)
            nodeList[i].innerHTML = String.fromCharCode(Math.floor((Math.random() * 100))%95 + 32); // 32 - 126
    }
    
    loopedLetterRand(0); // randomize everything once befote the process begins
    setTimeout(() => {
        for(let i = 0; i < document.querySelectorAll(".nav-button").length; i++)
            animationForwarder('navSlash' + (i + 1) + '-1', 'navSlash' + (i + 1) + '-2', 'anim-navBlink', 90); // Guest animation

        for(let i = 0; i < length; i++){ // for each letter
            setTimeout(() => {
                loopedLetterRand(i);
                nodeList[i].innerHTML = slogan[i]; // separated so all symbols would be scrambled initially (look up)
            }, waitTime * i);
        }
    }, 150); // setTimeout used to belate the animations (loading screen's fadeOut might make them partially invisible)

    setTimeout(() => {
        // intersection animations
        let ids = ["theMission", "langs1", "langStats", "ShWPH"]; //ids
        let func = [() => {anFrwdDoubleExec('headermission', 'headermission2', 'skip', 'pfp', 'anim-fadeintr', 100, 'anim-fadeinrainbow', 640)}, 
                    () => {anLangPreset()}, 
                    () => {langStats()},
                    () => {anShWPHPreset()}
                   ]; //animations

        function callback(entries, observer, index){
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    func[index]();
                    observer.disconnect();
                }
            })
        }
        let observeDataSmall = {
            root: null,
            rootMargin: "0px",
            threshold: 0.4,
        };
        ids.forEach((value, index) => {
            let observer = new IntersectionObserver((entries, observer) => {
                callback(entries, observer, index);
            }, observeDataSmall);
            observer.observe(document.getElementById(value));
        });
    }, 300); // prevent invisibility as in the case above
}
function regulateScroll(){
    const ratio = 1 / devicePixelRatio;
    document.getElementsByTagName("body")[0].setAttribute("style", "transform: scale(" + ratio + ", " + ratio + "); width: " + devicePixelRatio * 100 + "%; height: " + devicePixelRatio * 100 + "%;");
}

function anLangPreset(){
    anFrwdDoubleExec('sectionlang1', 'sectionlang2', 'slash1-lang', 'slash2-lang', 'anim-fadeintb', 250, 'anim-blink', 100);
    animationForwarder('skip', 'langCentral', 'anim-fadeinmod', 650);
}
function anShWPHPreset(){
    animationForwarder('skip', 'xp-1', 'anim-fadeintl2');
    setTimeout(() => {anFrwdDoubleExec('sectionxp1', 'sectionxp2', 'slash1-xp', 'slash2-xp', 'anim-fadeintt', 250, 'anim-blink', 100)}, 350);
    animationForwarder('skip', 'new', 'op-0', 1300);
    animationForwarder('skip', 'new', 'dp-none', 1800);
}
function anNavButtonPreset(){
    const spec = document.getElementById("spec")
    if(spec.classList.contains('locked')){
        const classes = ['locked', 'hover-color-forced'];
        for(let i = 0; i < 2; i++)
            spec.classList.remove(classes[i]);
    }
    else
        anFrwdDoubleExec('skip', 'spec', 'skip', 'spec', 'locked', 0, 'hover-color-forced')
}

function langPicker(buttonid){
    if(lastButton != buttonid){
        // For ease of use
        const langDiv = document.getElementById('sectionlang1');
        const langParagraph = document.getElementById('sectionlang2');
        const langHeading = document.getElementById('sectionlang1p2');
        const langNames = ['cpp','html','js','php'];

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
        setTimeout(() => {
            for(let i = 0; i < 4; i++)
                document.getElementById(langNames[i]).style.cursor = null;
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
                for(let i = 0; i < 4; i++)
                    document.getElementById(langNames[i]).onclick = function() {langPicker(langNames[i])};
                }, 490);

            // Add suitable text
            const titles = ['C++', 'HTML & CSS', 'Javascript', 'PHP'];
            const descriptions = ["C++ is one of the most renowned programming languages in the world, used in making a wide variety of programs/apps, mostly direct executables. I want to be fully competent at it, even though it is not one of the languages I'll need as a webmaster.","They are my personal favorites for obvious reasons: their potential for shaping something creative when associated, nesting style and overall not limiting my imagination. I just love doing stuff in 'em.","Javascript is one of my recent 'discoveries'. Immediately after I dived into it, determination sprung into action. Being very powerful, my persona constantly tries to learn something new about it to empower my web developer adventures with fancy techniques.", "Ah, php. Despite not being fun to code in and superior alternatives being around, it still shines in some data management utility potential. Of secondary priority."]
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

    const ids = ['html', 'php', 'cpp', 'js'];
    setTimeout(() => {
        for(let i = 0; i < 4; i++)
            setTimeout(() => {document.getElementById('holder_' + ids[i]).classList.add('holder-transformations')}, (i * 25));
    }, 500);
    setTimeout(() => {
        for(let i = 0; i < 4; i++){
            setTimeout(() => {document.getElementById('baricon_' + ids[i]).classList.add('icon-image-transformations')}, (i * 100));
            setTimeout(() => {unravelBars(ids[i])}, (i * 100 + 225));
        }
    }, 725)
}
function unravelBars(langId){
    for(let i = 0; i < 10; i++)
        setTimeout(() => {
            document.getElementById("bar_" + langId + (i + 1)).classList.add('anim-fadeintr2');
        }
        , 90 * i);
}

function anFrwdDoubleExec(identifier, identifier2, identifier3, identifier4 ,anim_id, wait_time, anim_id2, wait_time2 = 0){
    animationForwarder(identifier, identifier2, anim_id, wait_time);
    animationForwarder(identifier3, identifier4, anim_id2, wait_time2);
}
function animationForwarder(identifier, identifier2, anim_id, wait_time = 0){
    if(identifier != 'skip')
        document.getElementById(identifier).classList.add(anim_id);
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
