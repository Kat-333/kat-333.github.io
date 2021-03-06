/* функция для расчета высоты равной 100vh на мобильных устройтсвах(без учета строки адреса)*/
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty("--vh", `${vh}px`);
});

/* аккордион */
var acc1 = document.getElementById("1");
var arrow1 = document.getElementById("arrow1");
var acc2 = document.getElementById("2");
var arrow2 = document.getElementById("arrow2");
var acc3 = document.getElementById("3");
var arrow3 = document.getElementById("arrow3");

function accShow1() {
	
		if (acc1.style.display != "block") {
			acc1.style.display = "block";
			arrow1.style.transform = "rotate(180deg)";
			acc2.style.display = "none";
			arrow2.style.transform = "rotate(0deg)";
			acc3.style.display = "none";
			arrow3.style.transform = "rotate(0deg)";
		}	
		else {
			acc1.style.display = "none"
			arrow1.style.transform = "rotate(0deg)";
		}
	}

function accShow2() {
	
		if (acc2.style.display != "block") {
			acc2.style.display = "block";
			arrow2.style.transform = "rotate(180deg)";
			acc1.style.display = "none";
			arrow1.style.transform = "rotate(0deg)";
			acc3.style.display = "none";
			arrow3.style.transform = "rotate(0deg)";
		}
		else {
			acc2.style.display = "none";
			arrow2.style.transform = "rotate(0deg)";
		}
	}

function accShow3() {
	
	if (acc3.style.display != "block") {
		acc3.style.display = "block";
		arrow3.style.transform = "rotate(180deg)";
		acc1.style.display = "none";
		arrow1.style.transform = "rotate(0deg)";
		acc2.style.display = "none";
		arrow2.style.transform = "rotate(0deg)";
		/*console.log (acc3.style.display, arrow3.style.transform)*/
	}
	else {
		acc3.style.display = "none";
		arrow3.style.transform = "rotate(0deg)";
	}
}


/* слайдер без анимации, но с зацикливанием - начало
var slideIndex = 1;
var slides = document.getElementsByClassName("slide");
for (i = 0; i < slides.length; i++) {
}

function showSlides(n) {
	var i , y;
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "flex";
}

showSlides(slideIndex);


function plusSlide() {
	showSlides(slideIndex += 1);
}

function minusSlide() {
	showSlides(slideIndex -= 1);
}  
слайдер без анимации, но с зацикливанием - конец*/


/*слайдер с анимацией прокручивания, но без зацикливания - начало
var slides = document.getElementsByClassName("slide_wrapper");
var width = window.getComputedStyle(slides[0]).width;
console.log (slides);
console.log (width);
width = parseInt (width);
console.log (width);
var i = slides.length;
console.log (i);
var offset = i * width;
console.log (offset);
i--;

var slide_block = document.getElementById("slides1");
slide_block.style.width = offset + "px";
console.log (slide_block.style);
offset = 0;

function plusSlide() {
	if (offset < width * i) {
		offset += width;
		slide_block.style.transform = "translate3d(-" + offset + "px, 0px, 0px)";
	}
		else {
		offset = 0;
		slide_block.style.transform = "translate3d(-" + offset + "px, 0px, 0px)";
	}
}

function minusSlide() {
	if (offset > 0) {
		offset -= width;
		slide_block.style.transform = "translate3d(-" + offset + "px, 0px, 0px)";
	}
	else {
		offset = width * i;
		slide_block.style.transform = "translate3d(-" + offset + "px, 0px, 0px)";
	}
}
слайдер с анимацией прокручивания, но без зацикливания - конец*/

/* слайдер с анимацией и зацикливанием */
var slides1 = document.getElementsByClassName("slide_wrapper1");
var slides2 = document.getElementsByClassName("slide_wrapper second");
var width1 = window.getComputedStyle(slides1[0]).width;
width1 = parseInt (width1);
var width2 = window.getComputedStyle(slides2[0]).width;
width2 = parseInt (width2);
var i1 = slides1.length;
var i2 = slides2.length;
var offset1 = (i1 + 1) * width1;
var offset2 = (i2 + 1) * width2;
i1--;
i2--;

var slide_block1 = document.getElementById("slides1");
var slide_block2 = document.getElementById("slides2");
slide_block1.style.width = offset1 + "px";
slide_block2.style.width = offset2 + "px";
offset1 = 0;
offset2 = 0;

