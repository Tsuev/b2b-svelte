export default function formatter(number) { return `${new Intl.NumberFormat('ru-RU').format(number)} руб.` }