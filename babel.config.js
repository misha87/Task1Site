const presets = [
  [
    "@babel/env",
    {
      targets: {
        ie: "11"
      },
      useBuiltIns: "entry",
    },
  ],
];

module.exports = { presets };