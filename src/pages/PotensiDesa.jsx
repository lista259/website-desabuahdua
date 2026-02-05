import { useLocation } from "react-router-dom";
import PertanianSection from "../components/molecules/PotensiPertanian";
import PeternakanSection from "../components/molecules/PotensiPeternakan";
import BudayaSection from "../components/molecules/PotensiBudaya";

export default function PotensiDesa() {
  const location = useLocation();

  const renderContent = () => {
    if (location.pathname === "/potensi-desa/pertanian") {
      return <PertanianSection />;
    } else if (location.pathname === "/potensi-desa/peternakan") {
      return <PeternakanSection />;
    } else if (location.pathname === "/potensi-desa/budaya") {
      return <BudayaSection />;
    } else {
      // Default to showing both for /potensi-desa
      return (
        <>
          <PertanianSection />
          <PeternakanSection />
          <BudayaSection />
        </>
      );
    }
  };

  return <>{renderContent()}</>;
}
