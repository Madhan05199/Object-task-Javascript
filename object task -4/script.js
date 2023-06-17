//4. Sort an array of JavaScript objects based on age//


let employees = [
    {
    firstName: 'John',
    lastName: 'Doe',
    age: 27,
    joinedDate: 'December 15, 2017'
    },
    {
    firstName: 'Ana',
    lastName: 'Rosy',
    age: 25,
    joinedDate: 'January 15, 2019'
    },
    {
    firstName: 'Zion',
    lastName: 'Albert',
    age: 30,
    joinedDate: 'February 15, 2011'
    }
   ];
   
   
   let retval3=employees.sort(function(a,b){
   return a.age-b.age;
       
   })
   console.log(retval3)