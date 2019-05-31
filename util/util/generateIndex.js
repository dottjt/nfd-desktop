const layoutTemplate = require('../templates/layoutTemplate');

const generateTemplates = (articles, practices, items, type) => {
  for (const item of items) {
    const template = generateTemplateType(item, items, type);
    const templateWithLayout = layoutTemplate(template);

    fse.outputFileSync(`src/content/${type}/${item.slug}.html`, templateWithLayout, [{}]);
  }
};

module.exports = {
  generateTemplates,
}