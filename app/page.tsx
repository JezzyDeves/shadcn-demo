import ProductTabs from "@/components/ProductTabs";
import TopNavbar from "@/components/TopNavbar";

export default function Home() {
  return (
    <div>
      <TopNavbar />
      <div className="mt-12">
        <p className="text-center font-black text-6xl bg-clip-text bg-gradient-to-b from-white from-60% to-slate-900 text-transparent">
          Choose Your Plan
        </p>
      </div>
      <ProductTabs />
    </div>
  );
}
