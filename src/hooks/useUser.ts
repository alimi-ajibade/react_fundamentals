import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import userServices, { User } from "../services/user-services";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const { request, cancelRequest } = userServices.getAll<User>();

        request
            .then((resp) => {
                setUsers(resp.data);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setIsLoading(false);
            });

        // using async/await
        // const fetchUsers = async () => {
        //     try {
        //         const resp = await axios.get<User[]>(
        //             "/users"
        //         );
        //         setUsers(resp.data);
        //     } catch (error) {
        //         setError((error as AxiosError).message);
        //     }
        // };

        // fetchUsers();

        // aborts the requests during cleanup
        return () => cancelRequest();
    }, []);

    return { users, error, isLoading, setUsers, setError };
};

export default useUsers;
