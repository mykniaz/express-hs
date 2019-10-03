import * as React from 'react';
import Preloader from '../Preloader';

import { Request } from '../utils';

const AuthPage: React.FC = () => {
  const [formData, setFormData] = React.useState({
    login: '',
    email: '',
    password: '',
    checkPassword: '',
  });

  const [isShownPreloader, setPreloader] = React.useState(false);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (formData.password !== formData.checkPassword) return;

    if (formData.password.length < 6) return;

    setPreloader(true);

    const request = new Request();

    request.post('/auth', formData)
      .then((response: Response) => {
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(() => {
        setPreloader(false);
      });

    console.log('submit');
  };

  const controlChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const submitButton = () => {
    return isShownPreloader
      ? (<Preloader />)
      : (<button type="submit" className="btn btn-primary">Submit</button>);
  };

  return (
    <div className="row">
      <div className="col-sm-12">
        <form onSubmit={formSubmitHandler}>
          <div className="form-group">
            <label htmlFor="name">Login</label>
            <input
              type="text"
              className="form-control"
              id="login"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={formData.login}
              onChange={controlChangeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={formData.email}
              onChange={controlChangeHandler}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={controlChangeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Check Password</label>
            <input
              type="password"
              className="form-control"
              id="checkPassword"
              placeholder="Password one more time"
              value={formData.checkPassword}
              onChange={controlChangeHandler}
            />
          </div>
          {submitButton()}
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
