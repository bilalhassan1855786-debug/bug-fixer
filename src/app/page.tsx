import Navbar from "@/components/Navbar";
import CodeEditor from "@/components/CodeEditor";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto p-6 mt-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          AI Bug Fixer 🔥
        </h1>

        <CodeEditor />
      </div>
    </main>
  );
}