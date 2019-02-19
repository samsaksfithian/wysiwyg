//=============================================================
//=============================================================
// Code to add paragraph block on button click

// Imports
import { toggleActiveButtonClick } from "./toggleActive.js";
import handleEditorInput from "./handleEditorInput.js";
import { paragraphTextTemplate } from "./htmlSectionTemplates.js";

//=============================================================
//=============================================================
// General on-start code

/**
 * Create a new paragraph block and add it to the page after the current bottom paragraph
 * @param {Event} event The triggering event (click event on button)
 */
export default function addParagraph(event) {
	// create element (section w/ class of 'editable-text')
	const newEditableText = document.createElement('section');
	newEditableText.className = 'editable-text';

	// set its innerHTML
	newEditableText.innerHTML = paragraphTextTemplate;

	// add event listeners
	const editButton = newEditableText.querySelector('.edit-button');
	editButton.addEventListener('click', toggleActiveButtonClick);

	const saveButton = newEditableText.querySelector('.save-button');
	saveButton.addEventListener('click', toggleActiveButtonClick);

	const editor = newEditableText.querySelector('.editor');
	editor.addEventListener('input', handleEditorInput);


	// append that to main (before the button)
	document.querySelector('main').insertBefore(newEditableText, event.target)

}

//=============================================================
//=============================================================


