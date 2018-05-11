module.exports = {
  plugins: [
    require('postcss-easy-import')({prefix: '_'}), 
    require('autoprefixer')({ }) // so imports are auto-prefixed too
  ]
};