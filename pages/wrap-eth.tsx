import	React, {ReactElement}	from	'react';
import	Link					from	'next/link';
import	Image					from	'next/image';
import	{Card, Button}			from	'@yearn-finance/web-lib/components';
import	WithShadow				from	'components/WithShadow';

function	Page(): ReactElement {
	return (
		<div className={'flex items-center h-full'}>
			<WithShadow role={'large'}>
				<Card className={'flex flex-col justify-between w-[600px] h-[600px]'}>
					<div>
						<div className={'pb-6 w-full'}>
							<h2 className={'font-bold'}>{'Wrap ETH'}</h2>
						</div>
						<div className={'space-y-6 w-10/12 text-justify'}>
							<p>
								{'You have to sign one more transaction. That’s just how it works. Don’t ask...'}
							</p>
						</div>
					</div>
					<div className={'flex justify-start'}>
						<Link href={'/execute-swap'}>
							<div>
								<WithShadow role={'button'}>
									<Button className={'w-[176px]'}>
										{'Hit'}
									</Button>
								</WithShadow>
							</div>
						</Link>
					</div>
				</Card>
			</WithShadow>
			<div className={'flex items-start justify-center min-w-[500px] h-[600px]'}>
				<Image width={279} height={322} layout="fixed" src="/wrap-eth.png" />
			</div>
		</div>
	);
}

export default Page;