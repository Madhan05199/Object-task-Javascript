
     //10.  Using reduce method

     const numbers = [1, 2, 3, 4, 5];


     let retval=numbers.reduce(function(prevval,currentval){
        return prevval+currentval*2
     },10)
      
     console.log(retval);
