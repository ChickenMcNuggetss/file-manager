import { INPUT_ERROR, OPERATION_FAILED_ERROR } from '#shared/constants.js';

export class ErrorService {
  
  displayInvalidInputError() {
    console.log(INPUT_ERROR);
  }

  displayOperationFailedError() {
    console.log(OPERATION_FAILED_ERROR);
  }
}