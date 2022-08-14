const Patientcheckout = () => {
  return (
    <body id="page-top">
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <ul
          class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {/* <!-- Sidebar - Brand --> */}
          <a
            class="sidebar-brand d-flex align-items-center justify-content-center"
            href="index.html"
          >
            <div class="sidebar-brand-icon rotate-n-15">
              <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">Patient Panel</div>
          </a>

          {/* <!-- Divider --> */}
          <hr class="sidebar-divider my-0" />

          {/* <!-- Nav Item - Dashboard --> */}
          <li class="nav-item">
            <a class="nav-link" href="index.html">
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
          </li>

          {/* <!-- Divider --> */}
          <hr class="sidebar-divider" />

          {/* <!-- Heading --> */}

          {/* <!-- Nav Item - Pages Collapse Menu --> */}
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href="#"
              data-toggle="collapse"
              data-target="#collapsePages"
              aria-expanded="true"
              aria-controls="collapsePages"
            >
              <i class="fas fa-fw fa-folder"></i>
              <span>Pages</span>
            </a>
            <div
              id="collapsePages"
              class="collapse"
              aria-labelledby="headingPages"
              data-parent="#accordionSidebar"
            >
              <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Login Screens:</h6>
                <a class="collapse-item" href="login.html">
                  Login
                </a>
                <a class="collapse-item" href="register.html">
                  Register
                </a>
                <a class="collapse-item" href="forgot-password.html">
                  Forgot Password
                </a>
                <div class="collapse-divider"></div>
                <h6 class="collapse-header">Other Pages:</h6>
                <a class="collapse-item" href="404.html">
                  404 Page
                </a>
                <a class="collapse-item" href="blank.html">
                  Blank Page
                </a>
              </div>
            </div>
          </li>

          {/* <!-- Nav Item - Charts --> */}
          <li class="nav-item">
            <a class="nav-link" href="charts.html">
              <i class="fas fa-fw fa-chart-area"></i>
              <span>History</span>
            </a>
          </li>

          {/* <!-- Nav Item - Tables --> */}
          <li class="nav-item active">
            <a class="nav-link" href="tables.html">
              <i class="fas fa-fw fa-table"></i>
              <span>Checkout</span>
            </a>
          </li>

          {/* <!-- Divider --> */}
          <hr class="sidebar-divider d-none d-md-block" />

          {/* <!-- Sidebar Toggler (Sidebar) --> */}
          <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
        </ul>
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" class="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              {/* <!-- Sidebar Toggle (Topbar) --> */}
              <form class="form-inline">
                <button
                  id="sidebarToggleTop"
                  class="btn btn-link d-md-none rounded-circle mr-3"
                >
                  <i class="fa fa-bars"></i>
                </button>
              </form>

              {/* <!-- Topbar Search --> */}
              <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="button">
                      <i class="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>

              {/* <!-- Topbar Navbar --> */}
              <ul class="navbar-nav ml-auto">
                {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                <li class="nav-item dropdown no-arrow d-sm-none">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="searchDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fas fa-search fa-fw"></i>
                  </a>
                  {/* <!-- Dropdown - Messages --> */}
                  <div
                    class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown"
                  >
                    <form class="form-inline mr-auto w-100 navbar-search">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control bg-light border-0 small"
                          placeholder="Search for..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div class="input-group-append">
                          <button class="btn btn-primary" type="button">
                            <i class="fas fa-search fa-sm"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>

                <div class="topbar-divider d-none d-sm-block"></div>

                {/* <!-- Nav Item - User Information --> */}
                <li class="nav-item dropdown no-arrow">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                      Douglas McGee
                    </span>
                    <img
                      class="img-profile rounded-circle"
                      src="img/undraw_profile.svg"
                    />
                  </a>
                  {/* <!-- Dropdown - User Information --> */}
                  <div
                    class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Profile
                    </a>
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                      Settings
                    </a>
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                      Activity Log
                    </a>
                    <div class="dropdown-divider"></div>
                    <a
                      class="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#logoutModal"
                    >
                      <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div class="container-fluid">
              <div class="py-5 text-center">
                <h2>Checkout form</h2>
              </div>
              <div class="row">
                <div class="col-md-4 order-md-2 mb-4">
                  <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted">Your cart</span>
                    <span class="badge badge-secondary badge-pill">3</span>
                  </h4>
                  <ul class="list-group mb-3 sticky-top">
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 class="my-0">Product name</h6>
                        <small class="text-muted">Brief description</small>
                      </div>
                      <span class="text-muted">$12</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 class="my-0">Second product</h6>
                        <small class="text-muted">Brief description</small>
                      </div>
                      <span class="text-muted">$8</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 class="my-0">Third item</h6>
                        <small class="text-muted">Brief description</small>
                      </div>
                      <span class="text-muted">$5</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between bg-light">
                      <div class="text-success">
                        <h6 class="my-0">Promo code</h6>
                        <small>EXAMPLECODE</small>
                      </div>
                      <span class="text-success">-$5</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                      <span>Total (USD)</span>
                      <strong>$20</strong>
                    </li>
                  </ul>
                  <form class="card p-2">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Promo code"
                      />
                      <div class="input-group-append">
                        <button type="submit" class="btn btn-secondary">
                          Redeem
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="col-md-8 order-md-1">
                  <h4 class="mb-3">Billing address</h4>
                  <form class="needs-validation" novalidate="">
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label for="firstName">First name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="firstName"
                          placeholder=""
                          value=""
                          required=""
                        />
                        <div class="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="lastName">Last name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="lastName"
                          placeholder=""
                          value=""
                          required=""
                        />
                        <div class="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="username">Username</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">@</span>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          id="username"
                          placeholder="Username"
                          required=""
                        />
                        <div class="invalid-feedback">
                          Your username is required.
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="email">
                        Email <span class="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="you@example.com"
                      />
                      <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="address">Address</label>
                      <input
                        type="text"
                        class="form-control"
                        id="address"
                        placeholder="1234 Main St"
                        required=""
                      />
                      <div class="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="address2">
                        Address 2<span class="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="address2"
                        placeholder="Apartment or suite"
                      />
                    </div>
                    <div class="row">
                      <div class="col-md-5 mb-3">
                        <label for="country">Country</label>
                        <select
                          class="custom-select d-block w-100"
                          id="country"
                          required=""
                        >
                          <option value="">Choose...</option>
                          <option>United States</option>
                        </select>
                        <div class="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>
                      <div class="col-md-4 mb-3">
                        <label for="state">State</label>
                        <select
                          class="custom-select d-block w-100"
                          id="state"
                          required=""
                        >
                          <option value="">Choose...</option>
                          <option>California</option>
                        </select>
                        <div class="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>
                      <div class="col-md-3 mb-3">
                        <label for="zip">Zip</label>
                        <input
                          type="text"
                          class="form-control"
                          id="zip"
                          placeholder=""
                          required=""
                        />
                        <div class="invalid-feedback">Zip code required.</div>
                      </div>
                    </div>
                    <hr class="mb-4" />
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="same-address"
                      />
                      <label class="custom-control-label" for="same-address">
                        Shipping address is the same as my billing address
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="save-info"
                      />
                      <label class="custom-control-label" for="save-info">
                        Save this information for next time
                      </label>
                    </div>
                    <hr class="mb-4" />
                    <h4 class="mb-3">Payment</h4>
                    <div class="d-block my-3">
                      <div class="custom-control custom-radio">
                        <input
                          id="credit"
                          name="paymentMethod"
                          type="radio"
                          class="custom-control-input"
                          checked=""
                          required=""
                        />
                        <label class="custom-control-label" for="credit">
                          Credit card
                        </label>
                      </div>
                      <div class="custom-control custom-radio">
                        <input
                          id="debit"
                          name="paymentMethod"
                          type="radio"
                          class="custom-control-input"
                          required=""
                        />
                        <label class="custom-control-label" for="debit">
                          Debit card
                        </label>
                      </div>
                      <div class="custom-control custom-radio">
                        <input
                          id="paypal"
                          name="paymentMethod"
                          type="radio"
                          class="custom-control-input"
                          required=""
                        />
                        <label class="custom-control-label" for="paypal">
                          PayPal
                        </label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label for="cc-name">Name on card</label>
                        <input
                          type="text"
                          class="form-control"
                          id="cc-name"
                          placeholder=""
                          required=""
                        />
                        <small class="text-muted">
                          Full name as displayed on card
                        </small>
                        <div class="invalid-feedback">
                          Name on card is required
                        </div>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="cc-number">Credit card number</label>
                        <input
                          type="text"
                          class="form-control"
                          id="cc-number"
                          placeholder=""
                          required=""
                        />
                        <div class="invalid-feedback">
                          Credit card number is required
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-3 mb-3">
                        <label for="cc-expiration">Expiration</label>
                        <input
                          type="text"
                          class="form-control"
                          id="cc-expiration"
                          placeholder=""
                          required=""
                        />
                        <div class="invalid-feedback">
                          Expiration date required
                        </div>
                      </div>
                      <div class="col-md-3 mb-3">
                        <label for="cc-cvv">CVV</label>
                        <input
                          type="text"
                          class="form-control"
                          id="cc-cvv"
                          placeholder=""
                          required=""
                        />
                        <div class="invalid-feedback">
                          Security code required
                        </div>
                      </div>
                    </div>
                    <hr class="mb-4" />
                    <button
                      class="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Continue to checkout
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}

          {/* <!-- Footer --> */}
          <footer class="sticky-footer bg-white">
            <div class="container my-auto">
              <div class="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2020</span>
              </div>
            </div>
          </footer>
          {/* <!-- End of Footer --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
      {/* <!-- End of Page Wrapper --> */}

      {/* <!-- Scroll to Top Button--> */}
      <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
      </a>
    </body>
  );
};

export default Patientcheckout;
