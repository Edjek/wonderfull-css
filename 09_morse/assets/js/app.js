const code_morse = {
    'a': '.-',    'b': '-...',  'c': '-.-.',  'd': '-..',   'e': '.',
    'f': '..-.',  'g': '--.',   'h': '....',  'i': '..',    'j': '.---',
    'k': '-.-',   'l': '.-..',  'm': '--',    'n': '-.',    'o': '---',
    'p': '.--.',  'q': '--.-',  'r': '.-.',   's': '...',   't': '-',
    'u': '..-',   'v': '...-',  'w': '.--',   'x': '-..-',  'y': '-.--',
    'z': '--..',  '0': '-----', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.'
};

const keyboard = document.querySelector('.keyboard');
const light    = document.querySelector('#light');

function blinkLight(code) {
    let i = 0;
    let intervalId = setInterval(function () {
        // Si le caractère est un point, allumer la lumière pendant une durée courte, puis l'éteindre
        if (code.charAt(i) === '.') {
            light.classList.add('on');
            setTimeout(function () {
                light.classList.remove('on');
            }, 200);
        }
        // Si le caractère est un tiret, allumer la lumière pendant une durée plus longue, puis l'éteindre
        else if (code.charAt(i) === '-') {
            light.classList.add('on');
            setTimeout(function () {
                light.classList.remove('on');
            }, 500);
        }
        // Si le caractère n'est pas un point ou un tiret, ne rien faire
        else {
            clearInterval(intervalId);
            return;
        }
        i++;
        // Si on a terminé de clignoter, arrêter l'interval
        if (i >= code.length) {
            clearInterval(intervalId);
        }
    }, 1000);
}

keyboard.addEventListener("click", function (e) {
    let key  = e.target.innerText.toLowerCase();
    let code = code_morse[key]
    blinkLight(code);
});
