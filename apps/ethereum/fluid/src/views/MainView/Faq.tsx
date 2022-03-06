export const Faq = () => {
	return (
		<section className="w-full bg-gradient-to-r from-indigo-900 to-indigo-400" id="faq">
			<div className="max-w-7xl mx-auto w-full py-16 px-8">
				<h1 className="text-7xl font-bold text-white">faq</h1>
				<div className="mt-8 text-white">
					<b>Q: What is this about?</b>
					<p>
						A: Fluidity is a bootstrapping utility for DAOs / Organizations to sell an
						NFT for ETH while “streaming” their token to the NFT owner/buyer over a set
						vesting period.
					</p>
					<p>
						With Fluidity, DAOs can set up their NFT contract and their members can mint
						and purchase these NFTs for ETH which kicks off a stream of DAO tokens over
						a month. This reduces the sell pressure on their token and diversifies their
						treasure with stable and usable tokens.
					</p>
					<p>
						Fluidity is built on Decentology Hyperverse. With hyperverse, we&apos;ve
						built a custom Smart Module which integrates Superfluid contracts.
						We&apos;ve also built a template front-end leveraging the Hyperverse
						libraries, which allows DAOs to setup their NFT contracts and for their
						users to mint their NFTs which will kick off the stream of tokens.
					</p>
				</div>
				<div className="mt-8 text-white">
					<b>Q: What was the inspiration behind the project?</b>
					<p>
						A: Starting a DAO can have multiple financial issues that have yet to be
						addressed. When a new token is minted by a dao there is intense sell
						pressure on the token and this can take attention away from the true utility
						the token provides. Our application provides DAOs some breathing room to
						focus on their core initiative while getting early funding in a way that is
						mutually beneficial.
					</p>
				</div>
			</div>
		</section>
	);
};
