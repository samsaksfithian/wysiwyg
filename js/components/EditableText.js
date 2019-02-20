//=============================================================
//=============================================================
// Class file for the EditableText Web Component

export default class EditableText extends HTMLElement {
	constructor() {
		super();
		this.toggleActive = this.toggleActive.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}

	//=============================================================

	// this is called when the HTML element is placed on the page
	connectedCallback(){
		this.render();
	}

	//=============================================================

	render(){
		this.innerHTML = `
			<button type="button" class="edit-button">Edit</button>
			<button type="button" class="save-button">Save</button>		  
			<p class="text-element">Go ahead, edit me however you want!</p>
			<wysiwyg-editor></wysiwyg-editor>`;
		
		this.querySelector('.edit-button').addEventListener('click', this.toggleActive);
		this.querySelector('.save-button').addEventListener('click', this.toggleActive);
		this.querySelector('wysiwyg-editor').addEventListener('input', this.handleInput);
	}

	//=============================================================

	/**
	 * Takes a click event on a button in this editor and toggles if this editor is active/visible
	 */
	toggleActive() {
		this.classList.toggle('active');
	}

	//=============================================================

	/**
	 * Update text (or style) of contained element
	 * @param {Event} event The triggering event
	 */
	handleInput(event) {
		// event.target => the thing that fires the event
		// event.currentTarget => the thing that captures the event
		const input = event.target;
		const textElement = this.querySelector('.text-element');
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

}

//=============================================================
//=============================================================

