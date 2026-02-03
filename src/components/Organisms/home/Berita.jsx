import beritaData from "../../../data/berita.json";

export default function Berita() {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-16">
      <h2 className="text-2xl font-bold mb-6">
        Berita & Pengumuman Terkini
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {beritaData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={item.gambar}
              alt={item.judul}
              className="rounded-t-xl h-40 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">
                {item.judul}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {item.tanggal}
              </p>

              <button className="mt-3 text-blue-600 font-medium hover:underline">
                Baca Selengkapnya →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
