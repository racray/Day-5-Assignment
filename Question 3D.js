var Prime = (a) =>{
    for(let i=0;i<a.length;i++){
        var flag = 0;  
        for(let j=2;j<a[i];j++){
              if(a[i]%j==0){
                  flag = 1;
              }
          }
        if(flag==0){
            console.log(a[i]);
        }  
      }  
}

Prime([17,24,42,21,37,55,71,11]);