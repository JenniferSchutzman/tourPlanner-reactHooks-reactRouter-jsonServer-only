const dataByInterests = [
  {

    name: 'History',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf5pXiGmew-Qup76YUfafCYyLLIh_BB-pyJqh7wcEVP2YeyKZ83A',
    selected: null,
    experienceTypes: [
      { name: 'Museum', img: '/white_Museum.jpg', selected: null },
      { name: 'Carriage', img: '/hisCharCarriageTour.jpg', selected: null },
      { name: 'Walking', img: '/street.png', selected: null }
    ],
  },
  {
    name: 'Adventure',
    img: '/surfing_color.jpeg',
    selected: null,
    experienceTypes: [
      { name: 'Kayak', img: '/kayak.png', selected: null },
      { name: 'Surf', img: '/surfing_1.jpeg', selected: null },
      { name: 'Boat', img: '/sunset_sail.jpeg', selected: null }
    ],
  },
  {
    name: 'Culinary',
    experienceTypes: [
      { name: 'Food', img: '/food.jpeg', selected: null },
      { name: 'Drinks', img: '/char_wine.jpeg', selected: null }
    ],
    img: '/food2.jpeg',
    selected: null
  },
  {
    name: 'Haunted',
    experienceTypes: [
      { name: 'Carriage', img: '/haunted_carriage.jpeg', selected: null },
      { name: 'Walking', img: '/GhostCharTour.jpg', selected: null }
    ],
    img: '/graveyard2.png',
    selected: null
  }
]

export default dataByInterests;