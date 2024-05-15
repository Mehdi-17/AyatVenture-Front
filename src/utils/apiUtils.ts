export async function handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
        throw new Error(`HTTP Error : ${response.status}`)
    }

    return response.json();
}

export async function handleError(error: Error) {
    console.log("Error occured : ", error);
    throw error;
}

export async function callApi<T>(url: string, options: RequestInit): Promise<void | T> {
    return await fetch(url, options)
        .then(response => handleResponse<T>(response))
        .catch(error => handleError(error));
}