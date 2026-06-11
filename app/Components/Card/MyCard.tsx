import Image from "next/image";

const MyCard = () => {
  return (
    <div className="w-[320px] md:w-[360px] rounded-[2rem] overflow-hidden bg-[#111827] border border-white/10 shadow-2xl">
      
      {/* TOP */}
      <div className="px-8 py-10 flex flex-col items-center gap-6">
        
        {/* IMAGE */}
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[var(--secondary)] shadow-[0_0_30px_rgba(167,139,250,0.35)]">
          <div className="w-full h-full bg-gray-300">
            <Image
              src="/profile1.jpg"
              alt="Profile Picture"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>
        </div>

        {/* NAME */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Muhammad Hanif Ibrahim
          </h1>

          <div className="w-16 h-1 bg-[var(--primary)] rounded-full mx-auto my-4"></div>

          <h2 className="uppercase tracking-[0.3em] text-sm text-gray-400">
            Web Developer
          </h2>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bg-black/30 border-t border-white/10 px-8 py-5">
        <div className="flex justify-center gap-6 text-sm text-gray-300">
          <a
            href="#"
            className="hover:text-[var(--secondary)] transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="hover:text-[var(--secondary)] transition-colors"
          >
            Github
          </a>

          <a
            href="#"
            className="hover:text-[var(--secondary)] transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyCard;