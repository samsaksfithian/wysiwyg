//=============================================================
//=============================================================
// Code to handle changes in the editor input, and reflect those changes

/**
 * Update text (or style) of sibling text element
 * @param {Event} event The triggering event
 */
export default function handleEditorInput(event) {
	// event.target => the thing that fires the event
	// event.currentTarget => the thing that captures the event
	const editorBlock = event.currentTarget;
	const input = event.target;
	const textElement = editorBlock.parentElement.querySelector('.text-element');
	if(event.target.type === 'text' || event.target.tagName === 'TEXTAREA'){
		// handle text change
		const text = input.value;
		textElement.innerText = text;
	} else{
		// handle the styles
		const styleName = input.name;
		const unit = input.dataset.unit || '';
		textElement.style[styleName] = `${input.value}${unit}`;
	}
}


//=============================================================
//=============================================================