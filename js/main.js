(() => {

    console.log('fired!');
    // set up the puzzle pieces and boards
    const puzzlePieces = document.querySelectorAll('.puzzle-image'),
          dropZones = document.querySelectorAll('sound-pieces');

    let imageNames = ["drumIcon", "voiceIcon", "fluteIconVerison2", "sitarIconVerison7"];
    // add event handling here -> how is the user going to use our app?
    // what triggers do we need?



  // reset the selection puzzle pieces after changing the game puzzle pieces
    function resetPuzzlePieces ()
    {
      let puzzlePlain = document.querySelector(".puzzle-pieces");
      for (let zone of dropZones) {
        console.log(zone.firstChild);
        if(zone.firstChild){
          puzzlePlain.appendChild(zone.firstChild);
        }

      }
    }


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

    if (event.currentTarget.children.length === 0) {
    event.target.appendChild(document.querySelector(`#${droppedImage}`));
    debugger;
    }
  }



    puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

    dropZones.forEach((dropZone) => {
      while (dropZone.firstChild) {

        let currentChild = dropZone.removeChild(dropZone.firstChild);
        piecesPlain.appendChild(currentChild);
      }

    })


    for (let zone of dropZones) {
        zone.addEventListener('dragover', allowDragOver);
        zone.addEventListener('drop', allowDrop);
    }

})();
