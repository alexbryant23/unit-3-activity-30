const employeeList = [{
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];
{
const commandList = ['print, verify, contains, update, add, delete, employeeList'];

const userCommand = prompt('enter command');

for (let i = 0; i < commandList.length; i++) {
  if (userCommand === 'print') {
    printEmployeeInfo(employeeList)
  }
  if (userCommand === 'verify') {
    verifyEmplpyee(employeeList)
  }
  if (userCommand === 'lookup') {
    lookupEmplpyee(employeeList)
  }
  if (userCommand === 'contains') {
    containsEmplpyee(employeeList)
  }
  if (userCommand === 'update') {
    updateEmplpyee(employeeList)
  }
  if (userCommand === 'add') {
    addEmplpyee(employeeList)
  }
  if (userCommand === 'delete') {
    deleteEmplpyee(employeeList)
  }
  if (userCommand === 'roster'){
    roster(employeeList)
  }
  
}

//works!
function containsEmplpyee(employeeList) {
  const employeeString = prompt('Give me the start of an employee name?')
  for (let i = 0; i < employeeList.length; i++) {
    let currentEmployee = employeeList[i].name;
    let didIFindIt = currentEmployee.indexOf(employeeString);
    if (didIFindIt > -1) {
      render(currentEmployee)
    }
  }
}

//works!
function lookupEmplpyee(employeeList) {
  const employeeName = prompt('Give me an employee name?')
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeName === employeeList[i].name){
    
    render(employeeList[i].name)
    render(employeeList[i].officeNum)
    render(employeeList[i].phoneNum)
    }
  }
}

// works!
function verifyEmplpyee(employeeList) {
  const employeeName = prompt('Give me an employee name?')
  for (let i = 0; i < employeeList.length; i++) {
    console.log(employeeList[i].name)
    console.log(i)
    if (employeeList[i].name === employeeName) {
      render('true')
    } else {
      render('false')
    }
  }
}

//works!
function roster(employeeList) {
  
  for (let i = 0; i < employeeList.length; i++) {
    render(employeeList[i].name)
  }
}


//works!
function printEmployeeInfo(employeeList) {

  for (let i = 0; i < employeeList.length; i++) {
    render(employeeList[i].name)
    render(employeeList[i].officeNum)
    render(employeeList[i].phoneNum)
  }
}
//works!
function deleteEmplpyee(employeeList) {
  const employeeName = prompt('Give me an employee name?')
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === employeeName) {

      employeeList.splice(i, 1);

      for (let i = 0; i < employeeList.length; i++) {

        render(employeeList[i].name)
        render(employeeList[i].officeNum)
        render(employeeList[i].phoneNum)
      }
    }
  }
}

//works!
function addEmplpyee(employeeList) {
  const employeeName = prompt('Give me an employee name?');
  const employeeOffice = prompt('Give me their office number');
  const employeeTelephone = prompt('Give me their telephone number');

  var newEmployee = {
    name: employeeName,
    officeNum: employeeOffice,
    phoneNum: employeeTelephone
  }

  employeeList.push(newEmployee);

  for (let j = 0; j < employeeList.length; j++) {
    render(employeeList[j].name)
    render(employeeList[j].officeNum)
    render(employeeList[j].phoneNum)
  }

}

//works!
function updateEmplpyee(employeeList) {
  const employeeName = prompt('Give me an employee name?')
  const employeeField = prompt('Give me a field to update.')
  const employeeValue = prompt('What would you like the new field to say?')
  
    if (employeeField === 'office') {
       for (let i = 0; i < employeeList.length; i++) {
          if (employeeName === employeeList[i].name) {
          employeeList[i].officeNum = employeeValue
          render(employeeList[i].name)
          render(employeeList[i].officeNum)
          render(employeeList[i].phoneNum)
          }

        }
        } else if(employeeField === "phone"){
          for (let i = 0; i < employeeList.length; i++) {
            if (employeeName === employeeList[i].name) {
            employeeList[i].phoneNum = employeeValue
          render(employeeList[i].name)
          render(employeeList[i].officeNum)
          render(employeeList[i].phoneNum)
      

    } 




  }}}}
