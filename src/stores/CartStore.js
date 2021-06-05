import { writable } from "svelte/store";

export const cart = writable([
    {title: 'Smeg', quantity: 1,  price: 10000},
    {title: 'Korting', quantity: 1, price: 10000},
    {title: 'Omoikiri', quantity: 1, price: 10000}
])

export const sum = writable(0)

