import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
export default [
  {
    input: 'src/index.js',
    output: {
      file: 'build/bundle.js',
      format: 'umd',
      sourcemap: true,
      name: 'MatrixSDK'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      }),
      uglify()
    ]
  }
]
