let screen = document.getElementById("screen");
const items = document.getElementsByClassName("btn");

screen.textContent = "0";

for (const item of items) {
    item.addEventListener("click", (e) => {
        if (item.textContent === "C") {
            screen.textContent = "0";
        } else if (item.textContent === "=") {
            screen.textContent = screen.textContent.replaceAll("x", "*");
            screen.textContent = eval(screen.innerHTML);
        } else if (
            (screen.textContent.substr(-1) === "+" ||
                screen.textContent.substr(-1) === "-" ||
                screen.textContent.substr(-1) === "x" ||
                screen.textContent.substr(-1) === "/" ||
                screen.textContent.substr(-1) === "(") &
            (item.textContent === "+" ||
                item.textContent === "-" ||
                item.textContent === "x" ||
                item.textContent === "/")
        ) {
            screen.textContent = screen.textContent.replace(/.$/, item.textContent);
        } else if (screen.textContent.substr(0, 1) === "0") {
            screen.textContent = screen.textContent.replace(/^./, "");
            screen.textContent += item.textContent;
        } else {
            screen.textContent += item.textContent;
        }
    });
}

window.addEventListener("error", (e) => {
    screen.innerHTML = screen.textContent + "<br> = Erreur";
});
