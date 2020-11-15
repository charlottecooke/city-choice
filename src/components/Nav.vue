<template>
  <nav class="navbar navbar-light navbar-1 white">
    <!-- Navbar brand -->
    <a class="navbar-brand" href="#"></a>

    <!-- Collapse button -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent15"
      aria-controls="navbarSupportedContent15"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Collapsible content -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent15">
      <!-- Links -->
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <div class="nav-link" @click="goTo(localePath('/'))">Home <span class="sr-only">(current)</span></div>
        </li>
        <li class="nav-item">
          <div class="nav-link" @click.prevent="scrollTo('#forecast-desc')">Weather</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" @click.prevent="scrollTo('#flights-desc')">Flight Prices</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" @click.prevent="scrollTo('#summary')">Summary</div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { smoothScrollToElement } from "../assets/js/helpers";

export default {
  name: "Nav",
  methods: {
    scrollTo(hash) {
      const duration = 500;
      smoothScrollToElement(hash, duration);
      setTimeout(() => {
        location.hash = hash;
      }, duration);
    },
    goTo(url) {
      window.location.href = url;
    },
  },
};
</script>

<style scoped>
.navbar.navbar-1 .navbar-toggler-icon {
  background-image: url("https://mdbootstrap.com/img/svg/hamburger6.svg?color=000");
}

.navbar {
  background-color: #ebb663 !important;
  text-transform: uppercase;
  padding: 10px;
  font-size: 0.75em;
  font-weight: 100;
}

.nav-link:hover {
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center bottom;
}

.nav-link {
  padding: 0;
  color: #fff !important;
  text-decoration: none;
}

.navbar-nav {
  padding: 0 15px;
  align-items: center;
  justify-content: center;
}

.nav-logo-eclipse {
  max-width: 30px;
}

.navbar a {
  padding-bottom: 5px;
}
</style>
