class FiltroPage {
  Filtros() {
    cy.get('#orders-container > app-organism-filters-tags > span > app-atom-filter-tab > div > p',{ timeout: 10000 }).should('contain', 'Filtros').click(); 
  }

  FieldEscribaStatus(status) {
    cy.get('#orders-container > app-organism-filters-tags > div > app-molecule-filters-list > div > app-molecule-general-search-select > div > span > input').should(status);
  }

  OptionEmbarque(){
    cy.get('[class="w-full shadow z-10"]',{ timeout: 10000 }).should('exist');
    cy.get('button[class="onclick_emitter border-none w-36"]',{ timeout: 10000 }).click() //option Seleccionar  
    cy.wait(2000);  
    cy.get('div.search-options', { timeout: 20000 }).should('be.visible');  // wait for dropdown container      
    cy.contains('p', 'Embarque',{ timeout: 10000 }).parents('span.flex').click({ force: true });//select Embarque  

  }

  FieldEscriba(information){
        cy.get('#orders-container > app-organism-filters-tags > div > app-molecule-filters-list > div > app-molecule-general-search-select > div > span > input').clear().type(`${information}{enter}`);
   
  }

  ShowAplyFilter(information){    
    cy.get('.max-w-xs.py-2.px-3.rounded-lg.flex.gap-2.items-center.font-medium.tag-tertiary p.truncate ', { timeout: 10000 }).should('exist').should('contain', `Embarque: ${information}`);
    
  }

  closefilter(information){ 
    cy.wait(1000);   
    cy.contains('p.truncate', `Embarque: ${information}`)
    .parents('div.max-w-xs')                          // Go up to the tag container
    .find('span.tag-icon')                            //Find the remove icon inside it
    .click();  

    cy.contains('p.truncate', `Embarque: ${information}`).should('not.exist');    
  }
  

  ShowNotCoincidence(){
    cy.get('.text-center.text-lg.font-medium.mt-6').should('contain','Sin datos para mostrar')
  }

  catchrowsembarque() {
    const embarqueValues = [];
     return cy.get('#table-results-container').should('have.length.greaterThan', 0)
      .get('#table-results-container')
      .find('app-molecule-table-first-element-list app-molecule-table-first-element')
      .each(($cell) => {
        cy.wrap($cell)
          .find('p.truncate')
          .invoke('text')
          .then((text) => {
            embarqueValues.push(text.trim());
          });
      })
      .then(() => {
        cy.log('Valores de Embarque:', JSON.stringify(embarqueValues));
        return cy.wrap(embarqueValues); // Return as Cypress chainable
      });
  }

  checkEmbarqueValues(expectedValues) {
    this.catchrowsembarque().then((actualValues) => {
      expect(actualValues).to.deep.equal(expectedValues); //how add assertion to check if the values match cypress
      console.log('Valores de Embarque verificados:', JSON.stringify(actualValues));
      cy.log('Valores de Embarque verificados:', JSON.stringify(actualValues)); //when execute cypress i don't see the log, help @workaround

    });
  }

}

export default new FiltroPage();