/* tslint:disable */
/* eslint-disable */
/**
 * Enum test
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    EnumPatternObject,
    EnumPatternObjectFromJSON,
    EnumPatternObjectToJSON,
    InlineObject,
    InlineObjectFromJSON,
    InlineObjectToJSON,
    InlineResponse200,
    InlineResponse200FromJSON,
    InlineResponse200ToJSON,
    NumberEnum,
    NumberEnumFromJSON,
    NumberEnumToJSON,
    StringEnum,
    StringEnumFromJSON,
    StringEnumToJSON,
} from '../models';

export interface FakeEnumRequestGetInlineRequest {
    stringEnum?: FakeEnumRequestGetInlineStringEnumEnum;
    nullableStringEnum?: string | null;
    numberEnum?: FakeEnumRequestGetInlineNumberEnumEnum;
    nullableNumberEnum?: number | null;
}

export interface FakeEnumRequestGetRefRequest {
    stringEnum?: StringEnum;
    nullableStringEnum?: StringEnum | null;
    numberEnum?: NumberEnum;
    nullableNumberEnum?: NumberEnum | null;
}

export interface FakeEnumRequestPostInlineRequest {
    inlineObject?: InlineObject;
}

export interface FakeEnumRequestPostRefRequest {
    enumPatternObject?: EnumPatternObject;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     */
    async fakeEnumRequestGetInlineRaw(requestParameters: FakeEnumRequestGetInlineRequest): Promise<runtime.ApiResponse<InlineResponse200>> {
        const queryParameters: any = {};

        if (requestParameters.stringEnum !== undefined) {
            queryParameters['string-enum'] = requestParameters.stringEnum;
        }

        if (requestParameters.nullableStringEnum !== undefined) {
            queryParameters['nullable-string-enum'] = requestParameters.nullableStringEnum;
        }

        if (requestParameters.numberEnum !== undefined) {
            queryParameters['number-enum'] = requestParameters.numberEnum;
        }

        if (requestParameters.nullableNumberEnum !== undefined) {
            queryParameters['nullable-number-enum'] = requestParameters.nullableNumberEnum;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fake/enum-request-inline`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     */
    async fakeEnumRequestGetInline(requestParameters: FakeEnumRequestGetInlineRequest): Promise<InlineResponse200> {
        const response = await this.fakeEnumRequestGetInlineRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async fakeEnumRequestGetRefRaw(requestParameters: FakeEnumRequestGetRefRequest): Promise<runtime.ApiResponse<EnumPatternObject>> {
        const queryParameters: any = {};

        if (requestParameters.stringEnum !== undefined) {
            queryParameters['string-enum'] = requestParameters.stringEnum;
        }

        if (requestParameters.nullableStringEnum !== undefined) {
            queryParameters['nullable-string-enum'] = requestParameters.nullableStringEnum;
        }

        if (requestParameters.numberEnum !== undefined) {
            queryParameters['number-enum'] = requestParameters.numberEnum;
        }

        if (requestParameters.nullableNumberEnum !== undefined) {
            queryParameters['nullable-number-enum'] = requestParameters.nullableNumberEnum;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fake/enum-request-ref`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EnumPatternObjectFromJSON(jsonValue));
    }

    /**
     */
    async fakeEnumRequestGetRef(requestParameters: FakeEnumRequestGetRefRequest): Promise<EnumPatternObject> {
        const response = await this.fakeEnumRequestGetRefRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async fakeEnumRequestPostInlineRaw(requestParameters: FakeEnumRequestPostInlineRequest): Promise<runtime.ApiResponse<InlineObject>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/fake/enum-request-inline`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObjectToJSON(requestParameters.inlineObject),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineObjectFromJSON(jsonValue));
    }

    /**
     */
    async fakeEnumRequestPostInline(requestParameters: FakeEnumRequestPostInlineRequest): Promise<InlineObject> {
        const response = await this.fakeEnumRequestPostInlineRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async fakeEnumRequestPostRefRaw(requestParameters: FakeEnumRequestPostRefRequest): Promise<runtime.ApiResponse<EnumPatternObject>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/fake/enum-request-ref`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EnumPatternObjectToJSON(requestParameters.enumPatternObject),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EnumPatternObjectFromJSON(jsonValue));
    }

    /**
     */
    async fakeEnumRequestPostRef(requestParameters: FakeEnumRequestPostRefRequest): Promise<EnumPatternObject> {
        const response = await this.fakeEnumRequestPostRefRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum FakeEnumRequestGetInlineStringEnumEnum {
    One = 'one',
    Two = 'two',
    Three = 'three'
}
/**
    * @export
    * @enum {string}
    */
export enum FakeEnumRequestGetInlineNumberEnumEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3
}