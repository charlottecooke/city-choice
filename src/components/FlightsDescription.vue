<template>
    <section id="flights-desc">
      <div class="col-md-6 offset-md-3">
        <p class="description">
          Here is a comparison of the cost of flights in these cities:
        </p>
        <a>(These are flights from LHR - is this incorrect?)</a>
      </div>
    </section>
</template>

<script>
export default {
  name: "FlightsDescription",
}
</script>

<style scoped>
#flights-desc {
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

  a {
    color: #d9bb9a !important;
    font-size: 20px;
  }

  a:hover {
    cursor: pointer;
  }

</style>