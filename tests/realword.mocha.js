/* eslint max-len:0 */
'use strict';

const assert = require('chai').assert;
const { SVGPathData } = require('..');

describe('Dealing with real world commands', () => {

  it('and Y axis symmetry with y coords equal to 0', () => {
    assert.equal(new SVGPathData('M250,381 C199.119048,381 151.285714,361.164188 115.333333,325.159688 L165.857143,274.653375 C188.333333,297.156188 218.238095,309.5625 250,309.5625 C298.214286,309.5625 341.333333,280.797 359.904762,236.291438 L369.071429,214.3125 L500,214.3125 L500,285.75 L415,285.75 C381.285714,344.304937 318.880952,381 250,381 L250,381 L250,381 L250,381 Z M130.952381,166.6875 L0,166.6875 L0,95.25 L85.047619,95.25 C118.738095,36.6950625 181.142857,0 250,0 C300.880952,0 348.714286,19.8358125 384.690476,55.8403125 L334.166667,106.346625 C311.690476,83.8438125 281.809524,71.4375 250,71.4375 C201.833333,71.4375 158.666667,100.203 140.119048,144.708563 L130.952381,166.6875 L130.952381,166.6875 L130.952381,166.6875 L130.952381,166.6875 Z M130.952381,166.6875')
      .ySymmetry(381).ySymmetry(381).encode()
      , 'M250 381C199.119048 381 151.285714 361.164188 115.333333 325.159688L165.857143 274.653375C188.333333 297.156188 218.238095 309.5625 250 309.5625C298.214286 309.5625 341.333333 280.797 359.904762 236.291438L369.071429 214.3125L500 214.3125L500 285.75L415 285.75C381.285714 344.304937 318.880952 381 250 381L250 381L250 381L250 381zM130.952381 166.6875L0 166.6875L0 95.25L85.047619 95.25C118.738095 36.695062500000006 181.142857 0 250 0C300.880952 0 348.714286 19.835812499999975 384.690476 55.84031249999998L334.166667 106.34662500000002C311.690476 83.84381250000001 281.809524 71.4375 250 71.4375C201.833333 71.4375 158.666667 100.20299999999997 140.119048 144.708563L130.952381 166.6875L130.952381 166.6875L130.952381 166.6875L130.952381 166.6875zM130.952381 166.6875');
  });

  it('of sapegin', () => {
    assert.equal(
      new SVGPathData('M77.225 66.837l-18.895-18.895c2.85-4.681 4.49-10.177 4.49-16.058 0-17.081-14.802-31.884-31.888-31.884-17.082 0-30.932 13.85-30.932 30.934s14.803 31.885 31.885 31.885c5.68 0 11-1.538 15.575-4.21l18.996 18.997c1.859 1.859 4.873 1.859 6.73 0l4.713-4.711c1.859-1.86 1.185-4.2-.674-6.058m-67.705-35.903c0-11.828 9.588-21.416 21.412-21.416 11.83 0 22.369 10.539 22.369 22.367s-9.588 21.416-21.417 21.416c-11.825 0-22.364-10.539-22.364-22.367')
        .toAbs().ySymmetry(79).encode(),
      'M77.225 12.162999999999997L58.33 31.057999999999993C61.18 35.73899999999999 62.82 41.23499999999999 62.82 47.11599999999999C62.82 64.19699999999999 48.018 79 30.932 79C13.849999999999998 79 0 65.14999999999999 0 48.06599999999999S14.803 16.18099999999999 31.885 16.18099999999999C37.565 16.18099999999999 42.885000000000005 17.718999999999987 47.46 20.39099999999999L66.456 1.3939999999999912C68.315 -0.4650000000000034 71.32900000000001 -0.4650000000000034 73.186 1.3939999999999912L77.899 6.10499999999999C79.758 7.964999999999989 79.084 10.304999999999993 77.225 12.162999999999982M9.519999999999996 48.06599999999998C9.519999999999996 59.89399999999998 19.107999999999997 69.48199999999999 30.931999999999995 69.48199999999999C42.76199999999999 69.48199999999999 53.300999999999995 58.942999999999984 53.300999999999995 47.11499999999998S43.712999999999994 25.698999999999984 31.883999999999993 25.698999999999984C20.058999999999994 25.698999999999984 9.519999999999992 36.237999999999985 9.519999999999992 48.06599999999999');
  });

  it('of hannesjohansson', () => {
    assert.equal(new SVGPathData('M2.25 12.751C2.25 18.265 6.736 22.751 12.25 22.751C14.361 22.751 16.318 22.09 17.933 20.969L25.482 28.518C25.97 29.006 26.61 29.25 27.25 29.25S28.53 29.006 29.018 28.518C29.995 27.542 29.995 25.96 29.018 24.983L21.207 17.172C21.869 15.837 22.251 14.339 22.251 12.751C22.251 7.237 17.765 2.751 12.251 2.751S2.251 7.236 2.25 12.751zM6.251 12.751C6.251 9.442 8.942 6.751 12.251 6.751S18.251 9.442 18.251 12.751S15.56 18.751 12.251 18.751S6.251 16.06 6.251 12.751z').ySymmetry(32).ySymmetry(32).round(10e10).encode(), 'M2.25 12.751C2.25 18.265 6.736 22.751 12.25 22.751C14.361 22.751 16.318 22.09 17.933 20.969L25.482 28.518C25.97 29.006 26.61 29.25 27.25 29.25S28.53 29.006 29.018 28.518C29.995 27.542 29.995 25.96 29.018 24.983L21.207 17.172C21.869 15.837 22.251 14.339 22.251 12.751C22.251 7.237 17.765 2.751 12.251 2.751S2.251 7.236 2.25 12.751zM6.251 12.751C6.251 9.442 8.942 6.751 12.251 6.751S18.251 9.442 18.251 12.751S15.56 18.751 12.251 18.751S6.251 16.06 6.251 12.751z');
  });

  it('of my blog', () => {
    assert.equal(new SVGPathData('m 0,100 0,10 5,0 0,-5 15,0 0,15 -20,0 0,30 25,0 0,-50 z m 5,25 15,0 0,20 -15,0 z').toAbs().encode(), 'M0 100L0 110L5 110L5 105L20 105L20 120L0 120L0 150L25 150L25 100zM5 125L20 125L20 145L5 145z');
  });

  it('of tremby bug report', () => {
    assert.equal(new SVGPathData('M0,250 l20,0 a40,20 0 0,0 40,20 l80,-20 a40,20 0 0,1 40,20 l80,-20 a40,20 0 1,0 40,20 l80,-20 a40,20 0 1,1 40,20 l80,-20 l0,-120 H0 Z').scale(1, -1).encode(), 'M0 -250l20 0a40 20 0 0 1 40 -20l80 20a40 20 0 0 0 40 -20l80 20a40 20 0 1 1 40 -20l80 20a40 20 0 1 0 40 -20l80 20l0 120H0z');
  });

  it('of fh1ch bug report', () => {
    assert.equal(new SVGPathData('M382.658 327.99c16.71-17.204 26.987-40.676 26.987-66.542 0-52.782-42.792-95.575-95.574-95.575-29.894 0-56.583 13.74-74.104 35.24-17.47-7.164-37.11-9.877-57.725-7.596-44.774 4.964-82.87 38.712-94.42 84.393-2.14 8.447-5.14 13.34-14.276 16.473-26.103 8.952-42.988 35.322-41.446 61.6 1.696 28.703 21.253 52.36 48.917 59.185 1.942.48 3.813.668 5.61 1.048.063 0 .114-.216.166-.216h224.753c.154 0 .31.235.463.216 39.072-1.706 70.56-33.144 71.865-71.815.197-5.66-.225-11.13-1.21-16.472m-63.554 62.75c-2.312.503-4.697.847-7.1 1.166-6.095.83-3.763.156-18.232.156H103.716c-3.113 0-6.207.11-9.29-.044-21.283-1.038-36.646-16.796-37.243-37.185-.617-20.696 13.596-37.283 34.52-39.833 5.365-.646 10.873-.082 16.217-.082 6.186-58.885 31.18-90.46 76.418-96.802 19.834-2.785 38.66.794 56.06 10.825 25.434 14.654 38.69 37.81 44.127 66.47 4.748-1.108 8.355-1.973 11.962-2.796 27.85-6.33 54.868 10.033 61.034 36.958 6.516 28.426-9.844 55.01-38.414 61.168zm8.86-121.502c-4.225-1.07-8.613-1.778-13.125-2.097-1.756-.124-3.35-.34-4.788-.668-6.207-1.4-9.794-4.8-13.124-11.49-.185-.37-.37-.73-.555-1.1-5.333-10.44-11.92-19.68-19.537-27.604l-17.82-14.973-.42-.35c13.616-13.822 34.58-24.47 55.473-24.47 41.363 0 75.02 33.657 75.02 75.022 0 16.452-5.334 31.683-14.357 44.056-9.68-17.788-26.348-31.2-46.768-36.327z').toAbs().round(1000).encode(), 'M382.658 327.99C399.368 310.786 409.645 287.314 409.645 261.448C409.645 208.666 366.853 165.873 314.071 165.873C284.177 165.873 257.488 179.613 239.967 201.113C222.497 193.949 202.857 191.236 182.242 193.517C137.468 198.481 99.372 232.229 87.822 277.91C85.682 286.357 82.682 291.25 73.546 294.383C47.443 303.335 30.558 329.705 32.1 355.983C33.796 384.686 53.353 408.343 81.017 415.168C82.959 415.648 84.83 415.836 86.627 416.216C86.69 416.216 86.741 416 86.793 416H311.546C311.7 416 311.856 416.235 312.009 416.216C351.081 414.51 382.569 383.072 383.874 344.401C384.071 338.741 383.649 333.271 382.664 327.929M319.11 390.679C316.798 391.182 314.413 391.526 312.01 391.845C305.915 392.675 308.247 392.001 293.778 392.001H103.716C100.603 392.001 97.509 392.111 94.426 391.957C73.143 390.919 57.78 375.161 57.183 354.772C56.566 334.076 70.779 317.489 91.703 314.939C97.068 314.293 102.576 314.857 107.92 314.857C114.106 255.972 139.1 224.397 184.338 218.055C204.172 215.27 222.998 218.849 240.398 228.88C265.832 243.534 279.088 266.69 284.525 295.35C289.273 294.242 292.88 293.377 296.487 292.554C324.337 286.224 351.355 302.587 357.521 329.512C364.037 357.938 347.677 384.522 319.107 390.68zM327.97 269.177C323.745 268.107 319.357 267.399 314.845 267.08C313.089 266.956 311.495 266.74 310.057 266.412C303.85 265.012 300.263 261.612 296.933 254.922C296.748 254.552 296.563 254.192 296.378 253.822C291.045 243.382 284.458 234.142 276.841 226.218L259.021 211.245L258.601 210.895C272.217 197.073 293.181 186.425 314.074 186.425C355.437 186.425 389.094 220.082 389.094 261.447C389.094 277.899 383.76 293.13 374.737 305.503C365.057 287.715 348.389 274.303 327.969 269.176z');
  });

  it('of kaptinlin bug report', () => {
    assert.equal(new SVGPathData('M13 5H8V2.6a1 1 0 00.42-.46l5.08-.64a.5.5 0 000-1l-5.22.65a1 1 0 00-.78-.4 1 1 0 00-.92.62L1.5 2a.5.5 0 000 1l5.22-.65c.077.1.172.185.28.25V5H2a1 1 0 00-1 1v7a1 1 0 001 1h11a1 1 0 001-1V6a1 1 0 00-1-1zm-6 6H3V7h4v4zm5 0H8V7h4v4z').toAbs().round(1000).encode(), 'M13 5H8V2.6A1 1 0 0 0 8.42 2.14L13.5 1.5A0.5 0.5 0 0 0 13.5 0.5L8.28 1.15A1 1 0 0 0 7.5 0.75A1 1 0 0 0 6.58 1.37L1.5 2A0.5 0.5 0 0 0 1.5 3L6.72 2.35C6.797 2.45 6.892 2.535 7 2.6V5H2A1 1 0 0 0 1 6V13A1 1 0 0 0 2 14H13A1 1 0 0 0 14 13V6A1 1 0 0 0 13 5zM7 11H3V7H7V11zM12 11H8V7H12V11z');
  });

  it('of kaptinlin bug report 2', () => {
    assert.equal(new SVGPathData('M13 5H8V2.6a1 1 0 00 .42-.46l5.08-.64a.5.5 0 000-1l-5.22.65a1 1 0 00-.78-.4 1 1 0 00-.92.62L1.5 2a.5.5 0 000 1l5.22-.65c.077.1.172.185.28.25V5H2a1 1 0 00-1 1v7a1 1 0 001 1h11a1 1 0 001-1V6a1 1 0 00-1-1zm-6 6H3V7h4v4zm5 0H8V7h4v4z').toAbs().round(1000).encode(), 'M13 5H8V2.6A1 1 0 0 0 8.42 2.14L13.5 1.5A0.5 0.5 0 0 0 13.5 0.5L8.28 1.15A1 1 0 0 0 7.5 0.75A1 1 0 0 0 6.58 1.37L1.5 2A0.5 0.5 0 0 0 1.5 3L6.72 2.35C6.797 2.45 6.892 2.535 7 2.6V5H2A1 1 0 0 0 1 6V13A1 1 0 0 0 2 14H13A1 1 0 0 0 14 13V6A1 1 0 0 0 13 5zM7 11H3V7H7V11zM12 11H8V7H12V11z');
  });

  describe('bootstrap-icons', () => {

    it('box-arrow-up-right', () => {
      assert.equal(new SVGPathData('M3.5 15A1.5 1.5 0 005 16.5h8a1.5 1.5 0 001.5-1.5v-4a.5.5 0 00-1 0v4a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V7a.5.5 0 01.5-.5h4a.5.5 0 000-1H5A1.5 1.5 0 003.5 7v8zm7-11a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V4.5H11a.5.5 0 01-.5-.5z').toAbs().round(1000).encode(), 'M3.5 15A1.5 1.5 0 0 0 5 16.5H13A1.5 1.5 0 0 0 14.5 15V11A0.5 0.5 0 0 0 13.5 11V15A0.5 0.5 0 0 1 13 15.5H5A0.5 0.5 0 0 1 4.5 15V7A0.5 0.5 0 0 1 5 6.5H9A0.5 0.5 0 0 0 9 5.5H5A1.5 1.5 0 0 0 3.5 7V15zM10.5 4A0.5 0.5 0 0 1 11 3.5H16A0.5 0.5 0 0 1 16.5 4V9A0.5 0.5 0 0 1 15.5 9V4.5H11A0.5 0.5 0 0 1 10.5 4z');
    });

    it('bootstrap', () => {
      assert.equal(new SVGPathData('M14 3H6a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3zM6 2a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V6a4 4 0 00-4-4H6z').toAbs().round(1000).encode(), 'M14 3H6A3 3 0 0 0 3 6V14A3 3 0 0 0 6 17H14A3 3 0 0 0 17 14V6A3 3 0 0 0 14 3zM6 2A4 4 0 0 0 2 6V14A4 4 0 0 0 6 18H14A4 4 0 0 0 18 14V6A4 4 0 0 0 14 2H6z');
    });

    it('camera', () => {
      assert.equal(new SVGPathData('M16.333 5h-2.015A5.97 5.97 0 0011 4a5.972 5.972 0 00-3.318 1H3.667C2.747 5 2 5.746 2 6.667v6.666C2 14.253 2.746 15 3.667 15h4.015c.95.632 2.091 1 3.318 1a5.973 5.973 0 003.318-1h2.015c.92 0 1.667-.746 1.667-1.667V6.667C18 5.747 17.254 5 16.333 5zM3.5 7a.5.5 0 100-1 .5.5 0 000 1zm7.5 8a5 5 0 100-10 5 5 0 000 10z').toAbs().round(1000).encode(), 'M16.333 5H14.318A5.97 5.97 0 0 0 11 4A5.972 5.972 0 0 0 7.682 5H3.667C2.747 5 2 5.746 2 6.667V13.333C2 14.253 2.746 15 3.667 15H7.682C8.632 15.632 9.773 16 11 16A5.973 5.973 0 0 0 14.318 15H16.333C17.253 15 18 14.254 18 13.333V6.667C18 5.747 17.254 5 16.333 5zM3.5 7A0.5 0.5 0 1 0 3.5 6A0.5 0.5 0 0 0 3.5 7zM11 15A5 5 0 1 0 11 5A5 5 0 0 0 11 15z');
    });

    it('bucket', () => {
      assert.equal(new SVGPathData('M10 3.5A4.5 4.5 0 005.5 8h-1a5.5 5.5 0 1111 0h-1A4.5 4.5 0 0010 3.5z').toAbs().round(1000).encode(), 'M10 3.5A4.5 4.5 0 0 0 5.5 8H4.5A5.5 5.5 0 1 1 15.5 8H14.5A4.5 4.5 0 0 0 10 3.5z');
    });

    it('check-box', () => {
      assert.equal(new SVGPathData('M3.5 15A1.5 1.5 0 005 16.5h10a1.5 1.5 0 001.5-1.5v-5a.5.5 0 00-1 0v5a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h8a.5.5 0 000-1H5A1.5 1.5 0 003.5 5v10z').toAbs().round(1000).encode(), 'M3.5 15A1.5 1.5 0 0 0 5 16.5H15A1.5 1.5 0 0 0 16.5 15V10A0.5 0.5 0 0 0 15.5 10V15A0.5 0.5 0 0 1 15 15.5H5A0.5 0.5 0 0 1 4.5 15V5A0.5 0.5 0 0 1 5 4.5H13A0.5 0.5 0 0 0 13 3.5H5A1.5 1.5 0 0 0 3.5 5V15z');
    });

    it('diamond-half', () => {
      assert.equal(new SVGPathData('M8.94 2.354a1.5 1.5 0 012.12 0l6.586 6.585a1.5 1.5 0 010 2.122l-6.585 6.585a1.5 1.5 0 01-2.122 0l-6.585-6.585a1.5 1.5 0 010-2.122l6.585-6.585zm1.06.56a.498.498 0 00-.354.147L3.061 9.646a.5.5 0 000 .707l6.585 6.586a.499.499 0 00.354.147V2.914z').toAbs().round(1000).encode(), 'M8.94 2.354A1.5 1.5 0 0 1 11.06 2.354L17.646 8.939A1.5 1.5 0 0 1 17.646 11.061L11.061 17.646A1.5 1.5 0 0 1 8.939 17.646L2.354 11.061A1.5 1.5 0 0 1 2.354 8.939L8.939 2.354zM10 2.914A0.498 0.498 0 0 0 9.646 3.061L3.061 9.646A0.5 0.5 0 0 0 3.061 10.353L9.646 16.939A0.499 0.499 0 0 0 10 17.086V2.914z');
    });

    it('document', () => {
      assert.equal(new SVGPathData('M6 3h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V5a1 1 0 00-1-1H6z').toAbs().round(1000).encode(), 'M6 3H14A2 2 0 0 1 16 5V15A2 2 0 0 1 14 17H6A2 2 0 0 1 4 15V5A2 2 0 0 1 6 3zM6 4A1 1 0 0 0 5 5V15A1 1 0 0 0 6 16H14A1 1 0 0 0 15 15V5A1 1 0 0 0 14 4H6z');
    });

    it('trash', () => {
      assert.equal(new SVGPathData('M7.5 7.5A.5.5 0 018 8v6a.5.5 0 01-1 0V8a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V8a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V8z').toAbs().round(1000).encode(), 'M7.5 7.5A0.5 0.5 0 0 1 8 8V14A0.5 0.5 0 0 1 7 14V8A0.5 0.5 0 0 1 7.5 7.5zM10 7.5A0.5 0.5 0 0 1 10.5 8V14A0.5 0.5 0 0 1 9.5 14V8A0.5 0.5 0 0 1 10 7.5zM13 8A0.5 0.5 0 0 0 12 8V14A0.5 0.5 0 0 0 13 14V8z');
    });

    it('tv-fill', () => {
      assert.equal(new SVGPathData('M4.5 15.5A.5.5 0 015 15h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5zM4 4h12s2 0 2 2v6s0 2-2 2H4s-2 0-2-2V6s0-2 2-2z').toAbs().round(1000).encode(), 'M4.5 15.5A0.5 0.5 0 0 1 5 15H15A0.5 0.5 0 0 1 15 16H5A0.5 0.5 0 0 1 4.5 15.5zM4 4H16S18 4 18 6V12S18 14 16 14H4S2 14 2 12V6S2 4 4 4z');
    });

    it('unlock-fill', () => {
      assert.equal(new SVGPathData('M2.5 10a2 2 0 012-2h7a2 2 0 012 2v5a2 2 0 01-2 2h-7a2 2 0 01-2-2v-5z').toAbs().round(1000).encode(), 'M2.5 10A2 2 0 0 1 4.5 8H11.5A2 2 0 0 1 13.5 10V15A2 2 0 0 1 11.5 17H4.5A2 2 0 0 1 2.5 15V10z');
    });

    it('watch', () => {
      assert.equal(new SVGPathData('M6 16.333v-1.86A5.985 5.985 0 014 10c0-1.777.772-3.374 2-4.472V3.667C6 2.747 6.746 2 7.667 2h4.666C13.253 2 14 2.746 14 3.667v1.86A5.985 5.985 0 0116 10a5.985 5.985 0 01-2 4.472v1.861c0 .92-.746 1.667-1.667 1.667H7.667C6.747 18 6 17.254 6 16.333zM15 10a5 5 0 10-10 0 5 5 0 0010 0z').toAbs().round(1000).encode(), 'M6 16.333V14.473A5.985 5.985 0 0 1 4 10C4 8.223 4.772 6.626 6 5.528V3.667C6 2.747 6.746 2 7.667 2H12.333C13.253 2 14 2.746 14 3.667V5.527A5.985 5.985 0 0 1 16 10A5.985 5.985 0 0 1 14 14.472V16.333C14 17.253 13.254 18 12.333 18H7.667C6.747 18 6 17.254 6 16.333zM15 10A5 5 0 1 0 5 10A5 5 0 0 0 15 10z');
    });

    it('wrench', () => {
      assert.equal(new SVGPathData('M2.102 4.223A3.004 3.004 0 005 8c.27 0 .532-.036.78-.103l6.342 6.252A3.003 3.003 0 0015 18a3 3 0 10-.851-5.878L7.897 5.781A3.004 3.004 0 004.223 2.1l2.141 2.142L6 6l-1.757.364-2.141-2.141zm13.37 9.019L15 13l-.471.242-.529.026-.287.445-.445.287-.026.529L13 15l.242.471.026.529.445.287.287.445.529.026L15 17l.471-.242.529-.026.287-.445.445-.287.026-.529L17 15l-.242-.471-.026-.529-.445-.287-.287-.445-.529-.026z').toAbs().round(1000).encode(), 'M2.102 4.223A3.004 3.004 0 0 0 5 8C5.27 8 5.532 7.964 5.78 7.897L12.122 14.149A3.003 3.003 0 0 0 15 18A3 3 0 1 0 14.149 12.122L7.897 5.781A3.004 3.004 0 0 0 4.223 2.1L6.364 4.242L6 6L4.243 6.364L2.102 4.223zM15.472 13.242L15 13L14.529 13.242L14 13.268L13.713 13.713L13.268 14L13.242 14.529L13 15L13.242 15.471L13.268 16L13.713 16.287L14 16.732L14.529 16.758L15 17L15.471 16.758L16 16.732L16.287 16.287L16.732 16L16.758 15.471L17 15L16.758 14.529L16.732 14L16.287 13.713L16 13.268L15.471 13.242z');
    });

    it('x-octagon', () => {
      assert.equal(new SVGPathData('M6.54 2.146A.5.5 0 016.893 2h6.214a.5.5 0 01.353.146l4.394 4.394a.5.5 0 01.146.353v6.214a.5.5 0 01-.146.353l-4.394 4.394a.5.5 0 01-.353.146H6.893a.5.5 0 01-.353-.146L2.146 13.46A.5.5 0 012 13.107V6.893a.5.5 0 01.146-.353L6.54 2.146zM7.1 3L3 7.1v5.8L7.1 17h5.8l4.1-4.1V7.1L12.9 3H7.1z').toAbs().round(1000).encode(), 'M6.54 2.146A0.5 0.5 0 0 1 6.893 2H13.107A0.5 0.5 0 0 1 13.46 2.146L17.854 6.54A0.5 0.5 0 0 1 18 6.893V13.107A0.5 0.5 0 0 1 17.854 13.46L13.46 17.854A0.5 0.5 0 0 1 13.107 18H6.893A0.5 0.5 0 0 1 6.54 17.854L2.146 13.46A0.5 0.5 0 0 1 2 13.107V6.893A0.5 0.5 0 0 1 2.146 6.54L6.54 2.146zM7.1 3L3 7.1V12.9L7.1 17H12.9L17 12.9V7.1L12.9 3H7.1z');
    });

    it('x-square-fill', () => {
      assert.equal(new SVGPathData('M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm3.354 4.646L10 9.293l2.646-2.647a.5.5 0 01.708.708L10.707 10l2.647 2.646a.5.5 0 01-.708.708L10 10.707l-2.646 2.647a.5.5 0 01-.708-.708L9.293 10 6.646 7.354a.5.5 0 11.708-.708z').toAbs().round(1000).encode(), 'M4 2A2 2 0 0 0 2 4V16A2 2 0 0 0 4 18H16A2 2 0 0 0 18 16V4A2 2 0 0 0 16 2H4zM7.354 6.646L10 9.293L12.646 6.646A0.5 0.5 0 0 1 13.354 7.354L10.707 10L13.354 12.646A0.5 0.5 0 0 1 12.646 13.354L10 10.707L7.354 13.354A0.5 0.5 0 0 1 6.646 12.646L9.293 10L6.646 7.354A0.5 0.5 0 1 1 7.354 6.646z');
    });
  });

  describe('maki-icons', () => {
    it('alcohol-shop', () => {
      assert.equal(new SVGPathData('M14 4h-4v3.5a2 2 0 001.5 1.93V13H11a.5.5 0 000 1h2a.5.5 0 000-1h-.5V9.43A2 2 0 0014 7.5V4zm-1 3.5a1 1 0 11-2 0V5h2v2.5zm-7.5-5V2a.5.5 0 000-1V.5A.5.5 0 005 0H4a.5.5 0 00-.5.5V1a.5.5 0 000 1v.5C3.5 3.93 1 5.57 1 7v6a1 1 0 001 1h5a1.1 1.1 0 001-1V7c0-1.35-2.5-3.15-2.5-4.5zm-1 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z').toAbs().round(1000).encode(), 'M14 4H10V7.5A2 2 0 0 0 11.5 9.43V13H11A0.5 0.5 0 0 0 11 14H13A0.5 0.5 0 0 0 13 13H12.5V9.43A2 2 0 0 0 14 7.5V4zM13 7.5A1 1 0 1 1 11 7.5V5H13V7.5zM5.5 2.5V2A0.5 0.5 0 0 0 5.5 1V0.5A0.5 0.5 0 0 0 5 0H4A0.5 0.5 0 0 0 3.5 0.5V1A0.5 0.5 0 0 0 3.5 2V2.5C3.5 3.93 1 5.57 1 7V13A1 1 0 0 0 2 14H7A1.1 1.1 0 0 0 8 13V7C8 5.65 5.5 3.85 5.5 2.5zM4.5 12A2.5 2.5 0 1 1 4.5 7A2.5 2.5 0 0 1 4.5 12z');
    });
  
    it('baseball', () => {
      assert.equal(new SVGPathData('M10 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM7 .28A.28.28 0 006.72 0a.49.49 0 00-.25.16L4 4.59a.48.48 0 000 .13c0 .155.125.28.28.28a.49.49 0 00.26-.16L7 .41a.472.472 0 000-.13zm5.9 13.92L10 6.39A.49.49 0 009.52 6h-5a.5.5 0 000 1H7l1.45 2.51-4.27 4.61a.49.49 0 00-.18.38.5.5 0 00.5.5.49.49 0 00.33-.13l4.45-4.15 2.76 4a.51.51 0 00.44.26c.28 0 .51-.22.52-.5a.5.5 0 00-.1-.28z').toAbs().round(1000).encode(), 'M10 3.5A1.5 1.5 0 1 1 7 3.5A1.5 1.5 0 0 1 10 3.5zM7 0.28A0.28 0.28 0 0 0 6.72 0A0.49 0.49 0 0 0 6.47 0.16L4 4.59A0.48 0.48 0 0 0 4 4.72C4 4.875 4.125 5 4.28 5A0.49 0.49 0 0 0 4.54 4.84L7 0.41A0.472 0.472 0 0 0 7 0.28zM12.9 14.2L10 6.39A0.49 0.49 0 0 0 9.52 6H4.52A0.5 0.5 0 0 0 4.52 7H7L8.45 9.51L4.18 14.12A0.49 0.49 0 0 0 4 14.5A0.5 0.5 0 0 0 4.5 15A0.49 0.49 0 0 0 4.83 14.87L9.28 10.72L12.04 14.72A0.51 0.51 0 0 0 12.48 14.98C12.76 14.98 12.99 14.76 13 14.48A0.5 0.5 0 0 0 12.9 14.2z');
    });
  
    it('beach', () => {
      assert.equal(new SVGPathData('M5.36 1.67l-.01 4.02a4.452 4.452 0 00-1.1-.11c-.37.1-.74.63-1.1.76a4.202 4.202 0 012.21-4.67zm2.41-.64L9.8 4.48a3.183 3.183 0 01.84-.61c.36-.1.94.17 1.34.11a4.202 4.202 0 00-4.21-2.95zM1 13h13c-.66-.66-2.64-1.11-4.34-1.33l-1.87-7c.52-.05 1.15.03 1.53 0l-2.11-3.6H7.2a6.174 6.174 0 00-.7.14 4.38 4.38 0 00-.64.22l-.01 4.15c.35-.17.84-.54 1.3-.74l1.8 6.74c-.58-.05-1.09-.08-1.45-.08C6.03 11.5 2 12 1 13z').toAbs().round(1000).encode(), 'M5.36 1.67L5.35 5.69A4.452 4.452 0 0 0 4.25 5.58C3.88 5.68 3.51 6.21 3.15 6.34A4.202 4.202 0 0 1 5.36 1.67zM7.77 1.03L9.8 4.48A3.183 3.183 0 0 1 10.64 3.87C11 3.77 11.58 4.04 11.98 3.98A4.202 4.202 0 0 0 7.77 1.03zM1 13H14C13.34 12.34 11.36 11.89 9.66 11.67L7.79 4.67C8.31 4.62 8.94 4.7 9.32 4.67L7.21 1.07H7.2A6.174 6.174 0 0 0 6.5 1.21A4.38 4.38 0 0 0 5.86 1.43L5.85 5.58C6.2 5.41 6.69 5.04 7.15 4.84L8.95 11.58C8.37 11.53 7.86 11.5 7.5 11.5C6.03 11.5 2 12 1 13z');
    });
  
    it('cafe', () => {
      assert.equal(new SVGPathData('M12 5h-2V3H2v4a4 4 0 007.45 2H12a2 2 0 100-4zm0 3H9.86A4 4 0 0010 7V6h2a1 1 0 110 2zm-2 4.5a.5.5 0 01-.5.5h-7a.5.5 0 010-1h7a.5.5 0 01.5.5z').toAbs().round(1000).encode(), 'M12 5H10V3H2V7A4 4 0 0 0 9.45 9H12A2 2 0 1 0 12 5zM12 8H9.86A4 4 0 0 0 10 7V6H12A1 1 0 1 1 12 8zM10 12.5A0.5 0.5 0 0 1 9.5 13H2.5A0.5 0.5 0 0 1 2.5 12H9.5A0.5 0.5 0 0 1 10 12.5z');
    });
  
    it('car', () => {
      assert.equal(new SVGPathData('M14 7a1.5 1.5 0 00-1.15-1.45l-1.39-3.24A.5.5 0 0011 2H4a.5.5 0 00-.44.28L2.15 5.54A1.5 1.5 0 001 7v3.5h1v1a1 1 0 102 0v-1h7v1a1 1 0 102 0v-1h1V7zM4.3 3h6.4l1.05 2.5h-8.5L4.3 3zM3 9a1 1 0 110-2 1 1 0 010 2zm9 0a1 1 0 110-2 1 1 0 010 2z').toAbs().round(1000).encode(), 'M14 7A1.5 1.5 0 0 0 12.85 5.55L11.46 2.31A0.5 0.5 0 0 0 11 2H4A0.5 0.5 0 0 0 3.56 2.28L2.15 5.54A1.5 1.5 0 0 0 1 7V10.5H2V11.5A1 1 0 1 0 4 11.5V10.5H11V11.5A1 1 0 1 0 13 11.5V10.5H14V7zM4.3 3H10.7L11.75 5.5H3.25L4.3 3zM3 9A1 1 0 1 1 3 7A1 1 0 0 1 3 9zM12 9A1 1 0 1 1 12 7A1 1 0 0 1 12 9z');
    });
  
    it('casino', () => {
      assert.equal(new SVGPathData('M8.5 10A2.5 2.5 0 0013 8.5c0-.564-.194-1.079-.509-1.497L12.5 7l-5-6-5 6 .009.003A2.478 2.478 0 002 8.5 2.5 2.5 0 006.5 10l.5-.666V11.5C7 13 4.5 13 4.5 13a.5.5 0 100 1h6a.5.5 0 000-1S8 13 8 11.5V9.334l.5.666z').toAbs().round(1000).encode(), 'M8.5 10A2.5 2.5 0 0 0 13 8.5C13 7.936 12.806 7.421 12.491 7.003L12.5 7L7.5 1L2.5 7L2.509 7.003A2.478 2.478 0 0 0 2 8.5A2.5 2.5 0 0 0 6.5 10L7 9.334V11.5C7 13 4.5 13 4.5 13A0.5 0.5 0 1 0 4.5 14H10.5A0.5 0.5 0 0 0 10.5 13S8 13 8 11.5V9.334L8.5 10z');
    });
  
    it('cross', () => {
      assert.equal(new SVGPathData('M2.64 1.27L7.5 6.13l4.84-4.84A.92.92 0 0113 1a1 1 0 011 1 .9.9 0 01-.27.66L8.84 7.5l4.89 4.89A.9.9 0 0114 13a1 1 0 01-1 1 .92.92 0 01-.69-.27L7.5 8.87l-4.85 4.85A.92.92 0 012 14a1 1 0 01-1-1 .9.9 0 01.27-.66L6.16 7.5 1.27 2.61A.9.9 0 011 2a1 1 0 011-1c.24.003.47.1.64.27z').toAbs().round(1000).encode(), 'M2.64 1.27L7.5 6.13L12.34 1.29A0.92 0.92 0 0 1 13 1A1 1 0 0 1 14 2A0.9 0.9 0 0 1 13.73 2.66L8.84 7.5L13.73 12.39A0.9 0.9 0 0 1 14 13A1 1 0 0 1 13 14A0.92 0.92 0 0 1 12.31 13.73L7.5 8.87L2.65 13.72A0.92 0.92 0 0 1 2 14A1 1 0 0 1 1 13A0.9 0.9 0 0 1 1.27 12.34L6.16 7.5L1.27 2.61A0.9 0.9 0 0 1 1 2A1 1 0 0 1 2 1C2.24 1.003 2.47 1.1 2.64 1.27z');
    });
  });

  describe('octicons', () => {
    it('broadcast', () => {
      assert.equal(new SVGPathData('M9 9H8c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1H6c-.55 0-1 .45-1 1v2h1v3c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-3h1v-2c0-.55-.45-1-1-1zM7 7h1v1H7V7zm2 4H8v4H7v-4H6v-1h3v1zm2.09-3.5c0-1.98-1.61-3.59-3.59-3.59A3.593 3.593 0 004 8.31v1.98c-.61-.77-1-1.73-1-2.8 0-2.48 2.02-4.5 4.5-4.5S12 5.01 12 7.49c0 1.06-.39 2.03-1 2.8V8.31c.06-.27.09-.53.09-.81zm3.91 0c0 2.88-1.63 5.38-4 6.63v-1.05a6.553 6.553 0 003.09-5.58A6.59 6.59 0 007.5.91 6.59 6.59 0 00.91 7.5c0 2.36 1.23 4.42 3.09 5.58v1.05A7.497 7.497 0 017.5 0C11.64 0 15 3.36 15 7.5z').toAbs().round(1000).encode(), 'M9 9H8C8.55 9 9 8.55 9 8V7C9 6.45 8.55 6 8 6H7C6.45 6 6 6.45 6 7V8C6 8.55 6.45 9 7 9H6C5.45 9 5 9.45 5 10V12H6V15C6 15.55 6.45 16 7 16H8C8.55 16 9 15.55 9 15V12H10V10C10 9.45 9.55 9 9 9zM7 7H8V8H7V7zM9 11H8V15H7V11H6V10H9V11zM11.09 7.5C11.09 5.52 9.48 3.91 7.5 3.91A3.593 3.593 0 0 0 4 8.31V10.29C3.39 9.52 3 8.56 3 7.49C3 5.01 5.02 2.99 7.5 2.99S12 5.01 12 7.49C12 8.55 11.61 9.52 11 10.29V8.31C11.06 8.04 11.09 7.78 11.09 7.5zM15 7.5C15 10.38 13.37 12.88 11 14.13V13.08A6.553 6.553 0 0 0 14.09 7.5A6.59 6.59 0 0 0 7.5 0.91A6.59 6.59 0 0 0 0.91 7.5C0.91 9.86 2.14 11.92 4 13.08V14.13A7.497 7.497 0 0 1 7.5 0C11.64 0 15 3.36 15 7.5z');
    });

    it('dashboard', () => {
      assert.equal(new SVGPathData('M9 5H8V4h1v1zm4 3h-1v1h1V8zM6 5H5v1h1V5zM5 8H4v1h1V8zm11-5.5l-.5-.5L9 7c-.06-.02-1 0-1 0-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-.92l6-5.58zm-1.59 4.09c.19.61.3 1.25.3 1.91 0 3.42-2.78 6.2-6.2 6.2-3.42 0-6.21-2.78-6.21-6.2 0-3.42 2.78-6.2 6.2-6.2 1.2 0 2.31.34 3.27.94l.94-.94A7.459 7.459 0 008.51 1C4.36 1 1 4.36 1 8.5 1 12.64 4.36 16 8.5 16c4.14 0 7.5-3.36 7.5-7.5 0-1.03-.2-2.02-.59-2.91l-1 1z').toAbs().round(1000).encode(), 'M9 5H8V4H9V5zM13 8H12V9H13V8zM6 5H5V6H6V5zM5 8H4V9H5V8zM16 2.5L15.5 2L9 7C8.94 6.98 8 7 8 7C7.45 7 7 7.45 7 8V9C7 9.55 7.45 10 8 10H9C9.55 10 10 9.55 10 9V8.08L16 2.5zM14.41 6.59C14.6 7.2 14.71 7.84 14.71 8.5C14.71 11.92 11.93 14.7 8.51 14.7C5.09 14.7 2.3 11.92 2.3 8.5C2.3 5.08 5.08 2.3 8.5 2.3C9.7 2.3 10.81 2.64 11.77 3.24L12.71 2.3A7.459 7.459 0 0 0 8.51 1C4.36 1 1 4.36 1 8.5C1 12.64 4.36 16 8.5 16C12.64 16 16 12.64 16 8.5C16 7.47 15.8 6.48 15.41 5.59L14.41 6.59z');
    });

    it('dependent', () => {
      assert.equal(new SVGPathData('M1 1h7.5l2 2H9L8 2H1v12h10v-1h1v1c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1zm9 6h3v1h-3V7zm2 2h-2v1h2V9zM8.583 4h4.375L15 6v5.429a.58.58 0 01-.583.571H8.583A.58.58 0 018 11.429V10h1v1h5V6.5L12.5 5H9v1H8V4.571A.58.58 0 018.583 4zM9.5 7H6.667V5l-4 3 4 3V9H9.5V7z').toAbs().round(1000).encode(), 'M1 1H8.5L10.5 3H9L8 2H1V14H11V13H12V14C12 14.55 11.55 15 11 15H1C0.45 15 0 14.55 0 14V2C0 1.45 0.45 1 1 1zM10 7H13V8H10V7zM12 9H10V10H12V9zM8.583 4H12.958L15 6V11.429A0.58 0.58 0 0 1 14.417 12H8.583A0.58 0.58 0 0 1 8 11.429V10H9V11H14V6.5L12.5 5H9V6H8V4.571A0.58 0.58 0 0 1 8.583 4zM9.5 7H6.667V5L2.667 8L6.667 11V9H9.5V7z');
    });

    it('kebab-vertical', () => {
      assert.equal(new SVGPathData('M0 2.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm0 5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM1.5 14a1.5 1.5 0 110-3 1.5 1.5 0 010 3z').toAbs().round(1000).encode(), 'M0 2.5A1.5 1.5 0 1 0 3 2.5A1.5 1.5 0 0 0 0 2.5zM0 7.5A1.5 1.5 0 1 0 3 7.5A1.5 1.5 0 0 0 0 7.5zM1.5 14A1.5 1.5 0 1 1 1.5 11A1.5 1.5 0 0 1 1.5 14z');
    });

    it('of kaptinlin bug report unicons voicemail-rectangle', () => {
      assert.equal(new SVGPathData('M20 4H4a3 3 0 00-3 3v10a3 3 0 003 3h16a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1h16a1 1 0 011 1zm-5-8a3 3 0 00-2.82 4h-2.36A3 3 0 108 15h8a3 3 0 000-6zm-8 4a1 1 0 111-1 1 1 0 01-1 1zm8 0a1 1 0 111-1 1 1 0 01-1 1z').toAbs().round(1000).encode(), 'M20 4H4A3 3 0 0 0 1 7V17A3 3 0 0 0 4 20H20A3 3 0 0 0 23 17V7A3 3 0 0 0 20 4zM21 17A1 1 0 0 1 20 18H4A1 1 0 0 1 3 17V7A1 1 0 0 1 4 6H20A1 1 0 0 1 21 7zM16 9A3 3 0 0 0 13.18 13H10.82A3 3 0 1 0 8 15H16A3 3 0 0 0 16 9zM8 13A1 1 0 1 1 9 12A1 1 0 0 1 8 13zM16 13A1 1 0 1 1 17 12A1 1 0 0 1 16 13z');
    });

    it('of kaptinlin bug report unicons venus', () => {
      assert.equal(new SVGPathData('M19 9a7 7 0 10-8 6.92V18h-1a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2h-1v-2.08A7 7 0 0019 9zm-7 5a5 5 0 115-5 5 5 0 01-5 5z').toAbs().round(1000).encode(), 'M19 9A7 7 0 1 0 11 15.92V18H10A1 1 0 0 0 10 20H11V21A1 1 0 0 0 13 21V20H14A1 1 0 0 0 14 18H13V15.92A7 7 0 0 0 19 9zM12 14A5 5 0 1 1 17 9A5 5 0 0 1 12 14z');
    });

    it('of kaptinlin bug report unicons vector-square', () => {
      assert.equal(new SVGPathData('M20 16.18V7.82A3 3 0 1016.18 4H7.82A3 3 0 104 7.82v8.36A3 3 0 107.82 20h8.36A3 3 0 1020 16.18zM19 4a1 1 0 11-1 1 1 1 0 011-1zM5 4a1 1 0 11-1 1 1 1 0 011-1zm0 16a1 1 0 111-1 1 1 0 01-1 1zm11.18-2H7.82A3 3 0 006 16.18V7.82A3 3 0 007.82 6h8.36A3 3 0 0018 7.82v8.36A3 3 0 0016.18 18zM19 20a1 1 0 111-1 1 1 0 01-1 1z').toAbs().round(1000).encode(), 'M20 16.18V7.82A3 3 0 1 0 16.18 4H7.82A3 3 0 1 0 4 7.82V16.18A3 3 0 1 0 7.82 20H16.18A3 3 0 1 0 20 16.18zM19 4A1 1 0 1 1 18 5A1 1 0 0 1 19 4zM5 4A1 1 0 1 1 4 5A1 1 0 0 1 5 4zM5 20A1 1 0 1 1 6 19A1 1 0 0 1 5 20zM16.18 18H7.82A3 3 0 0 0 6 16.18V7.82A3 3 0 0 0 7.82 6H16.18A3 3 0 0 0 18 7.82V16.18A3 3 0 0 0 16.18 18zM19 20A1 1 0 1 1 20 19A1 1 0 0 1 19 20z');
    });

    it('of kaptinlin bug report unicons user', () => {
      assert.equal(new SVGPathData('M15.71 12.71a6 6 0 10-7.42 0 10 10 0 00-6.22 8.18 1 1 0 002 .22 8 8 0 0115.9 0 1 1 0 001 .89h.11a1 1 0 00.88-1.1 10 10 0 00-6.25-8.19zM12 12a4 4 0 114-4 4 4 0 01-4 4z').toAbs().round(1000).encode(), 'M15.71 12.71A6 6 0 1 0 8.29 12.71A10 10 0 0 0 2.07 20.89A1 1 0 0 0 4.07 21.11A8 8 0 0 1 19.97 21.11A1 1 0 0 0 20.97 22H21.08A1 1 0 0 0 21.96 20.9A10 10 0 0 0 15.71 12.71zM12 12A4 4 0 1 1 16 8A4 4 0 0 1 12 12z');
    });

    it('of kaptinlin bug report unicons user-plus', () => {
      assert.equal(new SVGPathData('M21 10.5h-1v-1a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2zm-7.7 1.72A4.92 4.92 0 0015 8.5a5 5 0 00-10 0 4.92 4.92 0 001.7 3.72A8 8 0 002 19.5a1 1 0 002 0 6 6 0 0112 0 1 1 0 002 0 8 8 0 00-4.7-7.28zM10 11.5a3 3 0 113-3 3 3 0 01-3 3z').toAbs().round(1000).encode(), 'M21 10.5H20V9.5A1 1 0 0 0 18 9.5V10.5H17A1 1 0 0 0 17 12.5H18V13.5A1 1 0 0 0 20 13.5V12.5H21A1 1 0 0 0 21 10.5zM13.3 12.22A4.92 4.92 0 0 0 15 8.5A5 5 0 0 0 5 8.5A4.92 4.92 0 0 0 6.7 12.22A8 8 0 0 0 2 19.5A1 1 0 0 0 4 19.5A6 6 0 0 1 16 19.5A1 1 0 0 0 18 19.5A8 8 0 0 0 13.3 12.22zM10 11.5A3 3 0 1 1 13 8.5A3 3 0 0 1 10 11.5z');
    });
  });
});
