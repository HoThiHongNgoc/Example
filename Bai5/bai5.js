var Q1 =document.getElementById("quantity1");
var Q2 = document.getElementById("quantity2");
var Q3 = document.getElementById("quantity3");
var price1 = document.getElementById("price1");
var price2 = document.getElementById("price2");
var price3 = document.getElementById("price3");
Q1.addEventListener('keyup', function(){
    if (isNaN(Q1.value)) {
        alert("Không phải số(Nhập 0 nếu không có)");
    }else{
    price1.value = parseInt (Q1.value)*10 +"$"
    }
});
Q2.addEventListener('keyup', function(){
    if (isNaN(Q2.value)) {
        alert("Không phải số(Nhập 0 nếu không có)");
    }else{
    price2.value = parseInt (Q2.value)*20 +"$"
    }
});
Q3.addEventListener('keyup', function(){
    if (isNaN(Q3.value)) {
        alert("Không phải số(Nhập 0 nếu không có)");
    }else{
    price3.value = parseInt (Q3.value)*15 +"$"
    }
});

function sum(){
    document.getElementById("total").innerHTML = parseInt(price1.value) +parseInt(price2.value)+parseInt(price3.value)+"$";
    }
    