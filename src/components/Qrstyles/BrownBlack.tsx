import { Fragment, useRef, useState } from "react";
import QRCode from "qrcode.react";
import { Link } from "react-router-dom";
import Email from "mdi-react/EmailOutlineIcon";
import Github from "mdi-react/GithubIcon";
import Twitter from "mdi-react/TwitterIcon";
import Phone from "mdi-react/PhoneIcon";
import LinkedIn from "mdi-react/LinkedinIcon";
import ButterflyOutline from "../../assets/butterfly-outline.svg";
// import ButterflyOutline from "mdi-react/ButterflyOutlineIcon"

export default function BrownBlack() {
  const qrRef = useRef<HTMLDivElement | null>(null);
  const [url, setUrl] = useState("");
  const icon = ButterflyOutline;

  const downloadQRCode = (evt: React.FormEvent) => {
    evt.preventDefault();

    const canvas = qrRef.current?.querySelector("canvas");
    const image = canvas?.toDataURL("image/png");
    if (image) {
      const anchor = document.createElement("a");
      anchor.href = image;
      anchor.download = "i-qr-demo.png";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }

    setUrl("");
  };

  const qrCode = (
    <QRCode
      id="qrCodeId"
      className="rounded-xl m-auto mb-8"
      size={270}
      value={url}
      bgColor="brown"
      fgColor="black"
      level="H"
      imageSettings={{
        src: icon,
        width: 300 * 0.1,
        height: 300 * 0.1,
        excavate: true,
      }}
    />
  );

  return (
    <Fragment>
      <header
        className={`font-semibold text-xl font-bodyFont shadow-lg duration-500 bg-[#e3e3e3] p-4 px-6 md:px-10 flex justify-between border-b border-b-white/30 top-0 fixed w-full`}
      >
        <Link to="/Qrcode">&lt;&lt; Back</Link>
      </header>

      <div className={`h-[100vh] font-bodyFont bg-[#e3e3e3]`}>
        <div
          ref={qrRef}
          className={`bg-{#e3e3e3} absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] `}
        >
          {qrCode}

          <form
            onSubmit={downloadQRCode}
            className="flex flex-col
                                        
                                        "
          >
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="border-b border-b-black/50 border-white  pb-3 py-2 px-3 bg-transparent focus:outline-none focus:border-white transition ease-in-out duration-700 focus:-translate-y-1 focus:scale-105 w-[270px] m-auto text-sm mb-6"
            />

            <button
              type="submit"
              className="bg-green-500 p-4 w-[200px] hover:bg-green-600 hover:duration-700 shadow-lg rounded-xl flex justify-center m-auto text-sm"
            >
              Download QR Code
            </button>
          </form>
        </div>
      </div>
      <footer
        className={`flex justify-between bg-[#e3e3e3] border-t border-t-black/20 duration-700 text-[10px] p-6 px-6 md:px-10`}
      >
        <div className="flex">
          <p className={`pr-2 text-black`}>&copy;2024</p>
          <a
            href="https://github.com/theCephas"
            className="inline cursor-pointer text-green-500 "
          >
            Osho Iseoluwa
          </a>
        </div>
        <div className={`text-black flex mt-[-4px]`}>
          <a
            className=" hover:text-green-500 duration-700"
            href="https://www.linkedin.com/in/osho-iseoluwa"
          >
            <LinkedIn size={22} />
          </a>
          <a
            className="px-4 hover:text-green-500 duration-700"
            href="mailto:oshoiseoluwa@gmail.com"
          >
            <Email size={22} />
          </a>
          <a
            className=" hover:text-green-500 duration-700"
            href="tel:+2348110470908"
          >
            <Phone size={22} />
          </a>
          <a
            className="px-4 hover:text-green-500 duration-700"
            href="https://github.com/theCephas"
          >
            <Github size={22} />
          </a>
          <a
            className=" hover:text-green-500 duration-700"
            href="https://twitter.com/OshoIseoluwa"
          >
            <Twitter size={22} />
          </a>
        </div>
      </footer>
    </Fragment>
  );
}
