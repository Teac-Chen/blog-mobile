const gulp = require('gulp')
const path = require('path')
const $ = require('gulp-load-plugins')()

gulp.task('lint', () => {
  return gulp.src(['./src/server/**/*.js'])
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError())
})

gulp.task('default', ['lint'], () => {
  const stream = $.nodemon({
    script: './src/server/app.js',
    tasks: ['lint'],
    watch: ['./src/server'],
    env: {
      'NODE_ENV': 'development'
    },
    delay: 1000
  })

  return stream
})

// const watcher = gulp.watch(['./src/server/**/*.js'])

// watcher.on('change', e => {
//   console.log(`File ${e.path.replace(path.resolve(__dirname), '')} was ${e.type}, running tasks...`)
// })
