<template>
  <div class="infoTestBlock">
    <p class="infoText">
      Также по результатам теста <b class="uppercase">вы получите </b>подробные
      <b class="uppercase">советы</b> по определению наиболее перспективной
      <b class="uppercase">для вашего типа </b><b>интеллекта </b
      ><b class="uppercase">сферы деятельности</b>, которая принесет вам
      скорейший финансовый результат.
    </p>
    <img src="../components/icons/325-01.png" alt="brain" class="infoImg" />
    <RouterLink to="/test" class="navLink">
      <button class="buttonMain infoButton">
        <p class="buttonMainText uppercase">пpойти тест</p>
      </button></RouterLink
    >
  </div>
</template>
<style scoped>
.infoText {
  font-family: "PT Serif";
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #272727;
  padding: 38px 11px;
  min-height: 30vh;
}
.infoImg {
  display: block;
  margin: 0 auto;
}
.infoButton {
  display: block;
  margin: 0 auto;
  margin-bottom: 40px;
}
</style>
