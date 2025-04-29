
import { Book } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sel-blue/30 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Book className="h-5 w-5 text-sel-purple" />
            <span className="font-semibold">SEL Library</span>
          </div>
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} SEL Library. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
