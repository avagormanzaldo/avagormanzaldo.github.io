
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface BookCardProps {
  title: string;
  author: string;
  description: string;
  colorClass?: string;
}

const BookCard = ({ title, author, description, colorClass = "bg-sel-blue/30" }: BookCardProps) => {
  return (
    <Card className={`overflow-hidden transition-all hover:shadow-md ${colorClass}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>By: {author}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default BookCard;
