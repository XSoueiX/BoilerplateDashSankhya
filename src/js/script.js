var app = angular.module('myApp', ['moduloTeste', 'ngMessages']);



app.controller('myCtrl', function ($scope, $q, customUtils) {
    let select = 'FORN.CODPARC , PAR.RAZAOSOCIAL, SUM(FORN.TOTALVLR) / COUNT(1) AS MEDIA';
    let from = 'AD_TGEAVALFORN FORN INNER JOIN TGFPAR PAR ON FORN.CODPARC = PAR.CODPARC';
    let where = '1=1 GROUP BY FORN.CODPARC, PAR.RAZAOSOCIAL ORDER BY MEDIA, PAR.RAZAOSOCIAL';
   
    let p = customUtils.doRequest(select,from,where,true,'DADOS');

    p.then((result) => {
        debugger;
    })

});
