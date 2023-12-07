export const getCurrentDateTime = () => {  
  const now = new Date();
  const formattedDateTime = now.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).replace(/\//g, '-');

  return formattedDateTime;
}

export const displayCelsius = (temp: number) => {
  const celsius = temp - 273.15;
  return celsius.toFixed(0)
}