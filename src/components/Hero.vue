<template>
  <div class="hero">
    <h2 class="heroTitle uppercase">Пройдите точный и быстрый</h2>
    <h1 class="heroTitleMain uppercase">
      <span
        >тест на <br />
        определение IQ
      </span>
    </h1>
    <img src="../components/icons/rain_bk3.png" class="brain" alt="brain" />
    <RouterLink to="/test" class="navLink">
      <button class="buttonMain">
        <p class="buttonMainText uppercase">ПРойти тест</p>
      </button></RouterLink
    >
    <p class="heroText uppercase">
      <span>и получите рекомендации по развитию своего интеллекта </span>
      <br />
      и улучшению финансового благосостояния и личной жизни
    </p>
    <RouterLink to="/about" class="navLink">
      <button class="heroButton uppercase">
        <img src="../components/icons/Group3.png" alt="arrow" class="arrow" />
        подробнее
      </button>
    </RouterLink>
  </div>
</template>
<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("../components/icons/rain_bk2.png");
  text-align: center;
}
.heroTitle {
  font-family: "PT Serif";
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.05em;
  padding-top: 73px;
  color: white;
}
.heroTitleMain {
  font-family: "Yeseva One";
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 0.03em;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-top: 20px;
}
.brain {
  width: 40%;
  padding-top: 20px;
  padding-bottom: 20px;
}

.heroText {
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.05em;
  color: white;
  padding-bottom: 11px;
}

.heroButton {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 11px;
  color: white;
  font-family: "PT Serif";
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 11px;
  letter-spacing: 0.05em;
}

.arrow {
  width: 16px;
  height: 16px;
  margin-bottom: 5px;
}
</style>
