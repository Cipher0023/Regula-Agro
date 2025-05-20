import Destaques from "@/components/destaques/Destaques";
import PropagandaWide from "@/components/propaganda/propagandaWide/PropagandaWide";


export default function Home() {
  return (
    <div className="flex flex-col items-center p-10">
      <div className="max-w-[1224px]">
        <PropagandaWide/>
      </div>
      
      <main className="flex flex-col max-w-[1224px] gap-8">

        <Destaques/>

      </main>
    </div>
  );
}
