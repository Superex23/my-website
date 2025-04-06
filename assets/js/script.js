//Change Mode Button
const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

});

//Enlarge Cert Image
function openCertFull() {
    document.getElementById('cert-modal').style.display = 'flex';
    document.getElementById('main-header').classList.add('hidden');
}

function closeCertFull() {
    document.getElementById('cert-modal').style.display = 'none';
    document.getElementById('main-header').classList.remove('hidden');
}