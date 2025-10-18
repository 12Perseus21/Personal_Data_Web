const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Scroll
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    })
})

document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.getElementById('hamburger');
	const sideMenu = document.getElementById('sideMenu');
	const overlay = document.getElementById('overlay');

	function openMenu() {
		hamburger.classList.add('active');
		sideMenu.classList.add('active');
		overlay.classList.add('active');
		sideMenu.setAttribute('aria-hidden', 'false');
	}

	function closeMenu() {
		hamburger.classList.remove('active');
		sideMenu.classList.remove('active');
		overlay.classList.remove('active');
		sideMenu.setAttribute('aria-hidden', 'true');
	}

	function toggleMenu() {
		if (sideMenu.classList.contains('active')) closeMenu(); else openMenu();
	}

	// toggle on hamburger click
	hamburger.addEventListener('click', (e) => {
		e.stopPropagation();
		toggleMenu();
	});

	// close when clicking overlay
	overlay.addEventListener('click', closeMenu);

	// close when pressing Escape
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') closeMenu();
	});

	// Smooth scroll and auto-close when clicking menu links
	sideMenu.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', (evt) => {
			evt.preventDefault();
			const target = document.querySelector(link.getAttribute('href'));
			if (target) target.scrollIntoView({ behavior: 'smooth' });
			closeMenu();
		});
	});

	// optional: click outside the menu (on body) to close
	document.addEventListener('click', (e) => {
		if (!sideMenu.contains(e.target) && !hamburger.contains(e.target) && sideMenu.classList.contains('active')) {
			closeMenu();
		}
	});
});
