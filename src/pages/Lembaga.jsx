import { useState } from "react";
import data from "../data/strukturpemerintahan.json";
import { ChevronDown, Users } from "lucide-react";

const Section = ({ title, children }) => (
  <div className="bg-white rounded-3xl shadow-sm border p-6 space-y-4">
    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
      <Users className="text-blue-600" /> {title}
    </h2>
    {children}
  </div>
);

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 font-semibold text-gray-700 bg-gray-50"
      >
        {title}
        <ChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="p-4 space-y-2">{children}</div>}
    </div>
  );
};

export default function LembagaDesa() {
  const { bpd, lkd } = data;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto space-y-8">

        <Section title="Badan Permusyawaratan Desa (BPD)">
          <p className="text-sm text-gray-500">Periode {bpd.periode}</p>
          <ul className="grid md:grid-cols-2 gap-3">
            {bpd.anggota.map((a, i) => (
              <li key={i} className="bg-gray-100 rounded-xl p-3">
                <span className="font-semibold">{a.nama}</span> — {a.jabatan}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Lembaga Kemasyarakatan Desa">
          <Accordion title="LPMD">
            {Object.entries(lkd.lpmd).map(([jabatan, nama]) => (
              <p key={jabatan}><strong>{jabatan}:</strong> {nama}</p>
            ))}
          </Accordion>

          <Accordion title="PKK">
            <h4 className="font-semibold">Pengurus Inti</h4>
            {Object.entries(lkd.pkk.inti).map(([j, n]) => (
              <p key={j}><strong>{j}:</strong> {n}</p>
            ))}
            <h4 className="font-semibold pt-2">Pokja</h4>
            {Object.entries(lkd.pkk.pokja).map(([p, anggota]) => (
              <div key={p}>
                <p className="font-semibold">{p}</p>
                <ul className="list-disc pl-5">
                  {anggota.map((n, i) => <li key={i}>{n}</li>)}
                </ul>
              </div>
            ))}
          </Accordion>

          <Accordion title="Posyandu">
            <ul className="grid md:grid-cols-2 gap-2">
              {lkd.posyandu.anggota.map((n, i) => (
                <li key={i} className="bg-gray-100 rounded-lg p-2">{n}</li>
              ))}
            </ul>
          </Accordion>

          <Accordion title="LINMAS">
            <ul className="grid md:grid-cols-2 gap-2">
              {lkd.linmas.anggota.map((n, i) => (
                <li key={i} className="bg-gray-100 rounded-lg p-2">{n}</li>
              ))}
            </ul>
          </Accordion>

          <Accordion title="RT / RW">
            {Object.entries(lkd.rt_rw).map(([rw, list]) => (
              <div key={rw}>
                <p className="font-semibold">{rw}</p>
                <ul className="list-disc pl-5">
                  {list.map((n, i) => <li key={i}>{n}</li>)}
                </ul>
              </div>
            ))}
          </Accordion>
        </Section>
      </div>
    </div>
  );
}
