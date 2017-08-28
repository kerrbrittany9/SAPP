import { SappPage } from './app.po';

describe('sapp App', () => {
  let page: SappPage;

  beforeEach(() => {
    page = new SappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
