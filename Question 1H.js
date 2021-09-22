(function(){
    var k=2;
    var a = [5,2,1,3,5,6,7,8,9,4,4];
        for (let i = 0; i < k; i++) {
        a.unshift(a.pop()); 
    }
    console.log(a);
})();