import React from "react";

const cursiveFonts = [
  { name: "Dancing Script", className: "font-dancing" },
  { name: "Great Vibes", className: "font-greatvibes" },
  { name: "Allura", className: "font-allura" },
  { name: "Parisienne", className: "font-parisienne" },
  { name: "Tangerine", className: "font-tangerine" },
  { name: "Satisfy", className: "font-satisfy" },
  { name: "Sacramento", className: "font-sacramento" },
];

const sampleText = "Sol Valentina";

const FontsShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-emerald-700">Elige tu fuente favorita</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
        {cursiveFonts.map((font) => (
          <div
            key={font.name}
            className="rounded-xl shadow p-6 bg-gradient-to-br from-emerald-50 to-lime-100 flex flex-col items-center border border-emerald-100 hover:scale-105 transition-transform cursor-pointer"
          >
            <span
              className={`${font.className} text-5xl md:text-7xl text-gray-800 mb-4 whitespace-nowrap`}
              style={{ textShadow: "0 2px 12px #0001, 0 1px 0 #fff" }}
            >
              {sampleText}
            </span>
            <span className="text-lg text-gray-700 font-semibold">{font.name}</span>
          </div>
        ))}
      </div>
      <p className="mt-10 text-gray-500 text-center">Haz clic en una variante para que la apliquemos en los títulos principales.</p>
    </div>
  );
};

export default FontsShowcase;