export const load = async () => {
    try {
        // Use the fetch method to make a GET request to the API endpoint
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        // Parse the JSON data from the response
        const data = await response.json();

        // Return the data object as a prop named users
        return {
            users: data
        }
    } catch (error) {
        // Handle any errors that may occur
        console.error(error);
    }
}