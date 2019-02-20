//=============================================================
//=============================================================
// Main JS code to run the WYSIWYG page

// Imports
import addParagraph from "./addParagraph.js";
import Editor from "./components/Editor.js";
import EditableText from "./components/EditableText.js";

//=============================================================
// Custom Definitions

customElements.define('wysiwyg-editor', Editor);
customElements.define('wysiwyg-editable-text', EditableText);

//=============================================================
//=============================================================
// General on-start code

// TODO: DELETE
// get all edit buttons, then add click event listener to each
// const editAndSaveButtons = document.querySelectorAll('.edit-button, .save-button');
// editAndSaveButtons.forEach(button => button.addEventListener('click', toggleActiveButtonClick));

// listen for 'input' events from editor and when fired, update text or style of sibling '.text-element'
// const editors = document.querySelectorAll('.editor');
// editors.forEach(editor => editor.addEventListener('input', handleEditorInput));

// get the add paragraph button and adds a click listener
const addParagraphButton = document.getElementById('add-button');
addParagraphButton.addEventListener('click', addParagraph);


//=============================================================
//=============================================================


