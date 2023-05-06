<script>
export default {
  data() {
    return {
      minutes: 10,
      seconds: 0,
      timer: null,
      class: "resultTimer",
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.minutes === 0 && this.seconds === 0) {
        clearInterval(this.timer);
        alert("Час вийшов!");
      } else if (this.seconds === 0) {
        this.minutes--;
        this.seconds = 59;
      } else {
        this.seconds--;
      }
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<template>
  <div class="result">
    <h2 class="resultTitle">Ваш результат рассчитан:</h2>
    <p class="resultText">
      <span class="underline">Вы относитесь к 3%</span> респондентов, чей
      уровень интеллекта более чем на 15 пунктов отличается от среднего в
      большую или меньшую сторону!
    </p>
    <h3 class="resultTitle1">Скорее получите свой результат!</h3>
    <p class="textBlock">
      В целях защиты персональных данных результат теста, их подробная
      интерпретация и рекомендации доступны в виде голосового сообщения по
      звонку с вашего мобильного телефона
    </p>
    <p class="resultText1">Звоните скорее, запись доступна всего</p>
    <div class="resultTimer">
      <p>{{ minutes }}:{{ seconds < 10 ? "0" : "" }}{{ seconds }} минут</p>
    </div>
    <button class="resultButton">
      <img src="../components/icons/call.png" />
      <p class="resultTextButton">
        Позвонить и прослушать<br />
        результат
      </p>
    </button>
    <p class="resultFooter">
      TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN
      FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI,
    </p>
  </div>
</template>
<style scoped>
.result {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url("../components/icons/rain_bk2.png");
  font-family: "PT Serif";
  color: #ffffff;
  position: relative;
}
.resultTitle {
  padding-top: 28px;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.resultTitle1 {
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #3bde7c;
  padding-bottom: 12px;
}
.resultText {
  padding: 22px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
}
.resultText1 {
  font-size: 11px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #3bde7c;
}
.underline {
  color: white;
  text-decoration-line: underline;
}
.textBlock {
  background: #1c2741;
  border-radius: 6px;
  margin-left: 30px;
  margin-right: 30px;
  padding: 12px;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 8px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.resultTimer {
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #3bde7c;
}
.resultButton {
  width: 85%;
  height: 92px;
  background: #eb1b00;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  margin: 10px auto;
}
.resultTextButton {
  margin-left: 20px;
  font-family: "Roboto";
  font-weight: 900;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.05em;
}
.resultFooter {
  font-family: "Roboto";
  font-size: 7px;
  line-height: 9px;
  text-align: center;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  width: 95%;
  margin: 0 auto;
  position: absolute;
  bottom: 0px;
  overflow: hidden;
  line-height: 1.2em;
  height: 2.4em;
}
</style>
