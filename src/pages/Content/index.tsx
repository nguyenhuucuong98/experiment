import { useTranslation } from "react-i18next"
import { ContentImg } from "../../parent/ImgFile"
import { Progress } from "antd"

const Content = () => {
  const { t } = useTranslation()

  return (
    <div className="">

    <div className="w-full  block " data-aos='fade-up-right'>
      <div className="flex flex-row gap-2 "  >
        <div className='w-full content-bg relative' style={{ backgroundImage: `url(${ContentImg.content}) `, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center",
        backgroundSize:'cover'
      }}

      >
        </div>

        <div className="w-full max-w-4xl pt-10 pb-20">
          <div className="flex flex-col gap-10 pb-10 w-full">
            <h3 className="text-4xl font-medium ">{t("content.title_1")}</h3>
            <div className="flex flex-row gap-4 w-3xl">
              <div>{t("content.text_1")}</div>
              <div>{t("content.text_2")}</div>
            </div>
          </div>
          <hr />
          <div>
            <div className="flex flex-col gap-4 pt-4 ">
              <h3 className="text-3xl font-medium uppercase pb-6">{t("content.title_1")}</h3>
              <div className="flex flex-row gap-4 w-3xl justify-around">
                <div className="flex justify-center flex-col items-center gap-6">
                  <Progress type="circle" status="exception" percent={75} format={(percent) => `${percent}`} />
                  <div className="text-2xl w-40 text-justify">{t("content.progress")}</div>
                </div>
                <div className="flex  flex-col items-center gap-6">
                  <Progress type="circle" status="exception" percent={75} format={(percent) => `${percent}`} />
                  <div className="text-2xl w-40 text-justify">{t("content.progress2")}</div>
                </div>
                <div className="flex justify-center flex-col items-center gap-6">
                  <Progress type="circle" status="exception" percent={75} format={(percent) => `${percent}`} />
                  <div className="text-2xl w-40 text-justify ">{t("content.progress3")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Content