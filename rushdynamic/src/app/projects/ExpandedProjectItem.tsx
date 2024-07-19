import React from 'react';
import ClearButton from '../components/ClearButton';

interface ExpandedProjectItem {
	onClear: Function;
}
function ExpandedProjectItem({ onClear }: ExpandedProjectItem) {
	return (
		<div>
			<ClearButton onClick={onClear} />
		</div>
	);
}

export default ExpandedProjectItem;
