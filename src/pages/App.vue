<template>
  <div>
    <Nav />
    <Intro />
    <Photos />
    <ForecastsDescription />
    <Forecasts />
    <FlightsDescription />
    <Flights />
    <Summary />
    <Undecided />
  </div>
</template>

<script>
import Flights from "../components/Flights";
import FlightsDescription from "../components/FlightsDescription";
import Forecasts from "../components/Forecasts";
import ForecastsDescription from "../components/ForecastsDescription";
import Intro from "../components/Intro";
import Nav from "../components/Nav";
import Summary from "../components/Summary";
import Undecided from "../components/Undecided";
import Photos from "../components/Photos";


export default {
    name: 'App',
  components: {
    Flights,
    FlightsDescription,
    Forecasts,
    ForecastsDescription,
    Intro,
    Nav,
    Summary,
    Undecided,
    Photos
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 34px;
}

</style>