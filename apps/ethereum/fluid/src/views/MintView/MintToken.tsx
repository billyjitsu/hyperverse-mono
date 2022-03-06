import { FC, useEffect, useState } from 'react';
import { useEthereum } from '@decentology/hyperverse-ethereum';

import ConnectWallet from '../../components/ConnectWallet';
import MintTokenForm from './MintTokenForm';
import FluidNFTJSON from '../../abis/FluidNFT.json';
import { Contract, ethers } from 'ethers';

const MintToken: FC = () => {
	const { address } = useEthereum();
	const [proxyContract, setProxyContract] = useState<Contract | null>(null);

	const handleMintNft = async (cost: string) => {
		try {
			if (!address) throw new Error('Please connect your wallet');
			proxyContract?.issueNFT({
				value: ethers.utils.parseEther(cost),
				gasLimit: '3000000',
			});
		} catch (error) {
			console.error(error);
		}
	};

	// Replace with useERC721 Proxy Contract
	useEffect(() => {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const proxyContract = new ethers.Contract(
			'0xdD3647744eB13Dc27bA3583b16769f0214Dfc160',
			FluidNFTJSON.abi,
			signer
		);
		setProxyContract(proxyContract);
	}, []);

	return (
		<section className="w-full bg-white" id="mint">
			{address ? (
				proxyContract ? (
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
