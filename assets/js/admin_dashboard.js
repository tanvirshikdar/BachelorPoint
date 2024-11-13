// Function to handle account suspension/activation
async function manageUserAccount(userId, action) {
    try {
        const response = await fetch(`/api/admin/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ action })
        });

        if (response.ok) {
            console.log(`User ${userId} has been ${action}d successfully.`);
            alert(`User ${action}d successfully.`);
        } else {
            console.error(`Failed to ${action} user ${userId}.`);
            alert(`Failed to ${action} user.`);
        }
    } catch (error) {
        console.error('Error managing user account:', error);
        alert('An error occurred while managing the user account.');
    }
}

// Function to approve or reject property listings
async function verifyPropertyListing(propertyId, action) {
    try {
        const response = await fetch(`/api/admin/properties/${propertyId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: action })
        });

        if (response.ok) {
            console.log(`Property ${propertyId} has been ${action}d successfully.`);
            alert(`Property ${action}d successfully.`);
        } else {
            console.error(`Failed to ${action} property ${propertyId}.`);
            alert(`Failed to ${action} property.`);
        }
    } catch (error) {
        console.error('Error verifying property listing:', error);
        alert('An error occurred while verifying the property listing.');
    }
}

// Function to generate platform analytics reports
async function generateAnalyticsReport() {
    try {
        const response = await fetch('/api/admin/analytics');
        if (response.ok) {
            const report = await response.json();
            console.log('Analytics Report:', report);
            alert('Analytics report generated successfully. Check the console for details.');
        } else {
            console.error('Failed to generate analytics report.');
            alert('Failed to generate analytics report.');
        }
    } catch (error) {
        console.error('Error generating analytics report:', error);
        alert('An error occurred while generating the analytics report.');
    }
}

// Example event listeners or triggers for testing the functions
window.onload = function() {
    // Example usage for testing - update or remove in production
    // Simulate user account management actions
    manageUserAccount(1, 'suspend'); // Test suspend user
    manageUserAccount(2, 'activate'); // Test activate user

    // Simulate property verification actions
    verifyPropertyListing(101, 'approve'); // Test approve property
    verifyPropertyListing(102, 'reject'); // Test reject property

    // Simulate analytics report generation
    generateAnalyticsReport(); // Test analytics generation
};