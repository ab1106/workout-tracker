const savedWorkouts =
  JSON.parse(localStorage.getItem("workouts")) || [];

function showWorkouts() {
  const list = document.getElementById("workoutList");
  list.innerHTML = "";

  savedWorkouts.forEach((workout) => {
    const item = document.createElement("li");

    item.textContent =
      `${workout.exercise}: ${workout.weight} kg × ${workout.reps} ripetizioni`;

    list.appendChild(item);
  });
}

function addWorkout() {
  const exercise = document.getElementById("exercise").value.trim();
  const weight = document.getElementById("weight").value;
  const reps = document.getElementById("reps").value;

  if (!exercise || !weight || !reps) {
    alert("Compila tutti i campi");
    return;
  }

  savedWorkouts.push({
    exercise,
    weight,
    reps
  });

  localStorage.setItem("workouts", JSON.stringify(savedWorkouts));

  document.getElementById("exercise").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("reps").value = "";

  showWorkouts();
}

function clearWorkouts() {
  savedWorkouts.length = 0;
  localStorage.removeItem("workouts");
  showWorkouts();
}

showWorkouts();