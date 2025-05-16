import Destaques from "@/components/destaques/Destaques";
import PropagandaWide from "@/components/propaganda/propagandaWide/PropagandaWide";


export default function Home() {
  return (
    <div className="mx-auto max-w-[1224px] flex flex-col items-center justify-center">

      <PropagandaWide/>

      <main className="flex flex-col w-9/10">

        <Destaques/>

      </main>
    </div>
  );
}
