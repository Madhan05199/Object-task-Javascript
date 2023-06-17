//5.Using Map method//

const users = [
    {
    first_name: 'Mike',
    last_name: 'Sheridan'
    },
    {
    first_name: 'Tim',
    last_name: 'Lee'
    },
    {
    first_name: 'John',
    last_name: 'Carte'
    }
   ];
   
   let retval=users.map(function(value){
   
     return value.first_name+" "+value.last_name;
   })
   
   console.log(retval);