(function(){
let btn = document.querySelector('.button');
let panel = document.getElementById("panel");
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close');

 	if (!modal.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }


	btn.addEventListener('click', function(){
		modal.style.display = 'flex';
		panel.style.filter = "blur(4px)";
	})
	closeBtn.addEventListener('click', function(){
		modal.style.display = 'none';
			panel.style.filter = "blur(0)";
	})
}());


(function(){
let btn1 = document.querySelector('.button1');
let panel = document.getElementById("panel");
let modal1 = document.querySelector('.modal1');
let closeBtn1 = document.querySelector('.close1');

 	if (!modal1.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
	btn1.addEventListener('click', function(){
		modal1.style.display = 'flex';
		panel.style.filter = "blur(4px)";
	})
	closeBtn1.addEventListener('click', function(){
		modal1.style.display = 'none';
			panel.style.filter = "blur(0)";
	})
}());


(function(){
let btn2 = document.querySelector('.button2');
let panel = document.getElementById("panel");
let modal2 = document.querySelector('.modal2');
let closeBtn2 = document.querySelector('.close2');

 	if (!modal2.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
	btn2.addEventListener('click', function(){
		modal2.style.display = 'flex';
		panel.style.filter = "blur(4px)";
	})
	closeBtn2.addEventListener('click', function(){
		modal2.style.display = 'none';
			panel.style.filter = "blur(0)";
	})
}());


(function(){
let btn3 = document.querySelector('.button3');
let panel = document.getElementById("panel");
let modal3 = document.querySelector('.modal3');
let closeBtn3 = document.querySelector('.close3');

 	if (!modal3.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }


	btn3.addEventListener('click', function(){
		modal3.style.display = 'flex';
		panel.style.filter = "blur(4px)";
	})
	closeBtn3.addEventListener('click', function(){
		modal3.style.display = 'none';
			panel.style.filter = "blur(0)";
	})
}());
