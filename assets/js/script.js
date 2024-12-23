   // Toggle function to show/hide navbar links on small screens
    function toggleNavbar() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
      }
      function toggleDetails(event) {
        // Get the clicked button
        const clickedButton = event.target;  // This will reference the button that was clicked
        
        console.log(clickedButton)
        const buttonText = clickedButton.textContent;  // Get the text of the button clicked
        
        console.log('Clicked Button:', clickedButton);
        console.log('Button Text:', buttonText);
    
        // Logic to toggle the details based on the button clicked
        const moreDetails = document.querySelector('.more-details');
        const btn = document.querySelector('.show-more-btn');
    
        if (moreDetails.style.display === 'none' || moreDetails.style.opacity === '0') {
            moreDetails.style.display = 'block';
            setTimeout(() => {
                moreDetails.style.opacity = '1';
            }, 10);
    
            // Change button text based on what was clicked
            if (buttonText === 'Show More Details') {
                btn.textContent = 'Show Less';
            } else {
                btn.textContent = `Hide details for ${buttonText}`;
            }
        } else {
            moreDetails.style.opacity = '0';
            setTimeout(() => {
                moreDetails.style.display = 'none';
            }, 500);
    
            btn.textContent = 'Show More Details';
        }
    }
    
