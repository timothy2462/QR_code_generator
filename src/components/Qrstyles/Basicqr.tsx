import { Fragment, useRef, useState } from "react";
import QRCode from "qrcode.react";
import { Link } from "react-router-dom";
import Email from "mdi-react/EmailOutlineIcon";
import Github from "mdi-react/GithubIcon";
import Twitter from "mdi-react/TwitterIcon";
import Phone from "mdi-react/PhoneIcon";
import LinkedIn from "mdi-react/LinkedinIcon";

export default function QrCode() {
  const qrRef = useRef<HTMLDivElement | null>(null);
  const [url, setUrl] = useState("");

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
      bgColor="white"
      fgColor="black"
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
              className="border-b border-b-black/50 border-white  pb-3 py-2 px-3 bg-transparent focus:outline-none focus:border-white transition ease-in-out text-sm duration-700 focus:-translate-y-1 focus:scale-105 w-[270px] m-auto mb-6"
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
            href="#"
            className="inline cursor-pointer text-green-500 "
          >
            Timothy Akobundu
          </a>
        </div>
        <div className={`text-black flex mt-[-4px]`}>
          <a
            className=" hover:text-green-500 duration-700"
            href="#"
          >
            <LinkedIn size={22} />
          </a>
          <a
            className="px-4 hover:text-green-500 duration-700"
            href="#"
          >
            <Email size={22} />
          </a>
          <a
            className=" hover:text-green-500 duration-700"
            href=""
          >
            <Phone size={22} />
          </a>
          <a
            className="px-4 hover:text-green-500 duration-700"
            href="#"
          >
            <Github size={22} />
          </a>
          <a
            className=" hover:text-green-500 duration-700"
            href="#"
          >
            <Twitter size={22} />
          </a>
        </div>
      </footer>
    </Fragment>
  );
}
