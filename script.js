function encriptar(){
  var texto=document.getElementById("inputTexto").value.toLowerCase();
  var txtCifrado=texo.replace(/e/igm,"enter");
  var txtCifrado=textCifrado.replace(/o/igm,"ober");
  var txtCifrado=textCifrado.replace(/i/igm,"imes");
  var txtCifrado=textCifrado.replace(/a/igm,"ai");
  var txtCifrado=txtCifrado.replace(/u/igm,"ufat");

  document.getElementById("imgDer").style.display="none";
  document.getElementById("texto").style.display="none";
  document.getElementById("texto2").innerHTML=txtCifrado;
  document.getElementById("copiar").style.display="show";
  document.getElementById("copiar").style.display="inherit";

}



function desencriptar(){
  var texto=document.getElementById("inputTexto").value.toLowerCase();
  var txtCifrado=texo.replace(/enter/igm,"e");
  var txtCifrado=textCifrado.replace(/ober/igm,"o");
  var txtCifrado=textCifrado.replace(/imes/igm,"i");
  var txtCifrado=textCifrado.replace(/ai/igm,"a");
  var txtCifrado=txtCifrado.replace(/ufat/igm,"u");

  document.getElementById("imgDer").style.display="none";
  document.getElementById("texto").style.display="none";
  document.getElementById("texto2").innerHTML=txtCifrado;
  document.getElementById("copiar").style.display="show";
  document.getElementById("copiar").style.display="inherit";

}



function copy(){
  var contenido=document.querySelector("#texto2");
  contenido select();
  document.execCommand("copy");
  alert("Texto Copiado");
}
