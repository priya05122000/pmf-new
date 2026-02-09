const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getInstagramPosts() {
    const res = await fetch(`${API_BASE_URL}/api/instagram/all`, {
        cache: "no-store", // always fresh
        // OR use ISR: next: { revalidate: 3600 }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch Instagram posts");
    }

    const json = await res.json();

    // ✅ return only the array of posts
    return json;
}
