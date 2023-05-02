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
  padding-top: 200px;
  animation: spin 2s linear infinite;
}
.spinner .spinner-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg) translate(0, -50px);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: green;
}

.spinner .spinner-circle:nth-child(1) {
  width: 3px;
  height: 3px;
  transform: translate(-50%, -50%) rotate(0deg) translate(0, -50px);
}

.spinner .spinner-circle:nth-child(2) {
  width: 5px;
  height: 5px;
  transform: translate(-50%, -50%) rotate(32.7deg) translate(0, -50px);
}

.spinner .spinner-circle:nth-child(3) {
  width: 7px;
  height: 7px;
  transform: translate(-50%, -50%) rotate(65.4deg) translate(0, -50px);
}

.spinner .spinner-circle:nth-child(4) {
  width: 9px;
  height: 9px;
  transform: translate(-50%, -50%) rotate(98.1deg) translate(0, -50px);
}

.spinner .spinner-circle:nth-child(5) {
  width: 11px;
  height: 11px;
  transform: translate(-50%, -50%) rotate(130.8deg) translate(0, -50px);
}

.spinner .spinner-circle:nth-child(6) {
  width: 13px;
  height: 13px;
  transform: translate(-50%, -50%) rotate(163.5deg) translate(0, -50px);
}

.spinner .spinner-circle:nth-child(7) {
  width: 15px;
  height: 15px;
  transform: translate(-50%, -50%) rotate(196.2deg) translate(0, -50px);
}

.spinner .spinner-circle:nth-child(8) {
  width: 13px;
  height: 13px;
  transform: translate(-50%, -50%) rotate(228.9deg) translate(0, -50px);
}

.spinner .spinner-circle:nth-child(9) {
  width: 11px;
  height: 11px;
  transform: translate(-50%, -50%) rotate(261.6deg) translate(0, -50px);
}

.spinner .spinner-circle:nth-child(10) {
  width: 9px;
  height: 9px;
  transform: translate(-50%, -50%) rotate(294.3deg) translate(0, -50px);
}

.spinner .spinner-circle:nth-child(11) {
  width: 7px;
  height: 7px;
  transform: translate(-50%, -50%) rotate(327deg) translate(0, -50px);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
