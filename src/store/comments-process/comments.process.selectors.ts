import { TState } from '../../types/state';
import { TComment } from '../../types/comment';
import { NameSpace, RequestStatus } from '../../consts';

export const getComments = (state: TState): TComment[] => state[NameSpace.Comments].comments;
export const getSendingCommentStatus = (state: TState): RequestStatus => state[NameSpace.Comments].sendingCommentStatus;
