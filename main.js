const stages = [
    {
        description: "Ao chegar no templo, você se depara com um corredor extenso, enquanto anda por eles, consegue observar uma série de estátuas enfileiradas de ambos os lados, elas parecem antigas, algumas cheias de musgo e outras caindo aos poedaços, mas estranhamente, cinco estátuas parecem menos destruídas que as demais, segurando espadas apontadas para cima, quase como se alguém cuidasse delas. Chegando ao fim do corredor, você se depara com uma mensagem escrita no que parece ser a cifra da qual o professor falou anteriormente e ao lado um painel que parece aguardar por um texto. talvez algo nessa sala possa lhe ajudar a descobrir como decodificar essa mensagem:",
        message: "XJ F AJWIFIJ VZJW JSHTSYWFW, UTW JXXFX UTWYFX IJAJ UFXXFW",
        answer: "SE A VERDADE QUER ENCONTRAR, POR ESSAS PORTAS DEVE PASSAR",
        shift: 3
    },
    {
        description: "Após algum tempo se passar, você decide seguir seu caminho até a porta para a próxima sala, sem ouvir mais nada. Na sua frente, pequenos desenhos começam a se formar diante dos seus olhos, formando uma frase que diz: somos levados pelo mundo, passando por diversas estações, cada uma delas nos fazendo crescer de uma maneira diferente. Você se questiona sobre a lógica desse frase, mas sabe que algo nela vai lhe revelar o número para decodificar a frase embaralhada que vem logo em sequência.",
        message: "QIQSVMEW KYEVHEHEW EUYM HIZIQ TEVE WIQTVI WIVIQ IWUYIGMHEW",
        answer: "MEMORIAS GUARDADAS AQUI DEVEM PARA SEMPRE SEREM ESQUECIDAS",
        shift: 3
    },
    {
        description: "Você chega a uma porta trancada mais uma vez, um daqueles pequenos painés que parecem aguardar uma resposta e, logo abaixo, uma mensagem. Mais um tipo de charada que diz: para essa porta abrir, quantos pares de olhos observando você deve descobrir. Olhando ao redor, você pode notar que seis quadros observam diretamente essa porta, no chão, uma mensagem surge com aquele delicado brilho azul que você já havia visto antes.",
        message: "G BKXJGJK KYZG SGOY VKXZU JU WAK TATIG",
        answer: "A VERDADE ESTA MAIS PERTO DO QUE NUNCA",
        shift: 3
    }
];

let currentStage = 0;

document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('dialogoEscri1').addEventListener('click', dialogoEscri1);
document.getElementById('dialogoEscri2').addEventListener('click', dialogoEscri2);
document.getElementById('dialogoEscri3').addEventListener('click', dialogoEscri3);
document.getElementById('dialogoEscri4').addEventListener('click', dialogoEscrend);
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
document.querySelectorAll('.play-again').forEach(button => {
    button.addEventListener('click', resetGame);
});

document.getElementById('dtd1').addEventListener('click', dtd1n);
document.getElementById('dtd2').addEventListener('click', dtd2n);
document.getElementById('dtd3').addEventListener('click', dtd3n);
document.getElementById('dtd4').addEventListener('click', dtd4n);
document.getElementById('dtd5').addEventListener('click', dtd5n);

document.getElementById('bbt1').addEventListener('click', biblioteca1);
document.getElementById('bbt2').addEventListener('click', biblioteca2);
document.getElementById('bbt3').addEventListener('click', biblioteca3);

document.getElementById('bsp1').addEventListener('click', sp1);
document.getElementById('bsp2').addEventListener('click', sp2);
document.getElementById('bsp3').addEventListener('click', sp3);

document.getElementById('blb1').addEventListener('click', lb1);
document.getElementById('blb2').addEventListener('click', lb2);
document.getElementById('blb3').addEventListener('click', lb3);

document.getElementById('escolhaFinal1').addEventListener('click', showFinal1);
document.getElementById('escolhaFinal2').addEventListener('click', showFinal2);

function startGame() {
    changeBackground();
    document.getElementById('intro').style.display = 'none';
    document.getElementById('escritorioNovan').style.display = 'block';
}

function dialogoEscri1() {
    document.getElementById('en1').style.display = 'none';
    document.getElementById('en2').style.display = 'block';
}
function dialogoEscri2() {
    document.getElementById('en2').style.display = 'none';
    document.getElementById('en3').style.display = 'block';
}
function dialogoEscri3() {
    document.getElementById('en3').style.display = 'none';
    document.getElementById('en4').style.display = 'block';
}
function dialogoEscrend() {
    document.getElementById('en4').style.display = 'none';
    document.getElementById('escritorioNovan').style.display = 'none';
    document.getElementById('TemploDialogo').style.display = 'block';
    document.getElementById('en1').style.display = 'block';
    changeBackground();
}

function dtd1n() {
    document.getElementById('td1').style.display = 'none';
    document.getElementById('td2').style.display = 'block';
}
function dtd2n() {
    document.getElementById('td2').style.display = 'none';
    document.getElementById('td3').style.display = 'block';
    changeBackground();
}
function dtd3n() {
    document.getElementById('td3').style.display = 'none';
    document.getElementById('td4').style.display = 'block';
}
function dtd4n() {
    document.getElementById('td4').style.display = 'none';
    document.getElementById('td5').style.display = 'block';
}
function dtd5n() {
    document.getElementById('td1').style.display = 'block';
    document.getElementById('td5').style.display = 'none';
    changeBackground();
    document.getElementById('TemploDialogo').style.display = 'none';
    document.getElementById('game').style.display = 'block  ';
    loadStage();
}

