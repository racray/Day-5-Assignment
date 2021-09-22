var Palindrome = (p) =>{
    var temp,rem,final;
    for(let i=0;i<p.length;i++){
        temp=p[i];
        a = p[i];
        final=0;
        while(a>0){
            rem= a%10;
            a = parseInt(a/10);
            final=final*10 + rem;
        }
        if(temp==final){
            console.log(p[i]);
        }
    }
}

Palindrome([202,505,45,54,5445]);