import {Element as PolymerElement}
  from "../node_modules/@polymer/polymer/polymer-element.js"

import '../../node_modules/@polymer/paper-item/paper-item-body.js';

class TestApp extends PolymerElement {
  static get template() {
    return `
      <div id="test-content">
      <paper-item-body one-line>
      <div>Test one-liner</div>
      </paper-item-body>
      </div>
      `
  }

  static get is() { return 'test-app'; }

  constructor() {
    super();
    this.name = '3.0 preview';
  }

  // properties, observers, etc. are identical to 2.x
  static get properties() {
    name: {
      Type: String
    }
  }
}

customElements.define(TestApp.is, TestApp);
