import { html, render } from 'lit-html';
import { until } from 'lit-html/directives/until.js';

import './header';
import './body';
import './footer';

const style = html`
  <style>
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
    }
    .grid-container {
      display: flex;
      flex-direction: column;
    }
    .cell {
      flex: 0 0 calc(100% / 7);
      border: 1px solid #ddd;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
`;

class SynbodPivotTable extends HTMLElement {
  set config(newConfig) {
    this._config = newConfig;
    this._render();
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._render();
  }

  _render() {
    render(
      html`
        ${style}
        <div class="grid-container">
          ${until(
            import('../crate/pkg/pivot').then((module) => {
              return html`
                <pt-header></pt-header>
                <pt-body></pt-body>
                <pt-footer></pt-footer>
              `;
            }),
            html`
              <span>Loading...</span>
            `
          )}
        </div>
      `,
      this.shadowRoot
    );
  }
}

if (!customElements.get('synbod-pivot-table')) {
  customElements.define('synbod-pivot-table', SynbodPivotTable);
}
