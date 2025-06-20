import Link from "next/link";

export default function Header() {
    return (

        <header className="fixed top-0 left-0 w-full bg-[rgb(51,52,70)] text-white shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                <h1 className="text-xl font-bold">German Calculator</h1>
                <nav className="space-x-4">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/about" className="hover:underline">About</Link>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                </nav>
            </div>
        </header>

    );
}