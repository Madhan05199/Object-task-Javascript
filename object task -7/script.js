//7. Using Map method//

const users = [
    {
    first_name: 'Mike',
    location: 'London'
    },
    {
    first_name: 'Tim',
    location: 'US'
    },
    {
    first_name: 'John',
    location: 'Australia'
    }
   ];
   let retval=users.map(function(value){
   
       return `${value.first_name} lives in ${value.location}`
       
   })
       console.log(retval);