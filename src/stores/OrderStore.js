import { writable } from "svelte/store";

export const order = writable([
  {
    title: "Заявка получена",
    amount: 0,
    order: [
      {
        client: "Турпал Бертаев",
        order_num: 1,
        price: 20000,
        order_date: "22.12.2021",
        after_days: 2,
        products: [
          {
            category: "Духовой шкаф",
            title: "FH-100",
            amount: 2,
            state: "Подтвержден",
            history: [
              {
                status: "Заявка получена",
                style: "bg-primary",
                date: "22.12.2021",
              },
            ],
          },
        ],
      },
      {
        client: "Турпал Бертаев",
        order_num: 1,
        price: 20000,
        order_date: "22.12.2021",
        after_days: 2,
        products: [
          {
            category: "Духовой шкаф",
            title: "FH-100",
            amount: 2,
            state: "Подтвержден",
            history: [
              {
                status: "Заявка получена",
                style: "bg-primary",
                date: "22.12.2021",
              },
            ],
          },
        ],
      },
      {
        client: "Турпал Бертаев",
        order_num: 1,
        price: 20000,
        order_date: "22.12.2021",
        after_days: 2,
        products: [
          {
            category: "Духовой шкаф",
            title: "FH-100",
            amount: 2,
            state: "Подтвержден",
            history: [
              {
                status: "Заявка получена",
                style: "bg-primary",
                date: "22.12.2021",
              },
            ],
          },
        ],
      },
    ],
    
  },

  {
    title: "Уточнение детаелей заказа",
    amount: 0,
    order: [
      {
        client: "Турпал Бертаев",
        order_num: 1,
        price: 20000,
        order_date: "22.12.2021",
        after_days: 2,
        products: [
          {
            category: "Духовой шкаф",
            title: "FH-100",
            amount: 2,
            state: "Подтвержден",
            history: [
              {
                status: "Заявка получена",
                style: "bg-primary",
                date: "22.12.2021",
              },
            ],
          },
        ],
      },
      {
        client: "Турпал Бертаев",
        order_num: 1,
        price: 20000,
        order_date: "22.12.2021",
        after_days: 2,
        products: [
          {
            category: "Духовой шкаф",
            title: "FH-100",
            amount: 2,
            state: "Подтвержден",
            history: [
              {
                status: "Заявка получена",
                style: "bg-primary",
                date: "22.12.2021",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    title: "Подтверждение заказа",
    amount: 0,
    order: [
      {
        client: "Турпал Бертаев",
        order_num: 1,
        price: 20000,
        order_date: "22.12.2021",
        after_days: 2,
        products: [
          {
            category: "Духовой шкаф",
            title: "FH-100",
            amount: 2,
            state: "Подтвержден",
            history: [
              {
                status: "Заявка получена",
                style: "bg-primary",
                date: "22.12.2021",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    title: "Выставление счета",
    amount: 0,
    order: [
      {
        client: "Турпал Бертаев",
        order_num: 1,
        price: 20000,
        order_date: "22.12.2021",
        after_days: 2,
        products: [
          {
            category: "Духовой шкаф",
            title: "FH-100",
            amount: 2,
            state: "Подтвержден",
            history: [
              {
                status: "Заявка получена",
                style: "bg-primary",
                date: "22.12.2021",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    title: "Ожидание  поступления на склад",
    amount: 0,
    order: [
      {
        client: "Турпал Бертаев",
        order_num: 1,
        price: 20000,
        order_date: "22.12.2021",
        after_days: 2,
        products: [
          {
            category: "Духовой шкаф",
            title: "FH-100",
            amount: 2,
            state: "Подтвержден",
            history: [
              {
                status: "Заявка получена",
                style: "bg-primary",
                date: "22.12.2021",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    title: "Доставка (оплачено)",
    amount: 0,
    order: [
      {
        client: "Турпал Бертаев",
        order_num: 1,
        price: 20000,
        order_date: "22.12.2021",
        after_days: 2,
        products: [
          {
            category: "Духовой шкаф",
            title: "FH-100",
            amount: 2,
            state: "Подтвержден",
            history: [
              {
                status: "Заявка получена",
                style: "bg-primary",
                date: "22.12.2021",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    title: "Доставка (предоплата)",
    amount: 0,
    order: [
      {
        client: "Турпал Бертаев",
        order_num: 1,
        price: 20000,
        order_date: "22.12.2021",
        after_days: 2,
        products: [
          {
            category: "Духовой шкаф",
            title: "FH-100",
            amount: 2,
            state: "Подтвержден",
            history: [
              {
                status: "Заявка получена",
                style: "bg-primary",
                date: "22.12.2021",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    title: "Доставка (не оплачено)",
    amount: 0,
    order: [
      {
        client: "Турпал Бертаев",
        order_num: 1,
        price: 20000,
        order_date: "22.12.2021",
        after_days: 2,
        products: [
          {
            category: "Духовой шкаф",
            title: "FH-100",
            amount: 2,
            state: "Подтвержден",
            history: [
              {
                status: "Заявка получена",
                style: "bg-primary",
                date: "22.12.2021",
              },
            ],
          },
        ],
      },
    ],
  },
]);

export const isOpen = writable(false);
