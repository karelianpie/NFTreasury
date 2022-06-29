import	React, {ReactElement}	from	'react';
import	{Button}				from	'@yearn-finance/web-lib/components';
import	WithShadow				from	'components/WithShadow';
import	DialogBox				from	'components/DialogBox';
import	Link					from	'next/link';

function	DisclaimerPage(): ReactElement {
	return (
		<DialogBox
			title={'Yearn Vaults'}
			paragraphs={[
				<p>Vaults are a passive investing strategy, enabling people to put their capital to work via automation. Each Vault auto-compounds earned tokens, meaning Yearn reinvests earned tokens to generate additional earnings over time. A strategy is an automated smart contract. It puts your tokens into different protocols to generate yield.</p>,
				<p>Users benefit from socializing gas costs and need not be experts in defi or the underlying protocols to utilize Yearn Vaults.</p>,
			]}	
		>
			<div className={'flex justify-end mt-8 md:mt-0'}>
				<Link href={'/what-is-cowswap'}>
					<div>
						<WithShadow role={'button'}>
							<Button className={'w-[176px]'}>
								{'Next'}
							</Button>
						</WithShadow>
					</div>
				</Link>
			</div>
		</DialogBox>
	);
}

export default DisclaimerPage;