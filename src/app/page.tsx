export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <header className="p-5 flex container items-center">
        <span className="font-bold text-xl">RoWifi</span>
        <div className="ml-auto hidden sm:flex gap-x-8">
          <a href="/blog" className="font-semibold text-gray-400 text-sm hover:text-gray-600">Blog</a>
          <a href="/docs" className="font-semibold text-gray-400 text-sm hover:text-gray-600">Docs</a>
          <a href="/about" className="font-semibold text-gray-400 text-sm hover:text-gray-600">About</a>
          <a href="/help" className="font-semibold text-gray-400 text-sm hover:text-gray-600">Help</a>
          <a href="/dashboard" className="font-semibold text-gray-400 text-sm hover:text-gray-600">Login</a>
        </div>
      </header>
      <main>RoWifi</main>
    </div>
  );
}
