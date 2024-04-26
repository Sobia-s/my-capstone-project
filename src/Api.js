

// Function to simulate form submission
export const submitAPI = (formData) => {
    return new Promise((resolve, reject) => {
      // Simulate submission delay (1 second)
      setTimeout(() => {
        // Mock submission success/failure
        const isSuccess = Math.random() < 0.8; // 80% success rate
        if (isSuccess) {
          resolve(true); // Resolve with true for successful submission
        } else {
          reject(new Error("Submission failed.")); // Reject with error for failed submission
        }
      }, 1000); // Simulate submission delay (1 second)
    });
  };
  