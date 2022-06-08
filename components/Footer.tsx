import	React, {ReactElement}		from	'react';
import	Link						from	'next/link';

function	Footer(): ReactElement {
	return (
		<footer className={'hidden flex-row items-center py-8 mx-auto mt-auto w-full max-w-6xl md:flex'}>
			<Link href={'/disclaimer'}>
				<p className={'text-base hover:underline transition-colors cursor-pointer text-typo-secondary hover:text-primary'}>{'Disclaimer'}</p>
			</Link>

			<div className={'px-2 ml-auto'}>
				<a href={'https://twitter.com/iearnfinance'} target={'_blank'} rel={'noreferrer'} className={'text-base hover:underline transition-colors cursor-pointer'}>
					{'Twitter'}
				</a>
			</div>
			<div className={'px-2'}>
				<a href={'https://discord.yearn.finance/'} target={'_blank'} rel={'noreferrer'} className={'text-base hover:underline transition-colors cursor-pointer'}>
					{'Discord'}
				</a>
			</div>
		</footer>
	);
}

export default Footer;
