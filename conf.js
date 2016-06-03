exports.config = {
    framework: "jasmine2",
    seleniumAddress: "http://localhost:4444/wd/hub",
    specs: [
        "./tests/random.js"
    ],
    onPrepare: function() {
        browser.driver.manage().window().maximize();
    },
    capabilities: {
        browserName: "chrome",
    }
};
