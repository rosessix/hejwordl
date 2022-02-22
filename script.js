$(document).ready(function(){
    document.addEventListener('keydown', handleKeyPress)    
})

const dictonary = [
    "frugt",
    "banan",
    "egern",
    "tiger",
    "zebra",
    "cykel",
    "giraf",
    "heste",
    "neger",
    "tisse",
    "ugler",
    "under",
    "yemen",
    "æbler",
    "numse",
    "maler",
    "dansk",
    "andre",
    "eller",
    "pille",
    "kanin",
    "super",
    "anden",
    "jonas",
    "ingen",
    "ormen",
    "yvere",
    "larve",
    "fiske",
    "farve",
    "vande",
    "katte",
    "dreng",
    "ringe",
    "masse",
    "hunde",
    "julen",
    "vaske",
    "odder",
    "osten",
    "bjørn",
    "banan",
    "finde",
    "grønt",
    "rotte",
    "regne",
    "taske",
    "yngle",
    "isbil",
    "elske",
    "engel",
    "vinde",
    "jorde",
    "hejsa",
    "mango",
    "meget",
    "melon",
    "moder",
    "sutte",
    "suppe",
    "fugle",
    "lange",
    "alder",
    "nisse",
    "kamel",
    "jager",
    "kasse",
    "biler",
    "ordet",
    "igler",
    "idiot",
    "grise",
    "grine",
    "greve",
    "gamer",
    "lampe",
    "lille",
    "torsk",
    "danse",
    "congo",
    "cirka",
    "simon",
    "salat",
    "solen",
    "balle",
    "pasta",
    "penge",
    "pande",
    "palle",
    "pølse",
    "navne",
    "inder",
    "lorte",
    "lande",
    "ferie",
    "falde",
    "freja",
    "jøder",
    "konge",
    "vugge",
    "dumme",
    "orden",
    "kande",

    "afbud",
    "afsky",
    "aften",
    "agent",
    "agern",
    "agurk",
    "ahorn",
    "aksel",
    "aktie",
    "alarm",
    "albue",
    "alder",
    "alene",
    "alibi",
    "alper",
    "alter",
    "altid",
    "altså",
    "andel",
    "anden",
    "andet",
    "andre",
    "angre",
    "angst",
    "ankel",
    "anker",
    "antal",
    "april",
    "areal",
    "arena",
    "arkiv",
    "aroma",
    "asien",
    "astma",
    "atlas",
    "atlet",
    "atten",
    "autor",
    "bacon",
    "bager",
    "bagom",
    "bakke",
    "banan",
    "bande",
    "bandt",
    "bange",
    "banke",
    "barak",
    "barsk",
    "basis",
    "bedre",
    "bedst",
    "begge",
    "behov",
    "beige",
    "beløb",
    "bestå",
    "besøg",
    "beton",
    "betød",
    "bevis",
    "bibel",
    "bibel",
    "bidet",
    "bilag",
    "bille",
    "binde",
    "biord",
    "bjerg",
    "bjørn",
    "blank",
    "blase",
    "blind",
    "blink",
    "blitz",
    "blive",
    "blond",
    "bluse",
    "blære",
    "blæse",
    "bolig",
    "bolle",
    "bombe",
    "bonde",
    "borge",
    "bowle",
    "bragt",
    "brast",
    "bredt",
    "brudt",
    "bruge",
    "brugs",
    "brugt",
    "bryde",
    "bryst",
    "brønd",
    "burde",
    "butik",
    "bygge",
    "bytte",
    "bæger",
    "bælte",
    "bøjet",
    "bølge",
    "bønne",
    "bøsse",
    "båret",
    "cigar",
    "cirka",
    "cykel",
    "cykle",
    "dadle",
    "dansk",
    "daske",
    "datid",
    "datum",
    "debat",
    "dekan",
    "denne",
    "deres",
    "derom",
    "derop",
    "derpå",
    "derud",
    "dosis",
    "doven",
    "drama",
    "dreng",
    "droge",
    "dræbe",
    "dræne",
    "dugge",
    "dusin",
    "dybde",
    "dykke",
    "dyrke",
    "dække",
    "dømme",
    "efter",
    "egern",
    "eksil",
    "eller",
    "elske",
    "email",
    "endda",
    "endnu",
    "endog",
    "engel",
    "enhed",
    "ental",
    "entre",
    "epoke",
    "etage",
    "etter",
    "fabel",
    "fable",
    "fader",
    "fadøl",
    "falde",
    "falsk",
    "fange",
    "farve",
    "feber",
    "fejre",
    "femte",
    "ferie",
    "ferle",
    "figen",
    "figur",
    "finde",
    "finne",
    "firma",
    "fiske",
    "fjern",
    "fjols",
    "flink",
    "flise",
    "flove",
    "flugt",
    "flyde",
    "flyve",
    "fløde",
    "fløjt",
    "fløte",
    "flåde",
    "fnise",
    "fodre",
    "folde",
    "foran",
    "forbi",
    "fordi",
    "forel",
    "forny",
    "forum",
    "forår",
    "frisk",
    "frist",
    "frost",
    "frugt",
    "fryde",
    "fryse",
    "fylde",
    "fyrre",
    "fysik",
    "fælde",
    "færge",
    "følge",
    "fører",
    "først",
    "gebyr",
    "gedde",
    "gerne",
    "gevær",
    "giraf",
    "glide",
    "glæde",
    "gnide",
    "gnist",
    "grave",
    "gribe",
    "grund",
    "græde",
    "græsk",
    "gummi",
    "gælde",
    "gælle",
    "gætte",
    "hakke",
    "halse",
    "halte",
    "halvø",
    "havre",
    "hedde",
    "hejre",
    "helst",
    "hende",
    "hente",
    "herre",
    "hilse",
    "hjælp",
    "hofte",
    "holde",
    "holdt",
    "hoppe",
    "hoste",
    "hotel",
    "hoved",
    "huske",
    "hvede",
    "hveps",
    "hvile",
    "hylde",
    "hytte",
    "hæfte",
    "hænge",
    "højde",
    "højre",
    "høste",
    "iltog",
    "image",
    "imens",
    "indbo",
    "inden",
    "inder",
    "indre",
    "indse",
    "ingen",
    "intet",
    "jakke",
    "jamen",
    "japan",
    "jeres",
    "kable",
    "kaffe",
    "kahyt",
    "kalde",
    "kamin",
    "kanal",
    "kande",
    "kanin",
    "karpe",
    "kaste",
    "kedel",
    "kende",
    "kendt",
    "kerne",
    "kigge",
    "kilde",
    "kinin",
    "kirke",
    "kiste",
    "kjole",
    "klage",
    "klare",
    "klæbe",
    "klæde",
    "klædt",
    "knude",
    "knuse",
    "knust",
    "knægt",
    "knæle",
    "komme",
    "konto",
    "koste",
    "kraft",
    "krage",
    "krave",
    "krebs",
    "kridt",
    "krybe",
    "kugle",
    "kulde",
    "kulør",
    "kumme",
    "kunde",
    "kunne",
    "kunst",
    "kvæle",
    "kysse",
    "kæmme",
    "kæmpe",
    "kærne",
    "køler",
    "kølig",
    "kårde",
    "lagde",
    "lagen",
    "lampe",
    "lande",
    "lange",
    "latin",
    "leder",
    "ledig",
    "lever",
    "ligge",
    "ligne",
    "lilla",
    "lille",
    "linie",
    "linse",
    "liste",
    "liter",
    "lokal",
    "lomme",
    "loppe",
    "lugte",
    "lukke",
    "lunch",
    "lunge",
    "lydig",
    "lytte",
    "læder",
    "længd",
    "lærer",
    "løfte",
    "mager",
    "maler",
    "malke",
    "maner",
    "mange",
    "marts",
    "masse",
    "meget",
    "melde",
    "metal",
    "midte",
    "miljø",
    "minde",
    "minut",
    "miste",
    "mobbe",
    "model",
    "moden",
    "moder",
    "modig",
    "mulig",
    "mynte",
    "mængd",
    "mærke",
    "mørke",
    "måned",
    "måske",
    "måtte",
    "nagle",
    "nakke",
    "narre",
    "natur",
    "nedad",
    "nerve",
    "netop",
    "nogen",
    "noget",
    "nogle",
    "norge",
    "norsk",
    "nulke",
    "nuser",
    "nusse",
    "nutid",
    "nyhed",
    "nylig",
    "nylon",
    "nysen",
    "nyste",
    "nøgen",
    "nøgle",
    "omgås",
    "onkel",
    "oplag",
    "optag",
    "orden",
    "ordne",
    "ordre",
    "organ",
    "orgel",
    "pakke",
    "pande",
    "papir",
    "parat",
    "paris",
    "parre",
    "parti",
    "passe",
    "peber",
    "pedal",
    "penge",
    "pikke",
    "pille",
    "pinse",
    "pjalt",
    "plade",
    "plads",
    "plage",
    "pleje",
    "pligt",
    "pløje",
    "point",
    "polak",
    "polen",
    "porto",
    "pragt",
    "prale",
    "prins",
    "præst",
    "prøve",
    "pudse",
    "pumpe",
    "punkt",
    "putte",
    "pynte",
    "pyton",
    "pølse",
    "påske",
    "radio",
    "ramme",
    "redde",
    "redet",
    "regel",
    "regne",
    "rejse",
    "remse",
    "rense",
    "rette",
    "retur",
    "ridse",
    "ringe",
    "rolig",
    "rolle",
    "roman",
    "rotte",
    "rulle",
    "rydde",
    "rygte",
    "rykke",
    "ryste",
    "række",
    "rådne",
    "sadel",
    "salat",
    "samle",
    "samme",
    "satan",
    "sauce",
    "savne",
    "scene",
    "sejle",
    "seler",
    "sende",
    "sendt",
    "sidde",
    "siden",
    "sidst",
    "sigte",
    "sikre",
    "silde",
    "silke",
    "sippe",
    "skade",
    "skaft",
    "skarp",
    "skide",
    "skide",
    "skilt",
    "skind",
    "skive",
    "skole",
    "skovl",
    "skrap",
    "skrev",
    "skrue",
    "skyde",
    "skyld",
    "skænd",
    "skære",
    "skærm",
    "skøge",
    "skønt",
    "skåne",
    "slags",
    "slang",
    "slank",
    "slips",
    "smage",
    "smart",
    "smile",
    "smøre",
    "snart",
    "snavs",
    "snegl",
    "snild",
    "snyde",
    "snydt",
    "spade",
    "spand",
    "spare",
    "spark",
    "spejl",
    "spids",
    "spise",
    "sport",
    "sprit",
    "sprog",
    "spurv",
    "spøge",
    "stave",
    "stege",
    "stejl",
    "stige",
    "stilk",
    "stive",
    "stolt",
    "stork",
    "storm",
    "straf",
    "strøm",
    "stærk",
    "støde",
    "sukke",
    "sulte",
    "suppe",
    "svale",
    "svamp",
    "svane",
    "svare",
    "svede",
    "sving",
    "synde",
    "synge",
    "synke",
    "syren",
    "sælge",
    "sænke",
    "sæter",
    "sætte",
    "sådan",
    "takke",
    "takst",
    "tanke",
    "tante",
    "taske",
    "tegne",
    "teste",
    "tiger",
    "tisse",
    "titel",
    "tjene",
    "tjære",
    "tobis",
    "tomme",
    "torsk",
    "trist",
    "trist",
    "trone",
    "truck",
    "træde",
    "trøst",
    "tudse",
    "tunge",
    "tvivl",
    "tværs",
    "tygge",
    "tylle",
    "tælle",
    "tænde",
    "tænke",
    "tæppe",
    "tømme",
    "tørre",
    "tørst",
    "tøven",
    "udder",
    "ulige",
    "under",
    "undgå",
    "vandt",
    "vaske",
    "vende",
    "vente",
    "vetoe",
    "vidde",
    "video",
    "vidne",
    "vikar",
    "vilje",
    "villa",
    "ville",
    "vinde",
    "vinge",
    "vinke",
    "visit",
    "visum",
    "vokse",
    "vores",
    "vrede",
    "vædde",
    "vægge",
    "vække",
    "vækst",
    "vælge",
    "værne",
    "væsel",
    "våben",
    "vågen",
    "yndig",
    "ældre",
    "ændre",
    "ærlig",
    "ønske",
    "øvrig",
    "årlig",
    "årsag",
    
    "bøger",
    "bæver",
    "træne",
    "trive",
    "grene",
    "skibe",
    "gribe",
    "knive",
    "knibe",
    "kræft",
    "borde",
    "stole",
    "taber",
    "næste",
    "peter",
    "jonas",
    
    
    // memes


    "ikdem",
    "crane"
]


