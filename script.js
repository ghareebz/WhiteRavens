document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Navbar Logic
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Waitlist Form Simulation (Terminal Version)
    const form = document.getElementById('waitlistForm');
    const emailInput = document.getElementById('email');
    const messageDiv = document.getElementById('formMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = emailInput.value;

        if(email && email.includes('@')) {
            // Success Message style
            messageDiv.innerHTML = `<span class="output">> Uploading to encrypted server... </span><br>
                                    <span class="output">> User <span style="color:var(--neon-green)">${email}</span> added to whitelist. </span><span class="success">[OK]</span>`;
            
            messageDiv.className = 'code-line'; // Remove hidden class
            
            emailInput.value = '';
            emailInput.disabled = true; // Lock the terminal temporarily
            
            // Reset after 4 seconds
            setTimeout(() => {
                messageDiv.className = 'code-line hidden';
                emailInput.disabled = false;
                emailInput.focus();
            }, 4000);
        } else {
            // Error Message style
            messageDiv.innerHTML = `<span class="output" style="color:#ff4444">> Error: Syntax invalid. Protocol terminated.</span>`;
            messageDiv.className = 'code-line';
        }
    });
});