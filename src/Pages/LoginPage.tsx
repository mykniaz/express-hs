import * as React from 'react';
import Preloader from '../Preloader';
import { Request } from '../utils';

const LoginPage: React.FC = () => {
  const [formData, setFormData] = React.useState({
    login: '',
    password: '',
  });

  const [isShownPreloader, setPreloader] = React.useState(false);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    setPreloader(true);

    const request = new Request();

    request.post('/login', formData)
      .then((response: Response) => {
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(() => {
        setPreloader(false);
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
            <label htmlFor="exampleInputEmail1">Login</label>
            <input
              type="text"
              className="form-control"
              id="login"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={formData.login}
              onChange={event => setFormData({ ...formData, login: event.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={event => setFormData({ ...formData, password: event.target.value })}
            />
          </div>
          {submitButton()}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
