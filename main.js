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
  let correcto = true;
  let nombre=document.getElementById('nombre').value;//getter
  let apellidos=document.getElementById('apellidos').value;//getter
  let email=document.getElementById('email').value;
  let provincia=document.getElementById('provincia').value;

  if(nombre=="" || /^\s$/.test(nombre) || ! /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,}$/.test(nombre)){
      document.getElementById('nombreHelp').style.visibility="visible";
      document.getElementById('nombre').style.borderColor="red";//en JS todos los atributos se llaman igual sin el guion. Ej: border-color -> borderColor
      correcto = false;
  }
  
  
  if(apellidos=="" || /^\s$/.test(apellidos) || ! /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,}$/.test(apellidos)){
      document.getElementById('apellidosHelp').style.visibility="visible";
      document.getElementById('apellidos').style.borderColor="red";
      correcto = false;
  }

  
  if(email=="" || ! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/.test(email)){
      document.getElementById('emailHelp').style.visibility="visible";//setter
      document.getElementById('email').style.borderColor="red";//setter
      correcto = false;
  }

  
 if(provincia==0){
      document.getElementById('provinciaHelp').style.visibility="visible";//setter
      document.getElementById('provincia').style.borderColor="red";//setter
      correcto = false;
  }
   
  return correcto;
}

function deleteError(){
  document.getElementById(id+'Help').style.visibility="hidden";
  document.getElementById(id).style.borderColor="lightgray";

}