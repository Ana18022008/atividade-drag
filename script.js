const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.currentTarget.id);
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', (event) => {
    event.preventDefault();
    dropzone.classList.add('over');
  });

  dropzone.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('over');
  });

  dropzone.addEventListener('drop', (event) => {
    event.preventDefault();
    dropzone.classList.remove('over');

    const id = event.dataTransfer.getData('text/plain');
    const dragged = document.getElementById(id);
    const originDropzone = dragged.parentElement; 
    const targetDropzone = dropzone;            
   
    if (targetDropzone.children.length > 0) {
      const pieceInTarget = targetDropzone.children[0];

      
      originDropzone.appendChild(pieceInTarget);
      targetDropzone.appendChild(dragged);

    } else {
      targetDropzone.appendChild(dragged);
    }
  });
});