var playerChoices = Array.from(document.getElementsByClassName("btn-choice"));

playerChoices.forEach(element => {
    element.addEventListener("click", function() {
        for(let i = 0; i < 3; i++){
            document.getElementsByClassName("btn-choice")[i].classList.remove("chosen-movement");
        }
        let choice = playerChoices.indexOf(element);
        document.getElementsByClassName("btn-choice")[choice].classList.add("chosen-movement");

        if(choice!==null){
            document.getElementById("play").addEventListener("click", event => {
                document.getElementById("choice-img").classList.remove('rotate45');
                document.querySelector(".won").classList.add("hidden");
                document.querySelector(".lost").classList.add("hidden");
                document.querySelector(".tie").classList.add("hidden");

                const imagesPath = ['images/rock.svg', 'images/paper.svg', 'images/scissors.svg']

                let computerChoice = Math.floor(Math.random()*3);

                document.getElementById("choice-img").setAttribute('src', imagesPath[computerChoice])
                if(imagesPath[computerChoice].includes('images/rock.svg')){
                    document.getElementById("computer-box").style.padding="10%";
                }else if(imagesPath[computerChoice].includes('images/scissors.svg')){
                    document.getElementById("computer-box").style.padding="8.5%";
                }else{
                    document.getElementById("computer-box").style.padding="8%";
                }

                if(imagesPath[computerChoice].includes('images/scissors.svg')){
                    document.getElementById("choice-img").classList.add('rotate45');
                }
                
                var tie = (choice === computerChoice) ? true : false;
                var loss = ((choice === 0 && computerChoice === 1)||(choice === 1 && computerChoice === 2)||(choice === 2 && computerChoice === 0)) ? true : false;
                var win = ((choice === 0 && computerChoice === 2)||(choice === 1 && computerChoice === 0)||(choice === 2 && computerChoice === 1)) ? true : false;

                tie ? document.querySelector(".tie").classList.remove("hidden") : win ? document.querySelector(".won").classList.remove("hidden") : document.querySelector(".lost").classList.remove("hidden");
            })
        }
    });

});
document.getElementById("reset").addEventListener("click", event => {
    location.reload();
});

