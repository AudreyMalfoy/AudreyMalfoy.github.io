// EFFET TAPING HEADER


var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 150 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.07em solid #FFF }";
    document.body.appendChild(css);
};

// MENU NAVBAR


//Récupération de la position de la section Menu = 843px
let startPosition = document.getElementById('navigationMenu').offsetTop;
console.log(startPosition);
let stopPosition = document.getElementById('backgroundTop').offsetTop;
console.log(stopPosition);
//Ajout de l'évenement scroll sur la fenetre
window.addEventListener('scroll', () => {
    if (window.scrollY >= startPosition) {
        //J'ajoute la class animatedBar
        document.getElementById('menu').classList.remove('fixe-black');
        document.getElementById('menu').classList.add('fixe');
        document.getElementById('biography').style.marginTop = "100px";

    } else if (window.scrollY >= stopPosition - 661) {
        //J'ajoute la class animatedBar
        document.getElementById('menu').classList.remove('fixe');
        document.getElementById('biography').style.marginTop = "";
    }
});


// SKILLS ANIMATED


//Récupération de la position de la section skills
let position = document.getElementById('skills').offsetTop;
console.log(position);
//Ajout de l'évenement scroll sur la fenetre
window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    //quand la valeur du scroll vertical arrive à la valeur de la position de mon élément (-500px)
    if (window.scrollY >= position - 500) {
        //J'ajoute la class animationBar
        document.getElementById('htmlskill').classList.add('animatedBar');
        document.getElementById('cssskill').classList.add('animatedBar');
        document.getElementById('jsskill').classList.add('animatedBar');
        document.getElementById('bootstrapskill').classList.add('animatedBar');
        document.getElementById('tailwindskill').classList.add('animatedBar');
        document.getElementById('wordpressskill').classList.add('animatedBar');
        document.getElementById('weeblyskill').classList.add('animatedBar');
    }
});


// CAROUSEL


// VARIABLES
let legendOne = document.getElementById("legendOne");
let legendTwo = document.getElementById("legendTwo");
let legendThree = document.getElementById("legendThree");
let legendFour = document.getElementById("legendFour");
let legendFive = document.getElementById("legendFive");
let legendSix = document.getElementById("legendSix");
let legendSeven = document.getElementById("legendSeven");
let legendEight = document.getElementById("legendEight");

// DEBUT SCRIPT

legendOne.style.display = 'block';
legendTwo.style.display = 'none';
legendThree.style.display = 'none';
legendFour.style.display = 'none';
legendFive.style.display = 'none';
legendSix.style.display = 'none';
legendSeven.style.display = 'none';
legendEight.style.display = 'none';

function oneSee() {
    legendOne.style.display = 'block';
    legendTwo.style.display = 'none';
    legendThree.style.display = 'none';
    legendFour.style.display = 'none';
    legendFive.style.display = 'none';
    legendSix.style.display = 'none';
    legendSeven.style.display = 'none';
    legendEight.style.display = 'none';
};

function twoSee() {
    legendOne.style.display = 'none';
    legendTwo.style.display = 'block';
    legendThree.style.display = 'none';
    legendFour.style.display = 'none';
    legendFive.style.display = 'none';
    legendSix.style.display = 'none';
    legendSeven.style.display = 'none';
    legendEight.style.display = 'none';
};

function threeSee() {
    legendOne.style.display = 'none';
    legendTwo.style.display = 'none';
    legendThree.style.display = 'block';
    legendFour.style.display = 'none';
    legendFive.style.display = 'none';
    legendSix.style.display = 'none';
    legendSeven.style.display = 'none';
    legendEight.style.display = 'none';
};

function fourSee() {
    legendOne.style.display = 'none';
    legendTwo.style.display = 'none';
    legendThree.style.display = 'none';
    legendFour.style.display = 'block';
    legendFive.style.display = 'none';
    legendSix.style.display = 'none';
    legendSeven.style.display = 'none';
    legendEight.style.display = 'none';
};

function fiveSee() {
    legendOne.style.display = 'none';
    legendTwo.style.display = 'none';
    legendThree.style.display = 'none';
    legendFour.style.display = 'none';
    legendFive.style.display = 'block';
    legendSix.style.display = 'none';
    legendSeven.style.display = 'none';
    legendEight.style.display = 'none';
};

function sixSee() {
    legendOne.style.display = 'none';
    legendTwo.style.display = 'none';
    legendThree.style.display = 'none';
    legendFour.style.display = 'none';
    legendFive.style.display = 'none';
    legendSix.style.display = 'block';
    legendSeven.style.display = 'none';
    legendEight.style.display = 'none';
};

function sevenSee() {
    legendOne.style.display = 'none';
    legendTwo.style.display = 'none';
    legendThree.style.display = 'none';
    legendFour.style.display = 'none';
    legendFive.style.display = 'none';
    legendSix.style.display = 'none';
    legendSeven.style.display = 'block';
    legendEight.style.display = 'none';
};

