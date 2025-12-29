const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getAllProjectCategories() {
    const res = await fetch(`${API_BASE_URL}/api/project-category/all`, {
        // choose ONE:
        cache: "no-store", // always fresh
        // next: { revalidate: 3600 }, // OR ISR (1 hour)
    });

    if (!res.ok) {
        throw new Error("Failed to fetch project categories");
    }

    const json = await res.json();

    // ✅ return only the array
    return json.data;
}

export async function getProjectCategoryById(id: string) {
    const res = await fetch(`${API_BASE_URL}/api/project-category/${id}`, {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch project category");
    }
    const json = await res.json();
    return json.data;
}
