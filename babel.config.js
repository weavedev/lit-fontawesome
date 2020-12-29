module.exports = {
    "env": {
        "test": {
            "presets": [
                ["@babel/preset-env", { "modules": "commonjs" }]
            ]
        }
    },
    "plugins": [
        ["@babel/plugin-transform-runtime", {
            "regenerator": true
        }]
    ]
}
