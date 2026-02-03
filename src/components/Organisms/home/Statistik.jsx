import statistikData from "../../../data/datastatistik.json";
export default function Statistik() {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 mb-20">
      <h2 className="text-2xl font-bold mb-6">
        Data Statistik
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {statistikData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow p-6 text-center"
          >
            <h3 className="text-2xl font-bold text-blue-600">
              {item.value}
            </h3>
            <p className="text-gray-600 mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
