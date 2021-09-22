(function(){
    var k=2;
    var aux =[];
    var a = [5,2,1,3,5,6,7,8,9,4,4];
    for (let i = 0; i < k; i++) {
            aux[i] = a[11+i-k];
        // 11 is size of a
    }
    for(i=11-1-k;i>=0;i--){
        a[i+k] = a[i]
    }
    for(i=0;i<k;i++){
        a[i] = aux[i];
    }
    
    
    console.log(a);
})();
