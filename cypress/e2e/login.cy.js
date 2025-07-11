import LoginPage from '../support/pages/LoginPage';

describe('Login ', () => {
  
  it('Should show message error', () => {
    LoginPage.visit();
    LoginPage.login('5', '4','8','9' );
    LoginPage.checkbutton('be.visible');
    LoginPage.submit()
    LoginPage.showErrorInvalid();
  });

  it('type alphanumeric, Should button be disable', () => {
    LoginPage.visit();
    LoginPage.login('5', 'f','6','e' );
    LoginPage.checkbutton('be.disabled');
  });

  it('not type values, Should button be disable', () => {
    LoginPage.visit();
    LoginPage.checkbutton('be.disabled');
    
  });

  it('Should log in successfully', () => {
    LoginPage.visit();
    LoginPage.login('5', '5','6','9' );
    LoginPage.checkbutton('be.visible');    
    LoginPage.submit();
    LoginPage.checkLoginSuccess();
  });
 



  
});
