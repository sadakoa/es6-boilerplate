// 開発用ディレクトリ
var src = './app'

// 納品用ディレクトリ
var dest = './dist'

// データ受け渡し用 オブジェクト
module.exports = {
  src: src,
  dest: dest,

  stylus: {
    src: src + '/stylus/**/*.stylus',
    dest: dest + '/stylesheet',
  },
  js: {
    src: src + '/script/app.es6',
    dest: dest + '/js',
  },
  image: {
    src: src + '/images/**/*',
    dest: dest + '/images',
  },
};
