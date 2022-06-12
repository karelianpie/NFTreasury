import	React, {ReactElement}	from	'react';
import	Link					from	'next/link';
import	Image					from	'next/image';
import	{Card, Button}			from	'@yearn-finance/web-lib/components';
import	WithShadow				from	'components/WithShadow';

function	DisclaimerPage(): ReactElement {
	return (
		<div className={'flex items-center h-full'}>
			<WithShadow role={'large'}>
				<Card className={'flex flex-col justify-between w-[600px] h-[600px]'}>
					<div>
						<div className={'pb-6 w-full'}>
							<h2 className={'font-bold'}>{'Final final step'}</h2>
						</div>
						<div className={'space-y-6 w-10/12 text-justify'}>
							<p>
								{'Final final step!!'}
							</p>
							<p>
								{'For real this time. Let’s just swap your ETH (WETH) to USDC and then you’re done.'}
							</p>
							<p>
								{'Promise'}
							</p>
						</div>
					</div>
					<div className={'flex justify-start'}>
						<Link href={'/woohoo'}>
							<div>
								<WithShadow role={'button'}>
									<Button className={'w-[176px]'}>
										{'Crush'}
									</Button>
								</WithShadow>
							</div>
						</Link>
					</div>
				</Card>
			</WithShadow>
			<div className={'flex items-start justify-center min-w-[600px] h-[600px]'}>
				<Image width={518} height={535} layout="fixed" src="/final-step.png" />
			</div>
		</div>
	);
}

export default DisclaimerPage;