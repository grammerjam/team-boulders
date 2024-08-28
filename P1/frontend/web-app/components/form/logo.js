import Image from 'next/image';

import logoImg from '@/assets/logo.svg';

export default function Logo() {
	return (
		<Image
			src={logoImg}
			alt="Project Logo"
			priority />
	)
}