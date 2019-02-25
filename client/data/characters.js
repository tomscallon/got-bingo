/* @flow */

import type { Character } from '../types';

/**
 * Images are all stored in image/character/*. All are square, with side lengths
 * of at least 300px.
 */

const IMAGE_FOLDER = 'image/character';

const characters: Array<Character> = [
  {
    name: 'Tyrion Lannister',
    nicknames: [
      'The Imp',
      'Halfman',
      'Yollo',
      'Hugor Hill',
      'Little Lion',
      'Demon Monkey',
      'Dwarf',
    ],
    imageURL: 'tyrion.jpg',
  },
  {
    name: 'Jamie Lannister',
    nicknames: ['Kingslayer', 'Oathbreaker', 'The Young Lion'],
    imageURL: 'jaime.jpg',
  },
  {
    name: 'Cersei Lannister',
    nicknames: ['The Lioness'],
    imageURL: 'cersei.jpg',
  },
  {
    name: 'Daenerys Targaryen',
    nicknames: [
      'Stormborn',
      'The Unburnt',
      'Breaker of Chains',
      'Mother of Dragons',
      'Mhysa',
      'The Silver Queen',
      'The Dragon Queen',
      'Khaleesi',
    ],
    imageURL: 'daenerys.jpg',
  },
  {
    name: 'Jon Snow',
    nicknames: [
      'Aegon Targaryen',
      'Lord Snow',
      'Bastard of Winterfell',
      'King Crow',
      'White Wolf',
      'Stark Bastard',
    ],
    imageURL: 'jon.jpg',
  },
  {
    name: 'Davos Seaworth',
    nicknames: ['The Onion Knight', 'The Onion Lord', 'Davos Shorthand'],
    imageURL: 'davos.jpg',
  },
  {
    name: 'Sansa Stark',
    nicknames: ['Little Dove', 'Little Bird', 'Alayne', 'Jonquil'],
    imageURL: 'sansa.jpg',
  },
  {
    name: 'Arya Stark',
    nicknames: [
      'Arry',
      'Lanna of the Canals',
      'Horseface',
      'Arya Underfoot',
      'Cat of the Canals',
      'No One',
    ],
    imageURL: 'arya.jpg',
  },
  {
    name: 'Bran Stark',
    nicknames: [
      'The Three-Eyed Raven',
      'Little Lord',
      'Bran the Broken',
      'The Winged Wolf',
    ],
    imageURL: 'bran.png',
  },
  {
    name: 'Missandei',
    nicknames: [],
    imageURL: 'missandei.jpg',
  },
  {
    name: 'Brienne of Tarth',
    nicknames: ['Brienne the Beauty', 'The Maid of Tarth', 'Brienne the Blue'],
    imageURL: 'brienne.jpg',
  },
  {
    name: 'Samwell Tarly',
    nicknames: [
      'Ser Piggy',
      'Prince Pork-chop',
      'Lady Piggy',
      'Sam the Slayer',
      'Lord of Ham',
      'Black Sam',
    ],
    imageURL: 'samwell.jpg',
  },
  {
    name: 'Gilly',
    nicknames: [],
    imageURL: 'gilly.jpg',
  },
  {
    name: 'Sandor Clegane',
    nicknames: ['The Hound', 'Dog'],
    imageURL: 'sandor.jpg',
  },
  {
    name: 'Jorah Mormont',
    nicknames: ['Jorah the Andal'],
    imageURL: 'jorah.jpg',
  },
  {
    name: 'Lord Varys',
    nicknames: ['The Spider', 'The Eunuch', 'Rugen', 'Varys of Lys'],
    imageURL: 'varys.jpg',
  },
  {
    name: 'Lady Melisandre',
    nicknames: ['Melisandre of Asshai', 'The Red Woman', 'The Red Witch'],
    imageURL: 'melisandre.jpg',
  },
  {
    name: 'Bronn',
    nicknames: ['Ser Bronn of the Blackwater', 'Cooper', 'The Cutthroat'],
    imageURL: 'bronn.jpg',
  },
  {
    name: 'Gendry',
    nicknames: ['Clovis', 'The Bull', 'Ser Gendry of the Hollow Hill'],
    imageURL: 'gendry.jpg',
  },
  {
    name: 'Theon Greyjoy',
    nicknames: [
      'Reek',
      'Little Theon',
      'Prince of Fools',
      'Theon Turncloak',
      'The Squid Prince',
      'Theon Kinslayer',
      'The Prince of Stink',
    ],
    imageURL: 'theon.jpg',
  },
  {
    name: 'Yara Greyjoy',
    nicknames: ['Asha Greyjoy'],
    imageURL: 'yara.jpg',
  },
  {
    name: 'Euron Greyjoy',
    nicknames: ["Crow's Eye"],
    imageURL: 'euron.jpg',
  },
  {
    name: 'Eddison Tollett',
    nicknames: ['Dolorous Edd'],
    imageURL: 'edd.jpg',
  },
  {
    name: 'Tormund',
    nicknames: [
      'Tormund Giantsbane',
      'Tormund Thunderfist',
      'Tormund Horn-Blower',
      'Tormund Tall-Talker',
      'Breaker of Ice',
      'Husband to Bears',
      'Speaker to Gods',
      'Father of Hosts',
    ],
    imageURL: 'tormund.jpg',
  },
  {
    name: 'Gregor Clegane',
    nicknames: [
      'The Mountain',
      'The Mountain That Rides',
      'The Great Dog',
      "Tywin Lannister's Mad Dog",
      'The Enormity That Rides',
      'Robert Strong',
    ],
    imageURL: 'gregor.png',
  },
  {
    name: 'Grey Worm',
    nicknames: ['Torkonodo'],
    imageURL: 'grey-worm.jpg',
  },
  {
    name: 'Podrick Payne',
    nicknames: ['Pod'],
    imageURL: 'podrick.jpg',
  },
  {
    name: 'Yohn Royce',
    nicknames: ['Bronze Yohn'],
    imageURL: 'yohn.jpg',
  },
  {
    name: 'Harry Strickland',
    nicknames: [],
    imageURL: 'harry-TEMP.jpg',
  },
  {
    name: 'Qyburn',
    nicknames: [],
    imageURL: 'qyburn.png',
  },
  {
    name: 'Beric Donarrion',
    nicknames: ['The Lightning Lord'],
    imageURL: 'beric.png',
  },
  {
    name: 'Drogon',
    nicknames: ['The Winged Shadow'],
    imageURL: 'drogon.jpg',
  },
  {
    name: 'Rhaegal',
    nicknames: [],
    imageURL: 'rhaegal.png',
  },
  {
    name: 'Ghost',
    nicknames: [],
    imageURL: 'ghost.png',
  },
  {
    name: 'Night King',
    nicknames: [],
    imageURL: 'night-king.jpg',
  },
  {
    name: 'Meera Reed',
    nicknames: [],
    imageURL: 'meera.jpg',
  },
  {
    name: 'Robert Arryn',
    nicknames: ['Robin Arryn'],
    imageURL: 'robert-arryn.jpg',
  },
  {
    name: 'Ellaria Sand',
    nicknames: [],
    imageURL: 'ellaria.jpg',
  },
  {
    name: 'Lyanna Mormont',
    nicknames: [],
    imageURL: 'lyanna.jpg',
  },
  {
    name: 'Edmure Tully',
    nicknames: [],
    imageURL: 'edmure.png',
  },
  {
    name: 'Tycho Nestoris',
    nicknames: [],
    imageURL: 'tycho.jpg',
  },
  {
    name: 'Hot Pie',
    nicknames: [],
    imageURL: 'hot-pie.png',
  },
  {
    name: 'Ilyn Payne',
    nicknames: [],
    imageURL: 'ilyn.jpg',
  },
]
  .map(c => ((c.imageURL = `${IMAGE_FOLDER}/${c.imageURL}`), c))
  .map((c, index) => ({ id: index, ...c }))
  .sort((c1, c2) => c1.name.localeCompare(c2.name));

export default characters;
