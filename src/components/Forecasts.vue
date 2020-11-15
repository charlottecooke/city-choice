<template>
  <div class="container">
    <!-- <h3>Weather:</h3> -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Temperature (°C)</th>
          <th scope="col">Clouds (%)</th>
          <th scope="col">Humidity (%)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="forecast in forecasts" v-bind:key="forecast.id">
            <th scope="row">{{forecast.name}}</th>
            <td>{{forecast.main.temp}}</td>
            <td>{{forecast.clouds.all}}</td>
            <td>{{forecast.main.humidity}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Forecasts',
    data() {
      return {
        forecasts: null,
      };
    },
    created: function() {
      axios
        .get('http://api.openweathermap.org/data/2.5/group?id=3054643,2759794,3117735&appid=d7c9c6475336d42ce392541415fd3895&units=metric')
        .then(res => {
            this.forecasts = res.data.list;
        });
    }
  }
</script>

<style>

  @media (min-width: 300px) {
    .container {
      padding-right: 20px;
      font-size: 15px;
      padding-left: 0px;
      margin-right: 0px;
      margin-left: auto;

    }
  }

    @media (min-width: 570px) {
    .container {
      width: auto;
      font-size: 20px;

    }
  }

  h3 {
    margin-bottom: 5%;
  }
</style>


