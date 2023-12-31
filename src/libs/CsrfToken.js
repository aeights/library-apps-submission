import { csrfToken } from "next-auth/react";

const getCsrfToken = async () => {
    const response = await fetch("/api/auth/csrf", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();
    return data.csrfToken;
};

export default getCsrfToken;
