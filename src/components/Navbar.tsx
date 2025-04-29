
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Book, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Book className="h-6 w-6 text-sel-purple" />
          <span className="font-semibold text-xl">SEL Library</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="font-medium hover:text-sel-purple transition-colors">
            Home
          </Link>
          <Link to="/books" className="font-medium hover:text-sel-purple transition-colors">
            Books
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-md py-4 px-4 z-50">
          <div className="flex flex-col gap-4">
            <Link to="/" 
              className="font-medium hover:text-sel-purple transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link to="/books" 
              className="font-medium hover:text-sel-purple transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Books
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
