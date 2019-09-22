/* We made a function which takes score, evaluates between 0-100, assigns a grade letter 
according two American grade system. */

function calculateGrade(score) {
  let grade = '';

  if (score >= 90 && score <= 100) {
    grade = 'A';
  } else if (score >= 80 && score < 90) {
    grade = 'B';
  } else if (score >= 70 && score < 80) {
    grade = 'C';
  } else if (score >= 60 && score < 70) {
    grade = 'D';
  } else if (score >= 50 && score < 60) {
    grade = 'E';
  } else if (score >= 0 && score < 50) {
    grade = 'F';
  } else {
    grade = 'n/a'; //not available
  }

  return `You got a ${grade} (${score}%)!`;
}

console.log(calculateGrade(100));
