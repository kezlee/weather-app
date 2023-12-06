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