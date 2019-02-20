//=============================================================
//=============================================================
// Code to add paragraph block on button click

// Imports


//=============================================================
//=============================================================
// General on-start code

/**
 * Create a new paragraph block and add it to the page after the current bottom paragraph
 * @param {Event} event The triggering event (click event on button)
 */
export default function addParagraph(event) {
	// create 'wysiwyg-editable-text' element
	const newEditableText = document.createElement('wysiwyg-editable-text');

	// append that to main (before the button)
	document.querySelector('main').insertBefore(newEditableText, event.target)
}

//=============================================================
//=============================================================


