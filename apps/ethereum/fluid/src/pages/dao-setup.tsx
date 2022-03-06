import type { NextPage } from 'next';

import PageLayout from '../layouts/PageLayout';
import DaoSetupView from '../views/DaoSetupView';

const DaoSetup: NextPage = () => {
	return (
		<PageLayout>
			<DaoSetupView />
		</PageLayout>
	);
};

export default DaoSetup;
