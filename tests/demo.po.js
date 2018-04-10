describe('Page Objects - Demonstração ', () => {
    //Elemento Capturados
    var cmpLogin = $('#md-input-1');
    var cmpSenha = $('#md-input-3');
    var btnEntrar = $('.btn-submit');
    var msgErro = $('.error-message');
    var btnFiltrar = $('.btn-filter');
    var cmpCnpj = $('.filtro-cnpj');
    var btnAplicarFiltro = $('.botao-aplicarFiltro');

    //Funções


    function AbrirSite() {
        browser.get('/login');
    }

    function Login(usuario, senha) {
        cmpLogin.clear().sendKeys(usuario);
        cmpSenha.clear().sendKeys(senha);
        btnEntrar.click();
    }

    function LoginOk() {
        AbrirSite();
        Login('faraujo', 'Fff@9999');
        browser.sleep(5000);
    }

    function Filtro(cnpj) {
        btnFiltrar.click();
        cmpCnpj.sendKeys(cnpj);
        btnAplicarFiltro.click();

    }

    module.exports = {
        AbrirSite: AbrirSite,
        Login: Login,
        msgErro: msgErro,
        LoginOk:LoginOk,
        Filtro:Filtro
    }


});