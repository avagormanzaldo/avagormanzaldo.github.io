
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface BookCardProps {
  title: string;
  author: string;
  description: string;
  colorClass?: string;
  coverImage?: string;
}

const BookCard = ({ 
  title, 
  author, 
  description, 
  colorClass = "bg-sel-blue/30",
  coverImage
}: BookCardProps) => {
  return (
    <Card className={`overflow-hidden transition-all hover:shadow-md ${colorClass}`}>
      <div className="flex flex-col md:flex-row gap-4">
        {coverImage && (
          <div className="md:w-1/3 p-4">
            <img 
              src={coverImage} 
              alt={`Cover of ${title}`} 
              className="w-full h-auto object-cover rounded-md shadow-sm"
            />
          </div>
        )}
        <div className={`${coverImage ? 'md:w-2/3' : 'w-full'}`}>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>By: {author}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{description}</p>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default BookCard;
