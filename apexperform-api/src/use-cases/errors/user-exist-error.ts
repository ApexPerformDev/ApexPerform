export class UserExistError extends Error {
  constructor() {
    super('User already exists')
  }
}
