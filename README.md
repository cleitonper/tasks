# Tasks
Tasks de uso comum.

## Gulp Clean CSS
Task para minificar arquivos css

### Instalação:
```
npm i -D gulp-clean-css
```

### Repositório

> [gulp-clean-css](https://github.com/scniro/gulp-clean-css)

### Uso

```javascript
gulp.task('css', function(){
    gulp.src([
        './path/to/your/file.css',
        './path/to/your/another-file.css'
    ])
        .pipe(concat('app.min.css'))
        .pipe(cssMin())
        .pipe(gulp.dest('./path/to/minified'));
});
```


## Gulp Uglify
Task para minificar arquivos js

### Instalação:
```
npm i -D gulp-uglify
```

### Repositório

> [gulp-uglify](https://github.com/terinjokes/gulp-uglify)

### Uso

```javascript
gulp.task('js', function(){
    gulp.src([
        './path/to/your/file.js',
        './path/to/your/another-file.js'
    ])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./path/to/minified'));
});
```


## Gulp Concat
Task para concatern arquivos em um único

### Instalação:
```
npm i -D gulp-concat
```

### Repositório
> [gulp-concat](https://github.com/contra/gulp-concat)

### Uso
Uso demonstrado em `gulp-clean-css` e `gulp-uglify`.




## Gulp Watch
Task para observar mudanças em arquivos

### Instalação:
```
npm i -D gulp-watch
```

### Repositório

> [gulp-watch](https://github.com/floatdrop/gulp-watch)

### Uso

```javascript
gulp.task('watch', function(){
    gulp.watch('./path/to/your/cssfiles/*.css', ['task']);
    gulp.watch('./path/to/your/jsfiles/*.js', ['another-task']);
});
```



## Gulp Deploy
Task para realizar Deploy

### Instalação:
```
npm i -D gulp-util vinyl-ftp
```

### Uso
Uso demonstrado em `gulp-clean-css` e `gulp-uglify`.

### Uso

```javascript
gulp.task('deploy', function () {

    var conn = ftp.create({
        host:     '',
        user:     '',
        password: '',
        parallel: 10,
        log: gutil.log
    });

    var globs = [
        '**/*',
        '!gulpfile.js',
        '!vendor{,/**}',
        '!node_modules{,/**}'
    ];


    return gulp.src(globs, {base: '.', buffer: false})
        .pipe(conn.newer(''))
        .pipe(conn.dest(''));
});
```