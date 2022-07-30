import { useMemo } from 'react';
export const useSortedTodos = (todos, sort) => {
	const sortedContent = getSortedPosts();
	function getSortedPosts() {
		if (sort) return [...todos].sort((a, b) => a[sort].localeCompare(b[sort]));
		else return todos;
	}
	return sortedContent;
};
