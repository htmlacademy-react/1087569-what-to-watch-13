import {Navigate} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
  isLoginPage?: boolean;
}

function PrivateRoute({authorizationStatus, children, isLoginPage}: PrivateRouteProps): JSX.Element {
  if(isLoginPage) {
    return(
      authorizationStatus === AuthorizationStatus.NoAuth
        ? children
        : <Navigate to={AppRoute.Main} />
    );
  }

  return(
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
