const db = require('../config/connection');
const { User, Bouquet, Occasion, Order } = require('../models');
const occSeeds = require('./occ-seeds.json');

db.once('open', async () => {
  await Occasion.deleteMany();

  const occasions = await Occasion.insertMany(occSeeds);

  console.log('occasions seeded');

  await Bouquet.deleteMany();

  const bouquets = await Bouquet.insertMany([
    {
      name: 'Sunshine and Sherbert',
      description:
        'This happy bouquet is sure to make everyone smile. It features lilies, carnations, and chrysanthemums.',
      image: '/images/b1.jpg',
      occasion: [ occasions[0]._id, occasions[1]._id ],
      price: 65.00,
      featured: true
    },
    {
      name: 'Pink and Pastel',
      description:
        'Pink flowers are a great way to say you are thinking of them. This arrangment features pink daisies and lots of greenery.',
      image: '/images/b2.jpg',
      occasion: [occasions[1]._id, occasions[3]._id, occasions[5]._id],
      price: 60.00,
      featured: true
    },
    {
      name: 'Assorted Roses',
      occasion: [occasions[0]._id, occasions[4]._id],
      description:
        'Multicolored roses for the special someone in your life. Features roses of many colors and a variety of bulbs for future blooms.',
      image: '/images/b3.jpg',
      price: 50.00,
      featured: true
    },
    {
      name: 'Light and Airy',
      occasion: [occasions[3]._id, occasions[2]._id],
      description:
        'A bouquet to brighten up the room! Features pale pink roses and white accent flowers.',
      image: '/images/b4.jpg',
      price: 45.00,
      featured: true
    },
    {
      name: 'Romantic Roses',
      occasion: [occasions[0]._id, occasions[4]._id],
      description:
        'Surprise your love with romantic roses in shades of mauve, white, and purple.',
      image: '/images/b5.jpg',
      price: 70.00,
      featured: false
    },
    {
      name: 'Modern but Timeless',
      occasion: [occasions[5]._id],
      description:
        'A sophisticated arrangement to remind a loved one that you are thinking of them.',
      image: '/images/b6.jpg',
      price: 80.00,
      featured: false
    },
    {
      name: 'Joyful Tulips',
      occasion: [occasions[1]._id, occasions[2]._id], 
      description:
        'With a mixture of pink and yellow tulips, this arrangement will give joy to anyone who recieves it.',
      image: '/images/b7.jpg',
      price: 55.00,
      featured: false
    },
    {
      name: 'Sunflower Special',
      occasion: [occasions[2]._id, occasions[1]._id],
      description:
        'Gifting sunflowers is a great way to say congratulations and to look forward to the sunny days.',
      image: '/images/b8.jpg',
      price: 30.00,
      featured: false
    },
    {
      name: 'Delicate Sunshine',
      occasion: [occasions[3]._id],
      description: 'Featuring yellow poppies, these flowers are a delightful reminder of care.',
      image: '/images/b9.jpg',
      price: 35.00,
      featured: false
    },
    {
      name: 'Perfectly Pink',
      occasion: [occasions[4]._id, occasions[3]._id],
      description:
        'Featuring carnations and roses, this bouquet will show you love them.',
      image: '/images/b10.jpg',
      price: 46.00,
      featured: false
    },
    {
      name: 'Something Blue',
      occasion: [occasions[2]._id, occasions[0]._id],
      description:
        'To celebrate an engagement or to surprise someone special, this bouquet is for you! It features lilies and deep blue flowers.',
      image: '/images/b11.jpg',
      price: 62.00,
      featured: false
    },
    {
      name: 'Magenta Thoughts',
      occasion: [occasions[5]._id, occasions[1]._id],
      description:
        'Perfect for home decor. This arrangement features deep pink flowers, both tall and small.',
      image: '/images/b12.jpg',
      price: 47.00,
      featured: false
    },
    {
      name: 'Bushels of Care',
      occasion: [occasions[5]._id, occasions[2]._id],
      description:
        'As the largest arrangement our store has to offer, this bouquet features hydrangas, carnations, roses, daisies, and babies breath.',
      image: '/images/b13.jpg',
      price: 90.00,
      featured: true
    },
    {
      name: 'More Color Please',
      occasion: [occasions[1]._id, occasions[5]._id, occasions[3]._id],
      description:
        'For someone with a colorful personality, this bouquet is right for them! Features an assortment of flowers with a variety of colors.',
      image: '/images/b14.jpg',
      price: 75.00,
      featured: false
    },
    {
      name: 'Love You Lots',
      occasion: [occasions[0]._id, occasions[3]._id, occasions[4]._id],
      description:
        'An arrangement guarenteed to say that you love them a lot. Features babies breath, assorted greenery, and, of course, roses.',
      image: '/images/b15.jpg',
      price: 51.00,
      featured: false
    },
    {
      name: 'Simply Tulips',
      occasion: [occasions[2]._id, occasions[4]._id, occasions[5]._id],
      description:
        'A simply stylish bouquet featuring pink tulips in a clear vase.',
      image: '/images/b16.jpg',
      price: 37.00,
      featured: false
    },
    {
      name: 'Dozen Roses',
      occasion: [occasions[4]._id, occasions[0]._id],
      description:
        'A classic sign of love! This arrangement features a dozen roses in a clear vase.',
      image: '/images/b17.jpg',
      price: 40.00,
      featured: false
    }
  ]);

  console.log('bouquets seeded');

  await Order.deleteMany();

  const order = await Order.create(
    {
      products: [bouquets[0]._id, bouquets[0]._id, bouquets[1]._id]
    }
  );

  await User.deleteMany();

  await User.create({
    username: 'oneuser',
    email: 'one@user.com',
    password: 'password01',
    orders: [order]
  });

  await User.create({
    username: 'twouser',
    email: 'two@user.com',
    password: 'password02'
  });

  console.log('users seeded');

  process.exit(0);
});
