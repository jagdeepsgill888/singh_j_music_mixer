(() => {
    // set up the puzzle pieces and boards
    const soundPieces = document.querySelectorAll('.sound-image'),
        dropZones = document.querySelectorAll('.drop-zone'),
        musicBoard = document.querySelector(".main-board");

    let imageNames = ["bottom1", "bottom2", "bottom3"];
    // add event handling here -> how is the user going to use our app?
    // what triggers do we need?


    // debugger;
    function allowDrag(event) {
        console.log('started dragging an image: this one - ', event.target.id);

        //let the drag happen and stor a reference of the ID8 of the element we're dragging
      event.dataTransfer.setData("draggedImg", this.id);
    }

    function allowDragOver(event) {
        event.preventDefault(); //for next week
        console.log('dragged something over me');

    }

    function allowDrop(event) {
        console.log('dropped something on me');

    let droppedImage =  event.dataTransfer.getData("draggedImg");

    event.target.appendChild(document.querySelector(`#${droppedImage}`));
    //debugger;
    }



    soundPieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

    for (let zone of dropZones) {
        zone.addEventListener('dragover', allowDragOver);
        zone.addEventListener('drop', allowDrop);
    }

})();
