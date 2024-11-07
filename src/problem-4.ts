interface Circle {
  shape: "circle";
  radius: number;
}

interface Rectangle {
  shape: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Rectangle;

const calculateShapeArea = (shape: Shape) => {
  if (shape.shape === "circle") {
    const result = Math.PI * shape.radius * shape.radius;
    return result;
  } else {
    const result = shape.width * shape.height;
    return result;
  }
};
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });
// console.log("rectangleArea:", rectangleArea);
