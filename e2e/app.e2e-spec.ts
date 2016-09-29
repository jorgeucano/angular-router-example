import { RouterProyectExamplePage } from './app.po';

describe('router-proyect-example App', function() {
  let page: RouterProyectExamplePage;

  beforeEach(() => {
    page = new RouterProyectExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
