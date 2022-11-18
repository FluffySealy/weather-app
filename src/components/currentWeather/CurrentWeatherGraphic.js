import React from "react";

function CurrentWeatherGraphic() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" id="weather-graphic">
      <svg width="100%" height="100%" viewBox="0 0 519.563 562.851"
        aria-labelledby="sun-vector-title sun-vector-desc">
        <title id="sun-vector-title">Sun</title>
        <desc id="sun-vector-desc">an image of a Sun.</desc>
        <defs>
          <filter id="Sun">
            <feOffset dx="-8" dy="10" input="SourceAlpha"></feOffset>
            <feGaussianBlur stdDeviation="7" result="blur"></feGaussianBlur>
            <feFlood floodColor="#ffe200" floodOpacity="0.698" result="color"></feFlood>
            <feComposite operator="out" in="SourceGraphic" in2="blur"></feComposite>
            <feComposite operator="in" in="color"></feComposite>
            <feComposite operator="in" in2="SourceGraphic"></feComposite>
          </filter>



        </defs>
        <g id="Component_Sun" data-name="Component_Sun" transform="translate(48 8.274)">
          <g id="Sun-2" data-name="Sun" transform="matrix(0.999, 0.035, -0.035, 0.999, 205.779, 0)">
            <g data-type="innerShadowGroup">
              <circle id="Sun-3" data-name="Sun" cx="94.798" cy="94.798" r="94.798" transform="translate(20.17 20.17)"
                fill="#ffab0b"></circle>
              <g transform="matrix(1, -0.03, 0.03, 1, -253.91, 0.59)" filter="url(#Sun)">
                <circle id="Sun-4" data-name="Sun" cx="94.798" cy="94.798" r="94.798"
                  transform="matrix(1, 0.03, -0.03, 1, 273.23, 29.14)" fill="#fff"></circle>
              </g>
            </g>
            <circle id="Sun-5" data-name="Sun" cx="114.967" cy="114.967" r="114.967" transform="translate(0 0)"
              fill="none" stroke="#ffd800" strokeLinecap="round" strokeWidth="16" strokeDasharray="0 61"></circle>
          </g>


        </g>
      </svg><svg width="100%" height="100%" viewBox="0 0 519.563 562.851"
        aria-labelledby="cloud-vector-title cloud-vector-desc">
        <title id="cloud-vector-title">Cloud</title>
        <desc id="cloud-vector-desc">an image of a cloud.</desc>
        <defs>

          <radialGradient id="radial-gradient" cx="0.372" cy="0.208" r="0.609"
            gradientTransform="translate(0 -0.125) scale(1 1.251)" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#fff"></stop>
            <stop offset="1" stopColor="#94b2d5"></stop>
          </radialGradient>
          <filter id="Cloud" x="0" y="62.743" width="519.563" height="394.51" filterUnits="userSpaceOnUse">
            <feOffset dy="36" input="SourceAlpha"></feOffset>
            <feGaussianBlur stdDeviation="16" result="blur-2"></feGaussianBlur>
            <feFlood floodColor="#002a5c" floodOpacity="0.161"></feFlood>
            <feComposite operator="in" in2="blur-2"></feComposite>
            <feComposite in="SourceGraphic"></feComposite>
          </filter>
          <filter id="Cloud-2" x="0" y="62.743" width="519.563" height="394.51" filterUnits="userSpaceOnUse">
            <feOffset dx="1" dy="2" input="SourceAlpha"></feOffset>
            <feGaussianBlur stdDeviation="7" result="blur-3"></feGaussianBlur>
            <feFlood floodColor="#fff" result="color-2"></feFlood>
            <feComposite operator="out" in="SourceGraphic" in2="blur-3"></feComposite>
            <feComposite operator="in" in="color-2"></feComposite>
            <feComposite operator="in" in2="SourceGraphic"></feComposite>
          </filter>
        </defs>
        <g id="Component_Cloud" data-name="Component_Cloud" transform="translate(48 8.274)">

          <g data-type="innerShadowGroup">
            <g transform="matrix(1, 0, 0, 1, -48, -8.27)" filter="url(#Cloud)">
              <path id="Cloud-3" data-name="Cloud"
                d="M70.594,298.51a70.6,70.6,0,0,1-37.17-130.62A149.287,149.287,0,0,1,320.538,94.8c.391,0,.777-.007,1.168-.007a101.857,101.857,0,0,1,1.008,203.709v0Z"
                transform="translate(48 74.74)" fill="url(#radial-gradient)"></path>
            </g>
            <g transform="matrix(1, 0, 0, 1, -48, -8.27)" filter="url(#Cloud-2)">
              <path id="Cloud-4" data-name="Cloud"
                d="M70.594,298.51a70.6,70.6,0,0,1-37.17-130.62A149.287,149.287,0,0,1,320.538,94.8c.391,0,.777-.007,1.168-.007a101.857,101.857,0,0,1,1.008,203.709v0Z"
                transform="translate(48 74.74)" fill="#fff"></path>
            </g>
          </g>

        </g>
      </svg>
      <svg width="100%" height="100%" viewBox="0 0 519.563 562.851"
        aria-labelledby="raindrops-vector-title raindrops-vector-desc">
        <title id="raindrops-vector-title">Raindrops</title>
        <desc id="raindrops-vector-desc">an image of raindrops.</desc>
        <defs>

          <radialGradient id="radial-gradient" cx="0.372" cy="0.208" r="0.609"
            gradientTransform="translate(0 -0.125) scale(1 1.251)" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#fff"></stop>
            <stop offset="1" stopColor="#94b2d5"></stop>
          </radialGradient>
          <filter id="Cloud" x="0" y="62.743" width="519.563" height="394.51" filterUnits="userSpaceOnUse">
            <feOffset dy="36" input="SourceAlpha"></feOffset>
            <feGaussianBlur stdDeviation="16" result="blur-2"></feGaussianBlur>
            <feFlood floodColor="#002a5c" floodOpacity="0.161"></feFlood>
            <feComposite operator="in" in2="blur-2"></feComposite>
            <feComposite in="SourceGraphic"></feComposite>
          </filter>
          <filter id="Cloud-2" x="0" y="62.743" width="519.563" height="394.51" filterUnits="userSpaceOnUse">
            <feOffset dx="1" dy="2" input="SourceAlpha"></feOffset>
            <feGaussianBlur stdDeviation="7" result="blur-3"></feGaussianBlur>
            <feFlood floodColor="#fff" result="color-2"></feFlood>
            <feComposite operator="out" in="SourceGraphic" in2="blur-3"></feComposite>
            <feComposite operator="in" in="color-2"></feComposite>
            <feComposite operator="in" in2="SourceGraphic"></feComposite>
          </filter>
        </defs>
        <g id="Component_Rain" data-name="Component_Rain" transform="translate(48 8.274)">


          <g id="Rain" transform="translate(89.753 385.147)" >
            <path id="Line_4" data-name="Line 4"
              d="M6.6,82.249A13.113,13.113,0,0,1-4.567,62.286,13.425,13.425,0,0,1,13.652,57.65a12.806,12.806,0,0,1,4.516,17.72l-.379.618A13.1,13.1,0,0,1,6.6,82.249ZM34.381,36.92A13.113,13.113,0,0,1,23.216,16.957L33.756-.24a13.11,13.11,0,1,1,22.356,13.7l-10.54,17.2A13.1,13.1,0,0,1,34.381,36.92Z"
              transform="translate(6.501 6.502)" fill="#fff"></path>
            <path id="Line_5" data-name="Line 5"
              d="M6.6,162.929A13.114,13.114,0,0,1-4.773,143.315l1.762-3.085a13.11,13.11,0,1,1,22.769,13L18,156.318A13.106,13.106,0,0,1,6.6,162.929Zm21.766-38.115A13.114,13.114,0,0,1,16.993,105.2L37,70.17a13.11,13.11,0,1,1,22.769,13l-20,35.03A13.106,13.106,0,0,1,28.365,124.814Zm40.009-70.06A13.114,13.114,0,0,1,57,35.14l20-35.03a13.11,13.11,0,1,1,22.769,13l-20,35.03A13.106,13.106,0,0,1,68.374,54.754Z"
              transform="translate(38.772 6.501)" fill="#fff"></path>
            <path id="Line_6" data-name="Line 6"
              d="M9.344,126.385A13.115,13.115,0,0,1-2.2,107.078L16.859,71.524a13.11,13.11,0,0,1,23.11,12.388L20.91,119.466A13.109,13.109,0,0,1,9.344,126.385ZM47.461,55.278A13.115,13.115,0,0,1,35.917,35.971L54.976.418a13.11,13.11,0,1,1,23.11,12.388L59.027,48.359A13.109,13.109,0,0,1,47.461,55.278Z"
              transform="translate(136.36 6.501)" fill="#fff"></path>
          </g>
        </g>
      </svg>
    </svg>
    );
  }
  export default CurrentWeatherGraphic;