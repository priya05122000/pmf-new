const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getAllProducts() {
    const res = await fetch(`${API_BASE_URL}/api/product/all`, {
        // choose ONE:
        cache: "no-store", // always fresh
        // next: { revalidate: 3600 }, // OR ISR (1 hour)
    });

    if (!res.ok) {
        throw new Error("Failed to fetch Products");
    }

    const json = await res.json();

    // ✅ return only the array
    return json.data;
}
