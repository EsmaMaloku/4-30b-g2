console.log("Hello!!!");

function openMenu() {
	var menu = document.getElementById('myLinks');

	if (menu.style.display === "block") {
		menu.style.display = "none";
	}else{
		menu.style.display = "block";
	}
}

var slideIndexMS = 1;
var slideIndexLMS = 1;
var slideIndexMenu = 1;

var slideIntervalMS, slideIntervalLMS, slideIntervalMenu;

function showSlideMS(n) {
	var slides = document.getElementsByClassName("ms-slide");

	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	if (n > slides.length){
		slideIndexMS = 1;
	}
	if (n < 1){
		slideIndexMS = slides.length;
	}

	slides[slideIndexMS-1].style.display = "block";
}

function changeSlideMS(n) {
	 slideIndexMS += n;
    showSlideMS(slideIndexMS);
}

function showSlideLMS(n) {
	var slides = document.getElementsByClassName("lms-slide");

	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	if (n > slides.length){
		slideIndexLMS = 1;
	}
	if (n < 1){
		slideIndexLMS = slides.length;
	}

	slides[slideIndexLMS-1].style.display = "block";
}

function changeSlideLMS(n) {
	 slideIndexLMS += n;
    showSlideLMS(slideIndexLMS);
}

function showSlideMenu(n) {
	var slides = document.getElementsByClassName("menu-slide");

	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	if (n > slides.length){
		slideIndexMenu = 1;
	}
	if (n < 1){
		slideIndexMenu = slides.length;
	}

	slides[slideIndexMenu-1].style.display = "block";
}

function changeSlideMenu(n) {
	 slideIndexMenu += n;
    showSlideMenu(slideIndexMenu);
}

showSlideMS(slideIndexMS);
showSlideLMS(slideIndexLMS);
showSlideMenu(slideIndexMenu);
