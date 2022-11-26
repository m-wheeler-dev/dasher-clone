// RESPONSIVE NAV
let navBtn = document.querySelector("#menu-icon");
let navMenu = document.querySelector("nav");

navBtn.addEventListener("click", () => {
	navMenu.classList.toggle("responsive-nav-menu");
});

// NAV DROPDOWNS
let navItems = document.getElementsByClassName("nav-menu-item");

for (i = 0; i < navItems.length; i++) {
	let submenu = navItems[i];
	submenu.addEventListener("click", () => {
		submenu.classList.toggle("open-submenu");
	});
}

// FAQ DROPDOWNS
let faqItems = document.getElementsByClassName("faq-item");

for (i = 0; i < faqItems.length; i++) {
	let answer = faqItems[i];
	answer.addEventListener("click", () => {
		answer.classList.toggle("show-answer");
	});
}
