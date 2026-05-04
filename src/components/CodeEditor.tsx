"use client";

import { useState } from "react";
import Loader from "./Loader";
import ResultBox from "./ResultBox";

export default function CodeEditor() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const fixCode = async () => {
    if (!code) return;

    setLoading(true);

    try {
      const res = await fetch("/api/fix", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();
      setResult(data.result);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <textarea
        className="w-full h-72 p-4 rounded-xl bg-black/30 border border-white/10 text-white"
        placeholder="Paste your buggy code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button
        onClick={fixCode}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-600 font-bold"
      >
        Fix My Code
      </button>

      {loading && <Loader />}

      {result && <ResultBox result={result} />}
    </div>
  );
}