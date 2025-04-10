import { FaMapLocationDot } from "react-icons/fa6"
import { MdOutlineMessage, MdOutlinePhone } from "react-icons/md"
import { SiGmail, SiZalo } from "react-icons/si"
import { TbDeviceLandlinePhone } from "react-icons/tb"
import { Branch } from "../parent/Branch"
import { useTranslation } from "react-i18next"

const Footer = () => {
    const {t} = useTranslation()
  return (
    <footer className=" bg-black text-white h-auto pt-2 pl-10 pr-10 pb-20 mt-10">
      <div className="flex justify-center ">
        <form action={''} className="flex items-center relative">
          <div className="text-lg pr-5">{t("footer.contact")}</div>
          <input type="text" placeholder={t("footer.input")} className="bg-white rounded-4xl outline-0 text-lg text-black p-4 pr-20 w-md" />
          <button type="button" className="bg-cyan-600 p-4 text-md rounded-4xl absolute right-1 cursor-pointer">{t("footer.button")}</button>
        </form>
      </div>
      <div className="grid grid-cols-3 mt-10">
        <div className="flex flex-col gap-15">
          <div className="">
            <div className="text-3xl mb-4">
              {Branch.company_1.name}
            </div>
            <div className="text-lg">
            {Branch.company_1.address}
            </div>
            <span>{Branch.company_1.contact}</span>
          </div>
          <div className="flex gap-10 text-5xl text-yellow-400">
            <MdOutlinePhone />
            <MdOutlineMessage />
            <SiZalo />
            <SiGmail />
          </div>
        </div>
        <div>
          <h2 className="text-3xl mb-4">{Branch.company_2.name}</h2>
          <div className="flex gap-2 items-center text-lg">
            <FaMapLocationDot />
            <span>{Branch.company_2.address}</span>
          </div>
          <div className="flex gap-2 items-center text-lg">
            <TbDeviceLandlinePhone />
            <span>{Branch.company_2.contact}</span>
          </div>
        </div>
        <div>
          <h2 className="text-3xl mb-4">{Branch.company_3.name}</h2>
          <div className="flex gap-2 items-center text-lg">
            <FaMapLocationDot />
            <span>{Branch.company_3.address}</span>
          </div>
          <div className="flex gap-2 items-center text-lg">
            <TbDeviceLandlinePhone />
            <span>{Branch.company_3.contact}</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer