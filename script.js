const rootSketchContainer = document.querySelector('.sketch-container');
const grid = document.createElement('div');
const createPlaceHolderButton = document.querySelector("#createPlaceHolder");
const clearPlaceHolderButton = document.querySelector("#clear");

createPlaceHolderButton.addEventListener('click', () => {
    let placeholder = eval(prompt("Choice scale a sketchholder\nExample: (86 * 30)\nWill created window with 86 width and 30 height:"));
    for (let i = 0; i < placeholder; i++) {
        let newGrid = document.createElement('div');
        newGrid.id = i;
        newGrid.className = 'grid';

        newGrid.addEventListener('mousedown', function() {
            console.log("click");
            newGrid.style.backgroundColor = 'black';
        });
        rootSketchContainer.append(newGrid);
    }

    let gridsArray = document.querySelectorAll('.grid');

    clearPlaceHolderButton.addEventListener('click', () => {
        rootSketchContainer.remove(grid);
    });
});

// TODO: 
//      1) Fix create placeholder after deleting.
