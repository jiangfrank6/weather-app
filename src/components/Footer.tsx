export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center items-center">
          <p>© {new Date().getFullYear()} My React App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 