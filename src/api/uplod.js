
export async function fetchFiles() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=6");
  if (!res.ok) {
    throw new Error("Failed to fetch files");
  }
  return res.json();
}
