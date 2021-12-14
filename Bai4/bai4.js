var dulieu = document.getElementById("dulieu");
var ketqua = document.getElementById("ketqua");
var nhap = document.getElementById("nhap");
var inhoa = document.getElementById("inhoa");
var intu = document.getElementById("intu");
var inthuong = document.getElementById("inthuong");
var demtu = document.getElementById("demtu");
var demthuong = document.getElementById("demthuong");
var inam = document.getElementById("inam");
var demhoa = document.getElementById("demhoa");
nhap.addEventListener("click",function(){
    ketqua.innerHTML = dulieu.value;
});
inhoa.addEventListener("click",function(){
    ketqua.innerHTML=dulieu.value.toUpperCase();
});
inthuong.addEventListener("click",function(){
    ketqua.innerHTML=dulieu.value.toLowerCase();
});
function removeTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}
demhoa.addEventListener("click",function(){
    var s=  removeTones(dulieu.value.toString());
    var count =s.length - s.replace(/[A-Z]/g,'').length;
    ketqua.innerHTML="Có" +" "+count+" "+"chữ hoa"
});
demthuong.addEventListener("click",function(){
    var s= removeTones(dulieu.value.toString());
    var count =s.length - s.replace(/[a-z]/g,'').length;
    ketqua.innerHTML="Có"+" " +count+" "+"chữ thường"
});
function Space(i){
    if(i==" ")
    return true;
    else return false;
}
demtu.addEventListener("click",function(){
    var s= dulieu.value.split(' ').filter(function(i){return i});
    ketqua.innerHTML="Có"+" " +s.length+" "+"từ"
});
intu.addEventListener("click",function(){
    var s= dulieu.value.split(' ').filter(function(i){return i});
    ketqua.innerHTML="";//clear nếu sự kiện trước có in ở ô kết quả
    s.forEach(element => {
        ketqua.innerHTML+=element+"\n";
    });
});
inam.addEventListener("click",function(){
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    // Check for vowels
    var s= removeTones(dulieu.value);
    s=s.replaceAll("\\s+","");
    var letters = s.split('');
    var vowelsFind = [], consonantsFind = [];
    for (var i in letters ) {
        if (vowels.includes(letters[i])) {
            vowelsFind.push(letters[i]);
        } else {
            consonantsFind.push(letters[i]) ;
        }
    }
    ketqua.innerHTML="Nguyên âm:"+" " +vowelsFind.join(",")+"."+"Phụ âm:"+" " +consonantsFind.join(",");
 
});



