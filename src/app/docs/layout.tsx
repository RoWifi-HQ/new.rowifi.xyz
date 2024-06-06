export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose my-20 mx-auto prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h2:text-blue-600 prose-h3:text-3xl prose-h3:text-blue-600 prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-headings:text-gray-500 prose-p:text-slate-300">
      {children}
    </div>
  );
}
