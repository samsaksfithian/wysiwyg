//=============================================================
//=============================================================
// Code to toggle the edit fields on or off

/**
 * Takes a click event on a button and makes its parent element active/visible
 * @param {Event} event The triggering event
 */
export function toggleActiveButtonClick(event) {
	// get parent element
	const editableText = event.target.parentElement;
	// toggle the class active
	toggleActive(editableText);
}

//=============================================================

/**
 * Toggles active class on editable-text
 * @param {HTMLElement} editableText The text block to be made active
 */
export default function toggleActive(editableText) {
	// toggle the class active
	editableText.classList.toggle('active');
}


//=============================================================
//=============================================================