function biblioteca0(){
    changeBackground();
    document.getElementById("game").style.display = "none";
    document.getElementById("Biblioteca").style.display = "block";
    document.getElementById("bt1").style.display = "block";
}

function biblioteca1() {
    document.getElementById("bt1").style.display = "none";
    document.getElementById("bt2").style.display = "block";
}

function biblioteca2() {
    document.getElementById("bt2").style.display = "none";
    document.getElementById("bt3").style.display = "block";
}

function biblioteca3() {
    document.getElementById("Biblioteca").style.display = "none";
    document.getElementById("bt3").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("bt1").style.display = "block";
}

function sp0() {
    changeBackground();
    document.getElementById("game").style.display = "none";
    document.getElementById("SalaoPrincipal").style.display = "block";
    document.getElementById("sp1").style.display = "block";
}

function sp1() {
    document.getElementById("sp1").style.display = "none";
    document.getElementById("sp2").style.display = "block";
}

function sp2() {
    document.getElementById("sp2").style.display = "none";
    document.getElementById("sp3").style.display = "block";
}

function sp3() {
    document.getElementById("sp3").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("SalaoPrincipal").style.display = "none";
    document.getElementById("sp1").style.display = "block";
}

function lb0() {
    changeBackground();
    document.getElementById("game").style.display = "none";
    document.getElementById("laboratorio").style.display = "block";
    document.getElementById("lb1").style.display = "block";
}

function lb1() {
    document.getElementById("lb1").style.display = "none";
    document.getElementById("lb2").style.display = "block";
}

function lb2() {
    document.getElementById("lb2").style.display = "none";
    document.getElementById("lb3").style.display = "block";
}

function lb3() {
    document.getElementById("lb3").style.display = "none";
    document.getElementById("lb4").style.display = "block";
}

function changeBackground() {
    const startBackground = 'ruins-art-09.jpg';
    const backgrounds = [
        'EscritorioNovan.jpg',
        'PierRachel.jpg',
        'barracaCarlos.jpg',
        'CorredorEntrada.jpg',
        'biblioteca.jpg',
        'salaoPrincipal.jpg',
        'laboratorio.jpg',
    ];

    const currentBackground = document.body.style.backgroundImage;

    const currentImage = currentBackground.replace(/url\(["']?|["']?\)/g, '');

    const currentIndex = backgrounds.indexOf(currentImage);

    if (currentIndex === backgrounds.length - 1) {
        document.body.style.backgroundImage = `url(${startBackground})`;
    } else {
        const nextBackgroundIndex = (currentIndex + 1) % backgrounds.length;
        document.body.style.backgroundImage = `url(${backgrounds[nextBackgroundIndex]})`;
    }
}

const backgroundMusic = new Audio('sacredGarden.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;

function playBackgroundMusic() {
    backgroundMusic.play().catch(error => {
        console.error('Erro ao reproduzir a música automaticamente:', error);
    });
}

document.addEventListener('click', () => {
    playBackgroundMusic();
}, { once: true });

function updateGameScreen() {
    const stage = stages[currentStage];
    document.getElementById('stage-title').textContent = `Etapa ${currentStage + 1}`;
    document.getElementById('stage-description').textContent = stage.description;
    document.getElementById('encrypted-message').textContent = stage.message;
    document.getElementById('player-input').value = '';
}

function loadStage() {
    updateGameScreen();
}

function checkAnswer() {
    const playerAnswer = document.getElementById('player-input').value.toUpperCase();
    const correctAnswer = stages[currentStage].answer;

    if (playerAnswer === correctAnswer) {
        currentStage++;
        if (currentStage < stages.length) {
            updateGameScreen();
            if (currentStage == 1) {
                biblioteca0();
            } else if (currentStage == 2) {
                sp0();
            } else if (currentStage == 3) {
                lb0();
            }
        } else {
            lb0();
        }
    } else {
        alert('Resposta incorreta. Tente novamente!');
    }
}

function showFinal1() {
    document.getElementById('game').style.display = 'none';
    document.getElementById('lb4').style.display = 'none';
    document.getElementById('final1').style.display = 'block';
    document.getElementById("laboratorio").style.display = "none";
    document.getElementById("lb1").style.display = "block";
}

function showFinal2() {
    document.getElementById('game').style.display = 'none';
    document.getElementById('lb4').style.display = 'none';
    document.getElementById('final2').style.display = 'block';
    document.getElementById("laboratorio").style.display = "none";
    document.getElementById("lb1").style.display = "block";
}

function resetGame() {
    currentStage = 0;
    document.getElementById('final1').style.display = 'none';
    document.getElementById('final2').style.display = 'none';
    document.getElementById('game').style.display = 'none';
    document.getElementById('laboratorio').style.display = 'none';
    document.getElementById('SalaoPrincipal').style.display = 'none';
    document.getElementById('Biblioteca').style.display = 'none';
    document.getElementById('TemploDialogo').style.display = 'none';
    document.getElementById('escritorioNovan').style.display = 'none';
    document.getElementById('intro').style.display = 'block';
    changeBackground();
}

