import { FC, useState } from 'react';
import { useEthereum } from '@decentology/hyperverse-ethereum';
import { useERC721 } from '@decentology/hyperverse-ethereum-fluid';

import ConnectWallet from '../../components/ConnectWallet';
import { ContractInfo } from '../ContractInfo';
import MintTokenForm from './MintTokenForm';

const MintToken: FC = () => {
	const { address } = useEthereum();
	const { MintNFT, Proxy } = useERC721();
	const { mutate } = MintNFT();

	const handleMintNft = async (_receiver: string, _flowRate: string) => {
		try {
			if (!address) throw new Error('Please connect your wallet');
			const instanceData = {
				to: _receiver,
				flowRate: _flowRate,
			};
			console.log('Minting an NFT to ', _receiver, ' with the flow rate: ', _flowRate);
			mutate(instanceData);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<section className="w-full bg-white" id="mint">
			{address ? (
				Proxy().data ? (
					<div className="max-w-7xl mx-auto py-16 px-8 text-black">
						<h1 className="text-7xl font-bold">Mint an NFT</h1>
						<MintTokenForm onSubmit={handleMintNft} />
					</div>
				) : (
					<div className="max-w-7xl mx-auto py-16 px-8 text-black">
						<p className="text-3xl font-bold">
							The DAO has not yet initialized their NFT contract.
						</p>
						<p className="mt-4 text-3xl font-bold">
							Please wait for this to be completed.
						</p>
					</div>
				)
			) : (
				<div className="max-w-7xl mx-auto py-16 px-8 text-black">
					<div className="py-4">
						<h1 className="text-7xl font-bold">Mint an NFT</h1>
						<p className="mt-4 text-xl">Please connect your wallet to continue</p>
						<ConnectWallet className="mt-4" />
					</div>
				</div>
			)}
		</section>
	);
};

export default MintToken;
