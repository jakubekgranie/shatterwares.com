function mapInterchange(textid)
{
    var h1 = document.getElementById('h1');
    var context = document.getElementById('context');
    var image = document.getElementById('circularimg');

    context.classList.toggle('changejs');

    if(textid == "cracow")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek.png');
        h1.textContent = "Koronacja";
        context.textContent = "W tym czasie Władysław Łokietek rozpoczął też starania o zgodę papieską na koronację królewską. Politykę księcia krakowskiego w tej mierze aktywnie wspierał również kościół polski z arcybiskupem Borzysławem (następcą zmarłego w 1314 Jakuba Świnki) i biskupem włocławskim Gerwardem na czele. O sprawie koronacji zadecydowano ostatecznie podczas dwóch wieców możnych i rycerstwa zorganizowanych w dniach 20–23 czerwca 1318 w Sulejowie, gdzie przygotowano specjalną suplikę z prośbą do papieża oraz 29 czerwca w Pyzdrach. Do Awinionu z dokumentami wysłano biskupa włocławskiego Gerwarda. O pomyślnym załatwieniu zadecydowała z pewnością sprawa zamiany sposobu naliczania świętopietrza na korzystniejszy dla papiestwa. Zgoda została wydana przez papieża Jana XXII 20 sierpnia 1319 (choć nie wprost z uwagi na sprzeciw Luksemburgów). Papież zalecił, by czynić tak, aby swoje prawa zachować i cudzych nie naruszyć, i uznał, że luksemburskie roszczenia (pomimo ich wątłych podstaw prawnych) odnoszą się do wielkopolskiego terytorium, które obejmowało królestwo Przemysła II. Pośrednio uznał prawa Łokietka, uznając, że koronacja w Krakowie nie naruszy praw Jana Luksemburskiego. 20 stycznia 1320 w katedrze wawelskiej arcybiskup gnieźnieński Janisław koronował Władysława Łokietka na króla Polski. Miejsce koronacji, Kraków zamiast Gniezna, wybrane zostało najprawdopodobniej w wyniku nacisków ze strony kurii papieskiej, pragnącej uniknięcia konfliktu z Janem Luksemburskim, który również rościł sobie prawa do korony. Dokonanie obrzędu koronacji w Krakowie spowodowało jednak kwestionowanie przez Luksemburga jej legalności. W związku z dzierżeniem tytułu króla Polski przez Jana Luksemburskiego, na arenie międzynarodowej Łokietek był uważany za króla Krakowa, nie zaś całego kraju. Rok 1320 był ważny dla polityki Władysława Łokietka również z innych powodów. 14 kwietnia 1320 w Inowrocławiu, a następnie w Brześciu Kujawskim rozpoczął obrady sąd papieski, mający rozsądzić sprawę zaboru Pomorza Gdańskiego przez Krzyżaków. Proces wygrał Łokietek. Po przesłuchaniu dwudziestu pięciu świadków strony polskiej sędziowie w dniu 10 lutego 1321 roku wydali wyrok korzystny dla króla. Zgodnie z tym rozstrzygnięciem Zakon miał zwrócić Polsce Pomorze Gdańskie i zapłacić 30 000 grzywien srebra odszkodowania z tytułu pobierania zeń dochodów, a ponadto został obciążony kosztami procesu. Krzyżacy nie zamierzali się temu wyrokowi podporządkować i złożyli apelację. Papież powierzył rewizję biskupowi Sambii, ale z kolei na skutek protestów polskich w Awinionie sprawa apelacji nie została rozpatrzona. Wyrok nie został jednak wykonany. Stwarzało to Stolicy Apostolskiej możliwość instrumentalnego wykorzystywania w następnych latach konfliktu do swoich celów.";
    }
    if(textid == "malopolska")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/łokietomini.png');
        h1.textContent = "Początki";
        context.textContent = "Władysław Łokietek po śmierci Wacława II, króla Czech i Polski, w 1305 roku, objął rządy w Małopolsce, ale jego władza była początkowo ograniczona przez bunt możnych i interwencję czeską.";
    }
    if(textid == "pgdik")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek2.png');
        h1.textContent = "Pomorze Gdańskie i Kujawy";
        context.textContent = "Władysław Łokietek przeprowadził reformy gospodarcze i administracyjne, poprawił sytuację finansową kraju, a także prowadził skuteczną politykę zagraniczną. Pod jego rządami Polska odzyskała też Pomorze Gdańskie i Kujawy.";
    }
    if(textid == "pg2")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek3.png');
        h1.textContent = "Pomorze Gdańskie i Kujawy";
        context.textContent = "Problemy wewnętrzne panujące w Polsce wykorzystała Brandenburgia, atakując Pomorze Gdańskie (w tym Gdańsk) w 1308r. W tym momencie na pomoc zostali wezwani Krzyżacy, którzy odbili miasto, jednak nie oddali go Polsce, lecz kontynuowali podboje, których skutkiem było opanowanie całości Pomorza w 1309r.";
    }
    if(textid == "mlb")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek4.png');
        h1.textContent = "Malbork";
        context.textContent = "(...) W tym momencie na pomoc zostali wezwani Krzyżacy, którzy odbili miasto, jednak nie oddali go Polsce, lecz kontynuowali podboje, których skutkiem było opanowanie całości Pomorza w 1309r. W tym samym roku Krzyżacy przenieśli swoją główną siedzibę do nowo podbitego Malborka.";
    }
    if(textid == "nearmlp")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek5.png');
        h1.textContent = "Pierwsze lata";
        context.textContent = "Podczas pierwszych lat panowania Władysława Łokietka miało miejsce wiele trudności wewnętrznych. W Małopolsce dużą część opozycji stanowił biskup krakowski Jan Muskata. Problemem był też nowy król czeski – Jan Luksemburczyk, który był popierany przez mieszkańców Małopolski. W 1311 r wybuchł bunt mieszczan krakowskich pod wodzą wójta Alberta, na szczęście bunt został stłumiony przez Władysława Łokietka już rok później.";
    }
    if(textid == "brandem")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek6.png');
        h1.textContent = "Początkowe problemy";
        context.textContent = "Podczas pierwszych lat panowania Władysława Łokietka miało miejsce wiele trudności wewnętrznych. W Małopolsce dużą część opozycji stanowił biskup krakowski Jan Muskata. Problemem był też nowy król czeski – Jan Luksemburczyk, który był popierany przez mieszkańców Małopolski. W 1311 r wybuchł bunt mieszczan krakowskich pod wodzą wójta Alberta, na szczęście bunt został stłumiony przez Władysława Łokietka już rok później.";
    }
    if(textid == "nearcr")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek7.png');
        h1.textContent = "Leszek Czarny, 1279 r.";
        context.textContent = "Po objęciu przez Leszka Czarnego w 1279 roku władzy w Krakowie i Sandomierzu Łokietek wraz z młodszymi braćmi uznał zwierzchnictwo tego pierwszego, co zaowocowało m.in. przyjęciem jednego herbu przez wszystkich synów Kazimierza kujawskiego: pół-lwa, pół-orła, a w późniejszych czasach występował zawsze jako sojusznik swojego starszego brata. W tym okresie, tj. w 1280 Władysław wspomógł zbrojnie sojusznika Leszka - księcia mazowieckiego Bolesława II w walce z bratem tego ostatniego, Konradem II, a wyprawa zdobyła gród Jazdów. Możliwe też, że w lutym 1284 na spotkaniu Leszka Czarnego i Przemysła II, księcia wielkopolskiego w Sieradzu omawiane było małżeństwo Władysława.";
    }
    if(textid == "plock")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek8.png');
        h1.textContent = "Płock oraz Dobrzyń";
        context.textContent = "W roku następnym, w sierpniu, Władysław był obecny, wraz z Przemysłem II i Siemomysłem kujawskim przy finalizacji reformy klasztoru sulejowskiego, tj. przy obejmowaniu przez mnichów wąchockich zabudowań klasztornych. Być może przy tej okazji doszło do ostatecznego rozwiązania kwestii Zagopla, które miało przypaść Łokietkowi. Po tym wydarzeniu Łokietek znowu pojawił się na Mazowszu, gdzie wspomagał, zapewne z ramienia Leszka Czarnego, Bolesława II w walce z Konradem II odbijając niedługo po 15 sierpnia 1286 z rąk tego ostatniego stołeczny Płock. W odwecie za te działania Konrad II ponownie przepuścił wojska litewskie, które w 1287 zdobyły Dobrzyń.";
    }
    if(textid == "nearcr2")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek9.png');
        h1.textContent = "Dalsze dzieje krakowskie";
        context.textContent = "30 września 1288 zmarł książę krakowski i sieradzki Leszek Czarny, przekazując władzę w księstwie sieradzkim najstarszemu bratu przyrodniemu, Władysławowi Łokietkowi. Od tego momentu był on księciem w Brześciu i w Sieradzu. Śmierć Leszka spowodowała początek walk o panowanie w stołecznym Krakowie, w początkowej fazie których głównymi kandydatami do rządów w księstwie krakowskim byli książę mazowiecki Bolesław II oraz książę wrocławski Henryk IV Probus. Łokietek postanowił wesprzeć w tej walce tego pierwszego. Henryk IV Probus, korzystając z poparcia niemieckiego patrycjatu i części możnych, pod koniec 1288 opanował stołeczne miasto. Bolesław II z pomocą posiłków kujawskich Władysława, jego brata Kazimierza II Łęczyckiego i być może wojsk Przemysła II jednak nie rezygnował i 26 lutego 1289 zaatakował pod Siewierzem wracające na Śląsk oddziały koalicjantów Probusa: Henryka III Głogowczyka, Bolka opolskiego i Przemka ścinawskiego. Rozegrana na polach niedaleko Siewierza krwawa bitwa (zginął w niej Przemko ścinawski) zakończyła się świetnym zwycięstwem oddziałów mazowiecko-kujawskich. Klasztor franciszkanów w Krakowie, gdzie ukrył się Łokietek. Po bitwie pod Siewierzem z nieznanych powodów Bolesław II zrezygnował z ubiegania się o Małopolskę co spowodowało, że to Władysław Łokietek zaczął się tytułować księciem Krakowa i Sandomierza. Zajęcie stolicy Małopolski (bez Wawelu) pomimo początkowych zwycięstw w bitwach pod Skałą i Święcicami, nie było trwałe i rychło Łokietek musiał uchodzić z miasta, które zostało zdobyte przez Probusa, i z którego wydostał się tylko dzięki pomocy franciszkanów. W drugiej połowie 1289 zdołał książę kujawski umocnić swoje panowanie w księstwie sandomierskim. Śmierć 23 czerwca 1290 księcia wrocławskiego Henryka IV Probusa i objęcie tronu krakowskiego przez Przemysła II spowodowało ugruntowanie podziału na dwa księstwa: krakowskie i sandomierskie. Nie wiadomo jak dokładnie układały się stosunki między księciem wielkopolskim a Łokietkiem, chociaż bardzo prawdopodobne jest, że były przyjazne, a tym samym spowodowało to, że podział odbył się bezkrwawo albo na podstawie oddolnej decyzji możnych albo w wyniku ugody pomiędzy tymi książętami. Niewykluczone jednak, że stosunki te mogły być, co również jest możliwe, chłodne, a może wręcz nawet wrogie. Przemysł II wprawdzie bez problemów opanował gród wawelski, lecz od początku zmagał się ze znaczną opozycją wewnętrzną (której część popierała Łokietka, a część czeskiego monarchę Wacława II) i już w połowie września 1290 opuścił Kraków udając się do Wielkopolski. Wówczas to, w celu dalszego zwiększenia swego ówczesnego znaczenia Władysław wydał swoją bratanicę Fenennę za mąż za króla węgierskiego z dynastii Arpadów, Andrzeja III, co stało się jesienią 1290. Przemysł II zrzekł się ostatecznie władzy nad Krakowem w połowie stycznia roku następnego, tj. w 1291, a księstwo krakowskie objął w posiadanie Wacław II. Władysław w przeciwieństwie do swojego wielkopolskiego kuzyna postanowił walczyć o Małopolskę, korzystając z pomocy węgierskiej udzielonej mu przez Andrzeja III. W 1292 oddziały czeskie dzięki liczebnej przewadze i posiłkom książąt śląskich i margrabiego brandenburskiego najpierw wyparły Łokietka z Sandomierza, by we wrześniu tegoż samego roku oblec go w umocnionym Sieradzu. Wkrótce oblężenie zakończyło się sukcesem, a Władysław wraz z bratem Kazimierzem II znaleźli się w niewoli. 9 października 1292 została podpisana ugoda, na mocy której Władysław Łokietek wraz ze swoim bratem zostali zmuszeni do zrzeczenia się pretensji do Małopolski i złożenia hołdu lennego czeskiemu władcy, w zamian za co mogli pozostać przy swoich kujawskich dzierżawach.";
    }
    if(textid == "nearcr3")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek16.png');
        h1.textContent = "Śmierć";
        context.textContent = "Władysław Łokietek zmarł 2 marca 1333 roku na Wawelu. Został pochowany w tamtejszej Katedrze (być może 12 marca tegoż roku).";
    }
    if(textid == "nearmlp2")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek10.png');
        h1.textContent = "Łokietkowa ucieczka";
        context.textContent = "Po bitwie pod Siewierzem z nieznanych powodów Bolesław II zrezygnował z ubiegania się o Małopolskę co spowodowało, że to Władysław Łokietek zaczął się tytułować księciem Krakowa i Sandomierza. Zajęcie stolicy Małopolski (bez Wawelu) pomimo początkowych zwycięstw w bitwach pod Skałą i Święcicami, nie było trwałe i rychło Łokietek musiał uchodzić z miasta, które zostało zdobyte przez Probusa, i z którego wydostał się tylko dzięki pomocy franciszkanów. W drugiej połowie 1289 zdołał książę kujawski umocnić swoje panowanie w księstwie sandomierskim.";
    }
    if(textid == "nearcr4")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek11.png');
        h1.textContent = "Łokietkowa ucieczka";
        context.textContent = "Zagrożenie dla władzy Władysława przyszło jednak z innej strony. Otóż ostatecznie z księciem kujawskim postanowił rozprawić się król czeski (od 1297) Wacław II. W 1299 w Klęce doszło do zawarcia umowy, na mocy której Władysław Łokietek zobowiązał się złożyć ponownie hołd lenny, w zamian za co miał otrzymać 400 grzywien oraz ośmioletnie dochody z kopalń w Olkuszu. Warunków umowy klęckiej Łokietek nie dotrzymał, wobec czego Wacław II zorganizował w lipcu 1299 wyprawę zbrojną, w wyniku której książę musiał ratować się ucieczką z kraju. Nie wiadomo, gdzie Władysław Łokietek dokładnie przebywał w latach 1300–1304. Według tradycji miał udać się do Rzymu, gdzie brał udział w obchodach wielkiego jubileuszu roku 1300 zorganizowanego przez papieża Bonifacego VIII. Prawdopodobnym miejscem pobytu jest również Ruś Halicka i Węgry (w tym przypadku najpewniej Słowacja, gdzie swoje rozległe dziedziny posiadali możnowładcy węgierscy występujący przeciwko synowi Wacława II – Wacławowi III), z którymi to możnowładcami Władysław zachowywał sojusznicze relacje. W tym czasie małżonka Łokietka Jadwiga wraz z dziećmi przebywała w kujawskim Radziejowie w przebraniu zwykłej mieszczki.";
    }
    if(textid == "kalisz")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek12.png');
        h1.textContent = "Kalijskie dyskusje";
        context.textContent = "Niedawne niepowodzenia i zagrożenie ze strony Wacława II skłoniły w styczniu 1293 Przemysła II i Władysława, dotychczasowych konkurentów do tronu krakowskiego, do spotkania w Kaliszu w celu wypracowania strategii likwidacji rządów czeskich. Do pogodzenia przeciwników doszło na skutek zabiegów arcybiskupa gnieźnieńskiego Jakuba Świnki (przy tej okazji arcybiskup otrzymał obietnicę dużych dochodów z żup solnych po zdobyciu Małopolski). Tajna umowa zawarta 6 stycznia 1293 zobowiązała książąt (w układzie uczestniczył również Kazimierz II łęczycki) do wzajemnego wspierania się w wysiłkach zmierzających do odzyskania Krakowa. Zawarto też wtedy zapewne układ o przeżycie, który miał gwarantować wzajemne dziedziczenie w razie odzyskania Krakowa. Przy okazji tego zjazdu doszło prawdopodobnie do zawarcia małżeństwa Władysława Łokietka z córką Bolesława Pobożnego, stryja Przemysła II, Jadwigą. Plany zatwierdzone w Kaliszu, trzeba było zrewidować już w 1294, kiedy w walce z Litwinami zginął książę łęczycki Kazimierz II, a jego księstwo zostało połączone z dzierżawami Łokietka. 26 czerwca 1295 sprzymierzeniec księcia kujawskiego Przemysł II koronował się za zgodą papieża na króla Polski. Nie znamy reakcji na ten fakt Władysława Łokietka. Z koronacji nowo kreowany król cieszył się jednak tylko siedem miesięcy, gdyż już 8 lutego 1296 Przemysł II został zamordowany z inspiracji margrabiów brandenburskich.";
    }
    if(textid == "wlkp")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek13.png');
        h1.textContent = "Książęce igraszki";
        context.textContent = "W myśl paktu czterech książąt ziemie po Przemysławie II miały przejść w posiadanie jego brata ciotecznego Henryka, księcia głogowskiego. Przeciwni jednak takiemu rozwiązaniu byli panowie wielkopolscy i pomorscy. Po pogrzebie księcia Przemysława odbyli naradę, na której do objęcia rządów w obu dzielnicach wezwali Władysława Łokietka, uznając, że to oni mają największe prawo decydowania o wyborze nowego władcy, a nie układy poprzedniego monarchy. Podstawą prawną na jakiej możnowładcy oparli decyzję o sukcesji Władysława Łokietka po Przemysławie II było małżeństwo z Jadwigą, bliską krewną zamordowanego króla. Władysław Łokietek jako małżonek Jadwigi, córki Bolesława, księcia kaliskiego mógł wysuwać swoje roszczenia tylko do księstwa kaliskiego z tego powodu, że Bolesław obiecał mu dać ziemie w Wielkopolsce lub 120 grzywien tytułem posagu. Do ziemi pomorskiej nie miał żadnych dziedzicznych praw. Do Wielkopolski wtargnęły wojska Henryka III Głogowczyka. Prawdopodobnie do wojny nie doszło, gdyż Władysław Łokietek, chociaż otrzymał władzę z rąk panów wielkopolskich, cały czas uznawał prawa księcia głogowskiego do tych ziem. Do układu doszło dnia 10 marca 1296 w Krzywiniu, gdzie Władysław zgodził się oddać Głogowczykowi część Wielkopolski na zachód i południe od granicy biegnącej rzeką Obrą i Wartą aż do ujścia do niej Noteci oraz ustanowić swoim następcą w całej Wielkopolsce w wypadku swojej bezpotomnej śmierci (w chwili podpisywania układu nie posiadał Łokietek synów), najstarszego syna Henryka III – Henryka IV Wiernego, którego książę kujawski przy tej okazji usynowił. Henryk IV Wierny bez względu na narodziny męskich potomków Władysława miał w chwili osiągnięcia pełnoletniości otrzymać z jego rąk księstwo poznańskie. Dzielący Wielkopolskę układ w Krzywiniu nie załatwił wszystkich spornych spraw, zwłaszcza wobec faktu, że wkrótce na świat przyszli męscy dziedzice Łokietka. Rządy Łokietka w jego części Wielkopolski nie były udane, ponieważ rozpanoszyli się w niej bandyci i rosła w siłę opozycja wewnętrzna, na której czele stanął biskup poznański Andrzej Zaremba (istnieją podejrzenia, przez część historyków negowane, że Andrzej rzucił nawet na Łokietka klątwę kościelną). Także arcybiskup Jakub Świnka widząc, że książę kujawski ma problemy ze sprawnym rządzeniem, coraz bardziej oddalał się od swojego wcześniejszego protegowanego. W 1298 pomiędzy opozycją wielkopolską a Henrykiem III Głogowczykiem doszło w Kościanie do zawarcia porozumienia, na mocy którego, w zamian za urzędy w przyszłym odnowionym królestwie opozycja zdecydowała się poprzeć jego kandydaturę na tron Wielkopolski.";
    }
    if(textid == "czech")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek14.png');
        h1.textContent = "Czeskie natarcie";
        context.textContent = "Zagrożenie dla władzy Władysława przyszło jednak z innej strony. Otóż ostatecznie z księciem kujawskim postanowił rozprawić się król czeski (od 1297) Wacław II. W 1299 w Klęce doszło do zawarcia umowy, na mocy której Władysław Łokietek zobowiązał się złożyć ponownie hołd lenny, w zamian za co miał otrzymać 400 grzywien oraz ośmioletnie dochody z kopalń w Olkuszu. Warunków umowy klęckiej Łokietek nie dotrzymał, wobec czego Wacław II zorganizował w lipcu 1299 wyprawę zbrojną, w wyniku której książę musiał ratować się ucieczką z kraju.";
    }
    if(textid == "sandomierz")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek.png');
        h1.textContent = "Jak feniks z popiołów";
        context.textContent = "Do kraju Łokietek powrócił w 1304, osiadł w Sandomierzu, dzięki pomocy węgierskiego magnata Amadeja Aby. Jeszcze w tym samym roku udało mu się opanować grody w Wiślicy i Lelowie. Sukces niezłomnego księcia z pewnością okazałby się krótkotrwały, gdyby nie splot sprzyjających okoliczności. 21 czerwca 1305 niespodziewanie zmarł król czeski i polski Wacław II, przekazując swoje dziedzictwo jedynemu synowi Wacławowi III. Zaistniałą sytuację wykorzystał doskonale Władysław Łokietek, opanowując do końca roku księstwo sandomierskie, sieradzko-łęczyckie i Kujawy Brzeskie. Upadające rządy czeskie próbował ratować Wacław III, organizując wyprawę przeciwko Władysławowi. Także tym razem Łokietkowi sprzyjało szczęście – 4 sierpnia 1306 Wacław III zginął zamordowany skrytobójczo w Ołomuńcu na Morawach, a Czechy pozbawione monarchy znalazły się w wirze wojny domowej. Śmierć ostatniego Przemyślidy na tronie czeskim sprawiła, że w Krakowie odbył się wiec rycerstwa, który zaowocował oficjalnym zaproszeniem Łokietka do objęcia władzy. Uroczysty wjazd do stolicy Małopolski nastąpił 1 września 1306 i został połączony z wydaniem przywileju dla miasta oraz dla dotychczasowego czołowego zwolennika rządów czeskich biskupa krakowskiego Jana Muskaty. Kolejnym celem Łokietka było dziedzictwo po Przemyśle II – Wielkopolska i Pomorze Gdańskie. Akcja zjednoczeniowa napotkała jednak spore trudności. W Wielkopolsce udało się zająć wyłącznie graniczące z Kujawami miejscowości z Koninem, Kołem i Nakłem na czele, gdyż resztę dzielnicy zajął dawny wróg Łokietka Henryk III Głogowczyk (z wyjątkiem ziemi wieluńskiej zajętej przez księcia opolskiego Bolka I). Pomorze, choć w wyniku wyprawy pod koniec 1306 zostało podporządkowane władzy Łokietka, było odległym terytorium z konieczności rządzonym przez namiestników. Do roli tej wyznaczono w rejonie Gdańska możny ród Święców, zaś w Tczewie i Świeciu bratanków Łokietka – Przemysła i Kazimierza III.";
    }
    if(textid == "nearmlp3")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek2.png');
        h1.textContent = "Koniec Muskaty";
        context.textContent = "Powodem, dla którego Władysław Łokietek nie mógł zaangażować się bezpośrednio w sprawy pomorskie, była nieustabilizowana sytuacja w Małopolsce. Źródłem niepokojów był dawny stronnik Wacławów czeskich, biskup krakowski Jan Muskata, który wnet po odzyskaniu tronu krakowskiego przez Łokietka zaczął wichrzyć przeciwko niemu, próbując nawiązać kontakty z jego wrogami: książętami opolskim Bolkiem I i głogowskim Henrykiem III. Na pomoc księciu krakowskiemu przyszedł arcybiskup gnieźnieński Jakub Świnka, który 14 czerwca 1308 wyklął Jana Muskatę i skazał na pozbawienie biskupstwa za nadużycia. Łokietek pomimo że został wyklęty przez biskupa Muskatę, rozkazał go aresztować i uwięzić (w więzieniu przebywał pół roku), a następnie zmusił do opuszczenia księstwa. Jan Muskata powrócił do Krakowa dopiero w 1317, po zdjęciu klątwy z siebie i z Władysława Łokietka. W 1311 nastąpił kolejny kryzys. Tym razem niebezpieczeństwo utraty władzy zagroziło ze strony Krakowa, gdzie miejscowy niemiecki patrycjat wypowiedział księciu posłuszeństwo i poparł Jana Luksemburskiego. Powodem były nadmierne – ich zdaniem – obciążenia podatkowe spowodowane polityką jednoczenia ziem polskich oraz kryzys spowodowany problemami ekonomicznymi związanymi z utratą Pomorza. Na czele buntu stanął wójt krakowski Albert, który do miasta wezwał księcia opolskiego Bolesława. Buntownikom z powodzeniem udało się opanować miasto i uzyskać poparcie kilku innych miast małopolskich, Wawel jednak został obroniony przez wojska wierne Łokietkowi, co postawiło szanse rebelii pod znakiem zapytania. Niewiele zmieniło sytuację przybycie w kwietniu 1312 księcia opolskiego. Historycy spierają się, czy Bolko I zjawił się we własnym imieniu, czy jako namiestnik nowego króla czeskiego, używającego również tytułu króla Polski – Jana Luksemburczyka, który jednak nie mógł poprzeć buntu militarnie na skutek buntu na Morawach. Próby zdobycia Wawelu nie powiodły się, a wzmocniony posiłkami węgierskimi Władysław Łokietek opanował także zbuntowany Sandomierz, a następnie zmusił Bolka opolskiego w czerwcu 1312 do opuszczenia Krakowa. Wracając do Opola, książę śląski porwał przywódcę buntowników, wójta Alberta, którego z nieznanych przyczyn uwięził (być może w celu odzyskania poprzez okup kosztów, jakie poniósł w związku z wyprawą na Kraków). Uśmierzywszy bunt, Władysław Łokietek przystąpił do ukarania buntowników. Kary były surowe, część rajców została powieszona i skonfiskowano ich majątki, również samo miasto Kraków za karę straciło część przywilejów (m.in. dziedziczne wójtostwo). Wkrótce po buncie wprowadzono do ksiąg miejskich zamiast niemieckiego łacinę.";
    }
    if(textid == "nearcr5")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek3.png');
        h1.textContent = "Kryzysowa destabilizacja";
        context.textContent = "Niewiele zmieniło sytuację przybycie w kwietniu 1312 księcia opolskiego. Historycy spierają się, czy Bolko I zjawił się we własnym imieniu, czy jako namiestnik nowego króla czeskiego, używającego również tytułu króla Polski – Jana Luksemburczyka, który jednak nie mógł poprzeć buntu militarnie na skutek buntu na Morawach. Próby zdobycia Wawelu nie powiodły się, a wzmocniony posiłkami węgierskimi Władysław Łokietek opanował także zbuntowany Sandomierz, a następnie zmusił Bolka opolskiego w czerwcu 1312 do opuszczenia Krakowa. Wracając do Opola, książę śląski porwał przywódcę buntowników, wójta Alberta, którego z nieznanych przyczyn uwięził. Wkrótce po buncie wprowadzono do ksiąg miejskich zamiast niemieckiego łacinę.";
    }
    if(textid == "wegry")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek4.png');
        h1.textContent = "Obcowanie z Węgrami";
        context.textContent = "Państwo Łokietka otaczały trzy wrogie siły: Brandenburgia, państwo zakonu krzyżackiego i luksemburskie Czechy. Dlatego szukając sojuszników podczas wielkiego europejskiego konfliktu Jana XXII z Ludwikiem Wittelsbachem państwo Władysława Łokietka znalazło się w obozie papieskim. Sojusz Władysława z królem Węgier Karolem Robertem umocniony został w 1320 r. jego małżeństwem z córką Władysława Elżbietą Łokietkówną.";
    }
    if(textid == "slask")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek5.png');
        h1.textContent = "Interwencja na Śląsku";
        context.textContent = "W 1322 roku Łokietek włączył się konflikty między książętami śląskimi. Podczas zamętu na Śląsku otrzymał od Henryka VI ofertę przejęcia władzy nad Wrocławiem. Z nieznanych przyczyn propozycję tę odrzucił (mógł się obawiać oporu możnowładztwa śląskiego i małopolskiego, bądź zbrojnej interwencji Czech).";
    }
    if(textid == "rhalicka")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek6.png');
        h1.textContent = "Wyprawa na Ruś";
        context.textContent = "Trzy lata później sojusz węgiersko-polski sprawdził się na Rusi Halickiej. Zostali zamordowani wówczas dwaj ostatni książęta tej ziemi wywodzący się z dynastii Rurykowiczów. Sojusznicy postanowili wspomóc w opanowaniu tamtejszego tronu najbliższego krewnego zabitych książąt Bolesława Jerzego – syna księcia mazowieckiego Trojdena. Wyprawa wówczas podjęta zwiększyła wpływy polskie na Rusi, co za czasów Kazimierza Wielkiego umożliwiło przejęcie tej dzielnicy.";
    }
    if(textid == "litwa")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek7.png');
        h1.textContent = "Stosunki z Litwą";
        context.textContent = "Kolejnym sojusznikiem króla stał się od 1325 książę litewski Giedymin. Przymierze zostało poparte małżeństwem córki władcy Litwy – Aldony (która na chrzcie przyjęła imię Anna) i następcą Władysława, jego synem Kazimierzem.";
    }
    if(textid == "nearbrandemburgia")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek8.png');
        h1.textContent = "Kontynuacja brandemburskich perypetii";
        context.textContent = "W 1323 doszło do otwartego konfliktu między cesarzem a papiestwem. Papież Jan XXII wezwał swych stronników, by nie dopuścili do objęcia spadku po Askańczykach przez dom bawarskich Wittelsbachów. W 1326 Władysław Łokietek jako stronnik papieża z pomocą litewskich posiłków (tzw. pogan) zorganizował wyprawę i 10 lutego wkroczył do Brandenburgii. O biorących udział w wyprawie wojskach litewskich poinformował zakon krzyżacki. Mógł, przynajmniej czasowo, liczyć na jego neutralność, ponieważ obowiązywał rozejm, którego termin upływał dopiero pod koniec 1326. Wyprawa zakończyła się sukcesem, szczególnie dla oddziałów litewskich które splądrowały co bogatsze kościoły i opactwa. Odzyskana została kasztelania międzyrzecka. Wyprawa nie przysporzyła Łokietkowi popularności w Europie, uznano bowiem, że król polski razem z tzw. poganami wszczął wojnę ze światem chrześcijańskim. Papiestwo zachowało milczenie i nie poparło króla polskiego, ale też go nie potępiło. Wojna z Brandenburgią zaniepokoiła także książąt śląskich. W tym samym roku Władysław Łokietek odzyskał na księciu niemodlińskim Bolesławie Pierworodnym ziemię wieluńską.";
    }
    if(textid == "mazowsze")
    {
        image.setAttribute('src', '../../RESOURCES/WLOKIETEK/map/lokietek8.png');
        h1.textContent = "Podbój Mazowsza";
        context.textContent = "W 1323 doszło do otwartego konfliktu między cesarzem a papiestwem. Papież Jan XXII wezwał swych stronników, by nie dopuścili do objęcia spadku po Askańczykach przez dom bawarskich Wittelsbachów. W 1326 Władysław Łokietek jako stronnik papieża z pomocą litewskich posiłków (tzw. pogan) zorganizował wyprawę i 10 lutego wkroczył do Brandenburgii. O biorących udział w wyprawie wojskach litewskich poinformował zakon krzyżacki. Mógł, przynajmniej czasowo, liczyć na jego neutralność, ponieważ obowiązywał rozejm, którego termin upływał dopiero pod koniec 1326. Wyprawa zakończyła się sukcesem. W związku z wybuchem w 1327 roku wojny polsko-krzyżackiej i związanym z tym zagrożeniem obszarów przygranicznych doszło do wymiany posiadłości pomiędzy królem a jego bratankami. Między 28 maja 1327 a 14 października 1328 Przemysł inowrocławski odstąpił Władysławowi księstwo inowrocławskie wraz z Wyszogrodem i Bydgoszczą w zamian za księstwo sieradzkie. Prawdopodobnie w tym samym czasie, na przełomie 1327 i 1328 także synowie Siemowita dobrzyńskiego – Władysław Garbaty i Bolesław dokonali zamiany księstwa dobrzyńskiego na księstwo łęczyckie.";
    }

    context.classList.toggle('changejs');
}