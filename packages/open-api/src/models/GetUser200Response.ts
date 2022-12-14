/* tslint:disable */
/* eslint-disable */
/**
 * Open API Document
 * description
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: ym.u.ichiro@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GetUser200ResponseData } from './GetUser200ResponseData';
import {
    GetUser200ResponseDataFromJSON,
    GetUser200ResponseDataFromJSONTyped,
    GetUser200ResponseDataToJSON,
} from './GetUser200ResponseData';

/**
 * 
 * @export
 * @interface GetUser200Response
 */
export interface GetUser200Response {
    /**
     * 
     * @type {GetUser200ResponseData}
     * @memberof GetUser200Response
     */
    data: GetUser200ResponseData;
}

/**
 * Check if a given object implements the GetUser200Response interface.
 */
export function instanceOfGetUser200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GetUser200ResponseFromJSON(json: any): GetUser200Response {
    return GetUser200ResponseFromJSONTyped(json, false);
}

export function GetUser200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUser200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GetUser200ResponseDataFromJSON(json['data']),
    };
}

export function GetUser200ResponseToJSON(value?: GetUser200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GetUser200ResponseDataToJSON(value.data),
    };
}

