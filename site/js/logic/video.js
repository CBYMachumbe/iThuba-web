const video = document.getElementById('mainUser');

const constraints = {
    audio: true,
    video: {width: 260, height: 120},
    
};

function startVideo() {
    navigator.getUserMedia(
        constraints,
        stream => video.srcObject = stream,
        err => console.error(err)
    );
}

startVideo();

/*
    const video = document.getElementById('otherUser');

const constraints = {
    audio: true,
    video: {width: 720, height: 520},
    
};

function startVideo() {
    navigator.getUserMedia(
        constraints,
        stream => video.srcObject = stream,
        err => console.error(err)
    );
}

startVideo();
*/
