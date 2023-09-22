document.getElementById('indoOnde').addEventListener('click', function() {
    var videoContainer = document.getElementById('video-container');
    var meuVideo = document.getElementById('meu-video');

    // Definir o tamanho e o estilo do vídeo em destaque
    videoContainer.style.display = 'block';
    videoContainer.style.position = 'fixed';
    videoContainer.style.top = '0';
    videoContainer.style.left = '0';
    videoContainer.style.width = '100%';
    videoContainer.style.height = '100%';
    videoContainer.style.backgroundColor = 'black';
    videoContainer.style.zIndex = '9999';

    // Centralizar o vídeo na tela
    meuVideo.style.display = 'block';
    meuVideo.style.margin = 'auto';
    meuVideo.style.width = '80%'; // Você pode ajustar o tamanho conforme desejado

    // Iniciar o vídeo
    meuVideo.play();
});
