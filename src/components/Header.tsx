import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <Link href="/" className="hover:text-gray-300">
              Weather App
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/forecast" className="hover:text-gray-300">
              Forecast
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 