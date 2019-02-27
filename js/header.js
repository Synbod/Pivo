import { LitElement, html } from 'lit-element';

export default class Header extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div>header</div>
    `;
  }
}

if (!customElements.get('pt-header')) {
  customElements.define('pt-header', Header);
}
