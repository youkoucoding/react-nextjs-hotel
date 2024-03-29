import { rest } from 'msw';
import locations from './db';

export const handlers = [
  rest.get('https://my.backend/hotel', (req, res, ctx) => {
    return res(ctx.json(locations));
  }),
  rest.get('/about', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: '60333292-7ca1-4361-bf38-b6b43b90cb16',
          author: 'John Maverick',
          text: 'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The triology is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!',
        },
      ])
    );
  }),
];
