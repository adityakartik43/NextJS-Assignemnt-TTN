"use client";

export default function Popup({ onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          background: "gray",
          padding: 20,
          width: 300,
          margin: "100px auto",
        }}
      >
        <h2>Dynamic Popup</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
