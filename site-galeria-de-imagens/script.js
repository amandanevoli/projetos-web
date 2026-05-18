function abrirModal(img) {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = img.src;
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}