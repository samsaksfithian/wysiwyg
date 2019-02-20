//=============================================================
//=============================================================
// Class file for the EditableHeading Web Component

// Imports
import EditableText from './EditableText.js';

//=============================================================

export default class EditableHeader extends EditableText {
	static get observedAttributes() {
		return ['heading']; // array of all the attributes that are tracked
	}

	//=============================================================
	
	/**
	 * Gets what type of heading this block is
	 * @returns {string} the header attribute tag for this element
	 */
	get heading(){
		if (this.getAttribute('heading')) {
			return this.getAttribute('heading');
		} else{
			return 'h1';
		}
	}

	//=============================================================

	/**
	 * Sets the header tag for this text element
	 * @param {string} newHeading The new heading tag
	 */
	set heading(newHeading){
		this.setAttribute('heading', newHeading);
	}

	//=============================================================

	render(){
		this.innerHTML = `
			<button type="button" class="edit-button">Edit</button>
			<button type="button" class="save-button">Save</button>		  
			<${this.heading} class="text-element">Your title</${this.heading}>
			<wysiwyg-editor type="title"></wysiwyg-editor>`;
		
		this.querySelector('.edit-button').addEventListener('click', this.toggleActive);
		this.querySelector('.save-button').addEventListener('click', this.toggleActive);
		this.querySelector('wysiwyg-editor').addEventListener('input', this.handleInput);
	}

	//=============================================================

	/**
	 * Update text (or style) of contained element
	 * @param {Event} event The triggering event
	 */
	handleInput(event) {
		if(event.target.name === 'heading-type'){
			this.heading = event.target.value;
		} else{
			super.handleInput(event);
		}
	}

	//=============================================================

	attributeChangedCallback(attrName, oldVal, newVal) {
		this.render();
	}

}

//=============================================================
//=============================================================

