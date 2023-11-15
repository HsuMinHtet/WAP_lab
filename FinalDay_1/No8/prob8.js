const result = (function (exports, module) {
    exports = module.exports;
    exports.firstname = 'John';
    module.exports.lastname = 'Smith';
    exports = {
        getFullName: function () {
            console.log('John Smith')
        }
    }
    return module.exports;
}).apply(null, [null, { exports: {} }]);
console.log(result);


/* 
Output
--------
{ firstname: 'John', lastname: 'Smith' }
(Reason)
1)export and module.export point to empty obj 
2)export.firstname: 'John'
3)module.exports.lastname = 'Smith'
4)re-asign to export=anonymous fn link an object
4)return module.exports({firstname: 'John', lastname: 'Smith'})

*/