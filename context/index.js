import React from "react";

const ListContext = React.createContext([]);

/**
 * Получаем айтем из контекста
 * @param itemId
 * @returns {*}
 */
function useCurrentItem(itemId) {
    const ctx = React.useContext(ListContext);
    return ctx.state.find(({id}) => id === itemId);
}

function ListContextProvider({ children }) {
    const [state, setState] = React.useState([
        { id:1, header: 'Header 1', text: 'Text 1', pressed: false },
        { id:2, header: 'Header 2', text: 'Text 2', pressed: false },
        { id:3, header: 'Header 3', text: 'Text 3', pressed: false }
    ]);

    return (
        <ListContext.Provider value={{
            state,
            setState
        }}>
            {children}
        </ListContext.Provider>
    );
}

export {
    ListContext,
    ListContextProvider,
    useCurrentItem
}