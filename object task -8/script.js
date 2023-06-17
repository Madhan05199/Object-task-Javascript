const employees = [
    { name: "David Carlson", age: 30 },
    { name: "John Cena", age: 34 },
    { name: "Mike Sheridan", age: 25 },
    { name: "John Carte", age: 50 }
  ];
  
  const Employee = employees.find(function(value){
  
      return value.name==="John Cena";
      
  })
  console.log(Employee)


  //Print the record for the employee whose name is John index position using findIndex method

const employees1 = [
    { name: "David Carlson", age: 30 },
    { name: "John Cena", age: 34 },
    { name: "Mike Sheridan", age: 25 },
    { name: "John Carte", age: 50 }
  ];
  
  const employee=employees1.findIndex(function(value){
  
      return value.name==="John Cena";
  })
  
  console.log(employee)