import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode[] }) {
    return (
        <div className="container max-w-4xl mx-auto prose my-8 lg:my-20 prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-4xl lg:prose-h1:text-5xl prose-h2:text-3xl lg:prose-h2:text-4xl prose-h3:text-2xl lg:prose-h3:text-3xl prose-h4:text-xl lg:prose-h4:text-2xl prose-h5:text-lg lg:prose-h5:text-xl prose-h6:text-base lg:prose-h6:text-lg prose-headings:text-gray-200 prose-p:text-white prose-a:text-blue-600 prose-a:no-underline prose-a:hover:underline prose-li:text-white prose-strong:text-white prose-code:text-white prose-td:text-white">
            {children}
        </div>
    );
}