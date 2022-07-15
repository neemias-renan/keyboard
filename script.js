var volume = 1

function tocar(nota) {
	const view = document.getElementById("view").innerText = "Piano."
	const n = document.getElementById(nota)
	n.volume = volume;
	n.currentTime = 0;
	n.play()
}

function keyPressed(evt) {
	evt = evt || window.event;
	var key = evt.keyCode || evt.which;
	return String.fromCharCode(key);
}

document.onkeyup = function() {
	t = document.getElementsByClassName("key press")
	if(t.length >= 1){
		v = document.getElementsByClassName("key press")[0]
		v.setAttribute("class","key")
	}
}

document.onkeypress = function(evt) {
	var str = keyPressed(evt);

	if (str != "a" && str != "w" && str != "s" && str != "e" && str != "d" && str != "f" && str != "t" && str != "g" && str != "y" && str != "h" && str != "u" && str != "j" && str != "i" && str != "k" && str != "o" && str != "l" && str != "p" && str != "ç"){
		return 0
	}
	if (str == 'a') {
		tocar('do1')
		t = document.getElementsByClassName("key")[7]
		t.setAttribute("class","key press")
	}
	if (str == 'w') {
		tocar('doS1')
		t = document.getElementsByClassName("key")[0]
		t.setAttribute("class","key press")
	}
	if (str == 's') {
		tocar('re1')
		t = document.getElementsByClassName("key")[8]
		t.setAttribute("class","key press")
	}
	if (str == 'e') {
		tocar('reS1')
		t = document.getElementsByClassName("key")[1]
		t.setAttribute("class","key press")
	}
	if (str == 'd') {
		tocar('mi1')
		t = document.getElementsByClassName("key")[9]
		t.setAttribute("class","key press")
	}
	if (str == 'f') {
		tocar('fa1')
		t = document.getElementsByClassName("key")[10]
		t.setAttribute("class","key press")
	}
	if (str == 't') {
		tocar('faS1')
		t = document.getElementsByClassName("key")[2]
		t.setAttribute("class","key press")
	}
	if (str == 'g') {
		tocar('sol1')
		t = document.getElementsByClassName("key")[11]
		t.setAttribute("class","key press")
	}
	if (str == 'y') {
		tocar('solS1')
		t = document.getElementsByClassName("key")[3]
		t.setAttribute("class","key press")
	}
	if (str == 'h') {
		tocar('la1')
		t = document.getElementsByClassName("key")[12]
		t.setAttribute("class","key press")
	}
	if (str == 'u') {
		tocar('laS1')
		t = document.getElementsByClassName("key")[4]
		t.setAttribute("class","key press")
	}
	if (str == 'j') {
		tocar('si1')
		t = document.getElementsByClassName("key")[13]
		t.setAttribute("class","key press")
	}
	if (str == 'k') {
		tocar('do2')
		t = document.getElementsByClassName("key")[14]
		t.setAttribute("class","key press")
	}
	if (str == 'o') {
		tocar('doS2')
		t = document.getElementsByClassName("key")[5]
		t.setAttribute("class","key press")
	}
	if (str == 'l') {
		tocar('re2')
		t = document.getElementsByClassName("key")[15]
		t.setAttribute("class","key press")
	}
	if (str == 'p') {
		tocar('reS2')
		t = document.getElementsByClassName("key")[6]
		t.setAttribute("class","key press")
	}
	if (str == 'ç') {
		tocar('mi2')
		t = document.getElementsByClassName("key")[16]
		t.setAttribute("class","key press")
	}

	

};



function Volume() {
	const NovoVolume = document.getElementById("volume").value

	const view = document.getElementById("view").innerText = "Volume:" + (NovoVolume * 10)

	volume = NovoVolume
	// resetView()
}

// function resetView(){
// 	const view = document.getElementById("view").innerText ="Piano."
// }




