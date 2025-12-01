import type {Run, User} from "../../data/types.ts";

const backendUrl = "http://localhost:8000/";

export const getUsers = async (): Promise<User[]> => {
    const url = backendUrl + "user.php";

    const response = await fetch(url, {method: "GET"});
    const json = await response.json();
    return json;
};

export const getRuns = async (): Promise<Run[]> => {
    const url = backendUrl + "runs.php";

    const response = await fetch(url, {method: "GET"});
    const json = await response.json();
    return json;
};