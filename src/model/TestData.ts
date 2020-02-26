import TodoEntry from "./TodoEntry";

export default function testData(): TodoEntry[] {
  let entries = [
    { id: "a", text: "Learn TypeScript", done: true },
    { id: "b", text: "Install React Native", done: true },
    { id: "c", text: "Write a Todo-App", done: false }
  ];

  for (let i = 0; i < 20; i++) {
    entries = entries.concat({
      id: `${i}`,
      text: `Todo Item ${i}`,
      done: false
    });
  }

  return entries;
}
