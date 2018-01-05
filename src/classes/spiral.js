import { TimelineMax } from 'gsap';
export function animatePortrait(image) {
  const tl = new TimelineMax();
  const portraitDestination = getPortraitDestination();
  const intermediatePositions = getIntermediatePositions(portraitDestination);
  tl.to(image, 3, { bezier: intermediatePositions });
}

function getPortraitDestination() {
  return {
    x: window.innerWidth/2 + 100,
    y: 50 + 100 + 200,
  };
}

function getIntermediatePositions(destination) {

  const position2 = {
    x: destination.x + 25,
    y: destination.y + 25,
  };

  const position1 = {
    x: destination.x,
    y: destination.y + 50,
  };

  return [position1, position2, destination];
}