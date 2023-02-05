/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@supercolony/typechain-types';
import type { QueryReturnType } from '@supercolony/typechain-types';
import { queryOkJSON, queryJSON, handleReturnType } from '@supercolony/typechain-types';
import { txSignAndSend } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/rmrk_example_mintable';
import type * as ReturnTypes from '../types-returns/rmrk_example_mintable';
import type BN from 'bn.js';
import {ReturnNumber} from '@supercolony/typechain-types';
import {getTypeDescription} from './../shared/utils';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";


export default class Methods {
	private __nativeContract : ContractPromise;
	private __keyringPair : KeyringPair;
	private __callerAddress : string;
	private __apiPromise: ApiPromise;

	constructor(
		apiPromise : ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
		this.__callerAddress = keyringPair.address;
	}

	/**
	* balanceOf
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @returns { number }
	*/
	"balanceOf" (
		owner: ArgumentTypes.AccountId,
		__options: GasLimit,
	): Promise< QueryReturnType< number > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "psp34::balanceOf", [owner], __options);
	}

	/**
	* collectionId
	*
	* @returns { ReturnTypes.Id }
	*/
	"collectionId" (
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnTypes.Id > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "psp34::collectionId", [], __options, (result) => { return handleReturnType(result, getTypeDescription(1, 'rmrk_example_mintable')); });
	}

	/**
	* approve
	*
	* @param { ArgumentTypes.AccountId } operator,
	* @param { ArgumentTypes.Id | null } id,
	* @param { boolean } approved,
	* @returns { void }
	*/
	"approve" (
		operator: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id | null,
		approved: boolean,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::approve", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_mintable");
		}, [operator, id, approved], __options);
	}

	/**
	* totalSupply
	*
	* @returns { ReturnNumber }
	*/
	"totalSupply" (
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryJSON< ReturnNumber >( this.__nativeContract, this.__callerAddress, "psp34::totalSupply", [], __options, (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* ownerOf
	*
	* @param { ArgumentTypes.Id } id,
	* @returns { ReturnTypes.AccountId | null }
	*/
	"ownerOf" (
		id: ArgumentTypes.Id,
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "psp34::ownerOf", [id], __options, (result) => { return handleReturnType(result, getTypeDescription(19, 'rmrk_example_mintable')); });
	}

	/**
	* transfer
	*
	* @param { ArgumentTypes.AccountId } to,
	* @param { ArgumentTypes.Id } id,
	* @param { Array<(number | string | BN)> } data,
	* @returns { void }
	*/
	"transfer" (
		to: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id,
		data: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::transfer", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_mintable");
		}, [to, id, data], __options);
	}

	/**
	* allowance
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @param { ArgumentTypes.AccountId } operator,
	* @param { ArgumentTypes.Id | null } id,
	* @returns { boolean }
	*/
	"allowance" (
		owner: ArgumentTypes.AccountId,
		operator: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id | null,
		__options: GasLimit,
	): Promise< QueryReturnType< boolean > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "psp34::allowance", [owner, operator, id], __options);
	}

	/**
	* renounceOwnership
	*
	* @returns { void }
	*/
	"renounceOwnership" (
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::renounceOwnership", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_mintable");
		}, [], __options);
	}

	/**
	* owner
	*
	* @returns { ReturnTypes.AccountId }
	*/
	"owner" (
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "ownable::owner", [], __options, (result) => { return handleReturnType(result, getTypeDescription(8, 'rmrk_example_mintable')); });
	}

	/**
	* transferOwnership
	*
	* @param { ArgumentTypes.AccountId } newOwner,
	* @returns { void }
	*/
	"transferOwnership" (
		newOwner: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::transferOwnership", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_mintable");
		}, [newOwner], __options);
	}

	/**
	* getAttribute
	*
	* @param { ArgumentTypes.Id } id,
	* @param { Array<(number | string | BN)> } key,
	* @returns { Array<number> | null }
	*/
	"getAttribute" (
		id: ArgumentTypes.Id,
		key: Array<(number | string | BN)>,
		__options: GasLimit,
	): Promise< QueryReturnType< Array<number> | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "psp34Metadata::getAttribute", [id, key], __options, (result) => { return handleReturnType(result, getTypeDescription(33, 'rmrk_example_mintable')); });
	}

	/**
	* ownersTokenByIndex
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @param { (string | number | BN) } index,
	* @returns { Result<ReturnTypes.Id, ReturnTypes.PSP34Error> }
	*/
	"ownersTokenByIndex" (
		owner: ArgumentTypes.AccountId,
		index: (string | number | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.Id, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "psp34Enumerable::ownersTokenByIndex", [owner, index], __options, (result) => { return handleReturnType(result, getTypeDescription(34, 'rmrk_example_mintable')); });
	}

	/**
	* tokenByIndex
	*
	* @param { (string | number | BN) } index,
	* @returns { Result<ReturnTypes.Id, ReturnTypes.PSP34Error> }
	*/
	"tokenByIndex" (
		index: (string | number | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.Id, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "psp34Enumerable::tokenByIndex", [index], __options, (result) => { return handleReturnType(result, getTypeDescription(34, 'rmrk_example_mintable')); });
	}

	/**
	* mint
	*
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } mintAmount,
	* @returns { void }
	*/
	"mint" (
		to: ArgumentTypes.AccountId,
		mintAmount: (number | string | BN),
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "minting::mint", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_mintable");
		}, [to, mintAmount], __options);
	}

	/**
	* maxSupply
	*
	* @returns { number }
	*/
	"maxSupply" (
		__options: GasLimit,
	): Promise< QueryReturnType< number > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "minting::maxSupply", [], __options);
	}

	/**
	* tokenUri
	*
	* @param { (number | string | BN) } tokenId,
	* @returns { Result<string, ReturnTypes.PSP34Error> }
	*/
	"tokenUri" (
		tokenId: (number | string | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< Result<string, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "minting::tokenUri", [tokenId], __options, (result) => { return handleReturnType(result, getTypeDescription(35, 'rmrk_example_mintable')); });
	}

	/**
	* mintNext
	*
	* @returns { void }
	*/
	"mintNext" (
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "minting::mintNext", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_mintable");
		}, [], __options);
	}

	/**
	* mintWithMetadata
	*
	* @param { string } metadata,
	* @param { ArgumentTypes.AccountId } to,
	* @returns { void }
	*/
	"mintWithMetadata" (
		metadata: string,
		to: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "minting::mintWithMetadata", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_mintable");
		}, [metadata, to], __options);
	}

	/**
	* price
	*
	* @returns { ReturnNumber }
	*/
	"price" (
		__options: GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryJSON< ReturnNumber >( this.__nativeContract, this.__callerAddress, "minting::price", [], __options, (result) => { return new ReturnNumber(result as (number | string)); });
	}

}