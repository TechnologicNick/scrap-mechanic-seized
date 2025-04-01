"use client";

import { useState, useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <body className="dark bg-black text-white min-h-screen">{children}</body>
  );
}
