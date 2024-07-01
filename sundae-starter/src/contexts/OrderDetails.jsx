import { createContext, useContext, useState } from "react";

const OrderDetails = createContext();

// create custom hook to check whether we're inside a provider
function useOrderDetails() {
    const context = useContext(OrderDetails);

    if (!context) {
        throw new Error('useOrderDetails must be called from within an OrderDetailsProvider');
    }

    return context;
}