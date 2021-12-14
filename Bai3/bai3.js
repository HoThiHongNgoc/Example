function giai(form){
var x1,x2;
var x,y,z,delta;
a= parseInt(form.a.value);
b= parseInt(form.b.value);
c= parseInt(form.c.value);
delta=(b*b-4*a*c)
if(delta ==0){
 x1=-b/(2*a) ;
 document.getElementById("kq").innerHTML = "Nghiệm kép: x1=x2=" + x1;
}
else if(delta<0){
 document.getElementById("kq").innerHTML = "Vô nghiệm"
} 
else{
 x1=(-b-Math.sqrt(delta))/(2*a);
 x2=(-b+Math.sqrt(delta))/(2*a);
 document.getElementById("kq").innerHTML = "Hai nghiệm phân biệt:"+"x1="+x1+",x2="+x2;
}
}

