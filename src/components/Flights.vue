<template>
  <div class="container">
    <!-- <h3>Flight Prices:</h3> -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Minimum Price (£)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(flight, index) in flights" v-bind:key="flight.QuoteId">
            <th scope="row">{{places[index].Name}}</th>
            <td>{{flight.MinPrice}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
  import axios from 'axios';

  export default {
    name: 'Flights',
    data() {
      return {
        flights: null,
        places: null,
      };
    },
    created: function() {

      const params =    {   params: { inboundpartialdate: '2020-12-12'},
            headers: {
            'x-rapidapi-key': 'ef40233addmshee177f7958da565p1b0161jsnb08e5923f72e',
            'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
            }
        };

      axios.all([
        axios.get('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/NL/EUR/en-US/LHR-sky/BUD-sky/2020-12-12', params),
        axios.get('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/NL/EUR/en-US/LHR-sky/AMS-sky/2020-12-12', params),
        axios.get('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/NL/EUR/en-US/LHR-sky/MAD-sky/2020-12-12', params)
      ])
        .then(axios.spread((budapestRes, madridRes, amsterdamRes) => {
            this.places = budapestRes.data.Places.concat(madridRes.data.Places).concat(amsterdamRes.data.Places).filter(place => place.Name !== 'London Heathrow');
            this.flights = budapestRes.data.Quotes.concat(madridRes.data.Quotes).concat(amsterdamRes.data.Quotes);
        }));

    }
  }
</script>

<style>
  h3 {
    margin-bottom: 5%;
  }

  table {
    font-family: futura-pt, sans-serif;
    font-weight: 400;
    font-style: normal;
    border-collapse: collapse;
    width: 100%;
    border-radius: 15px;
    overflow:hidden;
    margin-left: 3rem;
    margin-right: 3rem;
    margin-bottom: 10vh;
    margin-top: 5vh;
    box-shadow: 0px 0px 10px rgba(114, 114, 113, 0.5);
    border-radius: 15px;

  }


  @media (max-width: 570px) {
    .container {
      font-size: 15px;
      padding-right: 20px;

      padding-left: 0px;
      margin-right: 0px;
      margin-left: auto;

    }
  }

  @media (max-width: 730px) {
    .container {
      width: auto;
      font-size: 20px;

    }
  }


</style>
