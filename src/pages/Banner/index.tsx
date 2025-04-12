import boottomImg from '../../assets/content/bottom-cover.png'
const Banner = () => {
  return (

    <div className='section banner-section dark banner-bg'>
      <div className='bg section-bg fill bg-fill bg-loaded'>
        <div className="section-bg-overlay absolute fill"></div>
      </div>
      <div className='section-content relative'>
        <div className='row'>
          <div className='text-8xl'>COMPREHENSIVE LABORATORY SERVICES</div>
          <div>Ensuring the delivery of reliable, validated data,
            and therefore safer product to market</div>
          <button>Go</button>
        </div>
        <div className="img has-hover bottom-cover x md-x lg-x y md-y lg-y">
          <div className="img-inner dark">
            <img src={boottomImg} alt="bottom" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Banner