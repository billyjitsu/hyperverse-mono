const TeamButton = ({ label, externalUrl }: { label: string; externalUrl?: string }) => {
	return externalUrl ? (
		<a href={externalUrl} target="_blank" rel="noreferrer noopener">
			<button
				type="button"
				className="py-1 px-2 bg-black hover:bg-indigo-700 text-white font-bold"
			>
				{label}
			</button>
		</a>
	) : (
		<button
			type="button"
			className="py-1 px-2 bg-black hover:bg-indigo-700 text-white font-bold"
		>
			{label}
		</button>
	);
};

export const Team = () => {
	return (
		<section className="w-full bg-white" id="team">
			<div className="max-w-7xl mx-auto w-full py-16 px-8">
				<div className="">
					<h1 className="text-7xl font-bold text-black">team</h1>
				</div>
				<div className="mt-8">
					<p className="text-black">
						Our ragtag team stepped into the{' '}
						<i className="font-bold text-violet-900">ether</i> and found each other
						during the web3con hackathon.
					</p>
				</div>
				<div className="mt-4 flex gap-6">
					<p className="text-black pt-1">We are:</p>
					<div className="flex gap-2">
						<TeamButton label="@billyjitsu" externalUrl="https://twitter.com/wc49358" />
						<TeamButton
							label="@cryptokrizz"
							externalUrl="https://twitter.com/cryptokrizzz"
						/>
						<TeamButton
							label="@nathanng.eth"
							externalUrl="https://twitter.com/ngnathan"
						/>
						<TeamButton
							label="@jerrodc.eth"
							externalUrl="https://twitter.com/gmFromJerrod"
						/>
						<TeamButton label="@nfter" externalUrl="https://twitter.com/cryptorun0" />
					</div>
				</div>
			</div>
		</section>
	);
};
