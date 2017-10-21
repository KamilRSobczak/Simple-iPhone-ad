function showDiv(elem){
	if(elem.value == 0)
      document.getElementById('hidden').style.display = "none";

	else if (elem.value == 3)
      document.getElementById('hidden').style.display = "block"
  }


/* pozwala używać jedynie cyfr w input */ 
/* w HTMLU "onekeypress" powinien umożliwiać blokadę boxu na możliwość wprowadzania tylko cyfr */ 
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function showAlert(){
    document.getElementById('alert').style.display = "block";
    
}
function showAdd(){
    document.getElementById('alert').style.display ="none";
    document.getElementById('main_content').style.display = "none";
    document.getElementById('add_content').style.display = "inline-block";
}

function showButton(textid){
    var number = document.getElementById(textid).value;
    if(number.length >= 9 ) {
        document.getElementById('continue').disabled = false;
        document.getElementById('continue').style.backgroundColor = "#1d98d4";
    } else {
        document.getElementById('continue').disabled = true;
        document.getElementById('continue').style.backgroundColor = "#1b78a0";
    }
    
}