function MAX(form){
    a = parseFloat(form.a.value); 
    b = parseFloat(form.b.value);
    c = parseFloat(form.c.value);
    document.getElementById("kq").innerHTML = Math.max(a,b,c);
} 
function MIN(form){
    a = parseFloat(form.a.value); 
    b = parseFloat(form.b.value);
    c = parseFloat(form.c.value);
    document.getElementById("kq").innerHTML = Math.min(a,b,c);
}
function Tich(form){
    a = parseFloat(form.a.value); 
    b = parseFloat(form.b.value);
    document.getElementById("kq").innerHTML = a*b;
} 
function sin(form){
    a = parseFloat(form.a.value); 
    document.getElementById("kq").innerHTML = Math.sin(a);
} 
function cos(form){
    a = parseFloat(form.a.value); 
    document.getElementById("kq").innerHTML = Math.cos(a);
} 