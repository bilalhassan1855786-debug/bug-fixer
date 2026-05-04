"use client";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between border-b border-white/10 bg-black/30 backdrop-blur-md">
      <h1 className="text-xl font-bold text-white">
        AI Bug Fixer 🔥
      </h1>

      <div className="flex gap-6 text-sm text-gray-300">
        <a href="/">Home</a>
        <a href="#">Docs</a>
        <a href="#">About</a>
      </div>
    </nav>
  );
}