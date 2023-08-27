import { TIngredientType } from '../types/data';

export const SET_ACTIVE_TAB: 'SET_ACTIVE_TAB' = 'SET_ACTIVE_TAB';

interface ISetActiveTab {
  readonly type: typeof SET_ACTIVE_TAB;
  tab: TIngredientType;
}
export type TTabsActions = ISetActiveTab;
