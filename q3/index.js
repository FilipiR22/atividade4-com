const zoomIn = document.querySelector('.zoom-in');
const zoomOut = document.querySelector('.zoom-out');
const imgsList = document.querySelectorAll('img');

zoomIn.addEventListener('click', () => {
    imgsList.forEach((e) => {
        e.style.width = (e.width + 50) + 'px';
        if(e.width>50){
            zoomOut.style.opacity='initial'
        }
    });
});

zoomOut.addEventListener('click', () => {
    imgsList.forEach((e) => {
        if(e.width>50){
            zoomOut.style.opacity='initial'
        }
        if (e.width <= 50) {
            zoomOut.style.opacity='.5'
            return
        } else {
            e.style.width = (e.width - 50) + 'px';
        }
    });
});

