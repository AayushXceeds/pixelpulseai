document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Functionality ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Optional: Toggle hamburger icon shape
            hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // --- Dynamic Year in Footer ---
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- MODAL FUNCTIONALITY (Privacy & Terms) ---

    // Get button elements
    const btnPrivacy = document.getElementById('btn-privacy');
    const btnTerms = document.getElementById('btn-terms');

    // Get modal elements
    const modalPrivacy = document.getElementById('modal-privacy');
    const modalTerms = document.getElementById('modal-terms');

    // Get close buttons (the 'x') inside modals
    const closeButtons = document.querySelectorAll('.close-modal');

    // Function to open a modal
    function openModal(modal) {
        modal.classList.add('active');
        // Prevent background scrolling when modal is open
        document.body.style.overflow = 'hidden';
    }

    // Function to close any active modal
    function closeAllModals() {
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            modal.classList.remove('active');
        });
        // Re-enable background scrolling
        document.body.style.overflow = 'auto';
    }

    document.addEventListener('DOMContentLoaded', () => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
      
        if (!hamburger || !navLinks) return;
      
        hamburger.addEventListener('click', () => {
          navLinks.classList.toggle('active');
          hamburger.setAttribute(
            'aria-expanded',
            navLinks.classList.contains('active')
          );
        });
    });
    document.body.classList.add('modal-open');   // when opening modal
    document.body.classList.remove('modal-open'); // when closing modal

      


    // Event Listeners for opening
    if(btnPrivacy) btnPrivacy.addEventListener('click', () => openModal(modalPrivacy));
    if(btnTerms) btnTerms.addEventListener('click', () => openModal(modalTerms));

    // Event Listeners for closing (clicking the 'x')
    closeButtons.forEach(button => {
        button.addEventListener('click', closeAllModals);
    });

    // Event Listener for closing (clicking outside the modal box content)
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeAllModals();
        }
    });
});

