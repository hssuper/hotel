var exp =  /[().-]/g; 

function limpaNumero(){
    var limpaNumero = tel;
var tel = document.getElementById('tel').value;
var limpo = tel.replace(exp,'');
limpo = tel.value;
limpo.replace(exp,'');
tel.value = limpo.replace(exp,'');
}