import { createContext, useContext, useState } from "react";
import { pricePerItem } from "../constants";

const OrderDetails = createContext();

// create custom hook to check whether we're inside a provider
export function useOrderDetails() {
    const contextValue = useContext(OrderDetails);

    if (!contextValue) {
        throw new Error('useOrderDetails must be called from within an OrderDetailsProvider');
    }

    return contextValue;
}

export function OrderDetailsProvider(props) {
        const [optionCounts, setOptionCounts] = useState({
            scoops: {}, // example: { Chocolate: 1, vanilla: 2}
            toppings: {} // example: { "Gummu Bears": 1}
        });

        function updateItemCount(itemName, newItemCount, optionType) {
            setOptionCounts(prev => {
                // make a copy of the previous state
                const newOptionCounts = { ...prev };
                // update the copy
                newOptionCounts[optionType] = {
                    ...newOptionCounts[optionType],
                    [itemName]: newItemCount
                };
                setOptionCounts(newOptionCounts);
            });
        }

        function resetOrder() {
            setOptionCounts({
                scoops: {},
                toppings: {}
            });
        }

        // utility function to dervice totalsfrom optionCounts state value
        function calculateTotal(optionType) {
            // get an array of counts for the option type
            const countsArray = Object.values(optionCounts[optionType]);
            // sum up the counts
            const totalCount = countsArray.reduce((acc, count) => acc + count, 0);

            //multiple the total number of items by the price for this item type
            return totalCount * pricePerItem[optionType];
        }

        const totals = {
            scoops: calculateTotal('scoops'),
            toppings: calculateTotal('toppings')
        };

        const value = {optionCounts, totals, updateItemCount, resetOrder};
        return <OrderDetails.Provider value ={value} {...props} />
}