//=============================================================
//=============================================================
// Main JS code to run the WYSIWYG page

// Imports
import addParagraph from "./addParagraph.js";
import addTitle from "./addTitle.js";
import Editor from "./components/Editor.js";
import EditableText from "./components/EditableText.js";
import EditableHeading from './components/EditableHeading.js';

//=============================================================
// Custom Definitions

customElements.define('wysiwyg-editor', Editor);
customElements.define('wysiwyg-editable-text', EditableText);
customElements.define('wysiwyg-editable-heading', EditableHeading);

//=============================================================
//=============================================================
// General on-start code

// get the add paragraph button and add a click listener
document.getElementById('add-button-p').addEventListener('click', addParagraph);
document.getElementById('add-button-t').addEventListener('click', addTitle);


//=============================================================
//=============================================================


