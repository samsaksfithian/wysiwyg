//=============================================================
//=============================================================
// Main JS code to run the WYSIWYG page

// Imports
import { toggleActiveButtonClick } from "./toggleActive.js";
import handleEditorInput from "./handleEditorInput.js";
import addParagraph from "./addParagraph.js";
import { paragraphTextTemplate, titleTextTemplate } from "./htmlSectionTemplates.js";

//=============================================================
//=============================================================
// General on-start code

// set up page
// initialize();

// get all edit buttons, then add click event listener to each
const editAndSaveButtons = document.querySelectorAll('.edit-button, .save-button');
editAndSaveButtons.forEach(button => button.addEventListener('click', toggleActiveButtonClick));

// listen for 'input' events from editor and when fired, update text or style of sibling '.text-element'
const editors = document.querySelectorAll('.editor');
editors.forEach(editor => editor.addEventListener('input', handleEditorInput));

// get the add paragraph button and adds a click listener
const addParagraphButton = document.getElementById('add-button');
addParagraphButton.addEventListener('click', addParagraph);


//=============================================================
//=============================================================

function initialize() {
	console.log(document.body);
	// needs to get main section
	document.body.innerHTML = `<section class="editable-text">` + titleTextTemplate + `</section`;
}

//=============================================================
//=============================================================


