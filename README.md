# clear-images

[![CircleCI](https://circleci.com/gh/segmentio/clear-images.svg?style=shield&circle-token=54bb403250987210d3b6fd6b38341425b5350f8b)](https://circleci.com/gh/segmentio/clear-images)
[![Codecov](https://img.shields.io/codecov/c/github/segmentio/clear-images/master.svg?maxAge=2592000)](https://codecov.io/gh/segmentio/clear-images)

> **Note**  
> Segment has paused maintenance on this project, but may return it to an active status in the future. Issues and pull requests from external contributors are not being considered, although internal contributions may appear from time to time. The project remains available under its open source license for anyone to use.

Clear `img.onload` to prevent errors for testing.

## Installation

```sh
$ npm install @segment/clear-images
```

## API

### clearImages()

Sets `img.onload` to an empty function so no errors are thrown in any onload callbacks.

### .bind()

Overrides the `window.Image` constructor to watch when images are created.

### .unbind()

Sets `window.Image` back to normal.
