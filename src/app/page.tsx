import LeedsRegistration from "@/componets/cadastro";
import Footer from "@/componets/footer";
import Header from "@/componets/header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <LeedsRegistration />
      </main>
      <Footer />
    </div>
  );
}


