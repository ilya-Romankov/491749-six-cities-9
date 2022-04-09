import {FormEvent, useRef} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {loginAction} from '../../store/api-action';
import {AuthData} from '../../types/auth-data';
import {AppRoute} from '../../constant';
import {pickRandomCity} from '../../helper/random';
import {checkPassword} from '../../helper/validate-data';

function LoginScreen(): JSX.Element {
  const navigate = useNavigate();

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();


    if (loginRef.current !== null && passwordRef.current !== null && checkPassword(passwordRef.current.value)) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });

      navigate(AppRoute.Main);
    }
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action="#"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                ref={loginRef}
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                ref={passwordRef}
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button
              className="login__submit form__submit button"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to="/">
              <span>{pickRandomCity()}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginScreen;
