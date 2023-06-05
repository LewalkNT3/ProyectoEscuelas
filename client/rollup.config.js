export default {
  input: "src/index.jsx", // Archivo de entrada principal de tu aplicación
  output: {
    file: "dist/bundle.js", // Archivo de salida compilado
    format: "cjs", // Formato de módulo de salida (puedes usar 'cjs', 'esm', 'umd', etc.)
  },
};
