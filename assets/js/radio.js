window.onload = function() {
    if(window['stream-button'])
    {
        var stream = new Howl({
            src: ['https://onair.thunderrock.ca:8443/thunder.mp3'],
            //src: ['https://rfcmedia.streamguys1.com/80hits.mp3'],
            html5: true,
            autoUnlock: false,
            onloaderror: function() {
                window['stream-container'].innerHTML = "The stream is currently offline. Please check back soon.";
            }
        })

        window['stream-button'].addEventListener('click', function() {
            if(stream && !stream.playing()) {
                stream.play();
                window['stream-button-text'].innerHTML = "<i class=\"fa fa-stop\"></i> &nbsp;LIVE";
                window['stream-button'].classList.replace('play', 'live');
                window['playing'].style.display = 'inline-flex';
            } else {
                stream.stop();
                window['stream-button-text'].innerHTML = "<i class=\"fa fa-play\"></i> &nbsp;Play";
                window['stream-button'].classList.replace('live', 'play');
                window['playing'].style.display = 'none';
            }
        });
    }
}
