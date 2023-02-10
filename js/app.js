console.log('griglia');

let latoGriglia = 4;
let numeroCelle = latoGriglia **2;
let posizioneBombe = [];
console.log('lato griglia:',latoGriglia,'numero celle:',numeroCelle);
const grigliaEle = document.querySelector('.griglia');
const gridBtnEle = document.getElementById('grid-btn');

gridBtnEle.addEventListener('click', function(){
    
    grigliaEle.innerHTML = '';
    scriviCelle(numeroCelle);

    generaBombe(posizioneBombe);
    
    
    
    
    
    const cellaEle = document.querySelectorAll('.cella');

    for (let i = 0; i < cellaEle.length; i++) {

        let cellaSingola = cellaEle[i];
        cellaSingola.addEventListener('click', function(){
        numCel = i+1;
            console.log(`cella numero ${numCel}`);

            assegnaBombe(numCel,posizioneBombe,cellaSingola)

            cellaSingola.classList.add('bg-success');               

            

        })
    }
    
})




/*******************
FUNCTION
********************/

function scriviCelle(nCelle) {
    for (let i = 0; i < nCelle; i++) {
        let num = i + 1;
        
        let divString = ` <div class="cella" style="width: calc(100% / ${latoGriglia});" >${num} </div> `;
        grigliaEle.innerHTML += divString;
    }
}

function generaBombe(bombe){
    let quanteBombe = latoGriglia * 2;
        while (bombe.length < quanteBombe) {
            
            let num = Math.floor(Math.random()*numeroCelle + 1);
            if (!bombe.includes(num)){
                bombe.push(num);
            }    
        }
        console.log(bombe);
}

function assegnaBombe(n,position,div) {
    for (let i = 0; i < position.length; i++) {
        if (n === position[i]) {
            div.classList.add('bg-danger'); 
            console.log('BOOM!');
        }        
    }
}
