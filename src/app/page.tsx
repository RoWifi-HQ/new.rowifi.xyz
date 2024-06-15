import Link from "next/link";

export default function Home() {
  return (
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
          <span className="text-gray-400 text-lg max-w-lg my-8">
            RoWifi is the solution for running your Discord server and managing
            your Roblox group.
          </span>
          <div>
            <button className="bg-gradient-to-r from-fuchsia-600 to-violet-500 rounded-lg px-8 py-3">
              Add the Bot
            </button>
          </div>
        </div>
      </section>

      <section className="mt-48">
        <div className="flex flex-col items-center">
          <span className="text-blue-500 text-3xl font-bold">
            Form Bindings
          </span>
          <div className="h-[1px] w-64 bg-blue-500 my-8" />
          <span className="text-lg text-gray-200">
            RoWifi provides the most flexible bind system out there so you can
            customize your server the way you want.
          </span>
          <div className="grid grid-cols-4 container mt-16">
            <div>
              <div className="flex flex-col px-8">
                <span className="text-xl font-bold text-blue-400">
                  Rankbinds
                </span>
                <span className="text-gray-300 text-sm mt-4">
                  From any rank in your group or others, from Guest to Owner,
                  the way you want.
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-col px-8">
                <span className="text-xl font-bold text-blue-400">
                  Groupbinds
                </span>
                <span className="text-gray-300 text-sm mt-4">
                  You, your allies & your enemies, all at your mercy.
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-col px-8">
                <span className="text-xl font-bold text-blue-400">
                  Custombinds
                </span>
                <span className="text-gray-300 text-sm mt-4">
                  Flexibility at its finest.
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-col px-8">
                <span className="text-xl font-bold text-blue-400">
                  Assetbinds
                </span>
                <span className="text-gray-300 text-sm mt-4">
                  Assets, Badges & Gamepasses
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-48">
        <div className="flex flex-col items-center">
          <span className="text-green-700 text-3xl font-bold">
            Empower your Group
          </span>
          <div className="h-[1px] w-64 bg-green-700 my-8" />
          <span className="text-lg text-gray-200">
            RoWifi provides a variety of services that cater to the needs of
            your growing group.
          </span>
          <div className="grid grid-cols-4 container mt-16">
            <div>
              <div className="flex flex-col px-8">
                <span className="text-xl font-bold text-green-700">
                  Auto Detection
                </span>
                <span className="text-gray-300 text-sm mt-4">
                  Keep your discord server in sync with your Roblox group.
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-col px-8">
                <span className="text-xl font-bold text-green-700">Tower</span>
                <span className="text-gray-300 text-sm mt-4">
                  A suite of features to aid in Roblox your group management.
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-col px-8">
                <span className="text-xl font-bold text-green-700">
                  Denylists
                </span>
                <span className="text-gray-300 text-sm mt-4">
                  Prevent troublemakers from disrupting your operations.
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-col px-8">
                <span className="text-xl font-bold text-green-700">API</span>
                <span className="text-gray-300 text-sm mt-4">
                  Add integrations to your Roblox games.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-48">
        <div className="flex flex-col items-center">
          <span className="text-purple-500 text-3xl font-bold">
            Observe & Protect your growth
          </span>
          <div className="h-[1px] w-64 bg-purple-500 my-8" />
          <span className="text-lg text-gray-200">
            RoWifi provides the most flexible bind system out there so you can
            customize your server the way you want.
          </span>
          <div className="grid grid-cols-4 container mt-16">
            <div>
              <div className="flex flex-col px-8">
                <span className="text-xl font-bold text-purple-500">
                  Analytics
                </span>
                <span className="text-gray-300 text-sm mt-4">
                  Monitor your group's growth by tracking your group metrics.
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-col px-8">
                <span className="text-xl font-bold text-purple-500">
                  Backups
                </span>
                <span className="text-gray-300 text-sm mt-4">
                  Secure your server settings against potential abusers.
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-col px-8">
                <span className="text-xl font-bold text-purple-500">
                  Audit Logs
                </span>
                <span className="text-gray-300 text-sm mt-4">
                  Watch over the actions executed by your moderators.
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-col px-8">
                <span className="text-xl font-bold text-purple-500">
                  Events
                </span>
                <span className="text-gray-300 text-sm mt-4">
                  Record logs of events hosted by your staff.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-48">
        <div className="container bg-slate-200 bg-opacity-5 flex flex-col items-center rounded-lg text-center py-6">
          <span className="max-w-md text-3xl">
            Waiting for a sign from above or what?
          </span>
          <span className="max-w-md text-lg text-gray-400 mt-8">
            Join 100k+ servers in effortlessly managing your group
          </span>
          <Link
            href="https://rowifi.xyz/invite"
            className="px-6 py-3 rounded-lg bg-blue-800 mt-8"
          >
            Click this button
          </Link>
        </div>
      </section>
    </main>
  );
}
