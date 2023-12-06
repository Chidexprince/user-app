/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
	const user = await res.json();

	return { user };
}