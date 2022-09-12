import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  const typeriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    typeriptLoader,
  ]
}