function createEtch(sideLength) {
    if (sideLength > 64) {
        sideLength = 64;
    } 
    for (let i = 0; i < sideLength; i++) { 
        let row = document.createElement("div");
        row.className = "row"; 
        for(let j = 1; j <= sideLength; j++){    
            let cell = document.createElement("div"); 
            cell.className = "square"; 
            cell.addEventListener('mouseover', function (e) {
                e.target.style.background = 'green';
                });       
            row.appendChild(cell); 

        }
        container.appendChild(row); 
    }
}

createEtch(10);

const reset= document.querySelector('#reset');
reset.addEventListener('click', () => {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
    row.remove();
    });
   let squareHeight = prompt("How many rows do you want for this new Etch-A-Sketch?", 10);
    createEtch(squareHeight);

   
});


