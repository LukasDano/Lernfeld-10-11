import type {Run, User} from "../../data/types.ts";

// ToDo Store these in the context and use react-query to automatically update the data every now and than

export const getUsers = async (): Promise<User[]> => {
    const url = "http://localhost:8000/user.php";

    const response = await fetch(url, {method: "GET"});
    const json = await response.json();
    return json;
};

export const getRuns = async (): Promise<Run[]> => {
    const url = "http://localhost:8000/runs.php";

    const response = await fetch(url, {method: "GET"});
    const json = await response.json();
    return json;
};