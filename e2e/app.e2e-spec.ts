import { MyContactListV4Page } from './app.po';

describe('my-contact-list-v4 App', () => {
  let page: MyContactListV4Page;

  beforeEach(() => {
    page = new MyContactListV4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
