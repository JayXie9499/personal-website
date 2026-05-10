export function handleNavClick(e: MouseEvent, href: string, callback?: () => void) {
	e.preventDefault();
	const target = document.querySelector(href);
	if (target) {
		target.scrollIntoView({ behavior: getScrollBehavior() });
		callback?.();
	}
}

export function scrollToTop() {
	window.scrollTo({ top: 0, behavior: getScrollBehavior() });
}

function getScrollBehavior(): ScrollBehavior {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
}
