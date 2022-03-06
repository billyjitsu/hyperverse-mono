import { FC } from 'react';
import clsx from 'clsx';

interface HowThisWorksProps {
	className?: string;
}

const HowThisWorks: FC<HowThisWorksProps> = ({ className }) => {
	return (
		<section
			className={clsx(className, 'w-full bg-gradient-to-r from-indigo-900 to-indigo-400')}
			id="how-this-works"
		>
			<div className="max-w-7xl mx-auto py-16 px-8 text-white">
				<h1 className="text-5xl md:text-7xl font-bold">How this works</h1>
				<p className="mt-4 text-xl">
					This setup page is meant for DAOs (or anyone) to setup and initialize their NFT
					contract.
				</p>
				<p className="mt-4 text-xl">
					By initializing your NFT contract first, with the help of{' '}
					<b>Decentology's Hyperverse Smart Modules</b>, your members will be able to mint
					NFTs with streaming token functionality at a much lower gas rate than deploying
					individual NFTs.
				</p>
				<p className="mt-4 text-xl">Technologies that made this possible:</p>
				<ul>
					<li>
						<a
							className="text-xl"
							href="https://www.superfluid.finance/"
							target="_blank"
							rel="noopener noreferrer"
						>
							• <span className="underline hover:text-gray-300">Superfluid</span>
						</a>
					</li>
					<li className="text-xl">
						<a
							className="text-x"
							href="https://www.decentology.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							•{' '}
							<span className="underline hover:text-gray-300">
								Decentology Hyperverse
							</span>
						</a>
					</li>
				</ul>
				<p className="mt-4 text-xl font-extrabold">Important:</p>
				<p className="mt-2 text-xl">
					You'll need to decide whether you want to use your own token or an ERC-20 token
					that is supported by{' '}
					<a
						className="underline hover:text-gray-300"
						href="https://docs.superfluid.finance/superfluid/protocol-developers/networks"
						target="_blank"
						rel="noopener noreferrer"
					>
						Superfluid
					</a>
					. If you want to use a custom token, you'll need to wrap it first (Step 1).
				</p>
			</div>
		</section>
	);
};

export default HowThisWorks;
