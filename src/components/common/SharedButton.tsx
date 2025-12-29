import { FaLinkedinIn, FaFacebookF, FaXTwitter, FaShareNodes } from "react-icons/fa6";
import { useEffect, useState } from "react";

interface ShareProps {
  title?: string;
  imageUrl: string;
}

const SharedButton = ({ title, imageUrl }: ShareProps) => {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
      if (imageUrl) {
        fetch(imageUrl)
          .then((res) => res.blob())
          .then((blob) => {
            const file = new File([blob], "shared-image.jpg", { type: blob.type });
            setFile(file);
          })
          .catch((err) => console.error("Image fetch failed:", err));
      }
    }
  }, [imageUrl]);

  const formattedTitle = title?.trim() || "Check this out!";

  const handleWebShare = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!navigator.share) {
      alert("Web Share API is not supported in this browser.");
      return;
    }
    try {
      const shareData: ShareData = {
        title: formattedTitle,
        url,
      };
      if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
        shareData.files = [file];
      }
      await navigator.share(shareData);
    } catch (err) {
      console.error("Error sharing:", err);
      alert("Sharing failed or was cancelled.");
    }
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        className="btn-cssbuttons"
        onClick={handleWebShare}
        role="button"
        aria-label="Share"
        style={{
          position: "relative",
          padding: "9px 18px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 500,
          width: 100,
          fontSize: 14,
          lineHeight: 1,
          color: "#000000",
          background: "white",
          border: "1px solid #6885FF",
          borderRadius: 50,
          outline: "none",
          overflow: "hidden",
          cursor: "pointer",
          transition: "0.3s ease",
        }}
      >
        <span style={{ paddingRight: 7 }}>Share</span>
        <span style={{ marginLeft: 8 }}><FaShareNodes /></span>
        {formattedTitle && url && (
          <ul style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            margin: 0,
            padding: 0,
            listStyle: "none",
            transform: "translateY(-50%)",
            pointerEvents: "none",
          }}>
            <li style={{ flex: 1, display: "flex", justifyContent: "center", pointerEvents: "all" }}>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(formattedTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                style={{ display: "inline-flex", color: "#000", transform: "translateY(55px)", transition: "0.3s ease" }}
              >
                <FaFacebookF />
              </a>
            </li>
            <li style={{ flex: 1, display: "flex", justifyContent: "center", pointerEvents: "all" }}>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(formattedTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                title="Twitter (X)"
                style={{ display: "inline-flex", color: "#000", transform: "translateY(55px)", transition: "0.3s ease" }}
              >
                <FaXTwitter />
              </a>
            </li>
            <li style={{ flex: 1, display: "flex", justifyContent: "center", pointerEvents: "all" }}>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(formattedTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                style={{ display: "inline-flex", color: "#000", transform: "translateY(55px)", transition: "0.3s ease" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        )}
      </button>
    </div>
  );
};

export default SharedButton;
