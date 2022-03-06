import { FC, FormEvent, useState } from 'react';

interface WrapTokenFormProps {
	onSubmit: (nftName: string, nftSymbol: string) => void;
}

const WrapTokenForm: FC<WrapTokenFormProps> = ({ onSubmit }) => {
	const [nftName, setNftName] = useState('');
	const [nftSymbol, setNftSymbol] = useState('');

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!nftName || !nftSymbol) return;
		onSubmit(nftName, nftSymbol);
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
			<form className="" onSubmit={handleSubmit}>
				<div className="flex gap-4 mt-4">
					{/* <div className="w-full flex flex-col">
						<label htmlFor="nftName">Name</label>
						<input
							value={nftName}
							onChange={(e) => setNftName(e.target.value)}
							id="nftName"
							type="text"
							className="w-full py-2 px-3 form-control border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-black"
							placeholder="web3con NFTs"
						/>
					</div>
					<div className="w-full flex flex-col">
						<label htmlFor="nftSymbol">Symbol</label>
						<input
							value={nftSymbol}
							onChange={(e) => setNftSymbol(e.target.value)}
							id="nftSymbol"
							type="text"
							className="w-full py-2 px-3 form-control border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-black"
							placeholder="HACK"
						/>
					</div> */}
				</div>
				<div className="w-96 flex gap-4">
					{/* <button
						type="submit"
						className="float-left mt-6 py-2 px-4 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-red-700 text-white font-bold"
					>
						Create instance
					</button> */}
				</div>
			</form>
		</div>
	);
};

export default WrapTokenForm;
