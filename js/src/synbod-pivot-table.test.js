function debugTestRunner(done) {
  console.log('browser version', navigator.userAgent);
  require('electron')
    .remote.getCurrentWindow()
    .show();

  setTimeout(() => {
    done();
  }, 9999999);
}

describe('pivot table', () => {
  test('should render', () => {
    require('./synbod-pivot-table');
    document.body.innerHTML = `<synbod-pivot-table></synbod-pivot-table>`;
    const ptElement = document.querySelector('synbod-pivot-table');
    const sRoot = ptElement.shadowRoot;
    expect(sRoot).not.toBeNull();
  });
});
