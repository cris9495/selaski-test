class LoginPage {
  visit() {
    cy.visit('https://www.selaski.com/public/reports/shared?token=cdexd34d7a31da5257e1d5f7af80e21995f0dfefr'); // Replace with your URL
  }

  fillFirst(digitone) {
    cy.get('#digit1').type(digitone);
  }

  fillSecond(digittwo) {
    cy.get('#digit2').type(digittwo);
  }

  fillThird(digitthree) {
    cy.get('#digit3').type(digitthree);
  }
  fillFourth(digitfour) {
    cy.get('#digit4').type(digitfour);
  }

  //mistake error css .text-red-500.text-sm Código incorrecto. Por favor ingresa el código correcto para tener acceso

  submit() {
    cy.get('button[type="submit"]').click();
  }

  showErrorInvalid(){
    cy.get('.text-red-500.text-sm').should('contain','Por favor ingresa el código correcto para tener acceso')
  }

  showErrorTry(){
    cy.get('.text-red-500.text-sm').should('contain','Has excedido el número de intentos permitidos. Por favor intenta más tarde')
  }

  login(digitone, digittwo, digitthree, digitfour) {
    this.fillFirst(digitone);
    this.fillSecond(digittwo);
    this.fillThird(digitthree);
    this.fillFourth(digitfour);
    this.submit();
  }

  checkLoginSuccess() {
    cy.contains('Reporte de Embarques',{ timeout: 10000 }).should('be.visible');
  }
}

export default new LoginPage();
