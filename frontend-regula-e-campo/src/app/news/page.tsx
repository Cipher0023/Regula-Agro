
import Footer from "@/components/footer/footer";
import Texto from "@/components/notícia/Texto";
import PropagandaWide from "@/components/propaganda/propagandaWide/PropagandaWide";
import ChatBox from "@/components/chat/chat";

export default function News() {
  return (
    <div className="flex flex-col gap-y-20 w-full items-center ">
      <div className="max-w-[1136px]">
        <PropagandaWide/>
      </div>
      
      <main className="flex flex-col max-w-[1216px] mx-auto gap-8 px-10 ">
        <div className="flex flex-row gap-20">
          <div className="flex w-full">
            < Texto />
          </div>
          <div className="flex w-full max-w-[480px] h-auto pb-10">
            <ChatBox />
          </div>
        </div>
      </main>
    <Footer/>
    
    </div>
  );
}
