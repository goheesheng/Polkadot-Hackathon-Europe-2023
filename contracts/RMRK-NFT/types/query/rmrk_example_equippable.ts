/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@supercolony/typechain-types';
import type { QueryReturnType } from '@supercolony/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@supercolony/typechain-types';
import type * as ArgumentTypes from '../types-arguments/rmrk_example_equippable';
import type * as ReturnTypes from '../types-returns/rmrk_example_equippable';
import type BN from 'bn.js';
import {ReturnNumber} from '@supercolony/typechain-types';
import {getTypeDescription} from './../shared/utils';


export default class Methods {
	private __nativeContract : ContractPromise;
	private __callerAddress : string;

	constructor(
		nativeContract : ContractPromise,
		callerAddress : string,
	) {
		this.__nativeContract = nativeContract;
		this.__callerAddress = callerAddress;
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
		__options ? : GasLimit,
	): Promise< QueryReturnType< boolean > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "psp34::allowance", [owner, operator, id], __options );
	}

	/**
	* totalSupply
	*
	* @returns { ReturnNumber }
	*/
	"totalSupply" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryJSON< ReturnNumber >( this.__nativeContract, this.__callerAddress, "psp34::totalSupply", [], __options , (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* ownerOf
	*
	* @param { ArgumentTypes.Id } id,
	* @returns { ReturnTypes.AccountId | null }
	*/
	"ownerOf" (
		id: ArgumentTypes.Id,
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "psp34::ownerOf", [id], __options , (result) => { return handleReturnType(result, getTypeDescription(19, 'rmrk_example_equippable')); });
	}

	/**
	* balanceOf
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @returns { number }
	*/
	"balanceOf" (
		owner: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< number > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "psp34::balanceOf", [owner], __options );
	}

	/**
	* collectionId
	*
	* @returns { ReturnTypes.Id }
	*/
	"collectionId" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.Id > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "psp34::collectionId", [], __options , (result) => { return handleReturnType(result, getTypeDescription(1, 'rmrk_example_equippable')); });
	}

	/**
	* approve
	*
	* @param { ArgumentTypes.AccountId } operator,
	* @param { ArgumentTypes.Id | null } id,
	* @param { boolean } approved,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"approve" (
		operator: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id | null,
		approved: boolean,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "psp34::approve", [operator, id, approved], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* transfer
	*
	* @param { ArgumentTypes.AccountId } to,
	* @param { ArgumentTypes.Id } id,
	* @param { Array<(number | string | BN)> } data,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"transfer" (
		to: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id,
		data: Array<(number | string | BN)>,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "psp34::transfer", [to, id, data], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* renounceOwnership
	*
	* @returns { Result<null, ReturnTypes.OwnableError> }
	*/
	"renounceOwnership" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.OwnableError> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "ownable::renounceOwnership", [], __options , (result) => { return handleReturnType(result, getTypeDescription(47, 'rmrk_example_equippable')); });
	}

	/**
	* transferOwnership
	*
	* @param { ArgumentTypes.AccountId } newOwner,
	* @returns { Result<null, ReturnTypes.OwnableError> }
	*/
	"transferOwnership" (
		newOwner: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.OwnableError> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "ownable::transferOwnership", [newOwner], __options , (result) => { return handleReturnType(result, getTypeDescription(47, 'rmrk_example_equippable')); });
	}

	/**
	* owner
	*
	* @returns { ReturnTypes.AccountId }
	*/
	"owner" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.AccountId > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "ownable::owner", [], __options , (result) => { return handleReturnType(result, getTypeDescription(8, 'rmrk_example_equippable')); });
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
		__options ? : GasLimit,
	): Promise< QueryReturnType< Array<number> | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "psp34Metadata::getAttribute", [id, key], __options , (result) => { return handleReturnType(result, getTypeDescription(49, 'rmrk_example_equippable')); });
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
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.Id, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "psp34Enumerable::ownersTokenByIndex", [owner, index], __options , (result) => { return handleReturnType(result, getTypeDescription(50, 'rmrk_example_equippable')); });
	}

	/**
	* tokenByIndex
	*
	* @param { (string | number | BN) } index,
	* @returns { Result<ReturnTypes.Id, ReturnTypes.PSP34Error> }
	*/
	"tokenByIndex" (
		index: (string | number | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.Id, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "psp34Enumerable::tokenByIndex", [index], __options , (result) => { return handleReturnType(result, getTypeDescription(50, 'rmrk_example_equippable')); });
	}

	/**
	* mintNext
	*
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"mintNext" (
		__options ? : GasLimitAndRequiredValue,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "minting::mintNext", [], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* mintWithMetadata
	*
	* @param { string } metadata,
	* @param { ArgumentTypes.AccountId } to,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"mintWithMetadata" (
		metadata: string,
		to: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "minting::mintWithMetadata", [metadata, to], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* price
	*
	* @returns { ReturnNumber }
	*/
	"price" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnNumber > >{
		return queryJSON< ReturnNumber >( this.__nativeContract, this.__callerAddress, "minting::price", [], __options , (result) => { return new ReturnNumber(result as (number | string)); });
	}

	/**
	* mint
	*
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } mintAmount,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"mint" (
		to: ArgumentTypes.AccountId,
		mintAmount: (number | string | BN),
		__options ? : GasLimitAndRequiredValue,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "minting::mint", [to, mintAmount], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* tokenUri
	*
	* @param { (number | string | BN) } tokenId,
	* @returns { Result<string, ReturnTypes.PSP34Error> }
	*/
	"tokenUri" (
		tokenId: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<string, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "minting::tokenUri", [tokenId], __options , (result) => { return handleReturnType(result, getTypeDescription(52, 'rmrk_example_equippable')); });
	}

	/**
	* maxSupply
	*
	* @returns { number }
	*/
	"maxSupply" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< number > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "minting::maxSupply", [], __options );
	}

	/**
	* rejectChild
	*
	* @param { ArgumentTypes.Id } parentTokenId,
	* @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"rejectChild" (
		parentTokenId: ArgumentTypes.Id,
		childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "nesting::rejectChild", [parentTokenId, childNft], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* removeChild
	*
	* @param { ArgumentTypes.Id } parentTokenId,
	* @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"removeChild" (
		parentTokenId: ArgumentTypes.Id,
		childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "nesting::removeChild", [parentTokenId, childNft], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* acceptChild
	*
	* @param { ArgumentTypes.Id } parentTokenId,
	* @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"acceptChild" (
		parentTokenId: ArgumentTypes.Id,
		childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "nesting::acceptChild", [parentTokenId, childNft], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* childrenBalance
	*
	* @param { ArgumentTypes.Id } parentTokenId,
	* @returns { Result<[number, number], ReturnTypes.PSP34Error> }
	*/
	"childrenBalance" (
		parentTokenId: ArgumentTypes.Id,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<[number, number], ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "nesting::childrenBalance", [parentTokenId], __options , (result) => { return handleReturnType(result, getTypeDescription(53, 'rmrk_example_equippable')); });
	}

	/**
	* addChild
	*
	* @param { ArgumentTypes.Id } parentTokenId,
	* @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"addChild" (
		parentTokenId: ArgumentTypes.Id,
		childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "nesting::addChild", [parentTokenId, childNft], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* transferChild
	*
	* @param { ArgumentTypes.Id } from,
	* @param { ArgumentTypes.Id } to,
	* @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"transferChild" (
		from: ArgumentTypes.Id,
		to: ArgumentTypes.Id,
		childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "nesting::transferChild", [from, to, childNft], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* getAcceptedTokenAssets
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @returns { Result<Array<number> | null, ReturnTypes.PSP34Error> }
	*/
	"getAcceptedTokenAssets" (
		tokenId: ArgumentTypes.Id,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Array<number> | null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "multiAsset::getAcceptedTokenAssets", [tokenId], __options , (result) => { return handleReturnType(result, getTypeDescription(55, 'rmrk_example_equippable')); });
	}

	/**
	* totalTokenAssets
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @returns { Result<[number, number], ReturnTypes.PSP34Error> }
	*/
	"totalTokenAssets" (
		tokenId: ArgumentTypes.Id,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<[number, number], ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "multiAsset::totalTokenAssets", [tokenId], __options , (result) => { return handleReturnType(result, getTypeDescription(53, 'rmrk_example_equippable')); });
	}

	/**
	* addAssetToToken
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { (number | string | BN) } assetId,
	* @param { (number | string | BN) | null } replacesAssetWithId,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"addAssetToToken" (
		tokenId: ArgumentTypes.Id,
		assetId: (number | string | BN),
		replacesAssetWithId: (number | string | BN) | null,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "multiAsset::addAssetToToken", [tokenId, assetId, replacesAssetWithId], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* getAssetUri
	*
	* @param { (number | string | BN) } assetId,
	* @returns { Array<number> | null }
	*/
	"getAssetUri" (
		assetId: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Array<number> | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "multiAsset::getAssetUri", [assetId], __options , (result) => { return handleReturnType(result, getTypeDescription(49, 'rmrk_example_equippable')); });
	}

	/**
	* setPriority
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { Array<(number | string | BN)> } priorities,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"setPriority" (
		tokenId: ArgumentTypes.Id,
		priorities: Array<(number | string | BN)>,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "multiAsset::setPriority", [tokenId, priorities], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* rejectAsset
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { (number | string | BN) } assetId,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"rejectAsset" (
		tokenId: ArgumentTypes.Id,
		assetId: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "multiAsset::rejectAsset", [tokenId, assetId], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* totalAssets
	*
	* @returns { number }
	*/
	"totalAssets" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< number > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "multiAsset::totalAssets", [], __options );
	}

	/**
	* addAssetEntry
	*
	* @param { (number | string | BN) } id,
	* @param { (number | string | BN) } equippableGroupId,
	* @param { Array<(number | string | BN)> } assetUri,
	* @param { Array<(number | string | BN)> } partIds,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"addAssetEntry" (
		id: (number | string | BN),
		equippableGroupId: (number | string | BN),
		assetUri: Array<(number | string | BN)>,
		partIds: Array<(number | string | BN)>,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "multiAsset::addAssetEntry", [id, equippableGroupId, assetUri, partIds], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* acceptAsset
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { (number | string | BN) } assetId,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"acceptAsset" (
		tokenId: ArgumentTypes.Id,
		assetId: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "multiAsset::acceptAsset", [tokenId, assetId], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* removeAsset
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { (number | string | BN) } assetId,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"removeAsset" (
		tokenId: ArgumentTypes.Id,
		assetId: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "multiAsset::removeAsset", [tokenId, assetId], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* ensureEquippable
	*
	* @param { (number | string | BN) } partId,
	* @param { ArgumentTypes.AccountId } targetAddress,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"ensureEquippable" (
		partId: (number | string | BN),
		targetAddress: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "base::ensureEquippable", [partId, targetAddress], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* addPartList
	*
	* @param { Array<ArgumentTypes.Part> } parts,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"addPartList" (
		parts: Array<ArgumentTypes.Part>,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "base::addPartList", [parts], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* setEquippableByAll
	*
	* @param { (number | string | BN) } partId,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"setEquippableByAll" (
		partId: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "base::setEquippableByAll", [partId], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* getBaseMetadata
	*
	* @returns { string }
	*/
	"getBaseMetadata" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< string > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "base::getBaseMetadata", [], __options );
	}

	/**
	* isEquippableByAll
	*
	* @param { (number | string | BN) } partId,
	* @returns { boolean }
	*/
	"isEquippableByAll" (
		partId: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< boolean > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "base::isEquippableByAll", [partId], __options );
	}

	/**
	* getPart
	*
	* @param { (number | string | BN) } partId,
	* @returns { ReturnTypes.Part | null }
	*/
	"getPart" (
		partId: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.Part | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "base::getPart", [partId], __options , (result) => { return handleReturnType(result, getTypeDescription(59, 'rmrk_example_equippable')); });
	}

	/**
	* resetEquippableAddresses
	*
	* @param { (number | string | BN) } partId,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"resetEquippableAddresses" (
		partId: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "base::resetEquippableAddresses", [partId], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* getPartsCount
	*
	* @returns { number }
	*/
	"getPartsCount" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< number > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "base::getPartsCount", [], __options );
	}

	/**
	* addEquippableAddresses
	*
	* @param { (number | string | BN) } partId,
	* @param { Array<ArgumentTypes.AccountId> } equippableAddress,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"addEquippableAddresses" (
		partId: (number | string | BN),
		equippableAddress: Array<ArgumentTypes.AccountId>,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "base::addEquippableAddresses", [partId, equippableAddress], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* setupBase
	*
	* @param { Array<(number | string | BN)> } baseMetadata,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"setupBase" (
		baseMetadata: Array<(number | string | BN)>,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "base::setupBase", [baseMetadata], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* equip
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { (number | string | BN) } assetId,
	* @param { (number | string | BN) } slotPartId,
	* @param { [ArgumentTypes.AccountId, ArgumentTypes.Id] } childNft,
	* @param { (number | string | BN) } childAssetId,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"equip" (
		tokenId: ArgumentTypes.Id,
		assetId: (number | string | BN),
		slotPartId: (number | string | BN),
		childNft: [ArgumentTypes.AccountId, ArgumentTypes.Id],
		childAssetId: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "equippable::equip", [tokenId, assetId, slotPartId, childNft, childAssetId], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* unequip
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { (number | string | BN) } slotPartId,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"unequip" (
		tokenId: ArgumentTypes.Id,
		slotPartId: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "equippable::unequip", [tokenId, slotPartId], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

	/**
	* getEquipment
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { (number | string | BN) } slotPartId,
	* @returns { ReturnTypes.Equipment | null }
	*/
	"getEquipment" (
		tokenId: ArgumentTypes.Id,
		slotPartId: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< ReturnTypes.Equipment | null > >{
		return queryJSON( this.__nativeContract, this.__callerAddress, "equippable::getEquipment", [tokenId, slotPartId], __options , (result) => { return handleReturnType(result, getTypeDescription(60, 'rmrk_example_equippable')); });
	}

	/**
	* getAssetAndEquippableData
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { (number | string | BN) } assetId,
	* @returns { Result<ReturnTypes.Asset, ReturnTypes.PSP34Error> }
	*/
	"getAssetAndEquippableData" (
		tokenId: ArgumentTypes.Id,
		assetId: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.Asset, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "equippable::getAssetAndEquippableData", [tokenId, assetId], __options , (result) => { return handleReturnType(result, getTypeDescription(61, 'rmrk_example_equippable')); });
	}

	/**
	* setValidParentForEquippableGroup
	*
	* @param { (number | string | BN) } equippableGroupId,
	* @param { ArgumentTypes.AccountId } parentAddress,
	* @param { (number | string | BN) } partId,
	* @returns { Result<null, ReturnTypes.PSP34Error> }
	*/
	"setValidParentForEquippableGroup" (
		equippableGroupId: (number | string | BN),
		parentAddress: ArgumentTypes.AccountId,
		partId: (number | string | BN),
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.PSP34Error> > >{
		return queryOkJSON( this.__nativeContract, this.__callerAddress, "equippable::setValidParentForEquippableGroup", [equippableGroupId, parentAddress, partId], __options , (result) => { return handleReturnType(result, getTypeDescription(45, 'rmrk_example_equippable')); });
	}

}