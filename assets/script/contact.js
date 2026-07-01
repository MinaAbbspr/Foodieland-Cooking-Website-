document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-section form');

    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('#name').value;
            const email = contactForm.querySelector('#contactEmail').value;
            const subject = contactForm.querySelector('#subject').value;
            const enquiryType = contactForm.querySelector('#ENQUIRY').value;
            const message = contactForm.querySelector('#messages').value;
            if(!name || !email || !subject || !enquiryType || !message){
                alert('All fields are required. Please fill in everything.');
                return;
            }
            const submitButton = contactForm.querySelector('button');
            const originalButtonText = submitButton.innerText;
            submitButton.innerText = "sending...";
            submitButton.disabled = true;

            
            const requestData = {
                name: name,
                email: email,
                subject: subject,
                enquiryType: enquiryType,
                message: message
            };

            try {
                const response = await fetch('https://foodieland-oq9b.onrender.com/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestData)
                });
                if (response.ok) {
                    alert('Your message has been sent successfully!');
                    contactForm.reset();
                } else {
                    const errorData = await response.json().catch(() => ({}));
                    alert(`Error : ${errorData.message || response.statusText}`);
                }
            } catch (error) {
                console.error('Error sending contact form:', error);
                alert('Could not connect to the server. Please check your internet connection.');
            } finally {
                submitButton.innerText = originalButtonText;
                submitButton.disabled = false;
            }
        });
    }
});