
import Footer from "@/components/footer/footer";
import PostSearch from "@/components/postagens/postSearch/PostSearch";


export default function News() {
  return (
    <div className="flex flex-col gap-y-20 w-full items-center">
      <main className="flex flex-col max-w-[1136px] w-full gap-8 py-10">
        
        <div className="flex flex-col w-full items-start">
          <PostSearch />
        </div>

        <div className="stroke-gray-100 border-b border-t border-gray-100 w-full">
        </div>

        <div className="flex flex-col w-full items-start">
          <PostSearch />
        </div>

        <div className="stroke-gray-100 border-b border-t border-gray-100 w-full">
        </div>

        <div className="flex flex-col w-full items-start">
          <PostSearch />
        </div>

      </main>
      <Footer />
    </div>
  );
}
