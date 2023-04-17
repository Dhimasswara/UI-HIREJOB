const SectionPage = ({ children, embedSection, sty }) => {
  return (
    <div className={`${embedSection}`} style={sty}>
      <div className="container">
        <div className='row'>
          <div className="col-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionPage