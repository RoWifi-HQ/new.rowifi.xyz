import Link from "next/link"

export default function Page() {
  return (
    <div className="flex flex-col w-full mx-auto mt-24">
      <Link href="/blog/rowifi-v4" className="border-2 border-slate-400 rounded-xl text-slate-200 py-6 px-6">
        <h1 className="text-2xl text-sky-600 mb-4">
          Launching v4
        </h1>
        <span className="text-sm">
          Dear Reader,<br/> This is an insight into the intricate workings of RoWifi,
          a Discord Bot that serves as the vital link between Discord servers
          and Roblox groups. This discourse will illuminate the technical
          intricacies and developmental journey undertaken by the creator.
        </span>
        <p className="mt-4 text-sky-400">
            Read More{" >"}
        </p>
      </Link>
    </div>
  );
}