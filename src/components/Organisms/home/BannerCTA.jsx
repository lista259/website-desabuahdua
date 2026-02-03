export default function BannerCTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
      <div className="bg-blue-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow">
        <div className="flex items-center gap-4">
          <div className="bg-blue-600 text-white p-3 rounded-full">
            <i className="fa-brands fa-whatsapp text-2xl" />
          </div>
          <p className="text-gray-700 font-medium">
            Punya pertanyaan atau butuh bantuan cepat? <br />
            Hubungi kami melalui WhatsApp Bot!
          </p>
        </div>

        <a
          href="#"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Chat Sekarang via WhatsApp
        </a>
      </div>
    </section>
  );
}
