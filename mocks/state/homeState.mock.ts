import * as homeConstants from '@home/constants';
import type { HomeState } from '@home/models';

const { NAME } = homeConstants;

const homeState: Record<typeof NAME, HomeState> = {
  [NAME]: {
    value: 8,
  },
};

export default homeState;
