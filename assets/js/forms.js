// Initialize toast container
function initializeToastContainer() {
    // Remove existing container if present
    const existingContainer = document.querySelector('.toast-container');
    if (existingContainer) {
        existingContainer.remove();
    }

    // Create new container
    const toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
    return toastContainer;
}

// Function to show toast message
function showToast(message, type = 'success') {
    console.log('Showing toast:', message, type); // Debug log

    const toastContainer = document.querySelector('.toast-container') || initializeToastContainer();
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="bi ${type === 'success' ? 'bi-check-circle' : 'bi-x-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Force a reflow to ensure animation plays
    toast.style.opacity = '0';
    toastContainer.appendChild(toast);
    toast.offsetHeight; // Force reflow
    toast.style.opacity = '1';

    // Remove toast after delay
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.5s ease-out forwards';
        setTimeout(() => {
            if (toastContainer.contains(toast)) {
                toastContainer.removeChild(toast);
            }
        }, 500);
    }, 3000);
}

// Initialize forms when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded'); // Debug log
    
    // Initialize toast container
    initializeToastContainer();
}); 