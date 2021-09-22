(function(){
var a = [5,2,1,3,5,6,7,8,9,4,4];
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
            for(k=j;k<a.length-1;k++){
                a[k] = a[k+1];
            }
            a.length--;
        }
    }
}
console.log(a);
})();
