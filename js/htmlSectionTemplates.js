//=============================================================
//=============================================================
// Variables representing HTML templates for adding new sections

export const paragraphTextTemplate = `
	<button type="button" class="edit-button">Edit</button>
	<button type="button" class="save-button">Save</button>		  
	<p class="text-element">Go ahead, edit me however you want!</p>

	<div class="editor">
		<!-- prettier-ignore -->
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
		</section>
	</div>`

//=============================================================
//=============================================================

export const titleTextTemplate = `
	<button type="button" class="edit-button">Edit</button>
	<button type="button" class="save-button">Save</button>
	<h1 class="text-element">Your title</h1>

	<div class="editor">
		<input type="text" value="Your title" />

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
				<input type="number" name="font-size" data-unit="px" value="32"/>
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
		</section>
	</div>`

//=============================================================
//=============================================================

