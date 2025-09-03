const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true, // 👈 enables CSS with NativeWind
});

module.exports = config;
