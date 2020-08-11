export const genQuery = (timeRange: string, componentName: string): string =>
    `SELECT ${timeRange} WHERE c = ${componentName} AND x = ${Math.random()}`;
