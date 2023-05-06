<template>
  <div class="infoTestMoreBlock">
    <p class="infoText">
      Прохождение теста займет у вас не более <span>12 минут</span>, а его
      результаты вы сможете <span>использовать всю жизнь.</span>
    </p>
    <p class="infoTextBlock">
      Профессиональная интерпретация и детально
      <b>проработанные рекомендации </b>позволят вам качественно
      <b>изменить все аспекты своей жизни:</b> от финансового до любовного.
    </p>
    <RouterLink to="/test" class="navLink">
      <button class="buttonMain infoButton">
        <p class="buttonMainText infoButtonText uppercase">пpойти тест</p>
      </button></RouterLink
    >
    <p class="bottomText">&#169; 2019</p>
  </div>
</template>
<style scoped>
.infoTestMoreBlock {
  min-height: 50vh;
  background: url("../components/icons/rain_bk2.png");
  color: #ffffff;
  font-family: "Merriweather";
}
.infoText {
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.05em;
  padding: 56px 14px 51px 14px;
}
.infoTextBlock {
  background: rgba(243, 243, 242, 0.8);
  border-radius: 20px;
  margin: 0px 12px 33px 12px;
  padding: 30px 15px;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.05em;
  color: #181818;
}
.infoButton {
  border: 1px solid #ffffff;
  border-radius: 50px;
  background: transparent;
  display: block;
  margin: 0 auto;
  margin-bottom: 63px;
}
.infoButtonText {
  color: white;
}
.bottomText {
  font-family: "Roboto";
  font-size: 10px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.5);
  padding-bottom: 13px;
}
</style>
