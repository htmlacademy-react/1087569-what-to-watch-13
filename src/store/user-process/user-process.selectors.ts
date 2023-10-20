import { NameSpace } from '../../consts';
import { TState } from '../../types/state';

export const getAuthorizationStatus = (state: TState) => state[NameSpace.User].authorizationStatus;
export const getUserAvatar = (state: TState): string => state[NameSpace.User].avatar;
export const getErrorStatus = (state: TState): boolean => state[NameSpace.User].hasError;
