document.addEventListener("DOMContentLoaded", function() {
            // Scroll to section on nav click
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        });

        function showDownload(projectId) {
            const modal = document.getElementById('downloadModal');
            const title = document.getElementById('modalTitle');
            const link = document.getElementById('downloadLink');
            if (projectId === 1) {
                title.textContent = 'E-Commerce Site Source Code';
                link.href = '#';
            } else if (projectId === 2) {
                title.textContent = 'Task Manager App Source Code';
                link.href = '#';
            } else if (projectId === 3) {
                title.textContent = 'Data Dashboard Source Code';
                link.href = '#';
            }
            modal.classList.remove('modal-closed');
            modal.classList.add('modal-open');
        }
        function closeModal() {
            document.getElementById('downloadModal').classList.add('modal-closed');
            document.getElementById('downloadModal').classList.remove('modal-open');
        }

        // Get the button
        let mybutton = document.getElementById("backToTopBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
<<<<<<< HEAD
        }
=======
        }
>>>>>>> 69cac74f8fe01f0c5ce49c11f27672d8d56e5894
