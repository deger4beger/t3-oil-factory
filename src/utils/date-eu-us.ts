export function dateEuToUs(date: Date) {
	return date.toLocaleDateString().split('.').reverse().join('-')
}