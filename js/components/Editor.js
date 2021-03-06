//=============================================================
//=============================================================
// Class file for the Editor Web Component

export default class Editor extends HTMLElement {
	// this is called when the HTML element is placed on the page
	connectedCallback(){
		this.render();
	}

	//=============================================================

	render(){
		this.innerHTML = `
			<textarea cols="40" rows="5">Go ahead, edit me however you want!</textarea>
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
					<input type="number" name="font-size" data-unit="px" value="16"/>
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
			</section>`;
	}

	//=============================================================

}

//=============================================================
//=============================================================

