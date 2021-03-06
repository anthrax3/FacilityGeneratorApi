// DO NOT EDIT: generated by fsdgenjs

import { HttpClientUtility, IServiceResult, IServiceError, IHttpClientOptions } from 'facility-core';

/** Provides access to FacilityGeneratorApi over HTTP via fetch. */
export function createHttpClient({ fetch, baseUri }: IHttpClientOptions): IFacilityGeneratorApi {
	return new FacilityGeneratorApiHttpClient(fetch, baseUri);
}

/** Generates code from Facility Service Definitions. */
export interface IFacilityGeneratorApi {
	/** Gets information about the API. */
	getApiInfo(request: IGetApiInfoRequest): Promise<IServiceResult<IGetApiInfoResponse>>;
	/** Generates code from a service definition. */
	generate(request: IGenerateRequest): Promise<IServiceResult<IGenerateResponse>>;
}

/** Request for GetApiInfo. */
export interface IGetApiInfoRequest {
}

/** Response for GetApiInfo. */
export interface IGetApiInfoResponse {
	/** The API name. */
	api?: string;
	/** The API version. */
	version?: string;
}

/** Request for Generate. */
export interface IGenerateRequest {
	/** The service definition. */
	definition?: INamedText;
	/** The generator to use. */
	generator?: IGenerator;
}

/** Response for Generate. */
export interface IGenerateResponse {
	/** The output from the generator. */
	output?: INamedText[];
	/** The failure, if any. */
	failure?: IFailure;
}

/** A named text. */
export interface INamedText {
	/** The name. */
	name?: string;
	/** The text. */
	text?: string;
}

/** A generator. */
export interface IGenerator {
	/** The name of the generator. */
	name?: string;
}

/** A parse or generate failure. */
export interface IFailure {
	/** The line number of the failure. */
	line?: number;
	/** The column number of the failure. */
	column?: number;
	/** The failure message. */
	message?: string;
}

const { fetchResponse, createResponseError, createRequiredRequestFieldError } = HttpClientUtility;
type IFetch = HttpClientUtility.IFetch;
type IFetchRequest = HttpClientUtility.IFetchRequest;

class FacilityGeneratorApiHttpClient implements IFacilityGeneratorApi {
	constructor(fetch: IFetch, baseUri: string) {
		if (typeof fetch !== 'function') {
			throw new TypeError('fetch must be a function.');
		}
		if (typeof baseUri === 'undefined') {
			baseUri = '';
		}
		if (/[^\/]$/.test(baseUri)) {
			baseUri += '/';
		}
		this._fetch = fetch;
		this._baseUri = baseUri;
	}
	/** Gets information about the API. */
	public getApiInfo(request: IGetApiInfoRequest): Promise<IServiceResult<IGetApiInfoResponse>> {
		const uri = '';
		const fetchRequest: IFetchRequest = {
			method: 'GET'
		};
		return fetchResponse(this._fetch, this._baseUri + uri, fetchRequest)
			.then(result => {
				const status = result.response.status;
				let value: IGetApiInfoResponse = null;
				if (result.json) {
					if (status === 200 || status === 204) {
						value = result.json;
					}
				}
				if (!value) {
					return createResponseError(status, result.json) as IServiceResult<IGetApiInfoResponse>;
				}
				return { value: value };
			});
	}
	/** Generates code from a service definition. */
	public generate(request: IGenerateRequest): Promise<IServiceResult<IGenerateResponse>> {
		const uri = 'generate';
		const fetchRequest: IFetchRequest = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(request)
		};
		return fetchResponse(this._fetch, this._baseUri + uri, fetchRequest)
			.then(result => {
				const status = result.response.status;
				let value: IGenerateResponse = null;
				if (result.json) {
					if (status === 200 || status === 204) {
						value = result.json;
					}
				}
				if (!value) {
					return createResponseError(status, result.json) as IServiceResult<IGenerateResponse>;
				}
				return { value: value };
			});
	}
	private _fetch: IFetch;
	private _baseUri: string;
}
