import { useState } from 'react';
export default function useFetching(callback : any) {
	const [isLoading, setLoadingStatus] = useState<boolean>(false);
	const [error, setError] = useState<any>(false);
	const fetching = async () => {
		try {
			setLoadingStatus(true);
			await callback();
		} catch (e ) {
			setError(e);
		} finally {
			setLoadingStatus(false);
		}
	};
	return [fetching, isLoading, error];
}
