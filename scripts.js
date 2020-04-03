function calculateTip(){
	let bill = 		document.getElementById("bill").value;
	let quality = 	document.getElementById("service").value;
	let tipTotal = 	document.getElementById("tipTotal").value;
	let billTotal = document.getElementById("billTotal").value;

	if(bill == 0){
		alert("Input a bill amount");
		document.getElementById("tipTotal").innerHTML = "";
		document.getElementById("billTotal").innerHTML = "";
		return;
	}
	//Tip Calculation
	let total = bill * quality;
	let Total = parseFloat(bill) + parseFloat(total);

	//Display Tip
	document.getElementById("tipTotal").innerHTML = total;
	document.getElementById("billTotal").innerHTML = Total;
}


	//To call function
document.getElementById("calculate").onclick = function(){
	calculateTip();
}