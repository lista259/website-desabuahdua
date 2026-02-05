import kantorDesa from "../../assets/kantor-desa.jpg";

export default function BannerCT() {
  return (
    <section
      className="relative h-[420px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${kantorDesa})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
        <div className="text-white max-w-xl">
          <h1 className="text-4xl font-bold leading-tight">
            Selamat Datang di <br />
            Website Resmi Desa Buahdua
          </h1>
        </div>
      </div>
    </section>
  );
}
