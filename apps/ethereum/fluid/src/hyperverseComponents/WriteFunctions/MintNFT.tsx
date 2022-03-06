import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { useEthereum } from '@decentology/hyperverse-ethereum';
import { useERC721 } from '@decentology/hyperverse-ethereum-fluid';
import {
	Box,
	Item,
	TriggerContainer,
	Trigger,
	Parameters,
	Input,
	Content,
	Button,
} from './WriteComponents';

const MintNFT = () => {
	const { address } = useEthereum();
	const { MintNFT } = useERC721();
	const { mutate } = MintNFT();
	const [value, setValue] = useState('');

	const mintAnNFT = async () => {
		try {
			mutate({ value: value });
		} catch (error) {
			throw error;
		}
	};

	return (
		<Box>
			<h4>Mint NFT</h4>
			<p>Mint NFT to someone</p>
			<Accordion.Root type="single" collapsible>
				<Item value="item-1">
					<TriggerContainer>
						<Trigger disabled={!address}>
							{!address ? 'Connect Wallet' : 'Mint'}
						</Trigger>
					</TriggerContainer>
					<Parameters>
						<Content>
							<Input
								placeholder="Value (Eth)"
								onChange={(e) => setValue(e.target.value)}
								value={value}
							/>
							<Button onClick={mintAnNFT}>
								{!address ? 'Connet Wallet' : 'Mint'}
							</Button>
						</Content>
					</Parameters>
				</Item>
			</Accordion.Root>
		</Box>
	);
};

export default MintNFT;
