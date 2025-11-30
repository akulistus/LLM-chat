export class IdManager {
  _id: number;

  constructor() {
    this._id = -1;
  }

  get id(): number {
    return this.id;
  }

  next(): number {
    this._id += 1;
    return this._id;
  }
}