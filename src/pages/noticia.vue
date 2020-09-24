<template>
  <div>
    <div class="container">
      <div class="Chamada">
        <h1>Notícias sobre games</h1>
      </div>

      <div class="Noticia1">
        <div
          class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
          uk-grid
        >
          <div class="uk-card-media-left uk-cover-container">
            <img src="../assets/img/News/playstation-5.jpg" alt="Playstation 5" uk-cover>
            <canvas width="600" height="400"></canvas>
          </div>
          <div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">
                <b>PS5</b>
              </h3>
              <p>PS5 vai ter preços de R$ 4.500 e R$ 5.000 e chega ao Brasil dia 19 de novembro".."</p>
              <br>
            </div>
          </div>
        </div>
      </div>

      <div class="Noticia2">
        <div
          class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
          uk-grid
        >
          <div class="uk-card-media-left uk-cover-container imgNot">
            <img src="../assets/img/News/ps5xx.jpg" alt="Playstation 5" uk-cover>
            <canvas width="600" height="400"></canvas>
          </div>
          <div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">
                <b>PS5</b>
              </h3>
              <p>A Microsoft anunciou nesta segunda-feira (21) que o Xbox Series X vai ser vendido no Brasil pelo preço "..."</p>
            </div>
          </div>
        </div>
      </div>

      <div class="Noticia3">
        <div
          class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
          uk-grid
        >
          <div class="uk-card-media-left uk-cover-container imgNot">
            <img src="../assets/img/News/ps5xx.jpg" alt="Playstation 5" uk-cover>
            <canvas width="600" height="400"></canvas>
          </div>
          <div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">
                <b>PS5</b>
              </h3>
              <p>PS5 vai ter preços de R$ 4.500 e R$ 5.000 e chega ao Brasil dia 19 de novembro</p>
            </div>
          </div>
        </div>
      </div>

      <div class="Noticia4">
        <div
          class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
          uk-grid
        >
          <div class="uk-card-media-left uk-cover-container imgNot">
            <img src="../assets/img/News/ps5xx.jpg" alt="Playstation 5" uk-cover>
            <canvas width="600" height="400"></canvas>
          </div>
          <div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">
                <b>PS5</b>
              </h3>
              <p>PS5 vai ter preços de R$ 4.500 e R$ 5.000 e chega ao Brasil dia 19 de novembro</p>
            </div>
          </div>
        </div>
      </div>

      <div class="Noticia5">
        <div
          class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
          uk-grid
        >
          <div class="uk-card-media-left uk-cover-container imgNot">
            <img src="../assets/img/News/ps5xx.jpg" alt="Playstation 5" uk-cover>
            <canvas width="600" height="400"></canvas>
          </div>
          <div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">
                <b>PS5</b>
              </h3>
              <p>PS5 vai ter preços de R$ 4.500 e R$ 5.000 e chega ao Brasil dia 19 de novembro</p>
            </div>
          </div>
        </div>
      </div>

      <div class="Noticia6">
        <div
          class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
          uk-grid
        >
          <div class="uk-card-media-left uk-cover-container imgNot">
            <img src="../assets/img/News/ps5xx.jpg" alt="Playstation 5" uk-cover>
            <canvas width="600" height="400"></canvas>
          </div>
          <div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">
                <b>PS5</b>
              </h3>
              <p>PS5 vai ter preços de R$ 4.500 e R$ 5.000 e chega ao Brasil dia 19 de novembro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "noticia"
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto, 1fr);
}

.Chamada {
  grid-column: 1/5;
  grid-row: 1/1;
}

.Noticia1 {
  padding: 10px;
  grid-column: 1/3;
  grid-row: 2/2;
}

.Noticia1 Noticia2 img {
  height: 10px;
}

.imgNot {
  border: 1px solid black;
}

.Noticia2 {
  padding: 10px;
  grid-column: 3/5;
  grid-row: 2/2;
}

.Noticia3 {
  padding: 10px;
  grid-column: 1/3;
  grid-row: 3/3;
}

.Noticia4 {
  padding: 10px;
  grid-column: 3/5;
  grid-row: 3/3;
}

.Noticia5 {
  padding: 10px;
  grid-column: 1/3;
  grid-row: 4/4;
}

.Noticia6 {
  padding: 10px;
  grid-column: 3/5;
  grid-row: 4/4;
}

@media (max-width: 959px) {
  .Noticia1 {
    padding: 10px;
    grid-column: 1/5;
    grid-row: 2/2;
  }

  .Noticia2 {
    padding: 10px;
    grid-column: 1/5;
    grid-row: 3/3;
  }
  .Noticia3 {
    padding: 10px;
    grid-column: 1/5;
    grid-row: 4/4;
  }
  .Noticia4 {
    padding: 10px;
    grid-column: 1/5;
    grid-row: 5/5;
  }
  .Noticia5 {
    padding: 10px;
    grid-column: 1/5;
    grid-row: 6/6;
  }
  .Noticia6 {
    padding: 10px;
    grid-column: 1/5;
    grid-row: 7/7;
  }
}
</style>