import { parseISO, format } from 'date-fns';
import { pt } from 'date-fns/locale';

export function withMonthSuffix(duration) {
  return duration > 1 ? `${duration} meses` : `${duration} mês`;
}

export function ISOtoHumanDate(date) {
  return format(parseISO(date), "d 'de' MMMM 'de' yyyy", { locale: pt });
}

export function ISOtoSlashDate(date) {
  return format(parseISO(date), 'dd/MM/yyyy', { locale: pt });
}

export function datetoSlashDate(date) {
  return format(date, 'dd/MM/yyyy', { locale: pt });
}

export function datetoKebabDate(date) {
  return format(date, 'yyyy-MM-dd', { locale: pt });
}
