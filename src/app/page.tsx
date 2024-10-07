import Form from "@/components/form";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="h-screen w-full text-black dark:text-white">
      <div>
        <Navbar />
      </div>

      <div>
        <Form /> 
      </div>

      <div>
        <h1>Footer</h1>
      </div>
    </div>
  );
}
