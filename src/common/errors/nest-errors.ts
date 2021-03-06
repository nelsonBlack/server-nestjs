export const USER_EXCEPTIONS = {
  MissingDataError: `Not authourized to make this action`,
  NoConnectionError: `No connection found`,
  InvalidEmailError: `Provided email is invalid.`,
  ResetTokenExpiredError: `resetToken expired`,
  PasswordTooShortError: `Password is too short.`,
  UserNotFoundError: `No user found.`,
  InvalidInviteTokenError: `inviteToken is invalid.`,
  UserEmailExistsError: `InvalidEmailConfirmToken`,
  InvalidEmailConfirmToken: `InvalidEmailConfirmToken`,
  UserUsernameExistsError: `User already exists with this username`,
  UserInviteNotAcceptedError: `User has not accepted invite yet.`,
  UserDeletedError: `User has been deleted.`,
  UserEmailUnconfirmedError: `Users email has not been confirmed yet.`,
  InvalidOldPasswordError: `Invalid old password.`,
  WrongPassword:`Password is wrong`
};
