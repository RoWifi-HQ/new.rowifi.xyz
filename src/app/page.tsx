import { Button } from "react-aria-components";
import { MobileMenu } from "./components";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center py-5">
      <header className="flex container items-center px-6">
        <span className="font-bold text-xl">RoWifi</span>
        <div className="ml-auto hidden sm:flex gap-x-8">
          <MenuItems />
        </div>
        <MobileMenu>
          <MenuItems />
        </MobileMenu>
      </header>

      <main className="flex flex-col container px-6">
        <section className="grid grid-cols-5 mt-16">
          <div className="flex flex-col col-span-3">
            <span className="text-4xl font-bold text-gray-200">
              Connecting{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                Communication
              </span>
            </span>
            <span className="text-4xl font-bold text-gray-200 mt-4">
              to{" "}
              <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-green-500 text-transparent bg-clip-text">
                Imagination
              </span>
            </span>
            <span className="text-gray-400 font-semibold text-lg max-w-lg my-8">
              RoWifi is the solution for running your Discord server and
              managing your Roblox group.
            </span>
            <div>
              <Button className="bg-gradient-to-r from-fuchsia-600 to-violet-500 rounded-lg px-8 py-3 font-semibold">
                Add the Bot
              </Button>
            </div>
          </div>
        </section>

        <section className="mt-48">
          <div className="flex flex-col items-center">
            <span className="text-blue-500 text-3xl font-bold">Form Bindings</span>
            <div className="h-[1px] w-64 bg-blue-500 my-8" />
            <span className="text-lg text-gray-200">RoWifi provides the most flexible bind system out there so you can customize your server the way you want.</span>
            <div className="grid grid-cols-2 justify-items-center container px-24 mt-16 gap-y-16">
              <div className="h-32 w-96 border border-blue-500 border-opacity-50 rounded-lg shadow-xl shadow-blue-500/20 px-8 py-4 flex flex-col">
                <span className="text-xl font-bold text-blue-400">Rankbinds</span>
                <span className="text-gray-300 text-sm my-auto">From any rank in your group or others, from Guest to Owner, the way you want.</span>
              </div>
              <div className="h-32 w-96 border border-blue-500 border-opacity-50 rounded-lg shadow-xl shadow-blue-500/20 px-8 py-4 flex flex-col">
                <span className="text-xl font-bold text-blue-400">Groupbinds</span>
                <span className="text-gray-300 text-sm my-auto">You, your allies & your enemies, all at your mercy.</span>
              </div>
              <div className="h-32 w-96 border border-blue-500 border-opacity-50 rounded-lg shadow-xl shadow-blue-500/20 px-8 py-4 flex flex-col">
                <span className="text-xl font-bold text-blue-400">Custombinds</span>
                <span className="text-gray-300 text-sm my-auto">Flexibility at its finest.</span>
              </div>
              <div className="h-32 w-96 border border-blue-500 border-opacity-50 rounded-lg shadow-xl shadow-blue-500/20 px-8 py-4 flex flex-col">
                <span className="text-xl font-bold text-blue-400">Assetbinds</span>
                <span className="text-gray-300 text-sm my-auto">Assets, Badges & Gamepasses</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-48">
          <div className="flex flex-col items-center">
            <span className="text-green-700 text-3xl font-bold">Empower your Group</span>
            <div className="h-[1px] w-64 bg-green-700 my-8" />
            <span className="text-lg text-gray-200">RoWifi provides a variety of services that cater to the needs of your growing group.</span>
            <div className="grid grid-cols-2 justify-items-center container px-24 mt-16 gap-y-16">
              <div className="h-32 w-96 border border-green-500 border-opacity-50 rounded-lg shadow-xl shadow-green-500/20 px-8 py-4 flex flex-col">
                <span className="text-xl font-bold text-green-700">Auto Detection</span>
                <span className="text-gray-300 text-sm my-auto">Keep your discord server in sync with your Roblox group.</span>
              </div>
              <div className="h-32 w-96 border border-green-500 border-opacity-50 rounded-lg shadow-xl shadow-green-500/20 px-8 py-4 flex flex-col">
                <span className="text-xl font-bold text-green-700">Tower</span>
                <span className="text-gray-300 text-sm my-auto">A suite of features to aid in Roblox your group management.</span>
              </div>
              <div className="h-32 w-96 border border-green-500 border-opacity-50 rounded-lg shadow-xl shadow-green-500/20 px-8 py-4 flex flex-col">
                <span className="text-xl font-bold text-green-700">Denylists</span>
                <span className="text-gray-300 text-sm my-auto">Prevent troublemakers from disrupting your operations.</span>
              </div>
              <div className="h-32 w-96 border border-green-500 border-opacity-50 rounded-lg shadow-xl shadow-green-500/20 px-8 py-4 flex flex-col">
                <span className="text-xl font-bold text-green-700">API</span>
                <span className="text-gray-300 text-sm my-auto">Add integrations to your Roblox games.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-48">
          <div className="flex flex-col items-center">
            <span className="text-purple-500 text-3xl font-bold">Observe & Protect your growth</span>
            <div className="h-[1px] w-64 bg-purple-500 my-8" />
            <span className="text-lg text-gray-200">RoWifi provides the most flexible bind system out there so you can customize your server the way you want.</span>
            <div className="grid grid-cols-2 justify-items-center container px-24 mt-16 gap-y-16">
              <div className="h-32 w-96 border border-purple-500 border-opacity-50 rounded-lg shadow-xl shadow-purple-500/20 px-8 py-4 flex flex-col">
                <span className="text-xl font-bold text-purple-500">Analytics</span>
                <span className="text-gray-300 text-sm my-auto">Monitor your group's growth by tracking your group metrics.</span>
              </div>
              <div className="h-32 w-96 border border-purple-500 border-opacity-50 rounded-lg shadow-xl shadow-purple-500/20 px-8 py-4 flex flex-col">
                <span className="text-xl font-bold text-purple-500">Backups</span>
                <span className="text-gray-300 text-sm my-auto">Secure your server settings against potential abusers.</span>
              </div>
              <div className="h-32 w-96 border border-purple-500 border-opacity-50 rounded-lg shadow-xl shadow-purple-500/20 px-8 py-4 flex flex-col">
                <span className="text-xl font-bold text-purple-500">Audit Logs</span>
                <span className="text-gray-300 text-sm my-auto">Watch over the actions executed by your moderators.</span>
              </div>
              <div className="h-32 w-96 border border-purple-500 border-opacity-50 rounded-lg shadow-xl shadow-purple-500/20 px-8 py-4 flex flex-col">
                <span className="text-xl font-bold text-purple-500">Events</span>
                <span className="text-gray-300 text-sm my-auto">Record logs of events hosted by your staff.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-48">
          <div className="container bg-slate-200 bg-opacity-5 flex flex-col items-center rounded-lg text-center py-6">
            <span className="max-w-md text-3xl">Waiting for an invitation from above or what?</span>
            <span className="max-w-md text-lg text-gray-400 mt-8">Join 100k+ servers in effortlessly managing your group</span>
            <Link href="https://rowifi.xyz/invite" className="px-6 py-3 rounded-lg bg-blue-800 mt-8">Click this button</Link>
          </div>
        </section>
      </main>

      <footer className="grid grid-cols-6 container px-6 mt-24">
        <div className="col-span-2"></div>
        <div className="flex flex-col text-gray-500 text-sm gap-y-4">
          <span className="uppercase font-bold tracking-tight text-xs">Product</span>
          <Link href="/docs">Docs</Link>
          <Link href="/docs">Pricing</Link>
        </div>
        <div className="flex flex-col text-gray-500 text-sm gap-y-4">
          <span className="uppercase font-bold tracking-tight text-xs">Organization</span>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="flex flex-col text-gray-500 text-sm gap-y-4">
          <span className="uppercase font-bold tracking-tight text-xs">Contact</span>
          <Link href="https://discord.gg/h4BGGyR">Discord</Link>
          <Link href="https://twitter.com/rowifibot">Twitter</Link>
          <Link href="https://github.com/RoWifi-HQ/">Github</Link>
        </div>
        <div className="flex flex-col text-gray-500 text-sm gap-y-4">
          <span className="uppercase font-bold tracking-tight text-xs">Legal</span>
          <Link href="/legal/terms-of-service">Terms of Service</Link>
          <Link href="https://www.iubenda.com/privacy-policy/39859431/full-legal">Privacy Policy</Link>
          <Link href="https://www.iubenda.com/privacy-policy/39859431/cookie-policy">Cookie Policy</Link>
        </div>
      </footer>
    </div>
  );
}

function MenuItems() {
  return (
    <>
      <a
        href="/blog"
        className="font-semibold text-gray-400 text-2xl sm:text-sm hover:text-gray-600"
      >
        Blog
      </a>
      <a
        href="/docs"
        className="font-semibold text-gray-400 text-2xl sm:text-sm hover:text-gray-600"
      >
        Docs
      </a>
      <a
        href="/about"
        className="font-semibold text-gray-400 text-2xl sm:text-sm hover:text-gray-600"
      >
        About
      </a>
      <a
        href="/help"
        className="font-semibold text-gray-400 text-2xl sm:text-sm hover:text-gray-600"
      >
        Help
      </a>
      <a
        href="/dashboard"
        className="font-semibold text-gray-400 text-2xl sm:text-sm hover:text-gray-600"
      >
        Login
      </a>
    </>
  );
}
