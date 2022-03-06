import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { useEthereum } from '@decentology/hyperverse-ethereum';
import { useToken } from '@decentology/hyperverse-ethereum-token';
import {
	Box,
	Item,
	TriggerContainer,
	Trigger,
	Parameters,
	Input,
	Content,
	Button,
} from '../ComponentStyles';

const Allowance = () => {
	const { address } = useEthereum();
	const { Allowance } = useToken();
	const [owner, setOwner] = useState('');
	const [spender, setSpender] = useState('');
	const { data, isLoading, refetch } = Allowance(owner!, spender!);
	const [hidden, setHidden] = useState(false);

	return (
		<Box>
			<h4>Allowance</h4>
			<p>Checks the amount of tokens that an owner allowed to a spender</p>
			<Accordion.Root type="single" collapsible>
				<Item value="item-1">
					<TriggerContainer>
						<Trigger disabled={!address}>
							{!address
								? 'Connect Wallet'
								: 'Get Allowance'}
						</Trigger>
					</TriggerContainer>
					<Parameters>
						<Content>
							<Input
								placeholder="Owner "
								onChange={(e) => setOwner(e.target.value)}
							/>
							<Input
								placeholder="Spender"
								onChange={(e) => setSpender(e.target.value)}
							/>

							<Button
								onClick={() => {
									refetch();
									setHidden((p) => !p);
								}}
							>
								{!address ? 'Connect Wallet' : isLoading ? 'fetching ...' : !hidden ? 'Get Allowance' : data.toString()}
							</Button>
						</Content>
					</Parameters>
				</Item>
			</Accordion.Root>
		</Box>
	);
};

export default Allowance;
