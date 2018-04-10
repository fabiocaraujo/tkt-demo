exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://testegestaoec.lanet.accorservices.net/',
  specs: 'tests/**/*spec.js',


  //Timouts
  allScriptsTimeout: 90000,
  getPageTimeout: 90000,

  useAllAngular2AppRoots: true

  /*   onPrepare: function(){
        browser.ignoreSynchronization = true;
        } */
};