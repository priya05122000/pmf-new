import { unstable_rethrow } from "next/navigation";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getInstagramPosts() {
    try {
        const res = await fetch(`${API_BASE_URL}/api/instagram/all`, {
            cache: "no-store", // always fresh
        });

        if (!res.ok) {
            // 409 INSTAGRAM_REAUTH_REQUIRED / 502 / 503 / backend down.
            // The public site can't fix this — the admin app handles reconnect.
            console.error("Instagram API failed:", res.status);
            return [];
        }

        const json = await res.json();
        return Array.isArray(json) ? json : [];
    } catch (error) {
        // Let Next.js internal signals (e.g. DYNAMIC_SERVER_USAGE during build) propagate
        unstable_rethrow(error);
        console.error("Fetch Instagram posts error:", error);
        return []; // prevent SSR crash
    }
}
