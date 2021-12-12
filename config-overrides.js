const { alias } = require("react-app-rewire-alias");

module.export = function override(config) {
    alias({
        "@components": "src/components",
    })(config);
    return config;
};