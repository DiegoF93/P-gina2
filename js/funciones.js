jQuery(document).ready(listo);

function listo()
{
	jQuery(".hamb").click(function(e){
		e.preventDefault();
		jQuery("header .container nav").toggleClass("open");
	});
	jQuery("header .container nav a").click(function(){
		jQuery("header .container nav").removeClass("open");
		var dev = jQuery(this).attr("href");
		jQuery("html,body").animate({
			"scrollTop": jQuery(dev).offset().top - 100
		})
	})
}

let more = document.querySelectorAll('.more');
			for (let i = 0; i<more.length;i++){
				more[i].addEventListener('click',function(){
					more[i].parentNode.classList.toggle('active')
				})
			}