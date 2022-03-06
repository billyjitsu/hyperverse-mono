import { FC, FormEvent, useState } from 'react';

interface WrapTokenFormProps {
	onSubmit: (tokenName: string, tokenSymbol: string) => void;
}

const WrapTokenForm: FC<WrapTokenFormProps> = ({ onSubmit }) => {
	const [tokenName, setTokenName] = useState('');
	const [tokenSymbol, setTokenSymbol] = useState('');

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!tokenName || !tokenSymbol) return;
		onSubmit(tokenName, tokenSymbol);
	};

	return (
		<div className="mt-4 md:w-3/6 gap-4">
			<p className="mt-4 text-xl">
				If you have a custom token (ERC-20) for your DAO that you want to be streamed when
				the user purchases an NFT, you'll need to wrap it via{' '}
				<a
					className="underline hover:text-gray-300"
					href="https://docs.superfluid.finance/superfluid/protocol-developers/guides/super-tokens"
					target="_blank"
					rel="nooopener noreferrer"
				>
					Superfluid Super Tokens
				</a>
			</p>
			{/* Replace with form to call createErc20Token function on Superfluid SuperTokenFactory */}
			<a
				className="mt-4"
				href="https://app.superfluid.finance/dashboard"
				target="_blank"
				rel="noopenner noreferrer"
			>
				<button
					type="button"
					className="py-2 px-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-red-700 text-white font-bold"
				>
					Visit Superfluid Dashboard
				</button>
			</a>
			{/* <form className="" onSubmit={handleSubmit}>
				<div className="flex gap-4 mt-4">
					<div className="w-full flex flex-col">
						<label htmlFor="tokenName">Name</label>
						<input
							value={tokenName}
							onChange={(e) => setTokenName(e.target.value)}
							id="tokenName"
							type="text"
							className="w-full py-2 px-3 form-control border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-black"
							placeholder="web3con NFTs"
						/>
					</div>
					<div className="w-full flex flex-col">
						<label htmlFor="tokenSymbol">Symbol</label>
						<input
							value={tokenSymbol}
							onChange={(e) => setTokenSymbol(e.target.value)}
							id="tokenSymbol"
							type="text"
							className="w-full py-2 px-3 form-control border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-black"
							placeholder="HACK"
						/>
					</div>
				</div>
				<div className="w-96 flex gap-4">
					<button
						type="submit"
						className="float-left mt-6 py-2 px-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-red-700 text-white font-bold"
					>
						Create instance
					</button>
				</div>
			</form> */}
		</div>
	);
};

export default WrapTokenForm;
