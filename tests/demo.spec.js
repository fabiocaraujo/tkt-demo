describe('Demonstração protractor JS', () => {

    var PageDemo = require('./demo.po')

    xit('Navegar na pagina Estabelecimento', () => {
        browser.get('http://testegestaoec.lanet.accorservices.net');
    });

    xit('Login com usuário inválido / Resultado esperado: ', function() {
        //element(by.id('md-input-1')).sendKeys('faraujo');
        //# para ID 
        //. para class
        $('#md-input-1').sendKeys('faraujo');
        $('.btn-submit').click();
        browser.sleep(10000);
    });

    xit('Login com usuario e senha inválidos', () => {
       $('#md-input-1').sendKeys('abc');
       $('#md-input-3').sendKeys('1');
       $('.btn-submit').click();
       expect($('.error-message').getText()).toBe('Usuário e/ou senha estão incorretos.');
       browser.sleep(10000);
    });
        
//Com Page Objects

it('Login com Usuário Inválido ', () => {
    PageDemo.AbrirSite();
    PageDemo.Login('dfsdfs','fsdfdsf');
    expect(PageDemo.msgErro.getText()).toBe('Usuário e/ou senha estão incorretos.');
});


it('Login com campo usuario vazio', function() {
    PageDemo.AbrirSite();
    PageDemo.Login('','fsdfdsf');
    var msgObrigat = $('#md-input-hint-6')
    expect(msgObrigat.getText()).toBe('Campo Obrigatório');
});


fit('Filtro Estabelecimento via CNPJ inválido', function() {
   PageDemo.LoginOk();
   browser.get('cadastro/estabelecimento');
   browser.sleep(5000);
   PageDemo.Filtro('08298844450');
   var msgRequirida = $('.emptyMessage');
   browser.sleep(1000);
   expect(msgRequirida.getText()).toBe('Nenhum item encontrado');
});


    
    
    
});