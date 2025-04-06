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

//Collapsible
var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    // safer: find the next sibling with the class `.content`
    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}