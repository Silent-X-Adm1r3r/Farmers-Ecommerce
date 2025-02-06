export default function ProductCard() {
    return <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div className="card p-3 rounded">
      <img
        alt="Organic Basmati Rice"
        class="card-img-top mx-auto"
        src="/images/products/basmati.jpg"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          <a href="#" role="link">
            Organic Basmati Rice - 10kg
          </a>
        </h5>
        <div className="ratings mt-auto">
          <div className="rating-outer">
            <div className="rating-inner"></div>
          </div>
        </div>
        <p className="card-text">$45.5</p>
        
        <a href="#" id="view_btn" className="btn btn-block">
          View Details
        </a>
      </div>
    </div>
  </div>
}