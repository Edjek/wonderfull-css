const code_morse = { "A" : ".-", "b" : 2, "c": 3 };
const letter = document.querySelector('.a');
const code = document.querySelector('.code');

letter.addEventListener("click", function () {
    let key  = letter.innerText
    let light =code_morse[key]
    function hidden() {
        code.style.visibility = "hidden";
    }

    for (var i = 0; i < light.length; i++) {
        if (light.charAt(i) == ".") {
            console.log(light)
            setTimeout(hidden, 1000);
        } else if (light.charAt(i) == "-") {
            console.log(light)
            setTimeout(hidden,2000)
        }
        code.style.visibility = "visible";
    }
});
code.style.visibility = "visible";