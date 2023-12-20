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

    document.getElementById('micro-cmd-feed').addEventListener('scroll', () => {document.getElementById('micro-cmd-feed').scrollTop = document.getElementById('micro-cmd-feed').scrollHeight;}); // prevent CMD scrolling, apparently onscroll doesn't work
    parseCMDCommands('CLS', true);
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

function micro(){
    const micro = document.getElementById("micro");
    let cycle2;
    if(micro.classList.contains("anim-micro"))
        cycle2 = true;
    micro.classList.toggle("dp-none");
    micro.classList.toggle("anim-micro");
    if(cycle2){
        micro.classList.remove("bgc-black");
        Array.from(micro.children).forEach((val) => {val.classList.add("op-0")}); // HTMLCollection
    }
    else{
        // [BUG] Clicking rapidly causes text to flicker out of bounds (setTimeout).
        setTimeout(() => {document.getElementById("micro-bar").classList.remove("op-0")}, 200);
        setTimeout(() => {micro.classList.add("bgc-black")}, 210);
        setTimeout(() => {document.getElementById("micro-cmd").classList.remove("op-0"); const feed = document.getElementById("micro-cmd-feed"); feed.scrollTop = feed.scrollHeight;}, 220);
    }
}

function parseCMDCommands(input, ext){
    class micron{
        constructor(regex, url, fileNameRegex, fileName, name, author, addDate, desc){
            this.regex = regex;
            this.url = url;
            this.fileNameRegex = fileNameRegex;
            this.fileName = fileName;
            this.name = name;
            this.author = author;
            this.addDate = addDate;
            this.desc = desc;
        }
        describe(){
            return "------ " + this.name + "<br><br>&nbsp;File: " + this.fileName + "<br>&nbsp;URL: " + this.url + "<br>&nbsp;Author: " + this.author + "<br>&nbsp;Submitted at: " + this.addDate + "<br>&nbspDescription:<br><br>&nbsp" + this.desc + "<br><br>-----------";
        }
    }
    const feed = document.getElementById("micro-cmd-feed");
    if(input.replace(/\s/g, '').length){
        const openReferences = [new micron(/^MineSweeper$/i, "https://shatterwares.com/micro/minesweeper", /^MineSweeper.jar$/i, "MineSweeper.jar", "MineSweeper", "Jacob Namyslak", "12/10/23", "MineSweeper is Jacob Namyslak's implementation of the famous mathematical puzzle game about uncovering non-rigged tiles while only equipped with their limited immediate victinity data. Can you defuse the whole field on first try?")], open = /^OPEN\s*/i, describe = /^DESCRIBE\s*/i, CMDFeedback = sessionStorage.getItem("CMDFeedback");;
        feed.innerHTML += document.getElementById("micro-cmd-pointer").innerHTML + " " + input + "<br>";
        input = input.replace(/^\s*/g, '').replace(/\s*$/g, '');
        if(/^HELP$/i.test(input))
            feed.innerHTML += "Available commands:<br>&nbsp;- [HELP] - Show this list.<br>&nbsp;- [PING] - Response test. Of no practical use.<br>&nbsp;- [CLS] - Flush console feedback.<br>&nbsp;- [DIR] - List available resources.<br>&nbsp;- [OPEN] - Executes the micron (file).<br>&nbsp;&nbsp;&nbsp;SYNTAX: OPEN [reference]<br>&nbsp;- [DESCRIBE] - Shows the micron's data.<br>&nbsp;&nbsp;&nbsp;Syntax: DESCRIBE [name/filename]<br>&nbsp;- [EXIT] - Closes the prompt.";
        else if(/^PING$/i.test(input))
            feed.innerHTML += "Ping received. Core operational.";
        else if(/^CLS$/i.test(input))
            feed.innerHTML = "ShWMicro CMD v12/10/23<br> [HELP] [PING] [CLS] [DIR] [OPEN] [DESCRIBE] [EXIT]<br> This 'program' does not interfere with your computer's data.";
        else if(/^DIR$/i.test(input)){
            feed.innerHTML += "M:&bsol;<br>";
            openReferences.forEach((val) => {
                feed.innerHTML += "| - " + val.fileName;
                feed.innerHTML += "<br>|&nbsp;&nbsp;&nbsp;NAME: " + val.name;
            });
        }
        else if(/^OPEN\s*$/i.test(input))
            feed.innerHTML += "Correct usage:<br>OPEN [reference]";
        else if(open.test(input)){
            input = input.replace(open, '');
            for(let micron of openReferences)
                if(micron.regex.test(input) || micron.fileNameRegex.test(input)){
                    feed.innerHTML +=  "Opening [" + micron.url + "]...";
                    sessionStorage.setItem("CMDFeedback", feed.innerHTML);
                    window.location.href = micron.url;
                    break;
                }
        }
        else if(/^DESCRIBE\s*$/i.test(input))
            feed.innerHTML += "Correct usage:<br>DESCRIBE [name/filename]";
        else if(describe.test(input)){
            input = input.replace(describe, '');
            let found;
            for(let micron of openReferences){
                console.log(input + " " + micron.name + " " + micron.fileName);
                if(micron.regex.test(input) || micron.fileNameRegex.test(input)){
                    found = true;
                    feed.innerHTML += micron.describe();
                    break;
                }
            }
            if(!found)
                feed.innerHTML += "Micron not found. Use [DIR] to fetch file names and name references.";
        }
        else if(/^EXIT$/i.test(input)){
            feed.innerHTML += "Closing...";
            micro();
        }
        else
            feed.innerHTML += "Unknown command/incorrect syntax. Check syntax and/or use 'HELP'.";
        feed.innerHTML += "<br><br>";
        if(ext && CMDFeedback) document.getElementById("micro-cmd-feed").innerHTML = CMDFeedback;
        sessionStorage.setItem("CMDFeedback", feed.innerHTML);
    }
    document.getElementById("micro-cmd-core").reset();
    feed.scrollTop = feed.scrollHeight;
}
function removePastMenu(event){
    const cId = "contextMenu", oldMenu = document.getElementById(cId);
    if(!event || (oldMenu && event.target.id != cId && event.target.parentElement.id != cId && event.target.parentElement.parentElement.id != cId)) oldMenu.remove();
}
function spawnContextMenu(event){
    event.preventDefault(); //no default menu
    const element = event.target, isProgram = /^shwph-program-/;
    removePastMenu(event);
    if(isProgram.test(element.id) || isProgram.test(element.parentElement.id)){
        const contextMenu = document.createElement("div"), container = document.getElementById("shwph-container"), pos = container.getBoundingClientRect();
        contextMenu.setAttribute("class", "shwph-context-menu bgc-grey pos-abs bgc-white c-black");
        contextMenu.setAttribute("style", "top: " + (event.clientY - pos.top) + "px; left: " + (event.clientX - pos.left) + "px;");
        contextMenu.id = "contextMenu";
        class buttons{
            constructor(text, click_ = null, image = false){
                this.text = text;
                this.click_ = click_;
                this.image = image;
            }
            construct(){
                if(this.text != "semiborder"){
                    const button = document.createElement("div");
                    button.setAttribute("class", "shwph-context-menu-button cur-sel t-r-gP fx fx-ai-c");
                    let buttonImage;
                    if(this.image){
                        buttonImage = document.createElement("img");
                        buttonImage.setAttribute("src", "../RESOURCES/SHWHP_RES/" + this.image);
                    }
                    else buttonImage = document.createElement("div");
                    buttonImage.classList.add("shwph-button-image");
                    button.appendChild(buttonImage);
                    button.innerHTML += this.text;
                    if(this.click_){ // used anyways for limiting memory usage
                        button.addEventListener("click", this.click_);
                        button.addEventListener("click", () => {removePastMenu(false)});
                    }
                    contextMenu.appendChild(button);
                }
                else{
                    const semiborder = document.createElement("div");
                    semiborder.setAttribute("class", "shwph-semiborder shwph-context-menu-button");
                    contextMenu.appendChild(semiborder);
                }
            }
        }
        const buttonsArray = {"shwph-program-micro" : [new buttons("<b>Open</b>", () => {micro()}), new buttons("Help"), new buttons("See tags", null, "book.png"), new buttons("semiborder"), new buttons("Describe")]};
        let contextList;
        if(event.target.id) contextList = buttonsArray[event.target.id];
        else contextList = buttonsArray[event.target.parentElement.id];
        try{
            for(let button of contextList)
                button.construct();
        }
        catch{
            console.warn("Developer notice: this function's limited as of 12/17/2023 and cannot handle this input yet. If you don't understand this message, ignore it. If you believe this is an error, contact the webmaster at https://github.com/jakubekgranie/shatterwares.com/issues.")
        }
        container.appendChild(contextMenu);
    }
}