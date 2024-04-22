export default function Check() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("Status") === "Admin";
  }
  return false;
}
