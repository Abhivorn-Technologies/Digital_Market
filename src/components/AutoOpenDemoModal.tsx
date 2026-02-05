
import { useEffect } from 'react';
import { useModal } from '@/context/ModalContext';

const MAX_AUTO_OPENS = 3;
const AUTO_OPEN_INTERVAL = 40000; // 40 seconds

export const AutoOpenDemoModal = () => {
    const { openModal, isModalOpen } = useModal();

    useEffect(() => {
        // Function to handle opening the modal
        const checkAndOpenModal = () => {
            // Get current count from session storage
            const storedCount = sessionStorage.getItem('autoOpenCount');
            const count = storedCount ? parseInt(storedCount, 10) : 0;

            // Check if we haven't reached the limit
            if (count < MAX_AUTO_OPENS) {
                // Only open if it's not already open
                // We can't easily check isModalOpen inside the interval closure without a ref or dependency
                // But openModal() is usually idempotent or safe to call.
                openModal();

                // Increment and save count
                sessionStorage.setItem('autoOpenCount', (count + 1).toString());
            }
        };

        // Set up the interval
        const intervalId = setInterval(checkAndOpenModal, AUTO_OPEN_INTERVAL);

        // Clean up on unmount
        return () => clearInterval(intervalId);
    }, [openModal]); // Re-run if openModal changes (unlikely)

    return null; // This component handles logic only, no UI
};
