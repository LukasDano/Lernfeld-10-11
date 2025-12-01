import type {User} from "../../data/types.ts";

export const getUsers = async (): Promise<User[]> => {
    const url = "http://localhost:8000/user.php";

    const response = await fetch(url, {method: "GET"});
    const json = await response.json();
    console.log(json);
    return json;
};