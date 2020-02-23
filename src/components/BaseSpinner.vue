<template>
  <div class="lds-dual-ring">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'BaseSpinner'
}
</script>

<style>
.lds-dual-ring {
  display: inline-block;
  text-align: center;
  margin: 0 auto;

}

.lds-dual-ring::after {
  content: " ";
  display: block;
  width: 80px;
  height: 80px;
  margin: 10px auto;
  border-radius: 50%;
  border: 8px solid #3252e5;
  border-color: #3252e5 transparent #3252e5 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
