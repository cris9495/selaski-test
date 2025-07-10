import LoginPage from '../support/pages/LoginPage';

describe('Login ', () => {
  it.only('Should log in successfully', () => {
    LoginPage.visit();
    LoginPage.login('5', '5','6','9' );
    LoginPage.checkLoginSuccess();
  });

  it('Should show message error', () => {
    LoginPage.visit();
    LoginPage.login('5', '4','8','9' );
    LoginPage.showErrorInvalid();
  });
  
});
