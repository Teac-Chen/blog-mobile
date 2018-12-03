const gulp = require('gulp')
const path = require('path')
const $ = require('gulp-load-plugins')()

gulp.task('lint', () => {
  return gulp.src(['./server/**/*.js'])
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError())
})

gulp.task('default', ['lint'], () => {
  const stream = $.nodemon({
    script: './server/app.js',
    tasks: ['lint'],
    watch: ['./server'],
    env: {
      'NODE_ENV': 'development'
    },
    delay: 1000
  })

  return stream
})
