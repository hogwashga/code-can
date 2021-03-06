let person = {
  _id,
  _firstName,
  _middleNames,
  _lastName,
  _birthDate,
  _birthMonth,
  _birthYear,
  _age,
  get id(){
    return this._id;
  },
  get firstName(){
    return this._firstName;
  },
  get middleNames(){
    return this.middleNames;
  },
  get lastName(){
    return this._lastName;
  },
  get birthDate(){
    return this._birthDate;
  },
  get birthMonth(){
    return this._birthMonth;
  },
  get birthYear(){
    return this._birthYear;
  },
  get age(){
    return this._age;
  },
  set id(newID){
    this._id = newID;
    return;
  },  
  set firstName(newFirstName){
    this._firstName = newFirstName;
    return;
  },
  set middleNames(newMiddleNames){
    this._middleNames = newMiddleNames;
    return;
  },
  set lastName(newLastName){
    this._lastName = newLastName;
    return;
  },
  set birthDate(newDay){
    this._birthDate = newDay;
    return;
  },
  set birthMonth(newMonth){
    this._birthMonth = newMonth;
    return;
  },
  set birthYear(newYear){
    this._birthYear = newYear;
    return;
  },
  set age(newAge){
    this._age = newAge;
    return;
  }
}

function pickRandomCharacterFromString(string){
  return string.charAt(Math.floor(Math.random() * string.length));
}

function generateID(){
  let uid = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789£@';
  for(let iteratorA = 0; iteratorA < 2; iteratorA++){
    if(iteratorA != 0){
      uid += ' :: ';
    }
    for(let iteratorB = 0; iteratorB < 4; iteratorB++){
      if(iteratorB != 0){
        uid += '-';
      }
      for(let iteratorC = 0; iteratorC < 4; iteratorC++){
        uid += pickRandomCharacterFromString(possible);
      }
    }
  }
  return uid;
}

function nowBirthMonth(current, birth){
  return (birth - (current.getMonth() + 1)) < 1;
}

function pastBirthMonth(current, birth){
  return (birth - (current.getMonth() + 1)) < 0;
}

function pastBirthDay(current, birth){
  return (birth - current.getDate()) < 1;
}

function calcAgeBasedOnYear(current, birthyear){
  return current.getFullYear() - (birthyear + 1);
}

function calcAge(day, month, year){
  let date = new Date();
  if(pastBirthMonth(date, month)){
    return calcAgeBasedOnYear(date, year) +1;
  } else if(nowBirthMonth(date, month) && pastBirthDay(date, month)){
    return calcAgeBasedOnYear(date, year) +1;
  } else{
    return calcAgeBasedOnYear(date, year);
  }
}

function changeID(){
  person.id = generateID();
  return;
}

function changeFirstName(changeFirstNameTo){
  if(typeof changeFirstNameTo === 'string'){
    person.firstName = changeFirstNameTo;
    return;
  } else{
    return 'Invalid input.';
  }
}

function changeMiddleNames(changeMiddleNamesTo){
  person.middleNames = changeMiddleNamesTo;
  return;
}

function changeLastName(changeLastNameTo){
  if(typeof changeLastNameTo === 'string'){
    person.lastName = changeLastNameTo;
    return;
  } else{
    return 'Invalid input.';
  }
}

function nameIsFirstName(value){
  if(value === 0){
    return true;
  } else{
    return false;
  }
}

function nameIsLastName(value){
  if(value === (arrayOfNames.length() - 1)){
    return true;
  } else{
    return false;
  }
}

function changeFullName(changeFullNameTo){
  if(typeof changeFullNameTo === 'string'){
    let arrayOfNames = changeFullNameTo.split(' ');
    if(arrayOfNames.length() > 2 && arrayOfNames.length() < 10){
      let arrayOfMiddleNames = []
      let index = 0;
      foreach(name in arrayOfNames){
        if(nameIsFirstName(index)){
          changeFirstName(name);
        } else if(nameIsLastName(index)){
          changeLastName(name);
        } else{
        arrayOfMiddleNames.push(name);
        }
        index++;
      }
      changeMiddleNames(arrayOfMiddleNames);
      return;
    } else if(arrayOfNames.length() < 10){
      return 'Name too long.';
    } else{
      return 'Name too short.';
    }
  } else{
    return 'Invalid input.';
  }
}

function changeBirthDate(changeBirthDateTo){
  if(changeBirthDateTo.isInteger() && changeBirthDateTo > 0 && changeBirthDateTo < 32){
    person.birthDate = changeBirthDateTo;
    person.age = calcAge(person.birthDate, person.birthMonth, person.birthYear);
    return;
  } else{
    return 'Invalid input.';
}

function changeBirthMonth(changeBirthMonthTo){
  if(changeBirthDateTo.isInteger() && changeBirthDateTo > 0 && changeBirthDateTo < 13){
    person.birthMonth = changeBirthMonthTo;
    person.age = calcAge(person.birthDate, person.birthMonth, person.birthYear);
    return;
  } else{
    return 'Invalid input.';
}

function changeBirthYear(changeBirthYearTo){
  let date = new Date();
  if(changeBirthDateTo.isInteger() && changeBirthDateTo > 0 && changeBirthDateTo < (date.getFullYear() + 1)){
    person.birthYear = changeBirthYearTo;
    person.age = calcAge(person.birthDate, person.birthMonth, person.birthYear);
    return;
  } else{
    return 'Invalid input.';
}

function changeDOB(changeDOBTo){
  let dobArray = changeDOBTo.split('/');
  if(dobArray.length === 3 && String(dobArray[0]).length === 2 && String(dobArray[1]).length === 2 && String(dobArray[2]).length === 4){
    changeBirthDate(dobArray[0]);
    changeBirthMonth(dobArray[1]);
    changeBirthYear(dobArray[2]);
    return;
  } else {
    return 'Invalid input.';
 }
}