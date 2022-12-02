import { HOME_NAME } from '@home/constants';
import type { HomeState } from '@home/models';

const homeState: Record<typeof HOME_NAME, HomeState> = {
  [HOME_NAME]: {
    helloWorld: '',
    value: 8,
  },
};

export default homeState;
