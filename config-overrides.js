const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
    alias({
        "@app": "src/app",
        "@components": "src/app/components"
    })(config);
    return config;
};