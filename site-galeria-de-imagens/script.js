function mostrarGaleria(id){

    let galerias = document.querySelectorAll(".galeria"); 

    galerias.forEach(g => {
        g.style.display = "none"; 
    });

    document.getElementById(id).style.display = "block";
}

function ampliar(img){

    let modal = document.getElementById("modal"); 

    let imgModal = document.getElementById("imgModal"); 

    imgModal.src = img.src; 

    modal.style.display = "flex";
}

function fecharModal() {

    document.getElementById("modal").style.display = "none";
}