import { NameSpace } from '../../consts';
import { TState } from '../../types/state';
import { TPromoFilm } from '../../types/promo-film';

export const getPromoFilm = (state: TState): TPromoFilm | null => state[NameSpace.PromoFilm].promoFilm;
