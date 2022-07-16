export class APIResponse {

    /** data of the current request */
    data: any = {};

    /** Is API a successful request */
    success: boolean;

    /** If error happens what is the short message */
    message: string;

    /** Detailed explanation of the error */
    reason: string;

    constructor(data: any, success: boolean, message: string, reason: string ) {
        this.data = data || {};
        this.success = success;
        this.message = message;
        this.reason = reason;
    }
}
