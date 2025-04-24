import HTTP_STATUS from "../constant/http.constant";

export abstract class CustomError extends Error {
    abstract status : string;
    abstract statusCode : number;

    constructor(message : string){
        super(message)
    }
}

export class BadRequestException extends CustomError {
    status : string = "error";
    statusCode: number = HTTP_STATUS.BAD_REQUEST;

    constructor(message :string){
        super(message)
    }
}
export class NotFoundException extends CustomError {
    status : string = "error";
    statusCode: number = HTTP_STATUS.NOT_FOUND;

    constructor(message :string){
        super(message)
    }
}
export class unauthorizedException extends CustomError {
    status : string = "error";
    statusCode: number = HTTP_STATUS.UNAUTHORIZED;

    constructor(message :string){
        super(message)
    }
}
export class ForbidoenException extends CustomError {
    status : string = "error";
    statusCode: number = HTTP_STATUS.FORBIDOEN;

    constructor(message :string){
        super(message)
    }
}
export class InternalServerException extends CustomError {
    status : string = "error";
    statusCode: number = HTTP_STATUS.INTERAL_SERVER;

    constructor(message :string){
        super(message)
    }
}