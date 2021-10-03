const locations = [
  {
    title: 'Los Angeles',
    description:
      'Live like the stars in these luxurious Southern California estates.',
    properties: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center',
        price: 190000,
        reviewCount: 34,
        rating: 2,
        amenities: [
          'balcony',
          'pool',
          'beach',
          'kidFriendly',
          'parking',
          'airConditioning',
        ],
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        beds: 4,
        baths: 1,
        title: 'Quiet living outside the city',
        price: 175000,
        reviewCount: 12,
        rating: 3,
        amenities: [
          'balcony',
          'pool',
          'beach',
          'petFriendly',
          'kidFriendly',
          'parking',
        ],
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
        beds: 5,
        baths: 4,
        title: 'Renovated apartment uptown',
        price: 200000,
        reviewCount: 54,
        rating: 5,
        amenities: [
          'pool',
          'beach',
          'petFriendly',
          'kidFriendly',
          'parking',
          'airConditioning',
        ],
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        beds: 3,
        baths: 2,
        title: 'Family home in the suburbs',
        price: 115000,
        reviewCount: 34,
        rating: 4,
        amenities: [
          'balcony',
          'pool',
          'beach',
          'petFriendly',
          'kidFriendly',
          'parking',
          'airConditioning',
        ],
      },
    ],
  },
  {
    title: 'Phoenix',
    description:
      'Escape the cold and enjoy great weather without breaking the bank.',
    properties: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center',
        price: 190000,
        reviewCount: 34,
        rating: 4,
        amenities: [
          'balcony',
          'pool',
          'petFriendly',
          'kidFriendly',
          'parking',
          'airConditioning',
        ],
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        beds: 4,
        baths: 1,
        title: 'Quiet living outside the city',
        price: 175000,
        reviewCount: 12,
        rating: 3,
        amenities: [
          'pool',
          'petFriendly',
          'kidFriendly',
          'parking',
          'airConditioning',
        ],
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        beds: 5,
        baths: 4,
        title: 'Renovated apartment uptown',
        price: 200000,
        reviewCount: 54,
        rating: 5,
        amenities: [
          'balcony',
          'pool',
          'beach',
          'kidFriendly',
          'parking',
          'airConditioning',
        ],
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        beds: 3,
        baths: 2,
        title: 'Family home in the suburbs',
        price: 115000,
        reviewCount: 34,
        rating: 4,
        amenities: [
          'balcony',
          'pool',
          'petFriendly',
          'kidFriendly',
          'parking',
        ],
      },
    ],
  },
  {
    title: 'Dallas',
    description:
      'Experience Texas living in these awesome ranch-style homes.',
    properties: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1576675784201-0e142b423952?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2072&q=80',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center',
        price: 190000,
        reviewCount: 34,
        rating: 4,
        amenities: [
          'balcony',
          'pool',
          'petFriendly',
          'kidFriendly',
          'parking',
          'airConditioning',
        ],
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        beds: 4,
        baths: 1,
        title: 'Quiet living outside the city',
        price: 175000,
        reviewCount: 12,
        rating: 3,
        amenities: [
          'balcony',
          'pool',
          'petFriendly',
          'kidFriendly',
          'parking',
          'airConditioning',
        ],
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1432303492674-642e9d0944b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        beds: 5,
        baths: 4,
        title: 'Renovated apartment uptown',
        price: 200000,
        reviewCount: 54,
        rating: 5,
        amenities: [
          'balcony',
          'pool',
          'beach',
          'kidFriendly',
          'parking',
          'airConditioning',
        ],
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        beds: 3,
        baths: 2,
        title: 'Family home in the suburbs',
        price: 115000,
        reviewCount: 34,
        rating: 4,
        amenities: [
          'balcony',
          'pool',
          'beach',
          'petFriendly',
          'kidFriendly',
          'parking',
          'airConditioning',
        ],
      },
    ],
  },
];

export default locations;

