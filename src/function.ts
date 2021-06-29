const getFullName = (name: string, surname: string): string => {
  return name + ' ' + surname;
};

console.log(getFullName('monster', 'test'));

const multiply = (input1: string, input2: string): number => {
  return parseInt(input1) * parseInt(input2);
};

console.log(multiply('2', '3'));
