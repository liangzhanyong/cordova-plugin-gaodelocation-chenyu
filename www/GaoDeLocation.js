var exec = require('cordova/exec');

var GaoDe = {
    getCurrentPosition:function (options, successFn, errorFn) {
        exec(successFn,errorFn,'GaoDeLocation','getCurrentPosition',[options]);
    },

    stopLocation:function (successFn, errorFn) {
        exec(successFn, errorFn, 'GaoDeLocation', 'stopLocation', []);
    }
};

module.exports = GaoDe;
