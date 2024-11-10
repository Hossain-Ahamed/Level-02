import { useEffect, useState } from "react";

const useUserData = () => {
    const controller =  new AbortController();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/users";

    const getUsers = async () => {
        setLoading(true);
        try {
            const res = await fetch(url, { signal: controller.signal });
            const data = await res.json();
            setData(data);
        } catch (e) {
            console.log(e);
            setError(true);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getUsers();
        return () => {
            controller.abort()
        };
    }, []);
    return { isLoading, error, data };
};

export default useUserData;