const output = document.getElementById('output');

const weightInput = document.getElementById('weightInput');

const lbsOutput = document.getElementById('lbsOutput');
const gramsOutput = document.getElementById('gramsOutput');
const kgOutput = document.getElementById('kgOutput');
const ozOutput = document.getElementById('ozOutput');
const stOutput = document.getElementById('stOutput');


const lbsCard = document.getElementById('lbsCard');
const gramsCard = document.getElementById('gramsCard');
const kilosCard = document.getElementById('kilosCard');
const ozCard = document.getElementById('ozCard');
const stCard = document.getElementById('stCard');


const warningOutput = document.getElementById('warningOutput');
const warningCard = document.getElementById('warningCard');

const cards = [lbsCard, gramsCard, kilosCard, ozCard, stCard];


output.style.visibility = 'hidden';


const weightUnit = document.getElementById('weightUnit');

const array = [weightInput, weightUnit];
array.forEach((element) => {
    element.addEventListener('input', (e) => {
        let weight = weightInput.value;

        output.style.visibility = 'visible';

        cards.forEach(card => {
            card.style.display = 'block';
        })

        warningCard.style.display = 'none';

        let lbs, grams, kgs, oz, st;

        if(weight === ""){
            showAlert('Enter Weight!');
        }

        
        if (weightUnit.value === "lbs"){
            lbs = weight;
            grams = weight/0.0022046;
            kgs = weight/2.2046;
            oz = weight*16;
            st = weight/14;
            lbsCard.style.display = "none";
        } else if (weightUnit.value === "grams"){
            lbs = weight/454;
            grams = weight;
            kgs = weight/1000;
            oz = weight/28.35;
            st = weight/6350;
            gramsCard.style.display = "none";
        } else if (weightUnit.value === "kilos"){
            lbs = weight*2.205;
            grams = weight*1000;
            kgs = weight;
            oz = weight*35.274;
            st = weight/6.35;
            kilosCard.style.display = "none";
        } else if (weightUnit.value === "oz"){
            lbs = weight/16;
            grams = weight*28.35;
            kgs = weight/35.274;
            oz = weight;
            st = weight/224;
            ozCard.style.display = "none";
        } else if (weightUnit.value === "st"){
            lbs = weight*14;
            grams = weight*6350;
            kgs = weight*6.35;
            oz = weight*224;
            st = weight;
            stCard.style.display = "none";
        } else {
            showAlert('Choose a Weight Unit!');
        }

        lbsOutput.innerText = Math.round(lbs);
        gramsOutput.innerText= Math.round(grams);
        kgOutput.innerText = Math.round(kgs);
        ozOutput.innerText = Math.round(oz);
        stOutput.innerText = Math.round(st);
    
    })
})

function showAlert(msg){
    cards.forEach(card => {
        card.style.display = 'none';
    })
    warningCard.style.display = 'block';
    warningOutput.innerText = msg;
}


