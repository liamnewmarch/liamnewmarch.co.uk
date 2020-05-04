export default function(iterable, key) {
  const reverse = key.startsWith('-');
  if (reverse) key = key.substr(1);
  const fn = ({ [key]: a }, { [key]: b }) => a > b ? 1 : a < b ? -1 : 0;
  const sorted = [...iterable].sort(fn);
  return reverse ? sorted.reverse() : sorted;
}
