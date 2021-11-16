import { Tutorial } from './models/tutorial.model';
import { User } from './models/tutorial.model';

export interface AppState {
  readonly user: User[];
}