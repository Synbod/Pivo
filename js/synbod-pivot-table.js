import { LitElement, html } from 'lit-element';
import { until } from 'lit-html/directives/until.js';
import { repeat } from 'lit-html/directives/repeat';
import normalizeStyle from 'normalize.css';

import input from './MOCK_DATA.json';

const style = html`
  <style>
    ${normalizeStyle}
  </style>
  <style>
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

    .container {
      width: 100%;
      max-height: 100vh;
      position: relative;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }

    .header {
      flex: 0 0 auto;
      padding: 5px 10px;
      background-color: red;
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

class SynbodPivotTable extends LitElement {
  set config(newConfig) {
    this._config = newConfig;
    this.render();
  }

  constructor() {
    super();
  }

  render() {
    return html`
      ${style}
      ${until(
        import('../crate/pkg/pivot').then((module) => {
          return html`
            <div class="container">
              ${input.map(
                (item) =>
                  html`
                    <div class="header">
                      <div>${item.first_name}</div>
                      <div>${item.last_name}</div>
                    </div>
                  `
              )}
            </div>
          `;
        }),
        html`
          <span>Loading...</span>
        `
      )}
    `;
  }
}

if (!customElements.get('synbod-pivot-table')) {
  customElements.define('synbod-pivot-table', SynbodPivotTable);
}
