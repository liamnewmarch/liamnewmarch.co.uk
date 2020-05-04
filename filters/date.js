export default function(date, format = 'iso') {
  switch (format) {
    case 'long':
      return new Intl.DateTimeFormat('en', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(date);
    case 'iso':
    default:
      return date.toISOString().split('T')[0];
  }
}
