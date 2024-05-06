function makeBold() {
    document.execCommand("bold");
}

function makeItalic() {
    document.execCommand("italic");
}

function makeUnderline() {
    document.execCommand("underline");
}

function saveText() {
    var editorContent = document.getElementById("editor").innerHTML;
    localStorage.setItem("textEditorContent", editorContent);
    alert("Text saved successfully!");
}
// Sélection de l'élément de bouton "Sauvegarder"
let saveButton = document.getElementById('save-button');

// Ajout d'un écouteur d'événements au clic sur le bouton "Sauvegarder"
saveButton.addEventListener('click', function () {
    // Récupération du contenu de l'éditeur de texte
    let editorContent = document.getElementById('editor').value;

    // Sauvegarde du contenu dans le stockage local
    localStorage.setItem('editorContent', editorContent);

    // Affichage d'un message de confirmation
    alert('Contenu sauvegardé avec succès !');
});

// Récupération du contenu sauvegardé depuis le stockage local
let savedContent = localStorage.getItem('editorContent');

// Vérification si du contenu a été précédemment sauvegardé
if (savedContent) {
    // Affichage du contenu sauvegardé dans l'éditeur de texte
    document.getElementById('editor').value = savedContent;
}


// Load saved text on page load
window.onload = function () {
    var savedContent = localStorage.getItem("textEditorContent");
    if (savedContent) {
        document.getElementById("editor").innerHTML = savedContent;
    }
};
