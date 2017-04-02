/**
 * Created by Etherless-Nxzt on 02/04/2017.
 */

import { User } from './user';

export interface Repo {
  owner: User;
  name: string;
  description: string;
  url: string;
}
