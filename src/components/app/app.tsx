import MainScreen from '../../pages/main-screen/main-screen';
import { TPromoFilm } from '../../types/promo-film';

type AppScreenProps = {
  cardsCount: number;
  promoFilm: TPromoFilm;
}

function App({cardsCount, promoFilm}: AppScreenProps): JSX.Element {
  return(
    <MainScreen
      cardsCount={cardsCount}
      promoFilm={promoFilm}
    />
  );
}

export default App;
