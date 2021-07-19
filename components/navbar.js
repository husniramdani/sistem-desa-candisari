import Link from "next/link";

export default function Navbar({ title }) {  
  return (
    <>
    <header className="z-10 top-0 px-5 py-3 flex justify-between items-center md:px-16 md:py-5 xl:px-24">
      <div className="flex items-center">
        <img
          className="h-9 w-9"
          src="images/logo-desa.png"
          alt="logo cekinkuy"
        />
        <p className="font-semibold text-lg text-white ml-2 mb-0">Candisari</p>
      </div>
      { title === "Cekinkuy" ?
        // <Link
        //   href="/credit-score"
        // >
        //   <span className="bg-blue-700 text-white p-2 rounded hidden sm:block cursor-pointer">
        //     Cek Skor Anda
        //   </span>
        // </Link>
        null
        :
        <Link href="/">
          <span className="text-white cursor-pointer">
            Back
          </span>
        </Link>

      }
    </header>
    </>
  );
}
