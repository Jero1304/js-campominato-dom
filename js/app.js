console.log('griglia');

let latoGriglia = 8;
let numeroCelle = latoGriglia **2;
console.log('lato griglia:',latoGriglia,'numero celle:',numeroCelle);

const grigliaEle = document.querySelector('.griglia');
const gridBtnEle = document.getElementById('grid-btn');

gridBtnEle.addEventListener('click', function(){
    
    grigliaEle.innerHTML = '';

    for (let i = 0; i < numeroCelle; i++) {
        let num = i + 1;
        
        let divString = ` <div class="cella" style="width: calc(100% / ${latoGriglia});" >${num} </div> `;
        grigliaEle.innerHTML += divString;
    }
    
    const cellaEle = document.querySelectorAll('.cella');
    for (let i = 0; i < cellaEle.length; i++) {

        let cellaSingola = cellaEle[i];
        cellaSingola.addEventListener('click', function(){
            console.log(`cella numero ${i + 1}`);
            cellaSingola.classList.add('bg-success');
        })
    }
    
})




