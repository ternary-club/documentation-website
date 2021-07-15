/**
 * Returns an RGB color based on a number
 * @param number Any positive number
 * @returns A red color if number % 3 = 0, green if = 1 and blue if = 2
 */
export function getColorFromNumber(number: number): string {
  switch (number % 3) {
    case 0: return '#e74c3c';
    case 1: return '#2ecc71';
    case 2: return '#3498db';
    default: return '#9e9f9e';
  }
}

/**
 * Returns the CSS filter for each color
 * @param color The color
 * @returns The CSS filter that will result in the given color
 */
export function getColorFilter(color: string): string {
  switch (color) {
    case '#e74c3c': return 'invert(41%) sepia(55%) saturate(1710%) hue-rotate(334deg) brightness(90%) contrast(102%)';
    case '#2ecc71': return 'invert(73%) sepia(46%) saturate(717%) hue-rotate(86deg) brightness(86%) contrast(86%)';
    case '#3498db': return 'invert(54%) sepia(38%) saturate(987%) hue-rotate(163deg) brightness(93%) contrast(83%)';
    default: return '';
  }
}
