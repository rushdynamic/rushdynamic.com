'use client';

import React from 'react';

interface ClearButtonProps {
	onClick?: Function;
}
function ClearButton({ onClick }: ClearButtonProps) {
	return (
		<div className="cursor-pointer h-10 w-10" onClick={() => onClick}>
			<img src="/images/cross.svg" />
		</div>
	);
}

export default ClearButton;
