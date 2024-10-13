document.addEventListener('DOMContentLoaded', function () {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
        const dataContainer = document.getElementById('api-data'); // Select the data container

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);
            
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const users = await response.json(); // Parse the JSON data

            // Clear the "Loading user data..." message
            dataContainer.innerHTML = '';

            // Create a <ul> element
            const userList = document.createElement('ul');

            // Loop through the users array and create <li> elements for each user
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name; // Set the text to the user's name
                userList.appendChild(listItem); // Append the <li> to the <ul>
            });

            // Append the <ul> to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // In case of error, clear the container and display an error message
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching user data:', error);
        }
    }

    // Invoke fetchUserData when the DOM is fully loaded
    fetchUserData();
});