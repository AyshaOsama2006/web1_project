

export async function fetchTodos() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return response.json();
}

