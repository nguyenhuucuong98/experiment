import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImgFile } from "../parent/ImgFile";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { MenuItems } from "../parent/MenuItems";



const Header = () => {
    const { i18n } = useTranslation();
    const [offset, setOffset] = useState(0);
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }
    const [swidch, setSwich] = useState(currentTheme === 'dark')


    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    const Shadow = document.getElementById('header_shadow')
    if (offset < 80) {
        Shadow?.classList.remove('header-box-shadow')
    } else {
        Shadow?.classList.add('header-box-shadow')
    }

    const handelChangeDrakLight = (e: boolean) => {
        if (e) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark')
            setSwich(true)
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light')
            setSwich(false)
        }
    }

    const handleChange = (e: any) => {
        i18n.changeLanguage(e.target.value)
    }



    return (
        <div className='w-full  size-14 flex items-center bg-transparent text-color fixed top-0 z-50 ' id="header_shadow">
            <div className='w-6xl mr-auto ml-auto block '>
                <div className='flex justify-between content-center'>
                    <div className="w-[100px]"><img src={ImgFile.Logo} alt="logo" /></div>
                    <div className="flex justify-between">
                        <ul className="flex justify-between gap-4 uppercase text-white menu-list">
                            {
                                MenuItems.map(value => {
                                    return (
                                        <Link to='/' key={value.key} >
                                            <li className="">
                                                {value.label}
                                            </li>
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="flex gap-3 ">
                        <select onChange={handleChange} className="outline-0">
                            <option value={'vi'}>Tiếng việt</option>
                            <option value={'en'}>English</option>
                            <option value={'cn'}>简体中文</option>
                        </select>
                        <label className="switch relative cursor-pointer">
                            <input type="checkbox" checked={swidch} onChange={() => handelChangeDrakLight(!swidch)} />
                            <span className="slider round"></span>
                            <div className="absolute top-1.5 left-1.5 ">
                                <MdOutlineLightMode />
                            </div>
                            <div className="absolute top-1.5 right-1.5">
                                <MdOutlineNightlight />
                            </div>
                        </label>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header