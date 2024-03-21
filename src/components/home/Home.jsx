import React from 'react'
import "./home.css"

      window.addEventListener('mouseover', initLandbot, { once: true });
      window.addEventListener('touchstart', initLandbot, { once: true });
      var myLandbot;
      function initLandbot() {
        if (!myLandbot) {
          var s = document.createElement('script');s.type = 'text/javascript';s.async = true;
          s.addEventListener('load', function() {
            var myLandbot = new Landbot.Livechat({
              configUrl: 'https://storage.googleapis.com/landbot.site/v3/H-2164207-UQ51GMH38BJ8CPPI/index.json',
            });
          });
          s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
          var x = document.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
        }
      }

const Home = () => {
  return (
    <div>
    <section class="py-5 text -center container">
    <div class="jumbotron d-flex align-items-center justify-content-center flex-column flex-md-row">
        <div class="text-md-start">
            <h1 class="display-4 fw-bold">¡Cotiza rápido, con estilo personalizado y online!</h1>
            <p class="lead p-2">Cotibot es la solución a la hora de cotizar la remodelación de tu vivienda en obra gris desde casa y en segundos. Se adapta a tu presupuesto y ofrece dos catálogos de diseño imperdibles. ¿Te animas a probarlo?</p>
            <button class="btn btn-outline-dark btn-lg rounded-pill"><a href='https://landbot.site/v3/H-2164207-UQ51GMH38BJ8CPPI/index.html'>¡Quiero cotizar!</a></button>
        </div>
        <img src="../src/assets/large-14.jpg" alt="Italian Trulli" width="500" height="400" class="ms-md-3 mt-3 mt-md-0 p-2 rounded-end-5"></img>
    </div>
</section>

<div class="d-flex tittle-catalog">
<h2 class="float-md-start mb-0 fw-bold p-4">Catalogo</h2>
</div>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center"> 
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Free</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Pro</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$15<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-bg-primary border-primary">
            <h4 class="my-0 fw-normal">Enterprise</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$29<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home