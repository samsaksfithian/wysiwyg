//=============================================================
//=============================================================
// Main JS code to run the WYSIWYG page

// Imports
import toggleActive from "./toggleActive.js";

//=============================================================
//=============================================================
// General on-start code

// get all edit buttons, then add click event listener to each
const editButtons = document.querySelectorAll('.edit-button');
editButtons.forEach(button => button.addEventListener('click', toggleActive));

//=============================================================
//=============================================================

