export function formatarData(data) {
    if(!data) return null;
    else if(typeof data !== "string") return null;

    return new Date(data).toLocaleDateString();
}