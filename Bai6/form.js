var Activity = (document.getElementById("Activity"));
var Pulse = (document.getElementById("Pulse"));
var Grimace = (document.getElementById("Grimace"));
var Appearance = (document.getElementById("Appearance"));
var Respiration = (document.getElementById("Respiration"));
//DATE
var today = new Date();
var date = today.getDate()+ '/'+(today.getMonth()+1)+ '/'+today.getFullYear();
document.getElementById("Date").innerHTML = date ;
document.getElementById("FName").focus();
//PHYSICIAN
function txt(Physician) {
    var select = Physician.options[Physician.selectedIndex].value;
    if (select==2) {
        alert("Nhập Name");
        Other.focus();
        return;
    } 
}
//INPUT
Activity.addEventListener('keyup', function(){
    if (isNaN(Activity.value)) {
        alert("Not a number");
    }else if (parseInt (Activity.value) < 0 || parseInt( Activity.value) > 2) {
        alert("Score must be 0,1 or2");
    }else{
        return;
    }
});
Pulse.addEventListener('keyup', function(){
    if (isNaN(Pulse.value)) {
        alert("Not a number");
    }else if (parseInt (Pulse.value) < 0 || parseInt(Pulse.value) > 2) {
        alert("Score must be 0,1 or2");
    }else{
        return;
    }
});
Grimace.addEventListener('keyup', function(){
    if (isNaN(Grimace.value)) {
        alert("Not a number");
    }else if (parseInt (Grimace.value) < 0 || parseInt(Grimace.value) > 2) {
        alert("Score must be 0,1 or2");
    }else{
        return;
    }
});
Appearance.addEventListener('keyup', function(){
    if (isNaN(Appearance.value)) {
        alert("Not a number");
    }else if (parseInt (Appearance.value) < 0 || parseInt( Appearance.value) > 2) {
        alert("Score must be 0,1 or2");
    }else{
        return;
    }
});
Respiration.addEventListener('keyup', function(){
    if (isNaN(Respiration.value)) {
        alert("Not a number");
    }else if (parseInt (Respiration.value) < 0 || parseInt( Respiration.value) > 2) {
        alert("Score must be 0,1 or2");
    }else{
        return;
    }
});
//TOTAL
function sum() {
        var arr = document.getElementsByName('number');
        var total=0;
        for(var i=0;i<arr.length;i++){
            if(parseInt(arr[i].value))
                total += parseInt(arr[i].value);
        }
        document.getElementById('TOTAL').value = total;
    }


