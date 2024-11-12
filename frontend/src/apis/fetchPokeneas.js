export async function fetchFullPokenea() {
    const response = await fetch('http://localhost:3000/api/full');
    const data = await response.json(); 
    return data;
}

export async function fetchRawPokenea() {
    const response = await fetch('http://localhost:3000/api/raw');
    const data = await response.json(); 
    return data;
}

export async function fetchAllPokeneas() {
    const response = await fetch('http://localhost:3000/api/all');
    const data = await response.json(); 
    return data;
}