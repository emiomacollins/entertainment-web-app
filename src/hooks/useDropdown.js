/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';

export function useDropdown() {
	const ref = useRef();
	const [expanded, setExpanded] = useState(false);

	// extract the ref from this hook if you want to use the close onBlur functionality
	useEffect(() => {
		function handleBlur(e) {
			!ref.current?.contains(e.target) && setExpanded(false);
		}
		document.addEventListener('mousedown', handleBlur);
		return () => document.removeEventListener('mousedown', handleBlur);
	}, []);

	function handleToggleExpanded() {
		setExpanded(!expanded);
	}

	return {
		expanded,
		setExpanded,
		handleToggleExpanded,
		ref,
	};
}
