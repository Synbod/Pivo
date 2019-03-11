import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import '../src/synbod-pivot-table';
import mock_data from '../tests/MOCK_DATA.json';

storiesOf('pivot table', module).add(
  'default',
  () =>
    html`
      <synbod-pivot-table></synbod-pivot-table>
    `,
  {
    exports: {
      render,
      html,
    },
  }
);
