// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { STATUS_CODES } from 'http';
import validUrl from "../../../core/utils/validURI";
import { APIResponse } from "../../../core/utils/apiErrorResponse";
import { INVALID_URL } from "../../../common/constants/apiErrorMessages";



/**
 * First Api tries to fetch data from google crawler
 * If that errorrs out it fetches data by directly calling the API/URL provided
 * 
 * Required: Url in the query paramerters
 * 
 * @param req Request from client
 * @param res Response we ought to send to client
 * @returns response object
 */
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<APIResponse>
) {
    const { url } = req.query;

    // If url not provided send bad request
    if (!url || typeof url !== 'string' || !validUrl(url)) {
        return res.status(400).send(new APIResponse({}, false, STATUS_CODES['400'] as string, INVALID_URL));
    }

    try {
        const response = await axios.get(
            `http://webcache.googleusercontent.com/search?q=cache:${url}`
        );

        const responseCode = response.status;

        return res.status(responseCode).send(new APIResponse(response.data, true, STATUS_CODES['200'] as string, ''));
    } catch (error) {
        const response = await axios.get(url as string);
        return res.status(response.status).send(new APIResponse(response.data, true, STATUS_CODES['200'] as string, ''));
    }
}
