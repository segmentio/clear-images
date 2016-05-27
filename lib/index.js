'use strict';

/**
 * noop.
 *
 * @return {undefined}
 */
var noop = function noop() {};

/**
 * Created images.
 */

var images = [];

/**
 * Keep track of original `Image`.
 */

var OriginalImage = global.Image;

/**
 * Image override that keeps track of images.
 *
 * Careful though, `img instance SpyImage` isn't true.
 *
 * @api private
 */
function SpyImage() {
  var img = new OriginalImage();
  images.push(img);
  return img;
}

/**
 * Clear `onload` for each image.
 *
 * @api public
 */
function clearOnload() {
  for (var i = 0, n = images.length; i < n; i++) {
    images[i].onload = noop;
  }
  images.length = 0;
}

/**
 * Override `global.Image` to keep track of images, so we can clear `onload`.
 *
 * @api public
 */
function bind() {
  global.Image = SpyImage;
}

/**
 * Set `global.Image` back to normal.
 *
 * @api public
 */
function unbind() {
  global.Image = OriginalImage;
  images.length = 0;
}

/*
 * Automatically override Image.
 */

bind();

/*
 * Exports.
 */

module.exports = clearOnload;
module.exports.bind = bind;
module.exports.unbind = unbind;
