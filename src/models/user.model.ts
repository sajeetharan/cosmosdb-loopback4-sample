import {Entity, model, property} from '@loopback/repository';

// imports
@model()
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  hasAccount: boolean;

  constructor(data?: Partial<User>) {
    super(data);
  }
}
