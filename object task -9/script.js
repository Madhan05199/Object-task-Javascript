//9.Using filter method//


const employees = [
    { name: 'David Carlson', age: 30 },
    { name: 'John Cena', age: 34 },
    { name: 'Mike Sheridan', age: 25 },
    { name: 'John Carte', age: 50 }
   ];
   
   let retval=employees.filter(function(value){
       
   return value.age >30
       
   })
   
   console.log(retval);
