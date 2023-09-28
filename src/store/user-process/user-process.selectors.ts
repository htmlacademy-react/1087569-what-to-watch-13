import { NameSpace } from '../../consts';
import { TState } from '../../types/state';
import { AuthorizationStatus } from '../../consts';

export const getAuthorizationStatus = (state: TState) => state[NameSpace.User].authorizationStatus;
export const getAuthCheckedStatus = (state: TState): boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
