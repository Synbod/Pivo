import { LitElement, html } from 'lit-element';

export default class Footer extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div>footer</div>
    `;
  }
}

if (!customElements.get('pt-footer')) {
  customElements.define('pt-footer', Footer);
}
