import LoginPage from '../../support/pages/LoginPage';

beforeEach(() => {   
    LoginPage.visit() 
    LoginPage.login('5', '5','6','9' );
    LoginPage.checkbutton('be.visible');
    LoginPage.submit();
    LoginPage.checkLoginSuccess();
    });