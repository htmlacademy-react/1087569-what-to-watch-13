import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';
import { useRef, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { checkEmailValid, checkPasswordValid } from '../../utils';
import { getErrorStatus } from '../../store/user-process/user-process.selectors';
import { dropError } from '../../store/user-process/user-process.slice';
import cn from 'classnames';

function LoginScreen(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const hasError = useAppSelector(getErrorStatus);
  const [isEmailError, setEmailError] = useState<boolean>(false);
  const [isPasswordError, setPasswordError] = useState<boolean>(false);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const isEmailValid = checkEmailValid(email);
      const isPasswordValid = checkPasswordValid(password);
      setEmailError(false);
      setPasswordError(false);

      if (!isEmailValid) {
        setEmailError(true);
      }

      if (!isPasswordValid) {
        setPasswordError(true);
      }

      if (isEmailValid && isPasswordValid) {
        dispatch(loginAction({
          email: email,
          password: password
        }));
      }

      dispatch(dropError());
    }
  };

  return (
    <div className="user-page">
      <Helmet>
        <title>Авторизация</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          onSubmit={handleSubmit}
          action="#"
          className="sign-in__form"
        >
          {
            (isEmailError || isPasswordError || hasError) &&
            <div className="sign-in__message">
              {isEmailError && <p>Please enter a valid email address</p>}
              {isPasswordError && <p>Please enter a valid password</p>}
              {hasError && <p>We can’t recognize this email <br /> and password combination. Please try again.</p>}
            </div>
          }
          <div className="sign-in__fields">
            <div className={cn(
              'sign-in__field',
              {'sign-in__field--error': isEmailError}
            )}
            >
              <input
                ref={emailRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={cn(
              'sign-in__field',
              {'sign-in__field--error': isPasswordError}
            )}
            >
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default LoginScreen;
