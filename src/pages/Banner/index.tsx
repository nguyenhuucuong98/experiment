import { useTranslation } from 'react-i18next'
import { ImgFile } from '../../parent/ImgFile'

const Banner = () => {
  const {t} = useTranslation()
  return (
    <div className='w-auto '>
      <div className='relative'>
        <div>
          <img src={ImgFile.banner_1} alt="banner-1" width='100%' />
          <div className='absolute top-40  text-white w-2xl left-50 backdrop-blur-2xl p-5 rounded-2xl'>
            <h4 className='text-4xl'>{t("banner.title")}</h4>
            <br/>
              <p className='text-2xl'>{t("banner.descript")}</p>
          </div>
        </div>
        <div className='absolute bottom-[-100px] right-56 '>
          <img src={ImgFile.banner_2} alt="banner-2" className='rounded-2xl w-96' />
        </div>
      </div>
      <div className='w-6xl mr-auto ml-auto'>
        <div className='text-4xl mt-2 text-color'>{t("banner.company")}</div>
        <div className='text-balance text-color'>{t("banner.describe")}</div>
      </div>
    </div>
  )
}

export default Banner