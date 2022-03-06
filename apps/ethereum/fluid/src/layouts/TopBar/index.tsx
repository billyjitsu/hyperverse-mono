import { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useEthereum } from '@decentology/hyperverse-ethereum';
import { Disclosure } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/solid';

import TopLink from './TopLink';
import { Wallet } from '../../components/Wallet';

interface TopBarProps {
	className?: string;
}

const TopBar: FC<TopBarProps> = ({ className }) => {
	const { address } = useEthereum();

	return (
		<div className={clsx(className, 'sticky top-0 w-full flex flex-col bg-white')}>
			<Disclosure>
				<div className="px-8 flex-1 flex justify-between items-center">
					<div className="py-4 text-4xl text-indigo-700 font-extrabold">
						<Link href="/">fluidity</Link>
					</div>
					{/* Desktop Header Items + Connect Wallet button */}
					<div className="hidden md:flex items-center gap-8 xl:gap-16 text-xl">
						<TopLink href="/dao-setup" text="DAO setup" />
						<TopLink href="/mint" text="mint" />
						<TopLink href="/#team" text="team" />
						<TopLink href="/#faq" text="faq" />
						<div className="hidden lg:block">
							<TopLink href="/hyperverse" text="hyperverse" />
						</div>
					</div>
					<div className="hidden md:flex">
						<Wallet ens={address} userAddress={address} />
					</div>
					{/* Mobile Header */}
					<div className="md:hidden">
						<Disclosure.Button className="-mr-4 p-2">
							<MenuIcon className="w-5 h-5 text-gray-900" />
						</Disclosure.Button>
					</div>
				</div>
				<Disclosure.Panel className="px-8 pb-4 text-gray-500">
					<div className="flex flex-col items-center gap-4">
						<Link href="/">
							<a>
								<Disclosure.Button className="font-bold text-gray-700 hover:text-gray-500">
									home
								</Disclosure.Button>
							</a>
						</Link>
						<Link href="/dao-setup">
							<a>
								<Disclosure.Button className="font-bold text-gray-700 hover:text-gray-500">
									DAO setup
								</Disclosure.Button>
							</a>
						</Link>
						<Link href="/mint">
							<a>
								<Disclosure.Button className="font-bold text-gray-700 hover:text-gray-500">
									Mint
								</Disclosure.Button>
							</a>
						</Link>
						<Link href="/#team">
							<a>
								<Disclosure.Button className="font-bold text-gray-700 hover:text-gray-500">
									team
								</Disclosure.Button>
							</a>
						</Link>
						<Link href="/#faq">
							<a>
								<Disclosure.Button className="font-bold text-gray-700 hover:text-gray-500">
									faq
								</Disclosure.Button>
							</a>
						</Link>
						<div>
							<Wallet ens={address} userAddress={address} />
						</div>
					</div>
				</Disclosure.Panel>
			</Disclosure>
			<div className="h-2 bg-gradient-to-r from-indigo-700 to-red-500" />
		</div>
	);
};

TopBar.displayName = 'TopBar';

export default TopBar;
