
import { useState } from "react";
import { bookData, grades, colorClasses } from "@/data/books";
import BookCard from "@/components/BookCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BooksPage = () => {
  const [selectedGrade, setSelectedGrade] = useState(grades[0]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">SEL Book Library</h1>
        <p className="text-gray-600 mb-8">
          Browse our collection of culturally relevant books for social emotional learning
        </p>

        <Tabs defaultValue={grades[0]} className="w-full mb-8" onValueChange={setSelectedGrade}>
          <TabsList className="w-full flex overflow-x-auto justify-start mb-4">
            {grades.map(grade => (
              <TabsTrigger 
                key={grade} 
                value={grade}
                className="whitespace-nowrap"
              >
                {grade}
              </TabsTrigger>
            ))}
          </TabsList>

          {grades.map(grade => (
            <TabsContent key={grade} value={grade}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bookData
                  .filter(book => book.grade === grade)
                  .map((book, index) => (
                    <BookCard
                      key={book.title}
                      title={book.title}
                      author={book.author}
                      description={book.description}
                      colorClass={colorClasses[index % colorClasses.length]}
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default BooksPage;
