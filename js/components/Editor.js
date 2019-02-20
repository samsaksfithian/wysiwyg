//=============================================================
//=============================================================
// Class file for the Editor Web Component

export default class Editor extends HTMLElement {
	// this is called when the HTML element is placed on the page
	connectedCallback(){
		this.render();
	}

	//=============================================================

	/**
	 * Gets what type this block is, heading or paragraph
	 * @returns {string} the type attribute tag for this element
	 */
	get type(){
		if (this.getAttribute('type')) {
			return this.getAttribute('type');
		} else{
			return 'paragraph';
		}
	}

	//=============================================================

	/**
	 * Sets the type tag for this text element
	 * @param {string} newtype The new type tag (should be either 'paragraph' or 'title')
	 */
	set type(newtype){
		this.setAttribute('type', newtype);
	}

	//=============================================================

	/**
	 * Returns true if this editor's type is 'title', false otherwise (i.e. if it's 'paragraph')
	 * @returns {boolean}
	 */
	isTitle() {
		return this.type === 'title';
	}

	//=============================================================

	render(){
		const titleText = `<input type="text" value="Your title" />`;
		const paraText = `<textarea cols="40" rows="5">Go ahead, edit me however you want!</textarea>`;
		const headingInput = `
			<div class="form-group">
				<label>
					Heading type:
					<select name="heading-type">
						<option value="h1">h1</option>
						<option value="h2">h2</option>
						<option value="h3">h3</option>
						<option value="h4">h4</option>
						<option value="h5">h5</option>
						<option value="h6">h6</option>
					</select>
				</label>
			</div>`;

		this.innerHTML = `
			${this.isTitle() ? titleText : paraText}
			<section class="styles">
			<div class="form-group">
				<label>
					Font color:
					<input type="color" name="color" value="#000000"/>
				</label>
			</div>

			<div class="form-group">
				<label>
					Font size:
					<input type="number" name="font-size" data-unit="px" value="${this.isTitle() ? '32' : '16'}"/>
					px
				</label>
			</div>

			<div class="form-group">
				<label>
					Font family:
					<select name="font-family">
						<option value="sans-serif">sans-serif</option>
						<option value="serif">serif</option>
					</select>
				</label>
			</div>

			${this.isTitle() ? headingInput : ""}
			</section>`;
	}

	//=============================================================

}

//=============================================================
//=============================================================

