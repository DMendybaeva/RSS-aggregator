export const TO_MANY_RESPONSES_STATUS = 429;

export class TooManyResponsesError extends Error {
  constructor(message) {
    super(message);
    this.name = 'TooManyResponsesError';
  }
}
