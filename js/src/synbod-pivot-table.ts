import { LitElement, html } from 'lit-element';
import { until } from 'lit-html/directives/until.js';
import { repeat } from 'lit-html/directives/repeat';

const style = html`
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
  private _config: any;
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
        import('synbod-pivot-table-crate-pkg').then((module) => {
          return html`
            <div class="container">
              test text
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
