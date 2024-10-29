export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';
	return Array.from(set)
		.filter((el) => el && el.startsWith(startString))
		.map((el) => el.slice(startString.length))
		.join('-');
}
