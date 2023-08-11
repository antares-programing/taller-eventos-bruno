let energia = 0;
const contenedor = document.getElementById("container");
const controller = new AbortController;



  function giveCoffe() {
    controller.abort();
    const imagen = document.getElementById("Bugs");
    alert("Le has dado un cafe a Bugs! \nAhora puedes saludarlo!");
    imagen.setAttribute("src", "Imagenes/Despierto.png")
    energia =+ 1;
  };

  function showAlert() {
    controller.abort();
    if (energia > 0){
        alert("Que hay de nuevo viejo?");
    }else{
        alert("hmmm, bugs no esta de humor \nDeberias probar darle un cafecito...");
    }
  };

  contenedor.addEventListener("click", function(e){
        alert("Te saluda el Div! \nPero no soy Bugs! \nIntenta saludar a Bugs!");
  },
  { signal: controller.signal },
  );


 