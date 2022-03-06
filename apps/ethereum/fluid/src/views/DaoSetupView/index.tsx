import { FC } from 'react';

import { ContractInfo } from '../ContractInfo';
import CreateInstance from './CreateInstance';
import HowThisWorks from './HowThisWorks';
import Important from './Important';
import WrapToken from './WrapToken';

const DaoSetupView: FC = () => {
	return (
		<>
			<HowThisWorks />
			<Important />
			<WrapToken />
			<CreateInstance />
			<ContractInfo />
		</>
	);
};

export default DaoSetupView;
