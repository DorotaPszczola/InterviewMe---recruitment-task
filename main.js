const $hamburger = document.querySelector(".hamburger");
const $mobileMenu = document.querySelector('.menu-hamburger');

const activateHamburger = () => {
    $hamburger.classList.toggle('hamburger-active');
    $mobileMenu.classList.toggle('menu-hamburger-active');
};
// const showMobileMenu = () => {
// }

$hamburger.addEventListener('click', activateHamburger);


// slider //

let i = 0;
    const images = document.getElementsByClassName("item-image");
let time = 1000;

function changeImg(){
            images[i].classList.add("active-item");
            images[i].classList.remove("faded-item-right");
            images[Math.abs(i-1)].classList.add("faded-item-right");
            images[Math.abs(i-1)].classList.remove("faded-item-left");
            images[Math.abs(i-2)].classList.add("faded-item-left");
            images[Math.abs(i-2)].classList.remove("active-item");
            if (i < images.length - 1) {
                i++;

            } else {
                i = 0;
            }
            setTimeout("changeImg()", time)
}
window.onload = changeImg;



// contact form //

(function() {
	function toJSONString( form ) {
		let obj = {};
		const elements = form.querySelectorAll( "input, select" );
		for( let i = 0; i < elements.length; ++i ) {
		    const element = elements[i];
			const name = element.name;
			const value = element.value;

			if( name ) {
				obj[ name ] = value;
			}
		}
		return JSON.stringify( obj );
	}

	document.addEventListener( "DOMContentLoaded", function() {
		const form = document.getElementById( "contact-form" );
		const output = document.getElementById( "output" );
		form.addEventListener( "submit", function( e ) {
			e.preventDefault();
			let json = toJSONString( this );
			output.innerHTML = json;

		}, false);

	});

})();