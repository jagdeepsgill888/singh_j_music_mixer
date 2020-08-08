(() => {

    console.log('fired!');
    // set up the puzzle pieces and boards
    const puzzlePieces = document.querySelectorAll('.puzzle-image'),
          dropZones = document.querySelectorAll('.sound-pieces');

    let imageNames = ["drumIcon", "voiceIcon", "fluteIconVerison2", "sitarIconVerison7"],
        audioControls = document.querySelectorAll('.controls'),
        audio = document.querySelector('audio'),
        audioThumbs = document.querySelectorAll('.trackRef'),
        resetButton = document.querySelector('.fa-undo-alt');
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
       audio.pause();
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

   //audio.play();
    //audio.loop = "true";
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

    // audio testing //
    //

    function loadAndPlay() {
    // the "this" keywordd refers the image you have selected?
      let currentTrack = `assets/${this.dataset.trackref}`;

      audio.src = currentTrack;
      // load method loads whatever resource you indicate
      audio.load();

      playAudio();

    }

    function playAudio() {
      // play the audio tracks
      audio.play();
    }

    function rewindAudio() {
      // rewind the audio track
      audio.pause();
      audio.currentTime = 0;
      //debugger;
    }

    audioControls[0].addEventListener("click", playAudio);
    audioControls[1].addEventListener("click", rewindAudio);

    // process the images tags and make them load the right audio tracks
    for (thumb of audioThumbs) {
      thumb.addEventListener('click', loadAndPlay);
    }

    // listen for the end of the audio track
     audio.addEventListener('ended', () => console.log('track ended'));

    resetButton.addEventListener('click', resetPuzzlePieces);

})();
