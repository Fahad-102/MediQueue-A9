"use client";

import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();

  const parts = pathname.split("/").filter(Boolean);

  return (
    <div className="text-sm text-gray-500 flex gap-2">
      <span className="text-teal-600 font-medium">Home</span>

      {parts.map((part, index) => (
        <span key={index} className="flex gap-2">
          / <span className="capitalize">{part}</span>
        </span>
      ))}
    </div>
  );
}