<script>
import {BRow, BCol} from "bootstrap-vue-3";
import MapComponent from "@/components/base/MapComponent.vue";
export default {
  name: "DirectionsComponent",
  components: {MapComponent, BRow, BCol}
}
</script>

<template>
  <b-container class="directions-container">
    <h2 class="page-title">Anreise</h2>

    <b-row class="mb-5">
      <b-col cols="12">
        <div class="hotel-info">
          <h5 class="hotel-name">Boutique Hotel Technikum</h5>
          <p class="address">
            <strong>Adresse:</strong><br />
            Höchstädtplatz 6<br />
            1200 Wien, Österreich
          </p>
          <p class="description">
            Das Boutique Hotel Technikum befindet sich in verkehrsgünstiger Lage
            im 20. Wiener Gemeindebezirk Brigittenau und ist sowohl mit öffentlichen
            Verkehrsmitteln als auch mit dem PKW gut erreichbar.
          </p>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" lg="7" class="travel-info">
        <div class="travel-section">
          <h2>Mit dem Zug</h2>
          <p>
            Vom Wien Hauptbahnhof gelangen Sie besonders schnell zum Hotel.
            Nehmen Sie die U-Bahn-Linie U1 in Richtung Leopoldau und fahren Sie
            bis zur Station Praterstern. Dort steigen Sie in die U6 Richtung
            Floridsdorf um und fahren bis zur Station Dresdner Straße. Von dieser
            Station sind es nur wenige Gehminuten bis zum Hotel. Die Fahrtzeit
            beträgt insgesamt etwa 20 bis 25 Minuten.
          </p>
        </div>

        <div class="travel-section">
          <h2>Vom Flughafen Wien Schwechat</h2>
          <p>
            Vom Flughafen Wien-Schwechat erreichen Sie das Hotel am einfachsten
            mit öffentlichen Verkehrsmitteln. Nehmen Sie am Flughafen die
            Schnellbahnlinie S7 in Richtung Floridsdorf und fahren Sie bis zur
            Station Wien Praterstern. Dort steigen Sie in die U-Bahn-Linie U6
            in Richtung Floridsdorf um und fahren bis zur Station Dresdner Straße.
            Von dort erreichen Sie das Hotel nach einem etwa fünfminütigen Fußweg.
            Alternativ können Sie vom Flughafen den City Airport Train bis Wien Mitte
            nehmen und anschließend mit der U4 bis Spittelau sowie der U6 bis
            Dresdner Straße weiterfahren. Die gesamte Fahrzeit beträgt je nach
            Verbindung etwa 40 bis 50 Minuten.
          </p>
        </div>

        <div class="travel-section">
          <h2>Mit dem PKW</h2>
          <p>
            Bei Anreise mit dem PKW erreichen Sie das Hotel über die Donauufer
            Autobahn A22. Nehmen Sie die Abfahrt Handelskai und folgen Sie der
            Beschilderung in Richtung Zentrum beziehungsweise Brigittenau.
            Anschließend biegen Sie auf den Höchstädtplatz ab, an dem sich das
            Hotel mit der Hausnummer 6 befindet. In der Umgebung stehen öffentliche
            Parkplätze zur Verfügung, wobei die örtlichen Kurzparkzonen und
            Parkregelungen zu beachten sind.
          </p>
        </div>
      </b-col>

      <b-col cols="12" lg="5">
        <div class="map-container">
          <MapComponent/>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.directions-container {
  padding: 3rem 1rem;
  max-width: 1200px;
}

.page-title {
  color: #2d4739;
  font-weight: 600;
  text-align: left;
}

.hotel-info {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
}

.hotel-name {
  color: #2d4739;
  font-weight: 600;
  margin-bottom: 1rem;
}

.address {
  margin-bottom: 1rem;
}

.description {
  margin-bottom: 0;
  color: #666;
}

.travel-info {
  padding-right: 2rem;

}

.travel-section {
  margin-bottom: 2.5rem;
  text-align: left;
}

.travel-section h2 {
  color: #2d4739;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e9ecef;
}

.travel-section p {
  color: #555;
  line-height: 1.8;
  margin-bottom: 0;
}

.map-container {
  position: sticky;
  top: 2rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

strong {
  color: #2d4739;
}

@media (max-width: 991px) {
  .directions-container {
    padding: 2rem 1rem;
  }

  .page-title {
    font-size: 2rem;
    text-align: center;
  }

  .travel-info {
    padding-right: 0;
    margin-bottom: 2rem;
  }

  .map-container {
    position: relative;
    top: 0;
  }
}
</style>