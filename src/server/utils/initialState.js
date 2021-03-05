export default {
  user: {},
  search: '',
  wishList: [],
  theme: 'light',
  currency: 'USD',
  language: 'es',
  cart: { size: 0, total: 0, delivery: 5, recipes: []},
  recipes: { count: 0, next: null, previous: null, results: [] },
  categories: { count: 0, next: null, previous: null, results: [] },
  coin: [
    { format: 'en-US', currency: 'USD', value: 1 },
    { format: 'es-MX', currency: 'MXN', value: 20.86 },
    { format: 'es-CO', currency: 'COP', value: 3647 },
  ],
};
