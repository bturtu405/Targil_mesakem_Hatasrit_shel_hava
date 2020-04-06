const sum = (...numbers) =>{
  let result = 0;
  for(let index = 0; index < numbers.length; index++){
    if(numbers[index]===null){
      return result;
    }else{
      result += numbers[index];
    }
  }
  return (...nextNumbers) => {
    nextNumbers.splice(0,0,result);
    return sum(...nextNumbers);
  };
}
