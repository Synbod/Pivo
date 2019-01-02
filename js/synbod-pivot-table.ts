import { html, render } from 'lit-html';
import { until } from 'lit-html/directives/until.js';

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
  private _config: any;
  private _dimInfos: any[];

  set config(newConfig: any) {
    this._config = newConfig;
    this._render();
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._render();
  }

  private getColumnHeadersTemplate() {
    let colHeaders = [];
    if (this._config && Array.isArray(this._config.table.columns)) {
      colHeaders = this._config.table.columns.reduce((accu, c) => {
        const dimInfo = this._dimInfos[c.uniqueName];
        const uniqueValueCells = dimInfo.map((d: any) => {
          return html`
            <div class="cell"><span>${d.displayName}</span></div>
          `;
        });
        Array.prototype.push.apply(accu, uniqueValueCells);

        return accu;
      }, []);
    }

    return colHeaders;
  }

  private _render() {
    render(
      html`
        ${style}
        <div>
          ${
            until(
              import('../crate/pkg').then((module) => module.test()),
              html`
                <span>Loading...</span>
              `
            )
          }
        </div>
      `,
      this.shadowRoot
    );
  }
}

if (!customElements.get('synbod-pivot-table')) {
  customElements.define('synbod-pivot-table', SynbodPivotTable);
}
