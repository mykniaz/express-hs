import mongoose from 'mongoose';

export default class Database {
  protected uri: string = '';
  protected config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  constructor (uri: string, config: object = {}) {
    this.uri = uri;
    this.config = {
      ...this.config,
      ...config,
    };
  }

  public connect = () => {
    return mongoose.connect(
      this.uri,
      this.config,
    );
  }
}
