var check = 0;
var lastButton;

function startAnimation1(){
    document.getElementById('loading_header').classList.add('dp-none');
    const anim_elements = ['animelem1-1', 'animelem1-2'];
    animationForwarder(anim_elements[0], anim_elements[1], 'anim-1', 0)
    for(let i = 0; i < 2; i++){
        document.getElementById(anim_elements[i]).classList.remove('dp-none');
    }
    const animelem13 = document.getElementById('animelem1-3');
    animelem13.classList.add('anim-1');
    animelem13.classList.remove('dp-none');
    animationForwarder('skip', 'headertext', 'headertexttransformed', 330);
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
        const langDiv = document.getElementById('sectionlang1');
        const langParagraph = document.getElementById('sectionlang2');
        const langHeading = document.getElementById('sectionlang1p2');
        const langNames = ['cpp','html','js','css'];

        if(lastButton != null){
            const lastImage = 'icon-' + lastButton;
            document.getElementById(lastImage).classList.remove('lang-icon-onclick');
        }
        const latestImage = 'icon-' + buttonid;
        document.getElementById(latestImage).classList.add('lang-icon-onclick');

        lastButton = buttonid;
    
        const n_a = "not-allowed";

        for(let i = 0; i < 4; i++){
            document.getElementById(langNames[i]).onclick = "null";
            document.getElementById(langNames[i]).style.cursor = n_a;
        }

        setTimeout(() => {for(let i = 0; i < 4; i++){
                document.getElementById(langNames[i]).style.cursor = null;
            }
            document.getElementById(buttonid).style.cursor = n_a;
        }, 1000);

        if(langDiv.classList.contains('anim-fadeintb') == true){
            langDiv.classList.remove('anim-fadeintb');
            langParagraph.classList.remove('anim-fadeintb');
        }
        if(langDiv.classList.contains('op-0') == true){
            langDiv.classList.remove('op-0');
            langParagraph.classList.remove('op-0');
        }
        langDiv.classList.add('animSwitchByFadeInLang');
        setTimeout(() => {langParagraph.classList.add('animSwitchByFadeInLang')}, 100);
        setTimeout(() => {
    
            setTimeout(() => {
                langDiv.classList.remove('animSwitchByFadeInLang');
                langParagraph.classList.remove('animSwitchByFadeInLang');
                for(let i = 0; i < 4; i++){
                    document.getElementById(langNames[i]).onclick = function() {langPicker(langNames[i])};
                }}, 490);

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
function playEngiVoice(){
    const path = document.getElementById('engivoice');
    path.volume = 0.3;
    path.play();
}

