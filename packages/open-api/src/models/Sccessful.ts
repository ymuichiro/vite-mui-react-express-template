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
/**
 * 
 * @export
 * @interface Sccessful
 */
export interface Sccessful {
    /**
     * 
     * @type {string}
     * @memberof Sccessful
     */
    status: SccessfulStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof Sccessful
     */
    message: string;
}


/**
 * @export
 */
export const SccessfulStatusEnum = {
    Ok: 'ok',
    Error: 'error'
} as const;
export type SccessfulStatusEnum = typeof SccessfulStatusEnum[keyof typeof SccessfulStatusEnum];


/**
 * Check if a given object implements the Sccessful interface.
 */
export function instanceOfSccessful(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function SccessfulFromJSON(json: any): Sccessful {
    return SccessfulFromJSONTyped(json, false);
}

export function SccessfulFromJSONTyped(json: any, ignoreDiscriminator: boolean): Sccessful {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'message': json['message'],
    };
}

export function SccessfulToJSON(value?: Sccessful | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
    };
}

