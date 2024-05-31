const MOODLE_URL = import.meta.env.VITE_MOODLE_URL;
const TOKEN = import.meta.env.VITE_TOKEN;

async function getUserById(userId) {
  const response = await fetch(`${MOODLE_URL}/webservice/rest/server.php?wstoken=${TOKEN}&wsfunction=core_user_get_users&criteria[0][key]=id&criteria[0][value]=${userId}&moodlewsrestformat=json`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.users[0]; // Asumiendo que la respuesta es un objeto con una propiedad 'users' que es un array
}

export { getUserById };