//=============================================================
//=============================================================
// Code to toggle the edit fields on or off

/**
 * Update text (or style) of sibling text element
 * @param {Event} event The triggering event
 */
export default function handleEditorInput(event) {
	// event.target => the thing that fires the event
	// event.currentTarget => the thing that captures the event
	if(event.target.type === 'text' || event.target.tagName === 'TEXTAREA'){
		const editorBlock = event.currentTarget;
		const text = event.target.value;
		const textElement = editorBlock.parentElement.querySelector('.text-element');
		console.log(event.target);
		textElement.innerText = text;
	}
}


//=============================================================
//=============================================================