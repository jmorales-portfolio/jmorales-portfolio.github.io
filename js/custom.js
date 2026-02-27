/* document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.scroll-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
*/

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.scroll-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll into view
                targetElement.scrollIntoView({ behavior: 'smooth' });

                // Trigger the highlight animation shortly after scroll starts
                // Delay matches approximate scroll duration (~600ms)
                setTimeout(() => {
                    targetElement.classList.add('footer-highlight');

                    // Remove the class after the animation ends (1s)
                    setTimeout(() => {
                        targetElement.classList.remove('footer-highlight');
                    }, 2000);
                }, 600); // Adjust timing as needed
            }
        });
    });
});
