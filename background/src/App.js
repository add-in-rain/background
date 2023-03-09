import './App.css';
import logo from './logo.png'

function App() {
  return (
    <div className="App">
      <header>
      <nav>
        <h1 className ="logo">
          <a href="./index.html">
            <div className ='logo-img'></div>
          </a>
        </h1>

        <h2 className="visually-hidden">메뉴</h2>
        <ul className="gnb-list">
          <li className="gnb-item">
            <a href="./menu1.html">menu1</a>
          </li>
          <li className="gnb-item">
            <a href="./menu2.html">menu2</a>
          </li>
          <li className="gnb-item">
            <a href="./menu3.html">menu3</a>
          </li>
        </ul>
      </nav>
      </header>

      <main>
        <div className="main-wrapper">
        <section className="background">
          <div className="front-txt">
            <h2 className="front-title">Lorem ipsum dolor sit.</h2>
            <p className="front-contant">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, delectus inventore veritatis cupiditate vel consequatur saepe,
              consequuntur, quibusdam ab velit adipisci vitae quidem maiores laboriosam exercitationem nisi aspernatur nesciunt sit.
            </p>
            <button className="front-btn" type="button" onClick={() => alert('안녕하세요')}>버튼</button>
          </div>
        </section>
        
        <section className="top">
          <div className="second-txt">
              <h2>Lorem ipsum dolor sit.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, delectus inventore veritatis cupiditate vel consequatur saepe,
                consequuntur, quibusdam ab velit adipisci vitae quidem maiores laboriosam exercitationem nisi aspernatur nesciunt sit.
              </p>
          </div>
        </section>

        <section className="post-box">
          <div className="post-card">
            <h2>Lorem ipsum dolor sit.</h2>
              <p className="post-card-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, delectus inventore veritatis cupiditate vel consequatur saepe,
                consequuntur, quibusdam ab velit adipisci vitae quidem maiores laboriosam exercitationem nisi aspernatur nesciunt sit.
              </p>
          </div>

          <div className="post-card">
            <h2>Lorem ipsum dolor sit.</h2>
              <p className="post-card-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, delectus inventore veritatis cupiditate vel consequatur saepe,
                consequuntur, quibusdam ab velit adipisci vitae quidem maiores laboriosam exercitationem nisi aspernatur nesciunt sit.
              </p>
          </div>

          <div className="post-card">
            <h2>Lorem ipsum dolor sit.</h2>
              <p className="post-card-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, delectus inventore veritatis cupiditate vel consequatur saepe,
                consequuntur, quibusdam ab velit adipisci vitae quidem maiores laboriosam exercitationem nisi aspernatur nesciunt sit.
              </p>
          </div>
        </section>
        </div>
    </main>

    <footer>
      <div class="global-footer">
        <h3>Contact</h3>
        <ul class="footer-list">
          <li class="footer-item">
            <a href="mailto:hih8752@gmail.com">메일</a>
          </li>
          <li class="footer-item">
            <a href="tel:01038628757">전화</a>
          </li>
          <li class="footer-item">
            <a href="http://youtube.com">유튜브</a>
          </li>
        </ul>
      </div>
    </footer>
    </div>
 
  );
}

export default App;
