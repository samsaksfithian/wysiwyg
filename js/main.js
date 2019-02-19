//=============================================================
//=============================================================
// Main JS code to run the WYSIWYG page

// Imports
import { toggleActiveButtonClick } from "./toggleActive.js";

//=============================================================
//=============================================================
// General on-start code

// get all edit buttons, then add click event listener to each
const editAndSaveButtons = document.querySelectorAll('.edit-button, .save-button');
editAndSaveButtons.forEach(button => button.addEventListener('click', toggleActiveButtonClick));

//=============================================================
//=============================================================

