"use client";

import { useState } from "react";
import { Play } from "@/lib/icons";

interface YoutubeEmbedProps {
  embedUrl: string;
  title: string;
}

export function YoutubeEmbed({ embedUrl, title }: YoutubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract video ID from URL (supports embed and watch format)
  const getVideoId = (url: string) => {
    try {
      if (url.includes("/embed/")) {
        return url.split("/embed/")[1]?.split("?")[0] || "";
      }
      if (url.includes("v=")) {
        return url.split("v=")[1]?.split("&")[0] || "";
      }
      if (url.includes("youtu.be/")) {
        return url.split("youtu.be/")[1]?.split("?")[0] || "";
      }
    } catch {
      return "";
    }
    return "";
  };

  const videoId = getVideoId(embedUrl);
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : "";

  if (isPlaying && videoId) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
      />
    );
  }

  return (
    <div
      onClick={() => setIsPlaying(true)}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${thumbnailUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      role="button"
      aria-label={`Play video: ${title}`}
    >
      {/* Dark overlay for contrast */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          transition: "background-color 0.3s ease",
        }}
        className="hover-overlay"
      />

      {/* Premium Play Button */}
      <div
        style={{
          zIndex: 10,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "rgba(239, 68, 68, 0.9)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(239, 68, 68, 0.4)",
          transition: "transform 0.2s ease, background-color 0.2s ease",
        }}
        className="play-btn-circle"
      >
        <Play size={24} style={{ fill: "currentColor" }} />
      </div>

      <style jsx>{`
        div:hover .hover-overlay {
          background-color: rgba(0, 0, 0, 0.2) !important;
        }
        div:hover .play-btn-circle {
          transform: scale(1.1);
          background-color: rgb(220, 38, 38) !important;
        }
      `}</style>
    </div>
  );
}
