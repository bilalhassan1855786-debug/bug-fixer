"use client";

import { useState } from "react";

export default function ResultBox({ result }: { result: string }) {
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-6 p-6 rounded-2xl bg-white/10 border border-white/10">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold text-cyan-400">
          AI Analysis Result
        </h2>

        <button
          onClick={copyText}
          className="px-3 py-1 text-xs bg-cyan-500 rounded-lg"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <pre className="whitespace-pre-wrap text-gray-200 leading-7">
        {result}
      </pre>
    </div>
  );
}