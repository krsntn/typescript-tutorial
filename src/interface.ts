interface IUserProfile {
  username: string;
  age?: number;
  getMessage(): string;
}

const user1: IUserProfile = {
  username: 'Monster',
  age: 12,
  getMessage() {
    return 'hello ' + this.username;
  },
};

const user2: IUserProfile = {
  username: 'Jack',
  getMessage() {
    return 'hello ' + this.username;
  },
};
