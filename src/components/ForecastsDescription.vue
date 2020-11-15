<template>
    <section id="forecast-desc">
      <div class="col-md-6 offset-md-3">
        <p class="description">
          Here is a comparison of the weather in these cities:
        </p>
      </div>
    </section>
</template>

<script>
export default {
  name: "ForecastDescription",
}
</script>

<style scoped>
#forecast-desc {
  background-color: #f8f8f8;
  text-align: center;
  padding: 75px 20px;
}

.section-title {
  text-align: center;
  text-transform: uppercase;
}

li {
  font-family: neue-haas-grotesk-display, sans-serif;
  text-align: left;
  font-size: 1.3em;
}



</style>
