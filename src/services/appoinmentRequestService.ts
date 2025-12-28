const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function createAppoinmentRequest(data: any) {
    const res = await fetch(`${API_BASE_URL}/api/appointment-request`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error('Failed to create appointment request');
    }

    return res.json();
}
