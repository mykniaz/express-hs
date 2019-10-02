import * as React from 'react';

import { Request } from '../utils';

import Preloader from '../Preloader';

const FilmForm: React.FC<{onCreate: () => void}> = ({ onCreate }) => {
  const [formData, setFormData] = React.useState({ name: '', type: '' });
  const [isShownPreloader, setPreloader] = React.useState(false);

  const setDefaultData = () => {
    setFormData({ name: '', type: '' });
  };

  const submitFormHandler = (e: any) => {
    e.preventDefault();

    if (formData.name !== '' && formData.type !== '') {
      setPreloader(true);

      const request = new Request();

      request.post('/movies/create', formData)
        .then((response: Response) => {
          setDefaultData();

          onCreate();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setPreloader(false);
        });
    }
  };

  const sendButton = isShownPreloader ? (<Preloader />) : (<button type="submit" className="btn btn-primary">Add</button>);

  return (
    <div className="card">
      <div className="card-header">
        Film Form
      </div>
      <div className="card-body">
        <form className="form" onSubmit={submitFormHandler}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              id="type"
              placeholder="Movie type"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Type</label>
            <input
              type="text"
              className="form-control"
              id="type"
              placeholder="Movie type"
              value={formData.type}
              onChange={e => setFormData({ ...formData, type: e.target.value })}
            />
          </div>
          {sendButton}
        </form>
      </div>
    </div>
  );
};

export default FilmForm;
