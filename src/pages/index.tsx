import Banner from "./Banner"
import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"
import International from "./Introduction"

const Pages = () => {
  return (
    <>
        <Header />
        <Banner />
        <div className="pb-30"> 

        <International />
        <Content />
        </div>
        <Footer />
    </>
  )
}

export default Pages