import DesktopHome from "./components/DesktopHome";
import MobileHome from "./components/MobileHome";
import AdultGate from "./components/AdultGate";

export default function Home() {
  return (
    <AdultGate>
      <div className="hidden md:block">
        <DesktopHome />
      </div>

      <div className="block md:hidden">
        <MobileHome />
      </div>
    </AdultGate>
  );
}
