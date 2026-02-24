"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const Popup = dynamic(() => import("./Popup"), {
  ssr: false,
});

export default function PopupTrigger() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginTop: 40 }}>
      <button onClick={() => setOpen(true)} className="bg-green-500 rounded-xl">
        Open Popup
      </button>

      {open && <Popup onClose={() => setOpen(false)} />}
    </div>
  );
}