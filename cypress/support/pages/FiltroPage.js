

class FiltroPage {
  Filtros() {
    cy.get('#orders-container > app-organism-filters-tags > span > app-atom-filter-tab > div > p',{ timeout: 10000 }).should('contain', 'Filtros').click(); 
  }

  FieldEscribaStatus(status) {
    cy.get('#orders-container > app-organism-filters-tags > div > app-molecule-filters-list > div > app-molecule-general-search-select > div > span > input').should(status);
  }

  OptionEmbarque(){
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
    cy.contains('p.truncate', `Embarque: ${information}`)
    .parents('div.max-w-xs')                          // Go up to the tag container
    .find('span.tag-icon')                            //Find the remove icon inside it
    .click();  

    cy.contains('p.truncate', 'Embarque: CALUMET-01').should('not.exist');    
  }

  ShowCoincidence(information){
    cy.get("p[title='CALUMET-01']").should('contain',information)
  }

  ShowNotCoincidence(){
    cy.get('.text-center.text-lg.font-medium.mt-6').should('contain','Sin datos para mostrar')
  }

  

}

export default new FiltroPage();