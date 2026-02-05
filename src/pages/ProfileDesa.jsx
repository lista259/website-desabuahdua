import CardDesa from "../components/Organisms/CardDesa";
import StrukturPemerintahan from "../components/Organisms/StrukturPemerintahan";
import VisiMisi from "../components/Organisms/VisiMisi";
import PotensiBudaya from "../components/molecules/PotensiBudaya";

export default function ProfileDesa() {
  return (
    <>
     <CardDesa />
     <VisiMisi />
     <StrukturPemerintahan />
    </>
  );
}