function plusSlide(n) {
	if (n == "1") {
		offset = offset1;
		slide_block = slide_block1;
		i = i1;
		width = width1;
	}
	if (n == "2") {
		offset = offset2;
		slide_block = slide_block2;
		i = i2;
		width = width2;
	}

	if (offset < width * i) {
		offset += width;
		slide_block.style.transform = "translate3d(-" + offset + "px, 0px, 0px)";
	}
		else {
			let elm, buf;
			elm = slide_block.firstElementChild;
			buf = elm.cloneNode(true);
			slide_block.insertBefore(buf, null);
			offset += width;
			slide_block.style.transform = "translate3d(-" + offset + "px, 0px, 0px)";
			setTimeout(function() {
				slide_block.style.transition = "0s";
				slide_block.removeChild(elm);
				offset -= width;
				slide_block.style.transform = "translate3d(-" + offset + "px, 0px, 0px)";
				if (n == "1") {
					offset1 = offset;
				}
				if (n == "2") {
					offset2 = offset;
				}
			}, 1500);
			slide_block.style.transition = "1.5s";
		}

	if (n == "1") {
		offset1 = offset;
	}
	if (n == "2") {
		offset2 = offset;
	}

}

function minusSlide(n) {
	if (n == "1") {
		offset = offset1;
		slide_block = slide_block1;
		i = i1;
		width = width1;
	}
	if (n == "2") {
		offset = offset2;
		slide_block = slide_block2;
		i = i2;
		width = width2;
	}

	if (offset > 0) {
		slide_block.style.transition = "1.5s";
		/* console.log("offset1", offset); */
		offset -= width;
		/* console.log("offset2", offset); */
		slide_block.style.transform = "translate3d(-" + offset + "px, 0px, 0px)";
	}
	else {
			let elm, buf;
			elm = slide_block.lastElementChild;
			buf = elm.cloneNode(true);
			slide_block.style.transition = "0s";
			slide_block.insertBefore(buf, slide_block.firstElementChild);
			/* console.log("slide_block", slide_block);
			console.log("offset3", offset); */
			offset += width;
			/* console.log("offset4", offset); */
			slide_block.style.transform = "translate3d(-" + offset + "px, 0px, 0px)";
			/* console.log("offset5", offset); */
			offset -= width;
			/* console.log("offset6", offset); */
			setTimeout(function() {
				slide_block.style.transition = "1.5s";
				slide_block.style.transform = "translate3d(-" + offset + "px, 0px, 0px)";
				console.log("slide_block", slide_block);
				slide_block.removeChild(elm);
			}, 100);	
		}
	if (n == "1") {
		offset1 = offset;
	}
	if (n == "2") {
		offset2 = offset;
	}
}

/* Сенсорное управление слайдерами */
let xTouchStart, xTouchFinish;
slide_block1.addEventListener("touchstart", function(e) {
	xTouchStart = parseInt(e.touches[0].clientX);
	/* console.log(xTouchStart); */
}, false);
 slide_block1.addEventListener('touchend', function(e) {	
	xTouchFinish = parseInt(e.changedTouches[0].clientX);
	/* console.log(xTouchFinish); */ 
	if ((xTouchStart - xTouchFinish) < -70) {
		minusSlide(1);
	}
	else if ((xTouchStart - xTouchFinish) > 70) {
		plusSlide(1);
	}
	/* xTouchStart = 0; 
	xTouchFinish = 0; */
 }, false);

 slide_block2.addEventListener("touchstart", function(e) {
	xTouchStart = parseInt(e.touches[0].clientX);
	/* console.log(xTouchStart); */
}, false);
 slide_block2.addEventListener('touchend', function(e) {	
	xTouchFinish = parseInt(e.changedTouches[0].clientX);
	/* console.log(xTouchFinish); */
	if ((xTouchStart - xTouchFinish) < -50) {
		minusSlide(2);
	}
	else if ((xTouchStart - xTouchFinish) > 50) {
		plusSlide(2);
	}
	/* xTouchStart = 0; 
	xTouchFinish = 0; */
 }, false);






/* для модальных окон */

function modalOpen (window) {
	let id = window
	let open = document.getElementById(id);
	console.log(open);
	open.style.display = "flex";

	let modalImg = document.getElementById(id + "_img");
	console.log(modalImg);
	let modalImgWidth = getComputedStyle(modalImg);
	console.log(modalImgWidth)
	modalImgWidth = parseInt(modalImgWidth.width);
	document.documentElement.style.setProperty("--modalImgWidth", `${modalImgWidth}px`);
	
/* 	let test = open.getBoundingClientRect();
	console.log(test); */
}

function modalClose (window) {
	let id = window
	let close = document.getElementById(id);
	close.style.display = "none";
}






