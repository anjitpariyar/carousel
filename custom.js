const carouselSlide= document.querySelector('.carousel-slide');
var imagesBox= document.querySelectorAll('.carousel-slide .img-box');
// prev and next
const prev=document.getElementById('prev');
const next=document.getElementById('next');

let count=1;
let width=imagesBox[count].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-width*count) + 'px)';
let x;
x= document.querySelector('.carousel-slide').childElementCount;


// event listner
next.addEventListener('click',()=>{
	if(count<(x-1)){
		carouselSlide.classList.add('transt');
		count++;
		carouselSlide.style.transform = 'translateX(' + (-width*count) + 'px)';
		
	}
	if(count==(x-1)){
		carouselSlide.style.transform = 'translateX(' + (-width*count) + 'px)';
		count=1;
		setTimeout(function(){
			carouselSlide.style.transform = 'translateX(' + (-width*count) + 'px)';
			carouselSlide.classList.remove('transt');


		}, 500);
		// carouselSlide.style.transform = 'translateX(' + (-width*count) + 'px)';
		// carouselSlide.classList.remove('transt');
		// carouselSlide.style.transform = 'translateX(' + (-width*count) + 'px)';
		// carouselSlide.style.transform = 'translateX(' + (-width*count) + 'px)';
		
	}

})
prev.addEventListener('click',()=>{
	if(count>1){
		carouselSlide.classList.add('transt');
		count--;
		carouselSlide.style.transform = 'translateX(' + (-width*count) + 'px)';
	}
	if(count==1){
		carouselSlide.style.transform = 'translateX(' + (-width*count) + 'px)';
		count=x-1;
		setTimeout(function(){
			carouselSlide.style.transform = 'translateX(' + (-width*count) + 'px)';
			carouselSlide.classList.remove('transt');


		}, 500);
	}
	
})