// develop PATH
let src = './app'

// Static PATH
let dest = './dist'

// deta PATH
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
