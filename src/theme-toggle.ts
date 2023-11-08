const storageKey = "theme-preference";


const getColorPreference = () =>
  localStorage.getItem(storageKey) ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";


const setPreference = () => {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
};

const reflectPreference = () => {
  document.firstElementChild?.setAttribute("data-theme", theme.value);

  document
    .querySelector("#theme-toggle")
    ?.setAttribute("aria-label", theme.value);
};

const theme = {
  value: getColorPreference(),
};

reflectPreference();

window.onload = () => {
  reflectPreference();
  document.querySelector("#theme-toggle")?.addEventListener("click", () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    setPreference();
  });
};

// sync with system changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    theme.value = isDark ? "dark" : "light";
    setPreference();
  });
