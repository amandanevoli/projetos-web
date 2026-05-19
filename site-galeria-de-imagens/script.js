function openModal(title, src) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalImg").src = src;
    document.getElementById("modalTitle").innerText = title;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}