function somar(numb1, numb2) {
  if (isNaN(numb1) || isNaN(numb2)) {
    return "erro"; // thow
  }
  return Number(numb1) + Number(numb2);
}
function salario(horaTrabalhada, valorHora) {}
module.exports = { somar };
