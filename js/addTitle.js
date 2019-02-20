//=============================================================
//=============================================================
// Code to add paragraph block on button click

// Imports


//=============================================================
//=============================================================
// General on-start code

/**
 * Create a new title block and add it to the page after the current bottom paragraph/title
 * @param {Event} event The triggering event (click event on button)
 */
export default function addParagraph(event) {
	// create 'wysiwyg-editable-text' element
	const newEditableText = document.createElement('wysiwyg-editable-heading');

	// append that to main (before the button)
	const buttonDiv = event.target.parentElement;
	document.querySelector('main').insertBefore(newEditableText, buttonDiv);
}

//=============================================================
//=============================================================


