async function signupFormHandler(event) {
    event.preventDefault();
    // Extract data from signup form .
    const firstName = document.querySelector('#floatingFirstName').value.trim();
    const lastName = document.querySelector('#floatingLastName').value.trim();
    const email = document.querySelector('#floatingEmail').value.trim();
    const password = document.querySelector('#floatingPassword').value.trim();

    console.log(firstName);

    if (firstName && lastName && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);

        // Check the response status
        if (response.ok) {
            console.log('success');
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);