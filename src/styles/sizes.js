export default {
  up() {},
  down(size) {
    const sizes = {
      xs: "650px",
      sm: "800px",
      md: "992px",
      lg: "1200px",
      xl: "1600px",
    };
    return `@media (max-width: ${sizes[size]})`;
  },
};
