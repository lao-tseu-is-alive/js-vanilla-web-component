const template = document.createElement("template");
template.innerHTML = `
  <style>
		  .go-counter button {
				  border-radius: 8px;
				  min-width: 8em;
				  border: 1px solid transparent;
				  padding: 0.6em 1.2em;
				  font-size: 1em;
				  font-weight: 500;
				  font-family: inherit;
				  background-color: #6eade1;
				  cursor: pointer;
				  transition: border-color 0.25s;
		      color: blue;
		  }
		  .go-counter button:hover {
		    border-color: #080f8a;
		  }
		  .go-counter button:focus,button:focus-visible {
		    outline: 4px auto -webkit-focus-ring-color;
		  }
  </style>
  <div class="go-counter">
  <button id="go-counter-btn" type="button">
  	counter is <span id="go-counter-val"></span>
  </button>
  </div>
`;
export class MyCounter extends HTMLElement {
		_counter = 0;
		get counter () {
				return this._counter;
		}
		set counter (value) {
				if (typeof +value === "number") {
						this._counter = +value;
				}
		}
		constructor() {
				super();
				this.shadow = this.attachShadow({ mode: "open" });
				this.shadowRoot.appendChild(template.content.cloneNode(true));
				this.shadowRoot.querySelector("#go-counter-val").innerText = " 0";
				this.button = this.shadow.querySelector('#go-counter-btn');
				this.button.addEventListener('click', () => {
						this._counter = +this._counter + 1
						this.shadowRoot.querySelector("#go-counter-val").innerText = this._counter;
				} )
		}
		static get observedAttributes() {
        return ["counter"];
    }
		attributeChangedCallback(property, oldValue, newValue) {
				if (oldValue === newValue) return;
				this[property] = newValue;
		}
		
		connectedCallback() {
				this.shadowRoot.querySelector("#go-counter-val").innerText = this._counter;
		}
}

