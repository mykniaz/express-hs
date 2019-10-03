import { createSchema, Type, typedModel, ExtractDoc, ExtractProps } from 'ts-mongoose';

const movieSchema = createSchema({
  name: Type.string(),
  type: Type.string(),
});

type TMovieSchema = ExtractDoc<typeof movieSchema>;
interface IMovieProps extends ExtractProps<typeof movieSchema> {
  _id: string;
}

const movieModel = typedModel('movie', movieSchema);

export {
  movieModel,
  IMovieProps,
  TMovieSchema,
};
