const personnes = ["Alexandre", "Christella", "Divine", "Nikita"];
    const taches = ["Jardinage", "Garde malade", "Nettoyage", "Labourage"];
    const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    function shuffle(array) {
      let currentIndex = array.length, randomIndex;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    }

    function getWeeklySeed() {
      const now = new Date();
      const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay() + 1));
      return startOfWeek.toDateString();
    }

    function seededRandom(seed) {
      let x = Math.sin(seed.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)) * 10000;
      return x - Math.floor(x);
    }

    function generateSchedule() {
      const seed = getWeeklySeed();
      const scheduleBody = document.getElementById("schedule-body");
      scheduleBody.innerHTML = "";

      jours.forEach(jour => {
        const shuffledPeople = shuffle([...personnes]);
        const shuffledTasks = shuffle([...taches]);

        const person = shuffledPeople[0];
        const task = shuffledTasks[0];

        const row = `<tr>
                      <td>${jour}</td>
                      <td>${person}</td>
                      <td>${task}</td>
                    </tr>`;
        scheduleBody.innerHTML += row;
      });
    }

    generateSchedule();