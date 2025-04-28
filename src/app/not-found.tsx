import Link from "next/link";

export default function NotFound() {
    return (
            <div className="min-h-screen flex flex-col justify-center items-center text-center text-mainTextColor dark:text-mainTextDarkColor">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
            <p className="text-lg md:text-xl mb-6">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
            <Link
              href="/"
              className="px-6 py-2 bg-accentsColor dark:bg-accentDarkColor text-mainTextColor rounded-lg hover:opacity-90 transition"
            >
              Go Back Home
            </Link>
          </div>
    )
}