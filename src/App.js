
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaSeedling, FaEgg } from "react-icons/fa";

const branches = [
  {
    name: "Best Cape Cod Weddings",
    tasks: [
      { label: "Hybrid Format", status: "done", link: "https://docs.google.com" },
      { label: "Venue Writeups", status: "progress", link: "https://docs.google.com" },
      { label: "Interactive Map", status: "not-started", link: "https://maps.google.com" },
    ],
  },
  {
    name: "Connect Tree",
    tasks: [
      { label: "Animated Logo", status: "progress", link: "https://figma.com" },
      { label: "Landing Page", status: "progress", link: "https://vercel.com" },
      { label: "TreeDo Mockup", status: "not-started", link: "https://chat.openai.com" },
    ],
  },
  {
    name: "Video Wallpaper",
    tasks: [
      { label: "Wave Animation", status: "progress", link: "https://drive.google.com" },
      { label: "Day Cycle Concept", status: "not-started", link: "https://chat.openai.com" },
    ],
  },
];

const statusIcon = {
  done: <FaCheckCircle className="text-green-600" />,
  progress: <FaSeedling className="text-yellow-500" />,
  "not-started": <FaEgg className="text-gray-500" />,
};

export default function App() {
  return (
    <div className="flex flex-col items-center p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">🌳 Connect Tree Prototype</h1>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {branches.map((branch, idx) => (
          <div
            key={idx}
            className="relative bg-green-50 rounded-xl shadow-md p-4 border border-green-200"
          >
            <h2 className="text-xl font-semibold mb-3 text-green-900">{branch.name}</h2>
            <ul className="space-y-2">
              {branch.tasks.map((task, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between bg-white rounded-lg p-2 shadow hover:bg-green-100 transition"
                >
                  <div className="flex items-center space-x-2">
                    {statusIcon[task.status]}
                    <span className="text-sm font-medium">{task.label}</span>
                  </div>
                  <a
                    href={task.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 text-sm hover:underline"
                  >
                    Open
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
