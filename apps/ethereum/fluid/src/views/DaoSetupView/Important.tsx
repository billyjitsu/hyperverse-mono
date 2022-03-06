import { FC } from 'react';
import clsx from 'clsx';

interface ImportantProps {
	className?: string;
}

const Important: FC<ImportantProps> = ({ className }) => {
	return (
		<section className={clsx(className, 'w-full')} id="important">
			<div className="max-w-7xl mx-auto p-4">
				<div className="p-4 rounded-lg bg-green-700 text-white">
					<h1 className="text-5xl md:text-xl font-extrabold">Important:</h1>
					<p className="mt-2 text-xl">
						You'll need to decide whether you want to use your own token or an ERC-20
						token that is supported by{' '}
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
			</div>
		</section>
	);
};

export default Important;