let WordLength = 5

let randomWord = null
let canInteract = true


function generateGame(obj) {
    randomWord = dictonary[Math.floor(Math.random() * dictonary.length)].toUpperCase().split('');
    const tilegrid = document.querySelector('[data-tile-grid]')
    console.log(tilegrid)
    
    // randomWord = 'æbler'.toUpperCase().split('');
    canInteract = true

    resetGame()

    if(obj != undefined) {
        $(obj).blur();
    }
}

function TodaysWordl(obj) {
    const offsetFromDate = new Date(2022, 0, 1)
    const msOffset = Date.now() - offsetFromDate
    const dayOffset = msOffset / 1000 / 60 / 60 / 24
    randomWord = dictonary[Math.floor(dayOffset)].toUpperCase().split('')

    $(obj).blur();
    console.log('removed focus')

    resetGame()
}

generateGame()

function resetGame() {
    const tilegrid = document.querySelector('[data-tile-grid]')
    const tiles = tilegrid.querySelectorAll('[data-letter]');
    canInteract = true

    tiles.forEach((tile, index) => {
        delete tile.dataset.letter
        delete tile.dataset.state
        tile.textContent = ''

        tile.classList.remove('wrong')
        tile.classList.remove('correct')
        tile.classList.remove('misplaced')
    })
}

