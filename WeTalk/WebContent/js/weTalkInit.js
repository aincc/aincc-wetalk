// Android Density 확인 
function checkDensity()
{
	if (1.5 == window.devicePixelRatio) 
	{
		alert("This is a high-density screen");
	} 
	else if (0.75 == window.devicePixelRatio) 
	{
		alert("This is a low-density screen");
	}
	else if (1.0 == window.devicePixelRatio)
	{
		alert("This is a mid-density screen");
	}
	
}

// orientation 확인팝업 
function checkRotation() 
{
	// document.getElementById('label').innerHTML = 'Orientation: ' + window.orientation + ' Width: ' + screen.width + ' Height: '+screen.height;
	alert('Orientation: ' + window.orientation + ' Width: ' + screen.width + ' Height: ' + screen.height);
}

// orientation 확인을 위한 resize 이벤트 등록 
// <body onload='addEventOrientation();'>
// 파라미터로 함수를 받을 경우 해당 함수는 반드시 먼저 선언되어있어야 한다.
function addEventOrientation(handler) 
{
	window.addEventListener('resize', handler, false);
}

