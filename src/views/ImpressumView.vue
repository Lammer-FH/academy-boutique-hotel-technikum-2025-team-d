<script setup>
import { BContainer, BRow, BCol, BCard } from 'bootstrap-vue-3'
import DefaultLayout from "@/components/base/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
  <div class="impressum-page">
    <b-container class="py-5">
      <b-row>
        <b-col lg="10" xl="8" class="mx-auto">
          <!-- Header -->
          <div class="text-center mb-5">
            <h1 class="display-4 mb-3">Impressum</h1>
            <p class="text-muted">Rechtliche Informationen gemäß § 5 TMG</p>
          </div>

          <!-- Hauptangaben -->
          <b-card class="mb-4 shadow-sm">
            <h3 class="h5 mb-3 text-primary">Angaben gemäß § 5 TMG</h3>
            <p class="mb-2"><strong>Boutique Hotel Technikum GmbH</strong></p>
            <p class="mb-2">Höchstädtplatz 6<br>1200 Wien<br>Österreich</p>
            <p class="mb-0"><strong>Vertreten durch:</strong><br>Geschäftsführer: Mag. Thomas Huber</p>
          </b-card>

          <!-- Kontakt -->
          <b-card class="mb-4 shadow-sm">
            <h3 class="h5 mb-3 text-primary">Kontakt</h3>
            <p class="mb-2"><strong>Telefon:</strong> +43 1 333 40 77</p>
            <p class="mb-2"><strong>Telefax:</strong> +43 1 333 40 77-20</p>
            <p class="mb-2"><strong>E-Mail:</strong> <a href="mailto:info@hotel-technikum.at">info@hotel-technikum.at</a></p>
            <p class="mb-0"><strong>Website:</strong> www.hotel-technikum.at</p>
          </b-card>

          <!-- Registereintrag -->
          <b-card class="mb-4 shadow-sm">
            <h3 class="h5 mb-3 text-primary">Registereintrag</h3>
            <p class="mb-2">Eingetragen im Firmenbuch beim Handelsgericht Wien</p>
            <p class="mb-2"><strong>Firmenbuchnummer:</strong> FN 123456a</p>
            <p class="mb-0"><strong>UID-Nummer:</strong> ATU12345678</p>
          </b-card>

          <!-- Aufsichtsbehörde -->
          <b-card class="mb-4 shadow-sm">
            <h3 class="h5 mb-3 text-primary">Aufsichtsbehörde</h3>
            <p class="mb-2">Magistrat der Stadt Wien</p>
            <p class="mb-2">Magistratisches Bezirksamt für den 20. Bezirk</p>
            <p class="mb-2"><strong>Berufsrechtliche Regelungen:</strong></p>
            <p class="mb-2">Gewerbeordnung: <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener">www.ris.bka.gv.at</a></p>
            <p class="mb-2"><strong>Gewerbeberechtigung:</strong> Hotellerie und Gastgewerbe</p>
            <p class="mb-0"><strong>Verleihende Behörde:</strong> Magistratisches Bezirksamt für den 20. Bezirk, Wien</p>
          </b-card>

          <!-- Verantwortlich für Inhalt -->
          <b-card class="mb-4 shadow-sm">
            <h3 class="h5 mb-3 text-primary">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <p class="mb-0">Mag. Thomas Huber<br>Höchstädtplatz 6<br>1200 Wien</p>
          </b-card>

          <!-- Haftungsausschluss -->
          <b-card class="mb-4 shadow-sm">
            <h3 class="h5 mb-3 text-primary">Haftungsausschluss</h3>

            <h4 class="h6 mb-2 fw-bold">Haftung für Inhalte</h4>
            <p class="mb-3">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich.
            </p>

            <h4 class="h6 mb-2 fw-bold">Haftung für Links</h4>
            <p class="mb-3">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich.
            </p>

            <h4 class="h6 mb-2 fw-bold">Urheberrecht</h4>
            <p class="mb-0">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede
              Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </b-card>

          <!-- Datenschutz -->
          <b-card class="mb-4 shadow-sm">
            <h3 class="h5 mb-3 text-primary">Datenschutz</h3>
            <p class="mb-3">
              Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich.
              Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder
              E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.
              Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
            </p>
            <p class="mb-0">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation
              per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem
              Zugriff durch Dritte ist nicht möglich.
            </p>
          </b-card>

          <!-- Online-Streitbeilegung -->
          <b-card class="mb-4 shadow-sm">
            <h3 class="h5 mb-3 text-primary">Online-Streitbeilegung</h3>
            <p class="mb-2">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            </p>
            <p class="mb-2">
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p class="mb-0">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          </b-card>

          <!-- Streitschlichtung -->
          <b-card class="mb-4 shadow-sm">
            <h3 class="h5 mb-3 text-primary">Streitschlichtung</h3>
            <p class="mb-0">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </b-card>

          <!-- Footer Info -->
          <div class="text-center mt-5 py-4 border-top">
            <p class="text-muted mb-2"><strong>Stand:</strong> Oktober 2025</p>
            <div class="alert alert-warning" role="alert">
              <strong>⚠️ Hinweis:</strong> Dies ist ein <strong>fiktives Impressum</strong>.
              Die Firmenbuchnummer, UID-Nummer und der Geschäftsführer sind erfunden!
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
  </DefaultLayout>
</template>

<style scoped>
.impressum-page {
  background-color: #f7f6f0; /* Helles Beige */
  color: #2d4739; /* Dunkelgrün */
  min-height: calc(100vh - 200px);
}

/* Haupttitel */
.display-4 {
  color: #2d4739;
  font-weight: 600;
}

/* Sektionstitel in Cards */
.text-primary {
  color: #d4af37 !important; /* Boutique-Gold */
}

/* Card Layout */
.card {
  border: none;
  background-color: #ffffff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
}

.card-body {
  padding: 1.5rem;
}

/* Überschriften in Cards */
h3.h5 {
  border-bottom: 2px solid #d4af37;
  padding-bottom: 0.5rem;
}

/* Links */
a {
  color: #d4af37;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #2d4739;
  text-decoration: underline;
}

/* Hinweis (fiktives Impressum) */
.alert-warning {
  background-color: #fefae0;
  border-left: 5px solid #d4af37;
  color: #2d4739;
  font-weight: 500;
  border-radius: 0.25rem;
}

/* Kleiner Text (z.B. „Stand: Oktober 2025“) */
.text-muted {
  color: #6e7f75 !important;
}
</style>