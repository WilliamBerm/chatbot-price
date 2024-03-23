import React from 'react'
import "./home.css"

      const Home = () => {
        const initLandbot = () => {
          if (!window.myLandbot) {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.addEventListener('load', function() {
              window.myLandbot = new Landbot.Popup({
                configUrl: 'https://storage.googleapis.com/landbot.site/v3/H-2164207-UQ51GMH38BJ8CPPI/index.json',
              });
            });
            s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
          } else {
            window.myLandbot.open(); // Si Landbot ya está inicializado, abrirlo directamente
          }
        };
      
        return (
          <div>
          <section class="py-5 text -center container">
          <div class="jumbotron d-flex align-items-center justify-content-center flex-column flex-md-row">
              <div class="text-md-start">
                  <h1 class="display-4 fw-bold">¡Cotiza rápido, con estilo personalizado y online!</h1>
                  <p class="lead p-2">Nuestro innovador sistema de chat te permite obtener presupuestos personalizados y detallados para renovar cualquier espacio interior de tu hogar u oficina de manera rápida y conveniente. ¡Transforma tus espacios interiores con facilidad y sin complicaciones</p>
                  <button className="btn btn-outline-dark btn-lg rounded-pill" onClick={initLandbot}>¡Quiero cotizar!</button>
              </div>
              <img src="src/assets/large-14.jpg" alt="Italian Trulli" width="400" height="500" class="ms-md-3 mt-3 mt-md-0 p-2 rounded-end-5"></img>
          </div>
      </section>
    <div class="d-flex tittle-catalog">
    <h2 class="float-md-start mb-0 fw-bold p-4">Catalogo</h2>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="src/assets/large-15.jpg" class="card-img-top" alt="Italian Trulli" width="200" height="310"/>
      <div class="card-body">
        <h5 class="card-title">Cillum veniam</h5>
        <p class="card-text">Cillum proident ex anim qui occaecat id minim labore officia sint nulla consequat exercitation consectetur. Non elit dolor dolor consectetur.</p>
        <button type="button" class="btn btn-danger rounded-pill">Quiero ver</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="src/assets/large-16.jpg" class="card-img-top" alt="Italian Trulli" width="200" height="310"/>
      <div class="card-body">
        <h5 class="card-title">Sint eiusmod</h5>
        <p class="card-text">Ipsum consectetur nulla proident dolor eu aliquip commodo et occaecat eiusmod. Consectetur nisi minim aliquip pariatur aliquip.</p>
        <button type="button" class="btn btn-danger rounded-pill">Quiero ver</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="src/assets/large-17.jpg" class="card-img-top" alt="Italian Trulli" width="200" height="310"/>
      <div class="card-body">
        <h5 class="card-title">Exercitation sunt</h5>
        <p class="card-text">Laboris mollit culpa excepteur tempor dolor commodo sunt dolor. Aute ea exercitation pariatur ullamco velit eiusmod consectetur labore est veniam.</p>
        <button type="button" class="btn btn-danger rounded-pill">Quiero ver</button>
      </div>
    </div>
  </div>
</div>
        </div>
      )
    }
    
export default Home