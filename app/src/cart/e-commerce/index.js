import React from 'react';
import './index.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="index.html">Simple Ecommerce</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
            <ul className="navbar-nav m-auto">
              <li className="nav-item m-auto">
                <a className="nav-link" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="category.html">Categories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="product.html">Product</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="contact.html">Cart <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <div className="input-group input-group-sm">
                <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search..." />
                <div className="input-group-append">
                  <button type="button" className="btn btn-secondary btn-number">
                    <i className="fa fa-search" />
                  </button>
                </div>
              </div>
              <a className="btn btn-success btn-sm ml-3" href="cart.html">
                <i class="fa fa-shopping-cart"></i> Cart
                <span class="badge badge-light">3</span>
              </a>
            </form>
          </div>
        </div>
      </nav>
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">E-COMMERCE CART</h1>
        </div>
      </section>
      <div className="container mb-4">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"> </th>
                    <th scope="col">Product</th>
                    <th scope="col">Available</th>
                    <th scope="col" className="text-center">Quantity</th>
                    <th scope="col" className="text-right">Price</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                    <td>Product Name Dada</td>
                    <td>In stock</td>
                    <td><input className="form-control" type="text" defaultValue={1} /></td>
                    <td className="text-right">124,90 €</td>
                    <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash" /> </button> </td>
                  </tr>
                  <tr>
                    <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                    <td>Product Name Toto</td>
                    <td>In stock</td>
                    <td><input className="form-control" type="text" defaultValue={1} /></td>
                    <td className="text-right">33,90 €</td>
                    <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash" /> </button> </td>
                  </tr>
                  <tr>
                    <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                    <td>Product Name Titi</td>
                    <td>In stock</td>
                    <td><input className="form-control" type="text" defaultValue={1} /></td>
                    <td className="text-right">70,00 €</td>
                    <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash" /> </button> </td>
                  </tr>
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td>Sub-Total</td>
                    <td className="text-right">255,90 €</td>
                  </tr>
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td>Shipping</td>
                    <td className="text-right">6,90 €</td>
                  </tr>
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td><strong>Total</strong></td>
                    <td className="text-right"><strong>346,90 €</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col mb-2">
            <div className="row">
              <div className="col-sm-12  col-md-6">
                <button className="btn btn-block btn-light">Continue Shopping</button>
              </div>
              <div className="col-sm-12 col-md-6 text-right">
                <button className="btn btn-lg btn-block btn-success text-uppercase">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3">
              <h5>About</h5>
              <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
              <p className="mb-0">
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
          </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
              <h5>Informations</h5>
              <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
              <ul className="list-unstyled">
                <li><a href>Link 1</a></li>
                <li><a href>Link 2</a></li>
                <li><a href>Link 3</a></li>
                <li><a href>Link 4</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
              <h5>Others links</h5>
              <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
              <ul className="list-unstyled">
                <li><a href>Link 1</a></li>
                <li><a href>Link 2</a></li>
                <li><a href>Link 3</a></li>
                <li><a href>Link 4</a></li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3">
              <h5>Contact</h5>
              <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
              <ul className="list-unstyled">
                <li><i className="fa fa-home mr-2" /> My company</li>
                <li><i className="fa fa-envelope mr-2" /> email@example.com</li>
                <li><i className="fa fa-phone mr-2" /> + 33 12 14 15 16</li>
                <li><i className="fa fa-print mr-2" /> + 33 12 14 15 16</li>
              </ul>
            </div>
            <div className="col-12 copyright mt-3">
              <p className="float-left">
                <a href="#">Back to top</a>
              </p>
              <p className="text-right text-muted">created with <i className="fa fa-heart" /> by <a href="https://t-php.fr/43-theme-ecommerce-bootstrap-4.html"><i>t-php</i></a> | <span>v. 1.0</span></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
