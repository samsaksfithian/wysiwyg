//=============================================================
//=============================================================
// Main JS code to run the WYSIWYG page

// Imports
import { toggleActiveButtonClick } from "./toggleActive.js";
import handleEditorInput from "./handleEditorInput.js";

//=============================================================
//=============================================================
// General on-start code

// get all edit buttons, then add click event listener to each
const editAndSaveButtons = document.querySelectorAll('.edit-button, .save-button');
editAndSaveButtons.forEach(button => button.addEventListener('click', toggleActiveButtonClick));

// listen for 'input' events from editor and when fired, update text or style of sibling '.text-element'
const editors = document.querySelectorAll('.editor');
editors.forEach(editor => editor.addEventListener('input', handleEditorInput));

//=============================================================
//=============================================================



