import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipeList: Recipe[] = [
    {
      name: 'Spaghetti Carbonara',
      ingredients:
        'Spaghetti, eggs, Parmesan cheese, pancetta, black pepper, salt',
      procedure: [
        'Cook spaghetti until al dente.',
        'Sauté pancetta until crispy.',
        'Mix eggs and Parmesan in a bowl.',
        'Combine hot spaghetti with pancetta and egg mixture, tossing quickly to avoid scrambling the eggs.',
        'Season with black pepper and serve.',
      ],
      image:
        'https://imgs.search.brave.com/Lq_pAio29O3Y0JdmmAATtlxt-e21N7tbFMsPfbCabME/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwMS5ueXQuY29t/L2ltYWdlcy8yMDIx/LzAyLzE0L2Rpbmlu/Zy9jYXJib25hcmEt/aG9yaXpvbnRhbC9j/YXJib25hcmEtaG9y/aXpvbnRhbC1qdW1i/by12Mi5qcGc',
    },
    {
      name: 'Chicken Tikka Masala',
      ingredients:
        'Chicken, yogurt, garlic, ginger, garam masala, tomato paste, heavy cream, cumin, paprika, salt',
      procedure: [
        'Marinate chicken in yogurt, garlic, ginger, and spices for at least 1 hour.',
        'Cook marinated chicken until browned.',
        'Simmer tomato paste, cream, and spices in a pan.',
        'Add chicken to the sauce and cook for 10 minutes.',
        'Serve with rice or naan.',
      ],
      image:
        'https://imgs.search.brave.com/hw1SWKnmoexYiIdKeUOq6ZK1RKiTmcbvXknnI2ebEeA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVjaXBldGluZWF0/cy5jb20vdGFjaHlv/bi8yMDE4LzA0L0No/aWNrZW4tVGlra2Et/TWFzYWxhXzAuanBn',
    },
    {
      name: 'Caesar Salad',
      ingredients:
        'Romaine lettuce, croutons, Parmesan cheese, Caesar dressing, anchovies (optional)',
      procedure: [
        'Chop romaine lettuce and toss with Caesar dressing.',
        'Add croutons and grated Parmesan.',
        'Top with anchovies if desired and serve chilled.',
      ],
      image:
        'https://imgs.search.brave.com/YxGcGmj9Gl1Upowsxes2vLn_IKpfjzEITvQjpl9s5P8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/Nzc5OTAxNS9waG90/by9jYWVzYXItc2Fs/YWQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWVuc3JpWWdS/SjlTSmN0TXUza2w3/cktuMVJQRUVCaWti/a21uQXkwSmZiU2c9',
    },
    {
      name: 'Tacos al Pastor',
      ingredients:
        'Pork shoulder, pineapple, chili peppers, garlic, cumin, oregano, onion, tortillas, lime',
      procedure: [
        'Marinate pork in a blend of chili peppers, garlic, cumin, oregano, and pineapple for 2 hours.',
        'Grill or cook the pork until crispy.',
        'Serve in tortillas with chopped onions, pineapple, and lime.',
      ],
      image:
        'https://imgs.search.brave.com/nhnPRsaDd8yQsNzY1kKWY4OyKGJR6GsohXWqUXp0X0Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2VyaW91c2VhdHMu/Y29tL3RobWIvNGti/d04xM0JsWm5aM0V5/d3J0RzJBekNLdVlz/PS8xNTAweDAvZmls/dGVyczpub191cHNj/YWxlKCk6bWF4X2J5/dGVzKDE1MDAwMCk6/c3RyaXBfaWNjKCkv/MjAyMTA3MTItdGFj/b3MtYWwtcGFzdG9y/LW1lbGlzc2EtaG9t/LXNlcmlvdXNlYXRz/LTM3LWY3MmNkZDAy/Yzk1NzRiY2ViMWVl/ZjFjOGEyM2I3NmVk/LmpwZw',
    },
    {
      name: 'Margherita Pizza',
      ingredients:
        'Pizza dough, tomato sauce, mozzarella cheese, fresh basil, olive oil, salt',
      procedure: [
        'Roll out pizza dough and spread tomato sauce.',
        'Add slices of mozzarella.',
        'Bake in a preheated oven at 250°C (480°F) for 10-12 minutes.',
        'Top with fresh basil and a drizzle of olive oil.',
      ],
      image:
        'https://imgs.search.brave.com/ybszqb4ueE06Cy0_KIEcr9TAXirhksnSIMPlQYhEeQk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwMS5ueXQuY29t/L2ltYWdlcy8yMDE0/LzA0LzA5L2Rpbmlu/Zy8wOUpQUElaWkEy/LzA5SlBQSVpaQTIt/anVtYm8tdjMuanBn',
    },
    {
      name: 'Beef Stroganoff',
      ingredients:
        'Beef strips, mushrooms, onions, sour cream, beef broth, flour, egg noodles',
      procedure: [
        'Sauté beef strips until browned, then remove from pan.',
        'Cook mushrooms and onions in the same pan.',
        'Add flour and beef broth to create a sauce, then stir in sour cream.',
        'Return beef to the sauce and simmer.',
        'Serve over egg noodles.',
      ],
      image:
        'https://imgs.search.brave.com/RW7XnpHh86WqmU3OeAfLefGYSJfjJf7T7qpCc55nTdk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcw/NDg3NTA2L3Bob3Rv/L2JlZWYtc3Ryb2dh/bm9mZi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9OWgxcDYt/UlpwWmJlVnNkaEJx/eXplUUZZRDJnbFBj/emVkNDhFN3J1MW05/Yz0',
    },
    {
      name: 'Pad Thai',
      ingredients:
        'Rice noodles, shrimp or chicken, eggs, bean sprouts, peanuts, green onions, tamarind paste, fish sauce, garlic',
      procedure: [
        'Soak rice noodles in warm water.',
        'Sauté garlic, then add shrimp or chicken and cook.',
        'Push aside and scramble eggs.',
        'Add noodles, tamarind paste, fish sauce, and stir-fry.',
        'Top with bean sprouts, peanuts, and green onions.',
      ],
      image:
        'https://imgs.search.brave.com/zqGJSsMIpej0fudPlAFQlcaqb02vhYi8Hm-uA9M0Eg8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTEw/MTYzNDc4L3Bob3Rv/L3BhZC10aGFpLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/dE9xek9Nd2ZocTBK/WnJYMG1mRUhFNFIt/dmFVdWE1STRyY3VT/bFNlR3MwPQ',
    },
    {
      name: 'Greek Salad',
      ingredients:
        'Cucumber, tomatoes, red onion, feta cheese, olives, olive oil, oregano',
      procedure: [
        'Chop cucumber, tomatoes, and red onion.',
        'Combine in a bowl with olives and feta.',
        'Drizzle with olive oil and sprinkle with oregano.',
        'Serve fresh.',
      ],
      image:
        'https://imgs.search.brave.com/lJTtfgkp-yTBwaWkNkgXHNOE-OfeUsUGw_azcG6zrG0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG92ZWFuZGxlbW9u/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTkvMDcvZ3Jl/ZWstc2FsYWQtMi5q/cGc',
    },
    {
      name: 'Butter Chicken',
      ingredients:
        'Chicken, butter, garlic, ginger, tomato puree, cream, garam masala, turmeric, chili powder, salt',
      procedure: [
        'Marinate chicken in garlic, ginger, and spices.',
        'Cook in butter until browned.',
        'Add tomato puree and simmer.',
        'Stir in cream and cook for 10 minutes.',
        'Serve with basmati rice or naan.',
      ],
      image:
        'https://imgs.search.brave.com/t3gKMiQvNriMJz8SG-nrlLm3phV2dOzPvNmfEfVGcL0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzcwLzg5Lzkx/LzM2MF9GXzY3MDg5/OTEzN191ekRVdW1E/cFA3NTdZOTQwUEVM/b01JTlNRTnZ3UUlm/Vi5qcGc',
    },
    {
      name: 'Pancakes',
      ingredients: 'Flour, milk, eggs, baking powder, sugar, butter, salt',
      procedure: [
        'Mix flour, baking powder, sugar, and salt.',
        'Whisk milk, eggs, and melted butter together.',
        'Combine wet and dry ingredients and mix until smooth.',
        'Cook on a hot griddle until bubbles form, then flip.',
        'Serve with syrup or fruit.',
      ],
      image:
        'https://imgs.search.brave.com/ZCWCIpyEFEOArI3fFh4ioyVDLjc8Rwppd1VKl9Lo8Yk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NTU4NDIzL3Bob3Rv/L3BhbmNha2VzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz16/Z3RKOWNOZ1dJY2pM/a1g2Q29NUW1BR2tl/R0FjT1BNTEdYbVpU/cjkzU0c0PQ',
    },
  ];

  getRecipeList() {
    return this.recipeList;
  }
}
