import { useMemo } from 'react';
export const useSortedTodos = (todos, sort) => {
	const sortedContent = useMemo(() => getSortedPosts(), [todos.sort]);
	function getSortedPosts() {
		if (sort) return [...todos].sort((a, b) => a[sort].localeCompare(b[sort]));
		else return todos;
	}
	return sortedContent;
};
