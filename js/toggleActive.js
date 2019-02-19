//=============================================================
//=============================================================
// Code to toggle the edit fields on or off

/**
 * Takes a click event on a button and makes its parent element active/visible
 * (Toggles active class on editable-text)
 * @param {Event} event The triggering event
 */
export default function toggleActive(event) {
	// get parent element
	const editableText = event.target.parentElement;
	// toggle the class active
	editableText.classList.toggle('active');
}


//=============================================================
//=============================================================