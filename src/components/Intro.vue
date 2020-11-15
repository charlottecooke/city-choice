<template>
  <section id="intro">
    <div class="col-md-6 offset-md-3 intro-text">
      <h1 class="section-title">
        Hey Jamie!
      </h1>
      <p class="description">
        I heard you are trying to choose between Budapest, Amsterdam and Madrid
      </p>
      <a>(Not right?)</a>
    </div>

  </section>
</template>

<script>
  export default {
    name: "Intro"
  }
</script>

<style scoped>
  #intro {
    padding: 75px 20px;
    text-align: center;
  }

  .section-title {
    text-align: center;
    font-size: 5.5rem;
    font-family: garamond;
  }

  a {
    color: #d9bb9a !important;
    font-size: 20px;

  }

  a:hover {
    cursor: pointer;
  }
</style>
