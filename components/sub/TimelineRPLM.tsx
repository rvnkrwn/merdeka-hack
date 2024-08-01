const TimelineRPLM = () => {
  return (
    <section className="text-white">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
              <h3 className="text-3xl font-semibold">Timeline Web Development</h3>
              <span className="text-sm font-bold tracking-wider uppercase text-gray-400">
                Jadwal Kegiatan
              </span>
              <br />
              <br />
              <a className="border p-2 mt-6 rounded-md" href="https://ittp.id/merdekahack-webdev-guidebook" target="_blank">Guided Book</a>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                <h3 className="text-xl font-semibold tracking-wide">
                  Pendaftaran Peserta
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  2-10 Agustus 2024
                </time>
                <p className="mt-3 text-gray-300">
                Pendaftaran untuk bidang lomba Web Development dibuka mulai tanggal 2 Agustus hingga 10 Agustus 2024
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                <h3 className="text-xl font-semibold tracking-wide">
                  Pengerjaan
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  11-14 Agustus 2024
                </time>
                <p className="mt-3 text-gray-300">
                  Peserta akan mengerjakan dan menyelesaikan website mereka
                  dalam periode ini.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                <h3 className="text-xl font-semibold tracking-wide">
                  Pengumpulan Website
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  15 Agustus 2024
                </time>
                <p className="mt-3 text-gray-300">
                  Tanggal akhir untuk mengumpulkan website yang telah dikerjakan
                  oleh peserta.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                <h3 className="text-xl font-semibold tracking-wide">
                  Pengumuman Finalis Top 3
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  17 Agustus 2024
                </time>
                <p className="mt-3 text-gray-300">
                  Pengumuman finalis yang lolos ke tahap Top 3 akan dilakukan
                  dalam periode ini.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                <h3 className="text-xl font-semibold tracking-wide">
                  Penjurian dan Pengumuman Pemenang
                </h3>
                <time className="text-xs tracking-wide uppercase text-gray-400">
                  18 Agustus 2024
                </time>
                <p className="mt-3 text-gray-300">
                  Juri akan menilai hasil karya dan pemenang akan diumumkan pada
                  tanggal ini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineRPLM;
