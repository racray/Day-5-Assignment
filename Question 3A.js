var oddNumber = (a) => {
    for(let i=0;i<a.length;i++){
        if(a[i]%2!=0){
            console.log(a[i]);
        }
    }
}

oddNumber([17,25,34,42,55,69,72,89]);