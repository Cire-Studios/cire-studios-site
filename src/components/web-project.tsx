import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Share,
  SquarePlus,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function WebProject({
  title,
  description,
  displayLink,
  link,
  textLeft = false,
}: {
  title: string;
  description: string;
  displayLink: string;
  link: string;
  textLeft?: boolean;
}) {
  const renderContent = () => (
    <div className="w-full lg:w-2/3 relative group">
      <div
        className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden transform ${
          textLeft ? "rotate-2" : "-rotate-2"
        } hover:rotate-0 transition-transform duration-500 shadow-2xl`}
      >
        <div className="aspect-[3/5] lg:aspect-video bg-gray-900 flex items-center justify-center border-b border-gray-700 relative">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 cursor-pointer"
            role="button"
            aria-label={`Open ${displayLink} in a new tab`}
          />
          <iframe src={link} className="w-full h-full"></iframe>
        </div>
        <div className="p-2 sm:p-6 bg-gray-800">
          <div className="flex items-center gap-2">
            {/* Desktop Version */}
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            {/* Mobile Version */}
            <div className="flex sm:hidden flex-col items-center gap-2 justify-center w-full">
              <div className=" bg-gray-900 rounded-lg px-4 py-2 text-sm text-gray-200">
                {displayLink}
              </div>
              <div className="flex justify-between w-full p-2 pt-0">
                <ChevronLeft className="w-6 h-6 text-gray-200" />
                <ChevronRight className="w-6 h-6 text-gray-200" />
                <Share className="w-6 h-6 text-gray-200" />
                <BookOpen className="w-6 h-6 text-gray-200" />
                <SquarePlus className="w-6 h-6 text-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTextSection = () => (
    <div className="lg:w-1/3 space-y-6">
      <h3 className="text-3xl font-bold text-white">{title}</h3>
      <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
      <Button
        onClick={() => {
          window.open(link, "_blank");
        }}
        className="bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-semibold group"
      >
        View {displayLink}
        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );

  return (
    <div className="relative">
      <div
        className={`flex flex-col lg:flex-row ${
          textLeft ? "lg:flex-row-reverse" : ""
        } items-center gap-12`}
      >
        {renderContent()}
        {renderTextSection()}
      </div>
    </div>
  );
}
