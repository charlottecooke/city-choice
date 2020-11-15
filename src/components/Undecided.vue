<template>
    <section id="undecided">

      <div class="col-md-6 offset-md-3 columns">
        <p class="description">
          Still undecided?
          Click through to find out more info about each of these places:
        </p>
        <ul id="links-to-more-info">
          <li v-for="place in places" :key="place.name">
            <a :href="`${place.link}`">{{ place.name }}</a>
          </li>
        </ul>
      </div>
    </section>
</template>

<script>
export default {
  name: "Undecided",
  data() {
    return {
      places: [
      { name: 'Budapest', link: 'https://www.budapestinfo.hu/' },
      { name: 'Madrid', link: 'https://www.esmadrid.com/en' },
      { name: 'Amsterdam', link: 'https://www.iamsterdam.com/en/see-and-do' }
      ],
    }
  },
}
</script>

<style scoped>
#undecided {
  text-align: center;
  padding: 75px 20px;
}

.section-title {
  text-align: center;
  text-transform: uppercase;
}

.columns {
  display: flex;
  padding: 5px;
  justify-content: space-between;
}

li {
  font-family: neue-haas-grotesk-display, sans-serif;
  text-align: left;
  font-size: 1.3em;
}

p {
  margin-top: 0;
  text-align: left;
  margin-bottom: 1rem;
  width: 250px;
}

ul {
  margin-top: 20px;
  list-style-type: none;
}

  a {
    color: #d9bb9a !important;
  }

  a:hover {
    cursor: pointer;
  }

</style>
