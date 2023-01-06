import type { ApiGetWeaponsResponse, ApiResponse } from '@api/models';

const apiGetWeaponsResponse: ApiResponse<ApiGetWeaponsResponse> = {
  data: [
    {
      damageArea: [[0, 0]],
      id: 1,
      maxAmmunition: -1,
      name: 'bomb',
      src: '/images/weapons/weapon-bomb.png',
    },
    {
      damageArea: [
        [0, 1],
        [0, 0],
        [0, -1],
      ],
      id: 2,
      maxAmmunition: 2,
      name: 'triple',
      src: '/images/weapons/weapon-bomb.png',
    },
  ],
};

export default apiGetWeaponsResponse;
