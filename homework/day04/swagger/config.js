export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "비타민이 모자라",
      version: "1.0.0",
    },
  },
  apis: ["./swagger/*.swagger.js"], // files containing annotations as above
};