function eightSee() {
    legendOne.style.display = 'none';
    legendTwo.style.display = 'none';
    legendThree.style.display = 'none';
    legendFour.style.display = 'none';
    legendFive.style.display = 'none';
    legendSix.style.display = 'none';
    legendSeven.style.display = 'none';
    legendEight.style.display = 'block';
};


// TIMELINE

(function() {
    "use strict";

    // define variables
    var items = document.querySelectorAll(".timeline li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
})();


// TIMELINE


// ONE
let toggleOne = document.getElementById('toggleOne');
let contentOne = document.getElementById('contentXPOne');

toggleOne.addEventListener("click", function() {
    contentOne.style.display = (contentOne.dataset.toggled ^= 1) ? "block" : "none";
    toggleOne.classList.toggle('fa-angle-up');
});

// TWO
let toggleTwo = document.getElementById('toggleTwo');
let contentTwo = document.getElementById('contentXPTwo');

toggleTwo.addEventListener("click", function() {
    contentTwo.style.display = (contentTwo.dataset.toggled ^= 1) ? "block" : "none";
    toggleTwo.classList.toggle('fa-angle-up');
});

// THREE
let toggleThree = document.getElementById('toggleThree');
let contentThree = document.getElementById('contentXPThree');

toggleThree.addEventListener("click", function() {
    contentThree.style.display = (contentThree.dataset.toggled ^= 1) ? "block" : "none";
    toggleThree.classList.toggle('fa-angle-up');
});

// FOUR
let toggleFour = document.getElementById('toggleFour');
let contentFour = document.getElementById('contentXPFour');

toggleFour.addEventListener("click", function() {
    contentFour.style.display = (contentFour.dataset.toggled ^= 1) ? "block" : "none";
    toggleFour.classList.toggle('fa-angle-up');
});

// FIVE
let toggleFive = document.getElementById('toggleFive');
let contentFive = document.getElementById('contentXPFive');

toggleFive.addEventListener("click", function() {
    contentFive.style.display = (contentFive.dataset.toggled ^= 1) ? "block" : "none";
    toggleFive.classList.toggle('fa-angle-up');
});

// SIX
let toggleSix = document.getElementById('toggleSix');
let contentSix = document.getElementById('contentXPSix');

toggleSix.addEventListener("click", function() {
    contentSix.style.display = (contentSix.dataset.toggled ^= 1) ? "block" : "none";
    toggleSix.classList.toggle('fa-angle-up');
});

// SEVEN
let toggleSeven = document.getElementById('toggleSeven');
let contentSeven = document.getElementById('contentXPSeven');

toggleSeven.addEventListener("click", function() {
    contentSeven.style.display = (contentSeven.dataset.toggled ^= 1) ? "block" : "none";
    toggleSeven.classList.toggle('fa-angle-up');
});

// EIGHT
let toggleEight = document.getElementById('toggleEight');
let contentEight = document.getElementById('contentXPEight');

toggleEight.addEventListener("click", function() {
    contentEight.style.display = (contentEight.dataset.toggled ^= 1) ? "block" : "none";
    toggleEight.classList.toggle('fa-angle-up');
});

// NINE
let toggleNine = document.getElementById('toggleNine');
let contentNine = document.getElementById('contentXPNine');

toggleNine.addEventListener("click", function() {
    contentNine.style.display = (contentNine.dataset.toggled ^= 1) ? "block" : "none";
    toggleNine.classList.toggle('fa-angle-up');
});


// PORTFOLIO


let choiceOne = document.getElementById('choicePageOne');
let pageOne = document.getElementById('selectionOnePage');

let choiceTwo = document.getElementById('choicePageTwo');
let pageTwo = document.getElementById('selectionTwoPage');

choiceOne.addEventListener("click", function() {
    pageOne.style.display = 'block';
    pageTwo.style.display = 'none';
});

choiceTwo.addEventListener("click", function() {
    pageOne.style.display = 'none';
    pageTwo.style.display = 'block';
});


let mobileChoiceOne = document.getElementById('mobileChoicePageOne');
let mobilePageOne = document.getElementById('mobileSelectionOnePage');

let mobileChoiceTwo = document.getElementById('mobileChoicePageTwo');
let mobilePageTwo = document.getElementById('mobileSelectionTwoPage');

mobileChoiceOne.addEventListener("click", function() {
    mobilePageOne.style.display = 'block';
    mobilePageTwo.style.display = 'none';
});

mobileChoiceTwo.addEventListener("click", function() {
    mobilePageOne.style.display = 'none';
    mobilePageTwo.style.display = 'block';
});




// SCROLL DOWN


function scrollToSmoothly(pos, time) {
    var currentPos = window.pageYOffset;
    var start = null;
    if (time == null) time = 500;
    pos = +pos, time = +time;
    window.requestAnimationFrame(function step(currentTime) {
        start = !start ? currentTime : start;
        var progress = currentTime - start;
        if (currentPos < pos) {
            window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
        } else {
            window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
        }
        if (progress < time) {
            window.requestAnimationFrame(step);
        } else {
            window.scrollTo(0, pos);
        }
    });
}


// SCROLL UP


function animateToTop(e) {
    e.preventDefault();
    var scrollToTop = window.setInterval(function() {
        var pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20);
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
};


// SWITCH ON/OFF


//  Variable concernant le corps du site
var elementBody = document.body;

// Variables concernant les sections qui changeront de couleurs
var elementSkill = document.getElementById('skills');
var elementGallery = document.getElementById('gallery');
var elementPortfolio = document.getElementById('portfolio');
var elementRollUp = document.getElementById('rollUp');
var elementFooterBG = document.getElementById('footerColor');
var elementFooter = document.getElementById('footerSection');

// Variable concernant le texte sous le switch
var txtSwitch = document.getElementById("txtSwitch");

// FONCTION SWITCH - ON/OFF, DAY/NIGHT
function myDarkMode() {
    elementBody.classList.toggle("dark-mode-body");

    if (txtSwitch.innerHTML == "Testez le mode nuit!") {
        txtSwitch.innerHTML = "Testez le mode jour!";

        // CHANGE IMAGE
        var comingImg = document.getElementsByClassName('imgComing');
        for (var i = 0; i < comingImg.length; i++) {
            comingImg[i].src = "assets/img/Portfolio/IsComingNight.png";
        }

        document.getElementById('backgroundTop').style.backgroundImage = 'url("assets/img/Logo_Head_Navbar/bg-header-3.png")';
        document.getElementById('engagements').style.backgroundImage = 'url("assets/img/Logo_Head_Navbar/bg-header-3.png")';


        // COULEUR NOIRE
        elementSkill.style.backgroundColor = "#323232";
        elementGallery.style.backgroundColor = "#323232";
        elementPortfolio.style.backgroundColor = "#323232";
        elementRollUp.style.backgroundColor = "#323232";
        elementFooterBG.style.backgroundColor = "#323232";
        elementFooter.style.backgroundColor = "#000";
        elementFooter.style.borderTopWidth = "3px";
        elementFooter.style.borderTopColor = "#323232";
        elementFooter.style.borderTopStyle = "solid";
        document.getElementById('containerHTML').style.backgroundColor = "#505050";
        document.getElementById('containerCSS').style.backgroundColor = "#505050";
        document.getElementById('containerJS').style.backgroundColor = "#505050";
        document.getElementById('containerBS').style.backgroundColor = "#505050";
        document.getElementById('containerTW').style.backgroundColor = "#505050";
        document.getElementById('containerWP').style.backgroundColor = "#505050";
        document.getElementById('containerWEEBLY').style.backgroundColor = "#505050";
        var cardsbg = document.getElementsByClassName('cardPortfolio');
        for (var i = 0; i < cardsbg.length; i++) {
            cardsbg[i].style.backgroundColor = '#505050';
            cardsbg[i].style.borderColor = '#303030';
        };
        var cardsborderOne = document.getElementsByClassName('cardPortfolioContent');
        for (var i = 0; i < cardsborderOne.length; i++) {
            cardsborderOne[i].style.borderTopColor = '#303030';
        };
        var cardsborderTwo = document.getElementsByClassName('cardPortfolioContentnotshort');
        for (var i = 0; i < cardsborderTwo.length; i++) {
            cardsborderTwo[i].style.borderTopColor = '#303030';
        };
        var cardstwobg = document.getElementsByClassName('portfolioColor');
        for (var i = 0; i < cardstwobg.length; i++) {
            cardstwobg[i].style.backgroundColor = '#505050';
            cardstwobg[i].style.borderColor = '#303030';
        };

        // COULEUR VERTE
        document.getElementById('titleSectAbout').style.color = "#52D273";
        document.getElementById('colorBarsOne').style.color = "#52D273";
        document.getElementById('colorBarsTwo').style.color = "#52D273";
        document.getElementById('titleSectSkills').style.color = "#52D273";
        document.getElementById('titleSectExperience').style.color = "#52D273";
        document.getElementById('titleWorkOne').style.color = "#52D273";
        document.getElementById('titleWorkTwo').style.color = "#52D273";
        document.getElementById('titleWorkThree').style.color = "#52D273";
        document.getElementById('titleWorkFour').style.color = "#52D273";
        document.getElementById('titleWorkFive').style.color = "#52D273";
        document.getElementById('titleSectPortfolio').style.color = "#52D273";
        document.getElementById('toggleTwo').style.color = "#52D273";
        document.getElementById('toggleFour').style.color = "#52D273";
        document.getElementById('toggleFive').style.color = "#52D273";
        document.getElementById('toggleSix').style.color = "#52D273";
        document.getElementById('toggleNine').style.color = "#52D273";
        document.getElementById('locationXPTwo').style.color = "#52D273";
        document.getElementById('locationXPFour').style.color = "#52D273";
        document.getElementById('locationXPFive').style.color = "#52D273";
        document.getElementById('locationXPSix').style.color = "#52D273";
        document.getElementById('locationXPNine').style.color = "#52D273";

        // COULEUR BLEUE
        document.getElementById('ageInfo').style.color = "#46BCDE";
        document.getElementById('locationInfo').style.color = "#46BCDE";
        document.getElementById('telInfo').style.color = "#46BCDE";
        document.getElementById('mailInfo').style.color = "#46BCDE";
        document.getElementById('skillOne').style.color = "#46BCDE";
        document.getElementById('skillTwo').style.color = "#46BCDE";
        document.getElementById('skillThree').style.color = "#46BCDE";
        document.getElementById('skillFour').style.color = "#46BCDE";
        document.getElementById('skillFive').style.color = "#46BCDE";
        document.getElementById('skillSix').style.color = "#46BCDE";
        document.getElementById('skillSeven').style.color = "#46BCDE";
        document.getElementById('titleGalOne').style.color = "#46BCDE";
        document.getElementById('titleGalTwo').style.color = "#46BCDE";
        document.getElementById('titleGalThree').style.color = "#46BCDE";
        document.getElementById('engageTitleOne').style.color = "#46BCDE";
        document.getElementById('engageTitleTwo').style.color = "#46BCDE";
        document.getElementById('engageTitleThree').style.color = "#46BCDE";
        document.getElementById('titleFormationOne').style.color = "#46BCDE";
        document.getElementById('titleFormationTwo').style.color = "#46BCDE";
        document.getElementById('titleFormationThree').style.color = "#46BCDE";
        document.getElementById('titleFormationFour').style.color = "#46BCDE";
        document.getElementById('toggleOne').style.color = "#46BCDE";
        document.getElementById('toggleThree').style.color = "#46BCDE";
        document.getElementById('toggleSeven').style.color = "#46BCDE";
        document.getElementById('toggleEight').style.color = "#46BCDE";
        document.getElementById('locationXPOne').style.color = "#46BCDE";
        document.getElementById('locationXPThree').style.color = "#46BCDE";
        document.getElementById('locationXPSeven').style.color = "#46BCDE";
        document.getElementById('locationXPEight').style.color = "#46BCDE";
        document.getElementById('ariette').style.color = "#46BCDE";
        document.getElementById('dubois').style.color = "#46BCDE";
        document.getElementById('hihamizu').style.color = "#46BCDE";
        document.getElementById('starwars').style.color = "#46BCDE";
        document.getElementById('tag').style.color = "#46BCDE";
        document.getElementById('hellytoon').style.color = "#46BCDE";
        document.getElementById('tocomeThree').style.color = "#46BCDE";
        document.getElementById('tocomeFour').style.color = "#46BCDE";
        document.getElementById('tocomeFive').style.color = "#46BCDE";
        document.getElementById('tocomeSix').style.color = "#46BCDE";
        document.getElementById('tocomeSeven').style.color = "#46BCDE";
        document.getElementById('tocomeEight').style.color = "#46BCDE";

        // HOVER DES LIENS
        document.getElementById('colorItemOne').addEventListener('mouseover', function() {
            this.style.color = "#46BCDE";
        });
        document.getElementById('colorItemOne').addEventListener('mouseout', function() {
            this.style.color = "#FFFFFF";
        });

        document.getElementById('colorItemTwo').addEventListener('mouseover', function() {
            this.style.color = "#46BCDE";
        });
        document.getElementById('colorItemTwo').addEventListener('mouseout', function() {
            this.style.color = "#FFFFFF";
        });

        document.getElementById('colorItemThree').addEventListener('mouseover', function() {
            this.style.color = "#46BCDE";
        });
        document.getElementById('colorItemThree').addEventListener('mouseout', function() {
            this.style.color = "#FFFFFF";
        });

        document.getElementById('colorItemFour').addEventListener('mouseover', function() {
            this.style.color = "#46BCDE";
        });
        document.getElementById('colorItemFour').addEventListener('mouseout', function() {
            this.style.color = "#FFFFFF";
        });

        document.getElementById('trello').addEventListener('mouseover', function() {
            this.style.color = "#46BCDE";
        });
        document.getElementById('trello').addEventListener('mouseout', function() {
            this.style.color = "#FFFFFF";
        });

        document.getElementById('discord').addEventListener('mouseover', function() {
            this.style.color = "#46BCDE";
        });
        document.getElementById('discord').addEventListener('mouseout', function() {
            this.style.color = "#FFFFFF";
        });

        document.getElementById('elementor').addEventListener('mouseover', function() {
            this.style.color = "#46BCDE";
        });
        document.getElementById('elementor').addEventListener('mouseout', function() {
            this.style.color = "#FFFFFF";
        });

        document.getElementById('divi').addEventListener('mouseover', function() {
            this.style.color = "#46BCDE";
        });
        document.getElementById('divi').addEventListener('mouseout', function() {
            this.style.color = "#FFFFFF";
        });

        document.getElementById('canva').addEventListener('mouseover', function() {
            this.style.color = "#46BCDE";
        });
        document.getElementById('canva').addEventListener('mouseout', function() {
            this.style.color = "#FFFFFF";
        });

        document.getElementById('indesign').addEventListener('mouseover', function() {
            this.style.color = "#46BCDE";
        });
        document.getElementById('indesign').addEventListener('mouseout', function() {
            this.style.color = "#FFFFFF";
        });

        document.getElementById('photofiltre').addEventListener('mouseover', function() {
            this.style.color = "#46BCDE";
        });
        document.getElementById('photofiltre').addEventListener('mouseout', function() {
            this.style.color = "#FFFFFF";
        });

        document.getElementById('photoshop').addEventListener('mouseover', function() {
            this.style.color = "#46BCDE";
        });
        document.getElementById('photoshop').addEventListener('mouseout', function() {
            this.style.color = "#FFFFFF";
        });

        document.getElementById('procreate').addEventListener('mouseover', function() {
            this.style.color = "#46BCDE";
        });
        document.getElementById('procreate').addEventListener('mouseout', function() {
            this.style.color = "#FFFFFF";
        });

        document.getElementById('illustrator').addEventListener('mouseover', function() {
            this.style.color = "#46BCDE";
        });
        document.getElementById('illustrator').addEventListener('mouseout', function() {
            this.style.color = "#FFFFFF";
        });

        document.getElementById('xd').addEventListener('mouseover', function() {
            this.style.color = "#46BCDE";
        });
        document.getElementById('xd').addEventListener('mouseout', function() {
            this.style.color = "#FFFFFF";
        });

        document.getElementById('choicePageOne').addEventListener('mouseover', function() {
            this.style.color = "#46BCDE";
        });
        document.getElementById('choicePageOne').addEventListener('mouseout', function() {
            this.style.color = "#FFFFFF";
        });

        document.getElementById('choicePageTwo').addEventListener('mouseover', function() {
            this.style.color = "#46BCDE";
        });
        document.getElementById('choicePageTwo').addEventListener('mouseout', function() {
            this.style.color = "#FFFFFF";
        });

        document.getElementById('seemycv').addEventListener('mouseover', function() {
            this.style.color = "#46BCDE";
        });
        document.getElementById('seemycv').addEventListener('mouseout', function() {
            this.style.color = "#FFFFFF";
        });

        document.getElementById('seecvmobiledevice').addEventListener('mouseover', function() {
            this.style.color = "#46BCDE";
        });
        document.getElementById('seecvmobiledevice').addEventListener('mouseout', function() {
            this.style.color = "#FFFFFF";
        });

        // COULEUR BLANCHE
        document.getElementById('colorTxtOne').style.color = "#FFFFFF";
        document.getElementById('colorTxtTwo').style.color = "#FFFFFF";
        document.getElementById('colorTxtThree').style.color = "#FFFFFF";
        document.getElementById('colorTxtFour').style.color = "#FFFFFF";
        document.getElementById('colorItemOne').style.color = "#FFFFFF";
        document.getElementById('colorItemTwo').style.color = "#FFFFFF";
        document.getElementById('colorItemThree').style.color = "#FFFFFF";
        document.getElementById('colorItemFour').style.color = "#FFFFFF";
        document.getElementById('trello').style.color = "#FFFFFF";
        document.getElementById('discord').style.color = "#FFFFFF";
        document.getElementById('elementor').style.color = "#FFFFFF";
        document.getElementById('divi').style.color = "#FFFFFF";
        document.getElementById('canva').style.color = "#FFFFFF";
        document.getElementById('indesign').style.color = "#FFFFFF";
        document.getElementById('photofiltre').style.color = "#FFFFFF";
        document.getElementById('photoshop').style.color = "#FFFFFF";
        document.getElementById('procreate').style.color = "#FFFFFF";
        document.getElementById('illustrator').style.color = "#FFFFFF";
        document.getElementById('xd').style.color = "#FFFFFF";
        document.getElementById('pseudoIG').style.color = "#FFFFFF";
        document.getElementById('pseudoTWT').style.color = "#FFFFFF";
        document.getElementById('pseudoLKN').style.color = "#FFFFFF";
        document.getElementById('pseudoFB').style.color = "#FFFFFF";
        document.getElementById('seemycv').style.color = "#FFFFFF";
        document.getElementById('seecvmobiledevice').style.color = "#FFFFFF";


        // MENU NAVBAR
        //Récupération de la position de la section Menu = 843px
        let startPosition = document.getElementById('navigationMenu').offsetTop;
        console.log(startPosition);
        let stopPosition = document.getElementById('backgroundTop').offsetTop;
        console.log(stopPosition);
        //Ajout de l'évenement scroll sur la fenetre
        window.addEventListener('scroll', () => {
            if (window.scrollY >= startPosition) {
                //J'ajoute la class animatedBar
                document.getElementById('menu').classList.add('fixe-black');
                document.getElementById('biography').style.marginTop = "100px";

            } else if (window.scrollY >= stopPosition - 661) {
                //J'ajoute la class animatedBar
                document.getElementById('menu').classList.remove('fixe-black');
                document.getElementById('biography').style.marginTop = "";
            }
        });

    } else {
        txtSwitch.innerHTML = "Testez le mode nuit!";
        elementSkill.style.backgroundColor = "#F7F7F7";
        elementGallery.style.backgroundColor = "#F7F7F7";
        elementPortfolio.style.backgroundColor = "#F7F7F7";

        // CHANGE IMAGE
        var comingImg = document.getElementsByClassName('imgComing');
        for (var i = 0; i < comingImg.length; i++) {
            comingImg[i].src = "assets/img/Portfolio/IsComingLight.png";
        }

        document.getElementById('backgroundTop').style.backgroundImage = 'url("assets/img/Logo_Head_Navbar/bg-header-2.png")';
        document.getElementById('engagements').style.backgroundImage = 'url("assets/img/Logo_Head_Navbar/bg-header-2.png")';

        // COULEUR BLANC
        elementSkill.style.backgroundColor = "#F7F7F7";
        elementGallery.style.backgroundColor = "#F7F7F7";
        elementPortfolio.style.backgroundColor = "#F7F7F7";
        elementRollUp.style.backgroundColor = "#F7F7F7";
        elementFooterBG.style.backgroundColor = "#F7F7F7";
        elementFooter.style.backgroundColor = "#FFF";
        elementFooter.style.borderTopWidth = "3px";
        elementFooter.style.borderTopColor = "#F7F7F7";
        elementFooter.style.borderTopStyle = "solid";
        document.getElementById('containerHTML').style.backgroundColor = "#DDDDDD";
        document.getElementById('containerCSS').style.backgroundColor = "#DDDDDD";
        document.getElementById('containerJS').style.backgroundColor = "#DDDDDD";
        document.getElementById('containerBS').style.backgroundColor = "#DDDDDD";
        document.getElementById('containerTW').style.backgroundColor = "#DDDDDD";
        document.getElementById('containerWP').style.backgroundColor = "#DDDDDD";
        document.getElementById('containerWEEBLY').style.backgroundColor = "#DDDDDD";
        var cardsbg = document.getElementsByClassName('cardPortfolio');
        for (var i = 0; i < cardsbg.length; i++) {
            cardsbg[i].style.backgroundColor = '#FFFFFF';
            cardsbg[i].style.borderColor = '#EEEEEE';
        };
        var cardsborderOne = document.getElementsByClassName('cardPortfolioContent');
        for (var i = 0; i < cardsborderOne.length; i++) {
            cardsborderOne[i].style.borderTopColor = '#EEEEEE';
        };
        var cardsborderTwo = document.getElementsByClassName('cardPortfolioContentnotshort');
        for (var i = 0; i < cardsborderTwo.length; i++) {
            cardsborderTwo[i].style.borderTopColor = '#EEEEEE';
        };
        var cardstwobg = document.getElementsByClassName('portfolioColor');
        for (var i = 0; i < cardstwobg.length; i++) {
            cardstwobg[i].style.backgroundColor = '#FFFFFF';
            cardstwobg[i].style.borderColor = '#EEEEEE';
        };

        // COULEUR VERTE
        document.getElementById('titleSectAbout').style.color = "#94B66A";
        document.getElementById('colorBarsOne').style.color = "#94B66A";
        document.getElementById('colorBarsTwo').style.color = "#94B66A";
        document.getElementById('titleSectSkills').style.color = "#94B66A";
        document.getElementById('titleSectExperience').style.color = "#94B66A";
        document.getElementById('titleWorkOne').style.color = "#94B66A";
        document.getElementById('titleWorkTwo').style.color = "#94B66A";
        document.getElementById('titleWorkThree').style.color = "#94B66A";
        document.getElementById('titleWorkFour').style.color = "#94B66A";
        document.getElementById('titleWorkFive').style.color = "#94B66A";
        document.getElementById('titleSectPortfolio').style.color = "#94B66A";
        document.getElementById('toggleTwo').style.color = "#94B66A";
        document.getElementById('toggleFour').style.color = "#94B66A";
        document.getElementById('toggleFive').style.color = "#94B66A";
        document.getElementById('toggleSix').style.color = "#94B66A";
        document.getElementById('toggleNine').style.color = "#94B66A";
        document.getElementById('locationXPTwo').style.color = "#94B66A";
        document.getElementById('locationXPFour').style.color = "#94B66A";
        document.getElementById('locationXPFive').style.color = "#94B66A";
        document.getElementById('locationXPSix').style.color = "#94B66A";
        document.getElementById('locationXPNine').style.color = "#94B66A";

        // COULEUR BLEUE
        document.getElementById('ageInfo').style.color = "#6AB6AE";
        document.getElementById('locationInfo').style.color = "#6AB6AE";
        document.getElementById('telInfo').style.color = "#6AB6AE";
        document.getElementById('mailInfo').style.color = "#6AB6AE";
        document.getElementById('skillOne').style.color = "#6AB6AE";
        document.getElementById('skillTwo').style.color = "#6AB6AE";
        document.getElementById('skillThree').style.color = "#6AB6AE";
        document.getElementById('skillFour').style.color = "#6AB6AE";
        document.getElementById('skillFive').style.color = "#6AB6AE";
        document.getElementById('skillSix').style.color = "#6AB6AE";
        document.getElementById('skillSeven').style.color = "#6AB6AE";
        document.getElementById('titleGalOne').style.color = "#6AB6AE";
        document.getElementById('titleGalTwo').style.color = "#6AB6AE";
        document.getElementById('titleGalThree').style.color = "#6AB6AE";
        document.getElementById('engageTitleOne').style.color = "#6AB6AE";
        document.getElementById('engageTitleTwo').style.color = "#6AB6AE";
        document.getElementById('engageTitleThree').style.color = "#6AB6AE";
        document.getElementById('titleFormationOne').style.color = "#6AB6AE";
        document.getElementById('titleFormationTwo').style.color = "#6AB6AE";
        document.getElementById('titleFormationThree').style.color = "#6AB6AE";
        document.getElementById('titleFormationFour').style.color = "#6AB6AE";
        document.getElementById('toggleOne').style.color = "#6AB6AE";
        document.getElementById('toggleThree').style.color = "#6AB6AE";
        document.getElementById('toggleSeven').style.color = "#6AB6AE";
        document.getElementById('toggleEight').style.color = "#6AB6AE";
        document.getElementById('locationXPOne').style.color = "#6AB6AE";
        document.getElementById('locationXPThree').style.color = "#6AB6AE";
        document.getElementById('locationXPSeven').style.color = "#6AB6AE";
        document.getElementById('locationXPEight').style.color = "#6AB6AE";
        document.getElementById('ariette').style.color = "#6AB6AE";
        document.getElementById('dubois').style.color = "#6AB6AE";
        document.getElementById('hihamizu').style.color = "#6AB6AE";
        document.getElementById('starwars').style.color = "#6AB6AE";
        document.getElementById('tag').style.color = "#6AB6AE";
        document.getElementById('hellytoon').style.color = "#6AB6AE";
        document.getElementById('tocomeThree').style.color = "#6AB6AE";
        document.getElementById('tocomeFour').style.color = "#6AB6AE";
        document.getElementById('tocomeFive').style.color = "#6AB6AE";
        document.getElementById('tocomeSix').style.color = "#6AB6AE";
        document.getElementById('tocomeSeven').style.color = "#6AB6AE";
        document.getElementById('tocomeEight').style.color = "#6AB6AE";

        // HOVER DES LIENS
        document.getElementById('colorItemOne').addEventListener('mouseover', function() {
            this.style.color = "#6AB6AE";
        });
        document.getElementById('colorItemOne').addEventListener('mouseout', function() {
            this.style.color = "#000";
        });

        document.getElementById('colorItemTwo').addEventListener('mouseover', function() {
            this.style.color = "#6AB6AE";
        });
        document.getElementById('colorItemTwo').addEventListener('mouseout', function() {
            this.style.color = "#000";
        });

        document.getElementById('colorItemThree').addEventListener('mouseover', function() {
            this.style.color = "#6AB6AE";
        });
        document.getElementById('colorItemThree').addEventListener('mouseout', function() {
            this.style.color = "#000";
        });

        document.getElementById('colorItemFour').addEventListener('mouseover', function() {
            this.style.color = "#6AB6AE";
        });
        document.getElementById('colorItemFour').addEventListener('mouseout', function() {
            this.style.color = "#000";
        });

        document.getElementById('trello').addEventListener('mouseover', function() {
            this.style.color = "#6AB6AE";
        });
        document.getElementById('trello').addEventListener('mouseout', function() {
            this.style.color = "#000";
        });

        document.getElementById('discord').addEventListener('mouseover', function() {
            this.style.color = "#6AB6AE";
        });
        document.getElementById('discord').addEventListener('mouseout', function() {
            this.style.color = "#000";
        });

        document.getElementById('elementor').addEventListener('mouseover', function() {
            this.style.color = "#6AB6AE";
        });
        document.getElementById('elementor').addEventListener('mouseout', function() {
            this.style.color = "#000";
        });

        document.getElementById('divi').addEventListener('mouseover', function() {
            this.style.color = "#6AB6AE";
        });
        document.getElementById('divi').addEventListener('mouseout', function() {
            this.style.color = "#000";
        });

        document.getElementById('canva').addEventListener('mouseover', function() {
            this.style.color = "#6AB6AE";
        });
        document.getElementById('canva').addEventListener('mouseout', function() {
            this.style.color = "#000";
        });

        document.getElementById('indesign').addEventListener('mouseover', function() {
            this.style.color = "#6AB6AE";
        });
        document.getElementById('indesign').addEventListener('mouseout', function() {
            this.style.color = "#000";
        });

        document.getElementById('photofiltre').addEventListener('mouseover', function() {
            this.style.color = "#6AB6AE";
        });
        document.getElementById('photofiltre').addEventListener('mouseout', function() {
            this.style.color = "#000";
        });

        document.getElementById('photoshop').addEventListener('mouseover', function() {
            this.style.color = "#6AB6AE";
        });
        document.getElementById('photoshop').addEventListener('mouseout', function() {
            this.style.color = "#000";
        });

        document.getElementById('procreate').addEventListener('mouseover', function() {
            this.style.color = "#6AB6AE";
        });
        document.getElementById('procreate').addEventListener('mouseout', function() {
            this.style.color = "#000";
        });

        document.getElementById('illustrator').addEventListener('mouseover', function() {
            this.style.color = "#6AB6AE";
        });
        document.getElementById('illustrator').addEventListener('mouseout', function() {
            this.style.color = "#000";
        });

        document.getElementById('xd').addEventListener('mouseover', function() {
            this.style.color = "#6AB6AE"
        });
        document.getElementById('xd').addEventListener('mouseout', function() {
            this.style.color = "#000";
        });

        document.getElementById('choicePageOne').addEventListener('mouseover', function() {
            this.style.color = "#6AB6AE";
        });
        document.getElementById('choicePageOne').addEventListener('mouseout', function() {
            this.style.color = "#000";
        });

        document.getElementById('choicePageTwo').addEventListener('mouseover', function() {
            this.style.color = "#6AB6AE";
        });
        document.getElementById('choicePageTwo').addEventListener('mouseout', function() {
            this.style.color = "#000";
        });

        document.getElementById('seemycv').addEventListener('mouseover', function() {
            this.style.color = "#6AB6AE";
        });
        document.getElementById('seemycv').addEventListener('mouseout', function() {
            this.style.color = "#000";
        });

        document.getElementById('seecvmobiledevice').addEventListener('mouseover', function() {
            this.style.color = "#6AB6AE";
        });
        document.getElementById('seecvmobiledevice').addEventListener('mouseout', function() {
            this.style.color = "#000";
        });

        // COULEUR NOIRE
        document.getElementById('colorTxtOne').style.color = "#000";
        document.getElementById('colorTxtTwo').style.color = "#000";
        document.getElementById('colorTxtThree').style.color = "#000";
        document.getElementById('colorTxtFour').style.color = "#000";
        document.getElementById('colorItemOne').style.color = "#000";
        document.getElementById('colorItemTwo').style.color = "#000";
        document.getElementById('colorItemThree').style.color = "#000";
        document.getElementById('colorItemFour').style.color = "#000";
        document.getElementById('trello').style.color = "#000";
        document.getElementById('discord').style.color = "#000";
        document.getElementById('elementor').style.color = "#000";
        document.getElementById('divi').style.color = "#000";
        document.getElementById('canva').style.color = "#000";
        document.getElementById('indesign').style.color = "#000";
        document.getElementById('photofiltre').style.color = "#000";
        document.getElementById('photoshop').style.color = "#000";
        document.getElementById('procreate').style.color = "#000";
        document.getElementById('illustrator').style.color = "#000";
        document.getElementById('xd').style.color = "#000";
        document.getElementById('pseudoIG').style.color = "#000";
        document.getElementById('pseudoTWT').style.color = "#000";
        document.getElementById('pseudoLKN').style.color = "#000";
        document.getElementById('pseudoFB').style.color = "#000";
        document.getElementById('seemycv').style.color = "#000";
        document.getElementById('seecvmobiledevice').style.color = "#000";


        // MENU NAVBAR
        //Récupération de la position de la section Menu = 843px
        let startPosition = document.getElementById('navigationMenu').offsetTop;
        console.log(startPosition);
        let stopPosition = document.getElementById('backgroundTop').offsetTop;
        console.log(stopPosition);
        //Ajout de l'évenement scroll sur la fenetre
        window.addEventListener('scroll', () => {
            if (window.scrollY >= startPosition) {
                //J'ajoute la class animatedBar
                document.getElementById('menu').classList.remove('fixe-black');
                document.getElementById('menu').classList.add('fixe');
                document.getElementById('biography').style.marginTop = "100px";

            } else if (window.scrollY >= stopPosition - 661) {
                //J'ajoute la class animatedBar
                document.getElementById('menu').classList.remove('fixe');
                document.getElementById('biography').style.marginTop = "";
            }
        });
    }
};