import LoginPage from '../support/pages/LoginPage';

describe('Login ', () => {
  it('Should log in successfully', () => {
    LoginPage.visit();
    LoginPage.login('5', '5','6','9' );
    LoginPage.checkLoginSuccess();
  });
});
