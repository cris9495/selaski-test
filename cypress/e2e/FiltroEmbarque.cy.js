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

    it('Should close the the applied filte', () => {    
        
        FiltroPage.OptionEmbarque();
        FiltroPage.FieldEscribaStatus('be.visible');
        FiltroPage.FieldEscriba('CALUMET-01');
        FiltroPage.ShowAplyFilter('CALUMET-01');        
        FiltroPage.closefilter('CALUMET-01');          
       
      });

    it('Should catch coincidence', () => {    
        
        FiltroPage.OptionEmbarque();
        FiltroPage.FieldEscribaStatus('be.visible');
        FiltroPage.FieldEscriba('KSIO34596');
        FiltroPage.ShowAplyFilter('KSIO34596');        
        FiltroPage.checkEmbarqueValues(['KSIO34596-02','KSIO34596-01']); 
                     
       
      });

      it('Should not catch coincidence', () => {    
        
        FiltroPage.OptionEmbarque();
        FiltroPage.FieldEscribaStatus('be.visible');
        FiltroPage.FieldEscriba('CALUMET-58');
        FiltroPage.ShowAplyFilter('CALUMET-58');
        FiltroPage.ShowNotCoincidence();  
        FiltroPage.closefilter('CALUMET-58');       
       
      });
});