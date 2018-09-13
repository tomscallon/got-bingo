/* @flow */

import type { Character } from '../types';

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
    imageURL: '',
  },
  {
    name: 'Jamie Lannister',
    nicknames: ['Kingslayer', 'Oathbreaker', 'The Young Lion'],
    imageURL: '',
  },
  {
    name: 'Cersei Lannister',
    nicknames: ['The Lioness'],
    imageURL: '',
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
    imageURL: '',
  },
  {
    name: 'Jon Snow',
    nicknames: [
      'Aegon Targaryen',
      'Lord Snow',
      'Bastard of Winterfell',
      'King Crow',
      'White Wolf',
    ],
    imageURL: '',
  },
  {
    name: 'Davos Seaworth',
    nicknames: ['The Onion Knight', 'The Onion Lord', 'Davos Shorthand'],
    imageURL: '',
  },
  {
    name: 'Sansa Stark',
    nicknames: ['Little Dove', 'Little Bird', 'Alayne', 'Jonquil'],
    imageURL: '',
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
    imageURL: '',
  },
  {
    name: 'Bran Stark',
    nicknames: [
      'The Three-Eyed Raven',
      'Little Lord',
      'Bran the Broken',
      'The Winged Wolf',
    ],
    imageURL: '',
  },
  {
    name: 'Missandei',
    nicknames: [],
    imageURL: '',
  },
  {
    name: 'Brienne of Tarth',
    nicknames: ['Brienne the Beauty', 'The Maid of Tarth', 'Brienne the Blue'],
    imageURL: '',
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
    imageURL: '',
  },
  {
    name: 'Gilly',
    nicknames: [],
    imageURL: '',
  },
  {
    name: 'Sandor Clegane',
    nicknames: ['The Hound', 'Dog'],
    imageURL: '',
  },
  {
    name: 'Jorah Mormont',
    nicknames: ['Jorah the Andal'],
    imageURL: '',
  },
  {
    name: 'Lord Varys',
    nicknames: ['The Spider', 'The Eunuch', 'Rugen', 'Varys of Lys'],
    imageURL: '',
  },
  {
    name: 'Lady Melisandre',
    nicknames: ['Melisandre of Asshai', 'The Red Woman', 'The Red Witch'],
    imageURL: '',
  },
  {
    name: 'Bronn',
    nicknames: ['Ser Bronn of the Blackwater', 'Cooper', 'The Cutthroat'],
    imageURL: '',
  },
  {
    name: 'Gendry',
    nicknames: ['Clovis', 'The Bull', 'Ser Gendry of the Hollow Hill'],
    imageURL: '',
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
    imageURL: '',
  },
  {
    name: 'Yara Greyjoy',
    nicknames: ['Asha Greyjoy'],
    imageURL: '',
  },
  {
    name: 'Euron Greyjoy',
    nicknames: ["Crow's Eye"],
    imageURL: '',
  },
  {
    name: 'Eddison Tollett',
    nicknames: ['Dolorous Edd'],
    imageURL: '',
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
    imageURL: '',
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
    imageURL: '',
  },
  {
    name: 'Grey Worm',
    nicknames: ['Torkonodo'],
    imageURL: '',
  },
  {
    name: 'Podrick Payne',
    nicknames: ['Pod'],
    imageURL: '',
  },
  {
    name: 'Yohn Royce',
    nicknames: ['Bronze Yohn'],
    imageURL: '',
  },
  {
    name: 'Harry Strickland',
    nicknames: [],
    imageURL: '',
  },
  {
    name: 'Qyburn',
    nicknames: [],
    imageURL: '',
  },
  {
    name: 'Beric Donarrion',
    nicknames: ['The Lightning Lord'],
    imageURL: '',
  },
  {
    name: 'Drogon',
    nicknames: ['The Winged Shadow'],
    imageURL: '',
  },
  {
    name: 'Rhaegal',
    nicknames: [],
    imageURL: '',
  },
  {
    name: 'Ghost',
    nicknames: [],
    imageURL: '',
  },
  {
    name: 'Night King',
    nicknames: [],
    imageURL: '',
  },
  {
    name: 'Meera Reed',
    nicknames: [],
    imageURL: '',
  },
  {
    name: 'Robert Arryn',
    nicknames: ['Robin Arryn'],
    imageURL: '',
  },
  {
    name: 'Ellaria Sand',
    nicknames: [],
    imageURL: '',
  },
  {
    name: 'Lyanna Mormont',
    nicknames: [],
    imageURL: '',
  },
  {
    name: 'Edmure Tully',
    nicknames: [],
    imageURL: '',
  },
  {
    name: 'Tycho Nestoris',
    nicknames: [],
    imageURL: '',
  },
  {
    name: 'Hot Pie',
    nicknames: [],
    imageURL: '',
  },
  {
    name: 'Ilyn Payne',
    nicknames: [],
    imageURL: '',
  },
];

export default characters;
