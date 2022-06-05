// a. Mostrar en consola los números del 1 al 100 de 1 en 1.
function showNumbers(a) {
  for(let i=1; i<=a; i++) {
    console.log(i)
  }  
}

// showNumbers(100);

// b. Mostrar en consola los números del 1000 al 500 de 2 en 2.
function showNumbers2(a, b) {
  for(let i=a; i>=b; i-=2) {
    console.log(i)
  }  
}

// showNumbers2(1000, 500);

// Obtener el promedio de notas de un alumno considerando que la
// suma de notas debe ser el retorno de una función y el promedio
// el retorno de otra función. Las notas son: 6,8,9,2,5,10.

const notes = [6,8,9,2,5,10];
const getAverage = (notes) => {
  
  const sumNotes = (notes) => {
    const sum = notes.reduce((a,b) => a+b, 0)
    return sum
  }
  
  const averageNotes = (notes) => {
    const sizeNotes = notes.length;
    const average = sumNotes(notes)/sizeNotes
    return average
  }
  return averageNotes(notes);
}

console.log(getAverage(notes));