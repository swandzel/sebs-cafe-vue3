<template>
  <section v-motion-fade class="about-us">
    <h1 class="h2-main">Poznaj naszą filozofię kawy</h1>
    <div class="about-us--container">
      <div class="about-us--photos about-us--photos-first">
        <img
          v-motion-pop-visible-once
          src="../../assets/images/coffee-plantation.jpg"
          alt="Plantacja kawy"
        />
      </div>
      <div class="about-us--about about-us--about-first">
        <p>
          Nie można iść na skróty, gdy chce się znaleźć najlepsze ziarna kawy.
          Dlatego, nasza kawowa podróż, rozpoczęta wiele lat temu, trwa po dziś
          dzień.
        </p>
        <p>
          Wie o tym też nasz Mistrz Kawy, urodzony odkrywca i doświadczony
          specjalista. Poświęcił zawodowe życie poszukując najbardziej
          postępowych farmerów uprawiających kawę w Ameryce Łacińskiej, Afryce
          Wschodniej i Azji Południowo-Wschodniej. Tych, którzy naprawdę
          rozumieją związek pomiędzy jakością ziarna i środowiskiem, w którym
          rośnie.
        </p>
        <p>
          Wspólnie z Rainforest Alliance staramy się zjednywać dla wartości
          zrównoważonego rozwoju, na bieżąco służąc radą i pomocą. Wszystko po
          to, by nasze ziarna zawsze miały powtarzalną jakość. Wprawdzie
          budowanie takich relacji angażuje sporo czasu i energii, ale jest to
          wysiłek, który warto podejmować.
        </p>
      </div>
    </div>
    <div class="about-us--container about-us--container-second">
      <div class="about-us--about about-us--about-second">
        <p>
          Nasza kawiarnia to miejsce spotkań pasjonatów kawy, którzy cenią sobie
          wysoką jakość i swobodną atmosferę.
        </p>
        <p>
          Zapraszamy codziennie na kawę, wypiekane na miejscu ciasta a także
          wyśmienite desery lodowe w okresie letnim.
        </p>
        <p>
          Do zobaczenia w Seb's Cafe, mieszczącej się przy ul. Kawowa 5 w
          Krakowie!
        </p>
        <p>
          Godziny otwarcia
          <br />
          Pon-Czw: 8 - 18
          <br />
          Pt-Ndz: 8 - 22
        </p>
      </div>
      <div class="about-us--photos about-us--photos-second">
        <img
          v-motion-slide-visible-once-left
          src="../../assets/images/inside-sebs.jpg"
          alt="Wnętrza Seb's Cafe"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import "./AboutUs.scss";
</script>
