document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (validateForm()) {
                // Simulate form submission
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';

                // Simulate API call
                setTimeout(() => {
                    contactForm.reset();
                    successMessage.style.display = 'block';
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                    }, 5000);
                }, 1500);
            }
        });
    }

    function validateForm() {
        let isValid = true;
        
        // Get inputs
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');

        // Validate Name
        if (!name.value.trim()) {
            setError(name, 'Name is required');
            isValid = false;
        } else {
            clearError(name);
        }

        // Validate Email
        if (!email.value.trim()) {
            setError(email, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            setError(email, 'Please enter a valid email address');
            isValid = false;
        } else {
            clearError(email);
        }

        // Validate Subject
        if (!subject.value.trim()) {
            setError(subject, 'Subject is required');
            isValid = false;
        } else {
            clearError(subject);
        }

        // Validate Message
        if (!message.value.trim()) {
            setError(message, 'Message is required');
            isValid = false;
        } else {
            clearError(message);
        }

        return isValid;
    }

    function setError(input, message) {
        const formGroup = input.closest('.form-group');
        const errorDisplay = formGroup.querySelector('.form-error');
        
        formGroup.classList.add('error');
        errorDisplay.textContent = message;
    }

    function clearError(input) {
        const formGroup = input.closest('.form-group');
        formGroup.classList.remove('error');
    }

    function isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
