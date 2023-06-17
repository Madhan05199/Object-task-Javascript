
//11.sum

const person = {

    first_name: 'Monica',
    last_name: 'Geller',
    phone: '915-996-9739',
    email: 'monica37@gmail.com',
    
        address: {
        
                street: {
                street_num: '495',
                street_name: 'Grove Street',
                },
    
        city: 'New York',
        country: 'USA',
        },
    
    };
    
    
    
    for(keys in person){
    
     if(person[keys] instanceof Object){
    
     for(let innerkeys in person[keys]){
    
         if(person[keys][innerkeys] instanceof Object){
            
            for(let innerinnerkey in person[keys][innerkeys]){
    
               console.log(`${innerinnerkey} => ${person[keys][innerkeys][innerinnerkey]}`) 
            } 
         }else{
             console.log(`${innerkeys} => ${person[keys][innerkeys]}`) 
         } 
     }
     }else{
    
        console.log(`${keys} => ${person[keys]}`) 
     }
    }