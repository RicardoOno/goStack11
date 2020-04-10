module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
}

/**
 * preset-env: verifica quais funcionalidades o browser n entende e converte elas
 * preset-react: vai entender o html no js e converter
 */