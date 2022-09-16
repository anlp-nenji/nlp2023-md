module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bootstrap/**/*.js");
  eleventyConfig.addPassthroughCopy("bootstrap/css/bootstrap.min.css");
  eleventyConfig.addPassthroughCopy("bootstrap/css/bootstrap-responsive.min.css");
  
  eleventyConfig.addPassthroughCopy("css/normalize.css");
  eleventyConfig.addPassthroughCopy("css/nlp20XX.css");

  // リポジトリのルートに配置されたフォルダ(./img/, ./logo/)から画像を参照します
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("logo");

  return {
    dir: {
      input: "src",
      output: "public",
    },
    markdownTemplateEngine: "njk",
  };
};
