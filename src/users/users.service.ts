import { Injectable } from '@nestjs/common';
import { CreateUserType } from '../utiles/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Aymen', email: 'aymen@example.com' },
    { username: 'Cory', email: 'cory@example.com' },
    { username: 'Greg', email: 'greg@example.com' },
  ];

  fetchUsers(sortDesc: boolean) {
    return sortDesc
      ? this.fakeUsers
          .slice()
          .sort((a, b) => b.username.localeCompare(a.username))
      : this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return userDetails;
  }

  fetchUserById(id: number) {
    return { id, username: 'ahmed', email: 'ahmed@example.com' };
  }
}
