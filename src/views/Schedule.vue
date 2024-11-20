<!-- src/views/Schedule.vue -->
<template>
  <!--<h1 class="text-2xl font-bold text-center">{{ $t('schedule.title') }}</h1>-->
  <div class="mt-8 space-y-6 text-center">
    <h1 class="text-2xl font-bold">{{ $t('schedule.subTitle') }}</h1>
  </div>

  <div class="mt-8 space-y-6 schedule-container">
    <section v-for="(day, index) in schedule" :key="index" class="day-section">
      <h2 class="day-title">{{ day.date }}</h2>

      <div v-for="event in day.events" :key="event.time" class="event">
        <ul>
          <li v-for="session in event.sessions" :key="session.time" class="session-item">
            <strong>{{ session.time }}</strong> - {{ session.description }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Session {
  time: string;
  description: string;
}

interface Event {
  time: string;
  location: string;
  sessions: Session[];
}

interface Day {
  date: string;
  events: Event[];
}


export default defineComponent({
  name: 'Schedule',
  data() {
    return {
      schedule: [
        {
          date: "November 25 (Monday)",
          events: [
            {
              time: "9:30 - 10:00",
              sessions: [
                {
                  time: "9:30 - 10:00",
                  description: "Registration"
                }
              ]
            },
            {
              time: "10:00 - 10:30",
              sessions: [
                {
                  time: "10:00 - 10:30",
                  description: "Hui Sun 孙惠 / Magnetar emergence in a peculiar GRB 230307A from a compact star merger"
                }
              ]
            },
            {
              time: "10:30 - 11:00",
              sessions: [
                {
                  time: "10:30 - 11:00",
                  description: "文韬 / A universal energy relation between synchrotron and synchrotron self-Compton radiation in GRBs and blazars"
                }
              ]
            },
            {
              time: "11:00 - 11:30",
              sessions: [
                {
                  time: "11:00 - 11:30",
                  description: "Coffee Break / Poster Session"
                }
              ]
            },
            {
              time: "11:30 - 12:00",
              sessions: [
                {
                  time: "11:30 - 12:00",
                  description: "Xikai Shan / Gravitational lensing wave effect in strongly lensed gravitational wave"
                }
              ]
            },
            {
              time: "12:00 - 12:30",
              sessions: [
                {
                  time: "12:00 - 12:30",
                  description: "Chan Park / Lateral Stress of Electromagnetic Waves Induced by Gravitational Waves"
                }
              ]
            },
            {
              time: "12:30 - 14:00",
              sessions: [
                {
                  time: "12:30 - 14:00",
                  description: "Lunch and Discussion Session"
                }
              ]
            },
            {
              time: "14:00 - 14:30",
              sessions: [
                {
                  time: "14:00 - 14:30",
                  description: "Darshan Kumar / Study of Dark Matter Halo Profiles in the Milky Way and Andromeda Galaxies"
                }
              ]
            },
            {
              time: "14:30 - 15:00",
              sessions: [
                {
                  time: "14:30 - 15:00",
                  description: "Joao Antonio Silveira do Amarante / Studying the Milky Way with the GASTRO Simulations and Blue Horizontal Branch Stars"
                }
              ]
            },
            {
              time: "15:00 - 15:30",
              sessions: [
                {
                  time: "15:00 - 15:30",
                  description: "Coffee Break / Poster Session"
                }
              ]
            },
            {
              time: "15:30 - 16:00",
              sessions: [
                {
                  time: "15:30 - 16:00",
                  description: "Zhe Li / Explore galactic PeVatron sources through UHE gamma-ray observations with LHAASO"
                }
              ]
            },
            {
              time: "16:00 - 16:30",
              sessions: [
                {
                  time: "16:00 - 16:30",
                  description: "Shicong Hu / LHAASO Observations of VHE Gamma-ray Emission from Extra-galactic Sources"
                }
              ]
            }
          ]
        },
        {
          date: "November 26 (Tuesday)",
          events: [
            {
              time: "9:30 - 10:00",
              sessions: [
                {
                  time: "9:30 - 10:00",
                  description: "Invited Talk / Paulo Montero Camacho"
                }
              ]
            },
            {
              time: "10:00 - 10:30",
              sessions: [
                {
                  time: "10:00 - 10:30",
                  description: "周萌 / Prospects for kSZˆ2-21cmˆ2 Cross-Correlations during Reionization"
                }
              ]
            },
            {
              time: "10:30 - 11:00",
              sessions: [
                {
                  time: "10:30 - 11:00",
                  description: "Richard Grummitt / Scalable Bayesian Computation for Astrophysics and Cosmology"
                }
              ]
            },
            {
              time: "11:00 - 11:30",
              sessions: [
                {
                  time: "11:00 - 11:30",
                  description: "Coffee Break / Poster Session"
                }
              ]
            },
            {
              time: "11:30 - 12:00",
              sessions: [
                {
                  time: "11:30 - 12:00",
                  description: "郭光洲 / Black hole accretion of scalar clouds with spontaneous symmetry breaking"
                }
              ]
            },
            {
              time: "12:00 - 12:30",
              sessions: [
                {
                  time: "12:00 - 12:30",
                  description: "Daniele Spinoso  / Massive Black Holes formation and evolution in cosmological environments"
                }
              ]
            },
            {
              time: "12:30 - 14:00",
              sessions: [
                {
                  time: "12:30 - 14:00",
                  description: "Lunch and Discussion Session "
                }
              ]
            },
            {
              time: "14:00 - 14:30",
              sessions: [
                {
                  time: "14:00 - 14:30",
                  description: "胡佳 / Properties of classical bulge and pseudo-bulge galaxies at low- and mid-redshifts"
                }
              ]
            },
            {
              time: "14:30 - 15:00",
              sessions: [
                {
                  time: "14:30 - 15:00",
                  description: "何川 / What Can Bulge Do to Star Formation Rate in Paired Galaxies"
                }
              ]
            },
            {
              time: "15:00 - 15:30",
              sessions: [
                {
                  time: "15:00 - 15:30",
                  description: "Coffee Break / Poster Session"
                }
              ]
            },
            {
              time: "15:30 - 16:00",
              sessions: [
                {
                  time: "15:30 - 16:00",
                  description: "缪志强（Zhiqiang Miao）/ Quark Star Mergers: The Equation of State of Decompressed Quark Matter and Observational Signatures"
                }
              ]
            },
            {
              time: "16:00 - 16:30",
              sessions: [
                {
                  time: "16:00 - 16:30",
                  description: "Habtamu Menberu Tedila / Unveiling the emission properties of three long-period pulsars: An Investigation Using FAST (ApJS under review, 2024)"
                }
              ]
            }
            // Continue adding other sessions for November 26...
          ]
        },
        {
          date: "November 27 (Wednesday)",
          events: [
            {
              time: "9:30 - 10:00",
              sessions: [
                {
                  time: "9:30 - 10:00",
                  description: " Invited Talk / Alejandro Torres Orjuela"
                }
              ]
            },
            {
              time: "10:00 - 10:30",
              sessions: [
                {
                  time: "10:00 - 10:30",
                  description: "Wei-Xiang Feng / Gravitational Waves from Primordial Black Hole Dark Matter Spikes"
                }
              ]
            },
            {
              time: "10:30 - 11:00",
              sessions: [
                {
                  time: "10:30 - 11:00",
                  description: "Chao Zhang（张超） / Gravitational perturbation with its applications to quasi-normal mode and Lagrangian analysis"
                }
              ]
            },
            {
              time: "11:00 - 11:30",
              sessions: [
                {
                  time: "11:00 - 11:30",
                  description: "Coffee Break / Poster Session"
                }
              ]
            },
            {
              time: "11:30 - 12:00",
              sessions: [
                {
                  time: "11:30 - 12:00",
                  description: "杨季轩 / The influence of dynamical friction and negative dynamical friction on the evolution of open cluster"
                }
              ]
            },
            {
              time: "12:00 - 12:30",
              sessions: [
                {
                  time: "12:00 - 12:30",
                  description: "Elizabeth Moreno Hilario / On the globular cluster initial mass function problem in dwarf galaxies"
                }
              ]
            },
            {
              time: "12:30 - 14:00",
              sessions: [
                {
                  time: "12:30 - 14:00",
                  description: "Lunch and Discussion Session"
                }
              ]
            },
            {
              time: "14:00 - 14:30",
              sessions: [
                {
                  time: "14:00 - 14:30",
                  description: "何紫朝 / An interesting strongly lensed system with two lenses and two sources"
                }
              ]
            },
            {
              time: "14:30 - 15:00",
              sessions: [
                {
                  time: "14:30 - 15:00",
                  description: "Hang Yang / Effects of stellar feedback subgrid models on the evolution of angular momentum in disc galaxies"
                }
              ]
            },
            {
              time: "15:00 - 15:30",
              sessions: [
                {
                  time: "15:00 - 15:30",
                  description: "Coffee Break / Poster Session"
                }
              ]
            },
            {
              time: "15:30 - 16:00",
              sessions: [
                {
                  time: "15:30 - 16:00",
                  description: "Yunfeng Wei / Contribution of Neutrino-dominated Accretion Flows to the Cosmic MeV Neutrino Background"
                }
              ]
            },
            {
              time: "16:00 - 16:30",
              sessions: [
                {
                  time: "16:00 - 16:30",
                  description: "黄勇 / Searching for very-high-energy emissions coinciding with multi-messenger observations using the LHAASO-WCDA detector"
                }
              ]
            }
            // Continue adding other sessions for November 27...
          ]
        }
        // Continue adding other days if needed...
      ] as Day[]
    }
  },
  computed: {
    content() {
      return this.$i18n.messages[this.$i18n.locale].schedule.content;
    }
  }
});
</script>

<style scoped>
.schedule-page {
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.schedule-container {
  margin-top: 2rem;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.day-section {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #ffffff;
}

.day-title {
  color: #333;
  margin-bottom: 10px;
  font-size: 1.25em;
  font-weight: bold;
}

.event h3 {
  font-size: 1.1em;
  margin-bottom: 5px;
  color: #444;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

.session-item {
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}

.session-item strong {
  color: #555;
}

p {
  text-indent: 2em;
}
</style>