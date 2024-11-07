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

const calculateShapeArea = (shape: Shape): number => {
  if (shape.shape === "circle") {
    const result = Math.PI * shape.radius * shape.radius;
    return Number(result.toFixed(2));
  } else {
    const result = shape.width * shape.height;
    return result;
  }
};
