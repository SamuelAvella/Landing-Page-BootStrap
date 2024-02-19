/*****funcion escribir y borrar lo escrito para mas creatividad*******/
let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('La costa del sol')
  .pauseFor(200)
  .deleteChars(10)
  .start();

 /**************************funciones de validación del formulario de index.html***************************/

function validacion(){
  var correcto = true;
  let nombre=document.getElementById('nombre').value;
  let email=document.getElementById('email').value;
  let provincia=document.getElementById('provincia').value;

  if(nombre=="" || /^\s$/.test(nombre) || ! /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,}$/.test(nombre)){
      document.getElementById('nombreHelp').style.visibility="visible";
      document.getElementById('nombre').style.borderColor="red";
      correcto = false;
  }
  
  if(email=="" || ! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/.test(email)){
      document.getElementById('emailHelp').style.visibility="visible";
      document.getElementById('email').style.borderColor="red";
      correcto = false;
  }

  
 if(provincia==0){
      document.getElementById('provinciaHelp').style.visibility="visible";
      document.getElementById('provincia').style.borderColor="red";
      correcto = false;
  }
   
  return correcto;
}

function deleteError(){
  document.getElementById(id+'Help').style.visibility="hidden";
  document.getElementById(id).style.borderColor="lightgray";

}