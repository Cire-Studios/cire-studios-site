import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-950 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <Image
            src="/favicon.ico"
            alt="Cire Studios Logo"
            width={32}
            height={32}
          />
          <span className="text-xl text-white font-bold">Cire Studios</span>
        </div>
        <p className="text-gray-500">
          &copy; 2024 Cire Studios. Crafting digital excellence.
        </p>
      </div>
    </footer>
  );
}
