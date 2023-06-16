export const validateAmount = (number = "") => {
  const negativeSignPattern = /^-{2,}/;
  const pointCount = (number.match(/\./g) || []).length;
  const dashCount = (number.match(/-/g) || []).length;

  //validamos si la longitud de un numero es mayor que 15
  if (number.length > 15) return false;
  // Comprobamos si la cadena comienza con más de un signo '-'
  if (negativeSignPattern.test(number)) return false;
  // Comprobamos si la cadena contiene más de un punto '.'
  if (pointCount > 1) return false;
  // Comprobamos si la cadena contiene más de un guión '-' en total
  if (dashCount > 1) return false;
  // Comprobamos si hay un guión '-' que no esté al inicio de la cadena
  if (!number.startsWith("-") && dashCount > 0) return false;
  // Si pasa todas las comprobaciones, retornamos verdadero
  return true;
};

export const validateDescription = (description = "") => {
  if (description.length > 500) {
    return false;
  }
  return true;
};

export const getTodayDate = () => {
  let date = "";
  const d = new Date();
  const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
  const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
  const year = d.getFullYear();
  date += `${day}/${month}/${year}`;
  return date;
};
