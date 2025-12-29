const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getAllProjects() {
    const res = await fetch(`${API_BASE_URL}/api/project/all`, {
        // choose ONE:
        cache: "no-store", // always fresh
        // next: { revalidate: 3600 }, // OR ISR (1 hour)
    });

    if (!res.ok) {
        throw new Error("Failed to fetch projects");
    }

    const json = await res.json();

    // ✅ return only the array
    return json.data;
}

export async function getProjectBySlug(slug: string) {
    const res = await fetch(`${API_BASE_URL}/api/project/slug/${slug}`, {
        // choose ONE:
        cache: "no-store", // always fresh
        // next: { revalidate: 3600 }, // OR ISR (1 hour)
    });
    if (!res.ok) {
        throw new Error("Failed to fetch project");
    }
    const json = await res.json();
    return json.data;;
}
