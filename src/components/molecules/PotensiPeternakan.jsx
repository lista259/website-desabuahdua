import React from "react";
import potensiData from "../../data/potensi.json";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PeternakanSection = () => {

  // Ambil data Sapi untuk grafik
  const sapi = potensiData.peternakan
    .flatMap((kategori) => kategori.items)
    .find((item) => item.komoditas === "Sapi");

  const chartData = Object.entries(sapi.data).map(([tahun, jumlah]) => ({
    tahun,
    jumlah,
  }));

  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">
        Potensi Peternakan & Perikanan Desa Buahdua
      </h2>

      {/* ================= Grafik ================= */}
      <div className="bg-white p-4 rounded-lg shadow mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Tren Jumlah Sapi (ekor)
        </h3>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%" minHeight="300px">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="tahun" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="jumlah"
                fill="#d97706"
                name="Jumlah Ternak (ekor)"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ================= TABEL ================= */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-amber-600 text-white">
              <th className="px-4 py-3 text-left">Komoditas</th>
              <th className="px-4 py-3 text-center">2019</th>
              <th className="px-4 py-3 text-center">2020</th>
              <th className="px-4 py-3 text-center">2021</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {potensiData.peternakan.map((kategori, index) => (
              <React.Fragment key={index}>
                <tr className="bg-amber-100 font-bold">
                  <td colSpan="4" className="px-4 py-2 uppercase text-sm">
                    {index + 1}. {kategori.kategori}
                  </td>
                </tr>

                {kategori.items.map((item, i) => (
                  <tr key={i} className="border-b">
                    <td className="px-6 py-2">
                      - {item.komoditas}
                    </td>

                    {Object.values(item.data).map((value, idx) => (
                      <td key={idx} className="text-center">
                        {value} {item.satuan}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PeternakanSection;