function handleKeyPress(code) {
    let key = code.key.toUpperCase();
    // console.log(key)
    if (key == 'ENTER') {
        submitGuess()
    }

    if(key == 'BACKSPACE') {
        deleteLetter()
        return
    }

    if(key.match(/^[A-ZÆØÅ]$/)) {
        insertKey(key)
    }
}

function insertKey(key) {
    if (!canInteract) return
    const activeTiles = document.querySelectorAll('[data-state="active"]')
    if (activeTiles.length >= WordLength) return
    
    const tilegrid = document.querySelector('[data-tile-grid]')
    const nextTile = tilegrid.querySelector(':not([data-letter])');
    nextTile.dataset.letter = key
    nextTile.textContent = key
    nextTile.dataset.state = "active"
    popTile(nextTile)
}

function deleteLetter() {
    const activeTiles = document.querySelectorAll('[data-state="active"]')
    const deleteTile = activeTiles[activeTiles.length - 1]
    if (deleteTile == null) return
    
    deleteTile.textContent = ''
    delete deleteTile.dataset.letter
    delete deleteTile.dataset.state
}


function submitGuess() {
    const activeTiles = [...document.querySelectorAll('[data-state="active"]')]
    if (activeTiles.length != WordLength) return Toast('Ordet har ikke den rigtige længde', 'red ')

    const guess = activeTiles.reduce((word,tile) => {
        return word + tile.dataset.letter
    }, "")
    if (!dictonary.includes(guess.toLowerCase())) return Toast('Ordet er ikke i ordbogen', 'red ')

    for (let i = 0; i < activeTiles.length; i++) {
        let tile = activeTiles[i]
        tile.dataset.state = 'wrong'

        if(randomWord[i] == tile.dataset.letter) {
            tile.classList.add('correct')
            tile.dataset.state = 'correct'
            continue
        }
        
        let ngr = randomWord.join("").toString()
        // console.log(ngr)
        if (ngr.includes(tile.dataset.letter)) {
            tile.classList.add('misplaced')
            tile.dataset.state = 'misplaced'
        }
    }

    activeTiles.forEach((...params) => checkWin(...params, guess))

    
}

