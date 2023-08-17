let energia = 0;
const contenedor = document.getElementById("container");
const controller = new AbortController;
const coffeBtn = document.getElementById("btnCafe");
const saludoBtn = document.getElementById("btnSaludo");

/*
  function giveCoffe() {
    const imagen = document.getElementById("Bugs");
    const btnSaludo = document.getElementById("btnSaludo")
    if (energia >= 5){
        alert("Le has dado demasiado cafe a Bugs! \nYa no puedes saludarlo! \n Le dio amciedad!");
        imagen.setAttribute("src", "Imagenes/MuchoCafe.png")
        energia ++;
        btnSaludo.disabled = true;
    }else{
        const imagen = document.getElementById("Bugs");
        alert("Le has dado un cafe a Bugs! \nAhora puedes saludarlo!");
        imagen.setAttribute("src", "Imagenes/Despierto.png")
        energia ++;
    }
    event.stopPropagation()
  };
*/
/*
  function showAlert() {
    if (energia > 0){
      alert("Que hay de nuevo viejo?");
  }else{
      alert("hmmm, bugs no esta de humor \nDeberias probar darle un cafecito...");
  }
  event.stopPropagation()
  };
*/

  saludoBtn.addEventListener("click", function(e){

    if (energia > 0){
      alert("Que hay de nuevo viejo?");
    }else{
      alert("hmmm, bugs no esta de humor \nDeberias probar darle un cafecito...");
    }
    event.stopPropagation()
  })

  coffeBtn.addEventListener("click", function(e){
    const imagen = document.getElementById("Bugs");
    if (energia >= 5){
        alert("Le has dado demasiado cafe a Bugs! \nYa no puedes saludarlo! \n Le dio amciedad!");
        imagen.setAttribute("src", "Imagenes/MuchoCafe.png")
        energia ++;
        saludoBtn.disabled = true;
    }else{
        const imagen = document.getElementById("Bugs");
        alert("Le has dado un cafe a Bugs! \nAhora puedes saludarlo!");
        imagen.setAttribute("src", "Imagenes/Despierto.png")
        energia ++;
    }
    event.stopPropagation()
  })

  contenedor.addEventListener("click", function(e){
    const monigote = document.getElementById("Moni");
           monigote.setAttribute("src", "Videos/Monigote-unscreen.gif")
        setTimeout(() => {
            monigote.setAttribute("src", "Videos/MonigoteFirstFrame.png")
        }, 4170);
    },
  { signal: controller.signal },
  );

