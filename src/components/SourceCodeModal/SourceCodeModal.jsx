import { useState } from "react";
import { FiX, FiFolder, FiFolderMinus, FiFile, FiDownload } from "react-icons/fi";

const tree = [
  { type: "folder", name: "public/assets", children: [
    { type: "file", name: "card.glb" },
    { type: "file", name: "CV.pdf" },
    { type: "file", name: "faris.png" },
    { type: "file", name: "hero-img.webp" },
    { type: "file", name: "lanyard.png" },
    { type: "folder", name: "proyek", children: [
      { type: "file", name: "proyek1.jpg" },
      { type: "file", name: "proyek2.jpg" },
      { type: "file", name: "proyek3.jpg" },
      { type: "file", name: "proyek4.jpg" },
      { type: "file", name: "proyek5.jpg" },
      { type: "file", name: "proyek6.jpg" },
    ]},
    { type: "folder", name: "tools", children: [
      { type: "file", name: "reactjs.png" },
      { type: "file", name: "tailwind.png" },
      { type: "file", name: "nextjs.png" },
      { type: "file", name: "...and more" },
    ]},
  ]},
  { type: "folder", name: "src", children: [
    { type: "folder", name: "components", children: [
      { type: "file", name: "Aurora/" },
      { type: "file", name: "BlurText/" },
      { type: "file", name: "ChatRoom.jsx" },
      { type: "file", name: "ChromaGrid/" },
      { type: "file", name: "Dock/" },
      { type: "file", name: "Footer.jsx" },
      { type: "file", name: "GlassIcons/" },
      { type: "file", name: "Lanyard/" },
      { type: "file", name: "Navbar.jsx" },
      { type: "file", name: "PreLoader.jsx" },
      { type: "file", name: "ProfileCard/" },
      { type: "file", name: "ProjectModal/" },
      { type: "file", name: "ScrambledText/" },
      { type: "file", name: "ScrollReveal/" },
      { type: "file", name: "ShinyText/" },
      { type: "file", name: "SplitText/" },
    ]},
    { type: "file", name: "App.jsx" },
    { type: "file", name: "data.js" },
    { type: "file", name: "firebase.js" },
    { type: "file", name: "index.css" },
    { type: "file", name: "main.jsx" },
  ]},
  { type: "file", name: "index.html" },
  { type: "file", name: "package.json" },
  { type: "file", name: "vite.config.js" },
  { type: "file", name: "vercel.json" },
];

function TreeNode({ node, depth = 0 }) {
  const [open, setOpen] = useState(depth < 1);
  const isFolder = node.type === "folder";

  return (
    <div style={{ paddingLeft: depth * 16 }}>
      <div
        className={`flex items-center gap-2 py-1 px-2 rounded hover:bg-white/5 transition-colors ${isFolder ? "cursor-pointer" : ""}`}
        onClick={() => isFolder && setOpen(!open)}
      >
        {isFolder
          ? open ? <FiFolderMinus className="text-yellow-400 shrink-0" /> : <FiFolder className="text-yellow-400 shrink-0" />
          : <FiFile className="text-blue-400 shrink-0" />
        }
        <span className="text-sm text-gray-200">{node.name}</span>
      </div>
      {isFolder && open && node.children?.map((child, i) => (
        <TreeNode key={i} node={child} depth={depth + 1} />
      ))}
    </div>
  );
}

export default function SourceCodeModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-zinc-900 border border-gray-700 rounded-2xl w-full max-w-md shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-700">
          <h2 className="text-white font-bold text-lg">📁 Source Code</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <FiX size={20} />
          </button>
        </div>

        {/* File Tree */}
        <div className="p-4 max-h-80 overflow-y-auto scrollbar-hide">
          {tree.map((node, i) => (
            <TreeNode key={i} node={node} depth={0} />
          ))}
        </div>

        {/* Download */}
        <div className="p-5 border-t border-gray-700">
          <a
            href="https://github.com/arulsj888-debug/UIVAULT-portfolio/archive/refs/heads/main.zip"
            download
            className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            <FiDownload size={18} />
            Download ZIP
          </a>
        </div>
      </div>
    </div>
  );
}
