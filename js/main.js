//=============================================================
//=============================================================
// Main JS code to run the WYSIWYG page

// Imports
import addParagraph from "./addParagraph.js";
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

// get the add paragraph button and adds a click listener
const addParagraphButton = document.getElementById('add-button');
addParagraphButton.addEventListener('click', addParagraph);


//=============================================================
//=============================================================


