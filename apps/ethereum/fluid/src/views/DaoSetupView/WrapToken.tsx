import { FC, useState } from 'react';
import clsx from 'clsx';
import { useERC721 } from '@decentology/hyperverse-ethereum-fluid';

import { HOST_ADDRESS, CFA_ADDRESS, FDAIX_ADDRESS } from '../../constants';
import ConnectWallet from '../../components/ConnectWallet';
import { useEthereum } from '@decentology/hyperverse-ethereum';
import WrapTokenForm from './WrapTokenForm';

interface WrapTokenProps {
	className?: string;
}

const WrapToken: FC<WrapTokenProps> = ({ className }) => {
	const { address } = useEthereum();

	const handleWrapToken = () => {};

	return (
		<section className="w-full bg-white" id="create-instance">
			<div className="max-w-7xl mx-auto py-16 px-8 text-black">
				<p className="text-3xl font-bold">(Optional)</p>
				<h1 className="text-5xl md:text-7xl  font-bold">1. Wrap your custom token</h1>
				{address ? (
					<WrapTokenForm onSubmit={handleWrapToken} />
				) : (
					<div className="py-4">
						<h1 className="">Please connect your wallet to continue</h1>
						<ConnectWallet className="mt-4" />
					</div>
				)}
			</div>
		</section>
	);
};

export default WrapToken;
