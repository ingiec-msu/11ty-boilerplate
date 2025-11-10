export default function(eleventyConfig) {
  // Copy /styles folder to _site/styles
  eleventyConfig.addPassthroughCopy("styles");

  return {
    dir: {
      input: ".",          // where index.liquid and pages are
      includes: "_includes",
      output: "_site"
    }
  };
}
