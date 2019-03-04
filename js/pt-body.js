import { LitElement, html } from 'lit-element';

export default class Body extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div>body</div>
    `;
  }
}

if (!customElements.get('pt-body')) {
  customElements.define('pt-body', Body);
}
