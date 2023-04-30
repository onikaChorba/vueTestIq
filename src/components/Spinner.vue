<template>
  <div class="spinner">
    <div class="spinner-circle"></div>
    <div class="spinner-circle"></div>
    <div class="spinner-circle"></div>
    <div class="spinner-circle"></div>
    <div class="spinner-circle"></div>
    <div class="spinner-circle"></div>
    <div class="spinner-circle"></div>
    <div class="spinner-circle"></div>
    <div class="spinner-circle"></div>
    <div class="spinner-circle"></div>
    <div class="spinner-circle"></div>
  </div>
</template>
<style scoped>
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}

.spinner-circle {
  background: green;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 0 3px;
  animation: spinner-animation 1s ease-in-out infinite;
}

.spinner-circle:nth-child(1) {
  width: 3px;
  height: 3px;
  animation-duration: 1.1s;
}

.spinner-circle:nth-child(2) {
  width: 5px;
  height: 5px;
  animation-duration: 1.2s;
}

.spinner-circle:nth-child(3) {
  width: 7px;
  height: 7px;
  animation-duration: 1.3s;
}

.spinner-circle:nth-child(4) {
  width: 9px;
  height: 9px;
  animation-duration: 1.4s;
}

.spinner-circle:nth-child(5) {
  width: 11px;
  height: 11px;
  animation-duration: 1.5s;
}

.spinner-circle:nth-child(6) {
  width: 13px;
  height: 13px;
  animation-duration: 1.6s;
}

.spinner-circle:nth-child(7) {
  width: 15px;
  height: 15px;
  animation-duration: 1.7s;
}

.spinner-circle:nth-child(8) {
  width: 13px;
  height: 13px;
  animation-duration: 1.8s;
}

.spinner-circle:nth-child(9) {
  width: 11px;
  height: 11px;
  animation-duration: 1.9s;
}

.spinner-circle:nth-child(10) {
  width: 9px;
  height: 9px;
  animation-duration: 2s;
}

.spinner-circle:nth-child(11) {
  width: 7px;
  height: 7px;
  animation-duration: 2.1s;
}

@keyframes spinner-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
