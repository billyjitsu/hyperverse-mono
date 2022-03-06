import { FC } from 'react';

import { ContractInfo } from '../ContractInfo';
import HowThisWorks from './HowThisWorks';
import MintToken from './MintToken';

const MintView: FC = () => {
	return (
		<>
			<HowThisWorks />
			<MintToken />
			<ContractInfo />
		</>
	);
};

export default MintView;
