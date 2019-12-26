export function withMonthSuffix(duration) {
  return duration > 1 ? `${duration} meses` : `${duration} mês`;
}
