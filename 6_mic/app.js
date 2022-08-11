let wrap = document.getElementById("center");
let mic  = document.getElementById("mic");
let dots = document.getElementById("dots");

wrap.addEventListener("click", function () {
	mic.classList.toggle("active");
	if (mic.className == "active") {
		setTimeout(function () { mic.style.display  = "none" }, 500);
        setTimeout(function () { dots.style.display = "flex" }, 500);
	} else {
		mic.style.display = "flex" ;
        dots.style.display = "none" ;
    }
});
