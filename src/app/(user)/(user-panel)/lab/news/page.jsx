import React from 'react'

const page = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="container-full">
          <section className="content">
            <div className="card bg-primary-light">
              <div className="card-header">
                <h4 className="card-title">News</h4>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="row g-0 align-items-center">
                    <div className="col-md-4">
                      <img src="/assets/images/150x100.png" className="card-img-1" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title fw-600">Understanding TDS on Other Payments (Hindi & English)</h5>
                        <p className="card-text text-gray-600">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text text-gray-600"><small className="text-muted">Last updated 3 mins ago</small></p>
                      </div>

                      <div className='like-reply-btn'>
                        <button href="#" className='url-btn'>
                        <i className="fa-solid fa-share-nodes"></i>
                        </button>
                        <button href="#" className='url-btn'>
                        <i className="fa-solid fa-thumbs-up"></i>
                        </button>
                        <button href="#" className='url-btn'>
                        <i className="fa-solid fa-share"></i>
                        </button>
                      </div>
                    </div>
                    
                  </div>
                </div>

                <div className="card">
                  <div className="row g-0 align-items-center">
                    <div className="col-md-4">
                      <img src="/assets/images/150x100.png" className="card-img-1" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title fw-600">Understanding TDS on Other Payments (Hindi & English)</h5>
                        <p className="card-text text-gray-600">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text text-gray-600"><small className="text-muted">Last updated 3 mins ago</small></p>
                      </div>

                      <div className='like-reply-btn'>
                        <button href="#" className='url-btn'>
                        <i className="fa-solid fa-share-nodes"></i>
                        </button>
                        <button href="#" className='url-btn'>
                        <i className="fa-solid fa-thumbs-up"></i>
                        </button>
                        <button href="#" className='url-btn'>
                        <i className="fa-solid fa-share"></i>
                        </button>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default page