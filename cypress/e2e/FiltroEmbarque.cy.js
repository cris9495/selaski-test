import FiltroPage from "../support/pages/FiltroPage";
import "./hooks/loginOk";





describe('FiltroEmbarque', ()=>{ 
    beforeEach(() => {          
        FiltroPage.Filtros();
        
        });     
    

    it('Should select Filtro', () => {    
        FiltroPage.FieldEscribaStatus('be.disabled');
      });

    it('Should select Embarque', () => { 
        FiltroPage.OptionEmbarque();
        FiltroPage.FieldEscribaStatus('be.visible');
      });

    it('Should type and find coincidence', () => {    
        
        FiltroPage.OptionEmbarque();
        FiltroPage.FieldEscribaStatus('be.visible');
        FiltroPage.FieldEscriba('CALUMET-01');
        FiltroPage.ShowAplyFilter('CALUMET-01');
        FiltroPage.ShowCoincidence('CALUMET-01');
        FiltroPage.closefilter('CALUMET-01');
        FiltroPage.FieldEscriba('CALUMET-58');
        FiltroPage.ShowNotCoincidence();        
       
      });
});