"use client";
import { FaLinkedinIn, FaFacebookF, FaXTwitter, FaShareNodes } from "react-icons/fa6";
import { useEffect, useState } from 'react';

interface ShareProps {
  title?: string;
  imageUrl: string;
}

const SharedButton = ({ title, imageUrl }: ShareProps) => {
  const [url, setUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);

  console.log("SharedButton title:", title);
  console.log("image", imageUrl);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);

      if (imageUrl) {
        fetch(imageUrl)
          .then(res => res.blob())
          .then(blob => {
            const file = new File([blob], "shared-image.jpg", { type: blob.type });
            setFile(file);
          })
          .catch(err => console.error("Image fetch failed:", err));
      }
    }
  }, [imageUrl]);

  const formattedTitle = title?.trim() || "Check this out!";

  console.log("formattedTitle", formattedTitle);

  const handleWebShare = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickedLink = (e.target as HTMLElement).closest("a");
    if (clickedLink) return;

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

    <button
      className="btn-cssbuttons"
      onClick={handleWebShare}
      role="button"
      aria-label="Share"
    >
      <span>Share</span>
      <span><FaShareNodes /></span>

      {formattedTitle && url && (
        <ul>
          <li>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(formattedTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <FaFacebookF />
            </a>

          </li>
          <li>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(formattedTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              title="Twitter (X)"
            >
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(formattedTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      )}
    </button>
  );
};


export default SharedButton;
