let indexContent = document.getElementById("indexContent");
let gap = 800;
let scrollBarHeight = indexContent.childElementCount * window.innerWidth + (indexContent.childElementCount - 1) * gap + 70;
document.body.style.height = scrollBarHeight + 1 + "px";
document.onscroll = function (evhient) {
	document.getElementsByTagName("footer")[0].style.display = "none";
	indexContent.style.display = "block";
	for (let i = 1; i < indexContent.childElementCount + 1; i++) {
		if (window.scrollY + window.innerHeight > scrollBarHeight - 100) {
			indexContent.style.display = "none";
			document.getElementsByTagName("footer")[0].style.display = "initial";
		} else if (window.scrollY < i * window.innerWidth + (i - 1) * gap) {
			indexContent.scrollTo(window.scrollY - (i - 1) * gap, 0);
			break;
		} else if (window.scrollY < i * window.innerWidth + i * gap) {
			indexContent.scrollTo(i * window.innerWidth, 0);
			break;
		}
	}
};
console.log(sessionStorage.getItem("openCompleted"));
window.addEventListener("load", function () {
	if (sessionStorage.getItem("openCompleted") == null) {
		sessionStorage.setItem("openCompleted", "1");
		document.body.style.overflow = "hidden";
		let door = document.getElementById("door");
		let doorDiv = document.getElementById("doorDiv");
		doorDiv.style.display = "block";
		door.onclick = function () {
			this.classList.toggle("open");
			document.getElementById("doorText").classList.toggle("fade");
			setTimeout(() => {
				doorDiv.style.display = "none";
				doorDiv.style.opacity = "0";
				document.body.style.overflow = "initial";
			}, 3000);
		};
	} else {
		doorDiv.style.display = "none";
		doorDiv.style.opacity = "0";
	}
});
