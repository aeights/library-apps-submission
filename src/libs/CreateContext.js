"use server"
import React from "react";

/**
 * @typedef {Object} CreateContextOptions
 * @property {boolean} [strict=true] - If true, React will throw if context is null or undefined. In some cases, you might want to support nested context, so you can set it to false.
 * @property {string} [errorMessage] - Error message to throw if the context is undefined.
 * @property {string} [name] - The display name of the context. The name must be PascalCase.
 */

/**
 * @template {any} ContextType
 * @typedef {[() => ContextType, React.Provider<ContextType>, React.Context<ContextType>]} CreateContextReturn
 */

/**
 * Creates a named context, provider, and hook
 *
 * @param {CreateContextOptions} options
 * @returns {CreateContextReturn<ContextType>}
 */
function createContext(options = {}) {
    const {
        strict = true,
        name = "Context",
        errorMessage = `use${name}: "context" is undefined. Seems you forgot to wrap the component within the ${name}Provider.`,
    } = options;

    const Context = React.createContext(undefined);

    Context.displayName = name;

    function useContext() {
        const context = React.useContext(Context);

        if (!context && strict) {
            const error = new Error(errorMessage);
            error.name = "ContextError";
            Error.captureStackTrace(error, useContext);
            throw error;
        }

        return context;
    }

    return [useContext, Context.Provider, Context];
}

export { createContext };
