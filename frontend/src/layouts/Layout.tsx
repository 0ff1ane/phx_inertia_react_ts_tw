import { useCallback } from "react";
import { usePage, Link } from "@inertiajs/react";

export default function Layout({ children }) {
  const { url, props } = usePage();

  // function to underline(show active) the link for current route
  const pageClasses = useCallback(
    (checkUrl: string) => {
      return `text-white text-base ${checkUrl === url ? "underline" : ""}`;
    },
    [url],
  );

  return (
    <main className="h-screen overflow-scroll bg-gray-200">
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="flex gap-3 items-end">
          <div className="text-gray-100 text-lg font-semibold">Rinph</div>
          <Link href="/counter" className={pageClasses("/counter")}>
            Counter
          </Link>
          <Link href="/todos" className={pageClasses("/todos")}>
            Todos
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-white">Anonymous</span>
          <Link
            href="/"
            className="bg-gray-200 hover:bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm"
          >
            Logout
          </Link>
        </div>
      </nav>
      <article>{children}</article>
    </main>
  );
}
