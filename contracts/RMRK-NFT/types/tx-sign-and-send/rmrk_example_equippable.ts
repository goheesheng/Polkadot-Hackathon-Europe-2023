/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@supercolony/typechain-types';
import { txSignAndSend } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/rmrk_example_equippable';
import type BN from 'bn.js';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";


export default class Methods {
	private __nativeContract : ContractPromise;
	private __keyringPair : KeyringPair;
	private __apiPromise: ApiPromise;

	constructor(
		apiPromise: ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
	}

	/**
	* allowance
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @param { ArgumentTypes.AccountId } operator,
	* @param { ArgumentTypes.Id | null } id,
	*/
	"allowance" (
		owner: ArgumentTypes.AccountId,
		operator: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id | null,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::allowance", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [owner, operator, id], __options);
	}

	/**
	* totalSupply
	*
	*/
	"totalSupply" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::totalSupply", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [], __options);
	}

	/**
	* ownerOf
	*
	* @param { ArgumentTypes.Id } id,
	*/
	"ownerOf" (
		id: ArgumentTypes.Id,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::ownerOf", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [id], __options);
	}

	/**
	* balanceOf
	*
	* @param { ArgumentTypes.AccountId } owner,
	*/
	"balanceOf" (
		owner: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::balanceOf", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [owner], __options);
	}

	/**
	* collectionId
	*
	*/
	"collectionId" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::collectionId", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [], __options);
	}

	/**
	* approve
	*
	* @param { ArgumentTypes.AccountId } operator,
	* @param { ArgumentTypes.Id | null } id,
	* @param { boolean } approved,
	*/
	"approve" (
		operator: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id | null,
		approved: boolean,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::approve", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [operator, id, approved], __options);
	}

	/**
	* transfer
	*
	* @param { ArgumentTypes.AccountId } to,
	* @param { ArgumentTypes.Id } id,
	* @param { Array<(number | string | BN)> } data,
	*/
	"transfer" (
		to: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id,
		data: Array<(number | string | BN)>,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::transfer", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [to, id, data], __options);
	}

	/**
	* renounceOwnership
	*
	*/
	"renounceOwnership" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::renounceOwnership", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [], __options);
	}

	/**
	* transferOwnership
	*
	* @param { ArgumentTypes.AccountId } newOwner,
	*/
	"transferOwnership" (
		newOwner: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::transferOwnership", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [newOwner], __options);
	}

	/**
	* owner
	*
	*/
	"owner" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::owner", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [], __options);
	}

	/**
	* getAttribute
	*
	* @param { ArgumentTypes.Id } id,
	* @param { Array<(number | string | BN)> } key,
	*/
	"getAttribute" (
		id: ArgumentTypes.Id,
		key: Array<(number | string | BN)>,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34Metadata::getAttribute", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [id, key], __options);
	}

	/**
	* ownersTokenByIndex
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @param { (string | number | BN) } index,
	*/
	"ownersTokenByIndex" (
		owner: ArgumentTypes.AccountId,
		index: (string | number | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34Enumerable::ownersTokenByIndex", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [owner, index], __options);
	}

	/**
	* tokenByIndex
	*
	* @param { (string | number | BN) } index,
	*/
	"tokenByIndex" (
		index: (string | number | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34Enumerable::tokenByIndex", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [index], __options);
	}

	/**
	* mintNext
	*
	*/
	"mintNext" (
		__options ? : GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "minting::mintNext", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [], __options);
	}

	/**
	* mintWithMetadata
	*
	* @param { string } metadata,
	* @param { ArgumentTypes.AccountId } to,
	*/
	"mintWithMetadata" (
		metadata: string,
		to: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "minting::mintWithMetadata", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [metadata, to], __options);
	}

	/**
	* price
	*
	*/
	"price" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "minting::price", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [], __options);
	}

	/**
	* mint
	*
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } mintAmount,
	*/
	"mint" (
		to: ArgumentTypes.AccountId,
		mintAmount: (number | string | BN),
		__options ? : GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "minting::mint", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [to, mintAmount], __options);
	}

	/**
	* tokenUri
	*
	* @param { (number | string | BN) } tokenId,
	*/
	"tokenUri" (
		tokenId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "minting::tokenUri", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [tokenId], __options);
	}

	/**
	* maxSupply
	*
	*/
	"maxSupply" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "minting::maxSupply", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [], __options);
	}

	/**
	* rejectChild
	*
	* @param { ArgumentTypes.Id } parentTokenId,
	* @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
	*/
	"rejectChild" (
		parentTokenId: ArgumentTypes.Id,
		childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "nesting::rejectChild", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [parentTokenId, childNft], __options);
	}

	/**
	* removeChild
	*
	* @param { ArgumentTypes.Id } parentTokenId,
	* @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
	*/
	"removeChild" (
		parentTokenId: ArgumentTypes.Id,
		childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "nesting::removeChild", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [parentTokenId, childNft], __options);
	}

	/**
	* acceptChild
	*
	* @param { ArgumentTypes.Id } parentTokenId,
	* @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
	*/
	"acceptChild" (
		parentTokenId: ArgumentTypes.Id,
		childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "nesting::acceptChild", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [parentTokenId, childNft], __options);
	}

	/**
	* childrenBalance
	*
	* @param { ArgumentTypes.Id } parentTokenId,
	*/
	"childrenBalance" (
		parentTokenId: ArgumentTypes.Id,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "nesting::childrenBalance", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [parentTokenId], __options);
	}

	/**
	* addChild
	*
	* @param { ArgumentTypes.Id } parentTokenId,
	* @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
	*/
	"addChild" (
		parentTokenId: ArgumentTypes.Id,
		childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "nesting::addChild", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [parentTokenId, childNft], __options);
	}

	/**
	* transferChild
	*
	* @param { ArgumentTypes.Id } from,
	* @param { ArgumentTypes.Id } to,
	* @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
	*/
	"transferChild" (
		from: ArgumentTypes.Id,
		to: ArgumentTypes.Id,
		childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "nesting::transferChild", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [from, to, childNft], __options);
	}

	/**
	* getAcceptedTokenAssets
	*
	* @param { ArgumentTypes.Id } tokenId,
	*/
	"getAcceptedTokenAssets" (
		tokenId: ArgumentTypes.Id,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "multiAsset::getAcceptedTokenAssets", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [tokenId], __options);
	}

	/**
	* totalTokenAssets
	*
	* @param { ArgumentTypes.Id } tokenId,
	*/
	"totalTokenAssets" (
		tokenId: ArgumentTypes.Id,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "multiAsset::totalTokenAssets", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [tokenId], __options);
	}

	/**
	* addAssetToToken
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { (number | string | BN) } assetId,
	* @param { (number | string | BN) | null } replacesAssetWithId,
	*/
	"addAssetToToken" (
		tokenId: ArgumentTypes.Id,
		assetId: (number | string | BN),
		replacesAssetWithId: (number | string | BN) | null,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "multiAsset::addAssetToToken", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [tokenId, assetId, replacesAssetWithId], __options);
	}

	/**
	* getAssetUri
	*
	* @param { (number | string | BN) } assetId,
	*/
	"getAssetUri" (
		assetId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "multiAsset::getAssetUri", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [assetId], __options);
	}

	/**
	* setPriority
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { Array<(number | string | BN)> } priorities,
	*/
	"setPriority" (
		tokenId: ArgumentTypes.Id,
		priorities: Array<(number | string | BN)>,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "multiAsset::setPriority", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [tokenId, priorities], __options);
	}

	/**
	* rejectAsset
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { (number | string | BN) } assetId,
	*/
	"rejectAsset" (
		tokenId: ArgumentTypes.Id,
		assetId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "multiAsset::rejectAsset", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [tokenId, assetId], __options);
	}

	/**
	* totalAssets
	*
	*/
	"totalAssets" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "multiAsset::totalAssets", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [], __options);
	}

	/**
	* addAssetEntry
	*
	* @param { (number | string | BN) } id,
	* @param { (number | string | BN) } equippableGroupId,
	* @param { Array<(number | string | BN)> } assetUri,
	* @param { Array<(number | string | BN)> } partIds,
	*/
	"addAssetEntry" (
		id: (number | string | BN),
		equippableGroupId: (number | string | BN),
		assetUri: Array<(number | string | BN)>,
		partIds: Array<(number | string | BN)>,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "multiAsset::addAssetEntry", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [id, equippableGroupId, assetUri, partIds], __options);
	}

	/**
	* acceptAsset
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { (number | string | BN) } assetId,
	*/
	"acceptAsset" (
		tokenId: ArgumentTypes.Id,
		assetId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "multiAsset::acceptAsset", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [tokenId, assetId], __options);
	}

	/**
	* removeAsset
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { (number | string | BN) } assetId,
	*/
	"removeAsset" (
		tokenId: ArgumentTypes.Id,
		assetId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "multiAsset::removeAsset", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [tokenId, assetId], __options);
	}

	/**
	* ensureEquippable
	*
	* @param { (number | string | BN) } partId,
	* @param { ArgumentTypes.AccountId } targetAddress,
	*/
	"ensureEquippable" (
		partId: (number | string | BN),
		targetAddress: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "base::ensureEquippable", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [partId, targetAddress], __options);
	}

	/**
	* addPartList
	*
	* @param { Array<ArgumentTypes.Part> } parts,
	*/
	"addPartList" (
		parts: Array<ArgumentTypes.Part>,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "base::addPartList", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [parts], __options);
	}

	/**
	* setEquippableByAll
	*
	* @param { (number | string | BN) } partId,
	*/
	"setEquippableByAll" (
		partId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "base::setEquippableByAll", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [partId], __options);
	}

	/**
	* getBaseMetadata
	*
	*/
	"getBaseMetadata" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "base::getBaseMetadata", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [], __options);
	}

	/**
	* isEquippableByAll
	*
	* @param { (number | string | BN) } partId,
	*/
	"isEquippableByAll" (
		partId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "base::isEquippableByAll", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [partId], __options);
	}

	/**
	* getPart
	*
	* @param { (number | string | BN) } partId,
	*/
	"getPart" (
		partId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "base::getPart", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [partId], __options);
	}

	/**
	* resetEquippableAddresses
	*
	* @param { (number | string | BN) } partId,
	*/
	"resetEquippableAddresses" (
		partId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "base::resetEquippableAddresses", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [partId], __options);
	}

	/**
	* getPartsCount
	*
	*/
	"getPartsCount" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "base::getPartsCount", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [], __options);
	}

	/**
	* addEquippableAddresses
	*
	* @param { (number | string | BN) } partId,
	* @param { Array<ArgumentTypes.AccountId> } equippableAddress,
	*/
	"addEquippableAddresses" (
		partId: (number | string | BN),
		equippableAddress: Array<ArgumentTypes.AccountId>,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "base::addEquippableAddresses", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [partId, equippableAddress], __options);
	}

	/**
	* setupBase
	*
	* @param { Array<(number | string | BN)> } baseMetadata,
	*/
	"setupBase" (
		baseMetadata: Array<(number | string | BN)>,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "base::setupBase", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [baseMetadata], __options);
	}

	/**
	* equip
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { (number | string | BN) } assetId,
	* @param { (number | string | BN) } slotPartId,
	* @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
	* @param { (number | string | BN) } childAssetId,
	*/
	"equip" (
		tokenId: ArgumentTypes.Id,
		assetId: (number | string | BN),
		slotPartId: (number | string | BN),
		childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
		childAssetId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "equippable::equip", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [tokenId, assetId, slotPartId, childNft, childAssetId], __options);
	}

	/**
	* unequip
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { (number | string | BN) } slotPartId,
	*/
	"unequip" (
		tokenId: ArgumentTypes.Id,
		slotPartId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "equippable::unequip", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [tokenId, slotPartId], __options);
	}

	/**
	* getEquipment
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { (number | string | BN) } slotPartId,
	*/
	"getEquipment" (
		tokenId: ArgumentTypes.Id,
		slotPartId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "equippable::getEquipment", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [tokenId, slotPartId], __options);
	}

	/**
	* getAssetAndEquippableData
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { (number | string | BN) } assetId,
	*/
	"getAssetAndEquippableData" (
		tokenId: ArgumentTypes.Id,
		assetId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "equippable::getAssetAndEquippableData", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [tokenId, assetId], __options);
	}

	/**
	* setValidParentForEquippableGroup
	*
	* @param { (number | string | BN) } equippableGroupId,
	* @param { ArgumentTypes.AccountId } parentAddress,
	* @param { (number | string | BN) } partId,
	*/
	"setValidParentForEquippableGroup" (
		equippableGroupId: (number | string | BN),
		parentAddress: ArgumentTypes.AccountId,
		partId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "equippable::setValidParentForEquippableGroup", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "rmrk_example_equippable");
		}, [equippableGroupId, parentAddress, partId], __options);
	}

}