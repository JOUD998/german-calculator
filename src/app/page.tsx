import Card from "../components/card/card";
import Header from "../components/header/header";



export default function Home() {
  return (
      <main className="min-h-screen flex items-center justify-center p-8">
          <Header/>
          <Card/>

      </main>
  );
}