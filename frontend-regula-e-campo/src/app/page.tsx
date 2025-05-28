import Destaques from "@/components/Seçoes/Destaques";
import Novidades from "@/components/Seçoes/Novidades";
import Secundário from "@/components/Seçoes/Secundário";
import Footer from "@/components/footer/footer";
import Texto from "@/components/notícia/Texto";
import PropagandaWide from "@/components/propaganda/propagandaWide/PropagandaWide";


export default function Home() {
  return (
    <div className="flex flex-col items-center gap-y-20">
      <div className="max-w-[1136px] ">
        <PropagandaWide/>
      </div>
      
      <main className="flex flex-col max-w-[1136px] gap-8 ">

        <Destaques/>
        <div className="stroke-gray-100 border-b border-t border-gray-100 w-full">
        </div>
        <Secundário/>
        <div className="stroke-gray-100 border-b border-t border-gray-100 w-full">
        </div>
        <Novidades/>
        <div className="w-full">
        <Texto/>
        </div>

      </main>
    <Footer/>
    
    </div>
  );
}
