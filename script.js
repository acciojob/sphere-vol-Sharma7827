let radius = document.querySelector("#radius")
let volume = document.querySelector("#volume")
function volume_sphere() {
    //Write your code here
	let radius = parseFloat(radius.value);

	if (is(radius) || radius < 0) {
        volume.innerText = 'NaN' 
        return
    }
	
	let volumeOfSphere = (4 / 3) * Math.PI * Math.pow(radius, 3)

    volume.innerText = volumeOfSphere.toFixed(4)	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
