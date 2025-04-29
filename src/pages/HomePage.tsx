
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sel-blue/70 to-sel-purple/70 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Social Emotional Learning Library
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Culturally relevant resources for educators that honor who our students truly are.
            </p>
            <Button asChild size="lg" className="bg-sel-purple hover:bg-sel-purple/90">
              <Link to="/books">Explore Books</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What is SEL Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">What is Social Emotional Learning (SEL)?</h2>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                SEL is an evidence based approach with a positive impact in student well being, behavior and academic performance. SEL has five core competencies, all geared towards managing emotions and promoting positive interactions. 
              </p>
              
              <p className="mb-4">
                SEL creates a safe and supportive environment for our students, where they can better engage in learning and flourish as individuals.
              </p>
              
              <div className="my-8 p-6 bg-sel-green/40 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Rationale</h3>
                <p>
                  Social Emotional learning has become a widespread and important topic within our curriculum and general education. This being said, many of the resources being used lack cultural relevance, and don't really represent our students' lived experiences.
                </p>
                <p className="mt-2">
                  This mini library reflects the need for SEL that is culturally grounded, equitable and just. This provides immediate resources for educators that honor who our students truly are.
                </p>
              </div>
              
              <div className="mt-8 text-center">
                <Button asChild size="lg" className="bg-sel-orange hover:bg-sel-orange/90 text-gray-800">
                  <Link to="/books">Browse Book Collection</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
