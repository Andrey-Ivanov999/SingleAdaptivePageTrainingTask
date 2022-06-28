// "use strict"

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
const iconMenu = document.querySelector('.c-hamburger');
const menuBody = document.querySelector('.navigation');
const body = document.body;

if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle('is-active');
		 menuBody.classList.toggle('active');
		 body.classList.toggle("noscroll");
	});
}
// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menuBody.children);
 
// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});
 
// Закрытие попапа при клике на меню
function closeOnClick() {
  iconMenu.classList.remove("is-active");
  menuBody.classList.remove("active");
  body.classList.remove("noscroll");
}

const form = document.getElementById("myForm");
form.addEventListener('submit',formSend);

async function formSend (e) {
e.preventDefault();

let error = formValidate(form);
console.log(error);

let formData = new FormData(form);

// if (error === 0) {
// alert("all good");
// } 
// else {
// 	alert ("Заполните поля");
// }



}
function formValidate (form) {
	let error = 0;
	let formReq = document.querySelectorAll(".req");

	for (let index = 0; index < formReq.length; index++) {
		const input = formReq[index];
		formRemoveError(input);

		if(input.classList.contains("email")){
			if(emailTest(input)){
				formAddError(input);
				error++;
			}
		}

		else if(input.getAttribute("type") === "checkbox" && input.checked === false) {
			formAddError(input);
			error++;
		}
		
		else if (input.value === '') { 
			formAddError(input);
			error++;
		}
	}
	
}

function formAddError (input) {
	input.parentElement.classList.add("error");
	input.classList.add('error'); 
}
function formRemoveError (input) {
	input.parentElement.classList.remove('error');
	input.classList.remove("error");
}

function emailTest (input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

