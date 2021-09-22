(function(){
    var a = [1,3,15,17,21,25];
    var b = [2,4,15,18,20,55];
    for(let i=0;i<b.length;i++){
        a.push(b[i]);
    }
    var temp;
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a.length;j++){
            if(a[i]<a[j]){
                temp = a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }
    var len = a.length;
    var mid = Math.ceil(len/2);
    const median = len%2 == 0 ? (a[mid] + a[mid-1])/2 : a[mid];
    console.log(median);
    
})();