function popTile(tile) {
    tile.classList.add("pop")
    tile.addEventListener("animationend", () => {
        tile.classList.remove("pop")
    },
    { once: true })
}

function checkWin(tile, index, array, guess) {
    if (!canInteract) return
    let word = randomWord.join("").toString()

    popTile(tile)
    
    console.log(guess, word)
    if (guess == word) {
        canInteract = false
        return Toast(`Du gættede det rigtige ord: ${word.toUpperCase()}`, 'green');
    }

    let tilegrid = document.querySelector('[data-tile-grid]')

    let remainingTiles = tilegrid.querySelectorAll(':not([data-letter])')
    console.log(remainingTiles.length)
    if (remainingTiles.length == 0) {
        canInteract = false
        return Toast(`Du gættede ikke ordet. Det rigtige ord var: ${word.toUpperCase()}`, 'red');
    }
}

function copyResult() {
    let tilegrid = document.querySelector('[data-tile-grid]')

    let tiles = tilegrid.querySelectorAll('[data-letter]')
    let index = 1
    let attempts = 0
    let result = ''
    tiles.forEach(tile => {
        console.log(tile.dataset.state)
        if (tile.dataset.state == 'wrong') {
            result += '⬛'
        }

        if (tile.dataset.state == 'correct') {
            result += '🟩'
        }

        if (tile.dataset.state == 'misplaced') {
            result += '🟨'
        }

        if(index == 5) {
            index = 1
            attempts += 1
            result += '\n'
        } else {
            index = index + 1
        }

    })

    let remainingTiles = tilegrid.querySelectorAll(':not([data-letter])')
    
    for (let i = index; i <= remainingTiles.length; i++) {
        result += '⬛'
        if(index == 5) {
            index = 1
            result += '\n'
        } else {
            index = index + 1
        }
    }
    result = `Jeg brugte ${attempts}/6 forsøg. Hvor mange bruger du? \n${result}\n Spil mere @ https://rosessix.github.io/hejwordl/`
    copyTextToClipboard(result)
    Toast('Kopieret til klipholder', 'green')
}

function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
  
    //
    // *** This styling is an extra step which is likely not required. ***
    //
    // Why is it here? To ensure:
    // 1. the element is able to have focus and selection.
    // 2. if the element was to flash render it has minimal visual impact.
    // 3. less flakyness with selection and copying which **might** occur if
    //    the textarea element is not visible.
    //
    // The likelihood is the element won't even render, not even a
    // flash, so some of these are just precautions. However in
    // Internet Explorer the element is visible whilst the popup
    // box asking the user for permission for the web page to
    // copy to the clipboard.
    //
  
    // Place in the top-left corner of screen regardless of scroll position.
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
  
    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    textArea.style.width = '2em';
    textArea.style.height = '2em';
  
    // We don't need padding, reducing the size if it does flash render.
    textArea.style.padding = 0;
  
    // Clean up any borders.
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
  
    // Avoid flash of the white box if rendered for any reason.
    textArea.style.background = 'transparent';
  
  
    textArea.value = text;
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  
    document.body.removeChild(textArea);
}

function Toast(msg, classes, time) {
    M.toast({
        html: msg, 
        classes: `rounded ${classes}`,
        displayLength: time | 5000
    })
}
