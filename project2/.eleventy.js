module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("styles");

  // Copy favicon if you decide to add one
  eleventyConfig.addPassthroughCopy("favicon.ico");

  return {
    dir: {
      input: ".",          // Root directory contains content
      includes: "_includes", // Templates/layouts folder
      output: "_site"        // Final site output
    }
  };
};
