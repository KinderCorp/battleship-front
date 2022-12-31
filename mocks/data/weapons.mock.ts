import type { Weapon } from '@src/weapon/models';

const weapons: Weapon[] = [
  {
    damageArea: [{ x: 0, y: 0 }],
    id: 1,
    maxAmmunition: -1,
    name: 'bomb',
    src: '/images/weapons/weapon-bomb.png',
  },
  {
    damageArea: [
      { x: 0, y: 1 },
      { x: 0, y: 0 },
      { x: 0, y: -1 },
    ],
    id: 2,
    maxAmmunition: 2,
    name: 'triple',
    src: '/images/weapons/weapon-bomb.png',
  },
];

export default weapons;
