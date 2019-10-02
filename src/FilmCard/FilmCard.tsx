import * as React from 'react';

interface IFilmCard {
  id: string;
  name: string;
  type: string;
  onClickDelete: (id: string) => void;
}

const FilmCard: React.FC<IFilmCard> = ({ id, name, type, onClickDelete }) => {
  return (
    <div className="card">
      <div className="card-header">
        {name}
      </div>
      <div className="card-body">
        Type: {type}
      </div>
      <div className="card-body">
        <button
          className="btn btn-warning"
          onClick={() => onClickDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FilmCard;
