const layoutTemplate = require('../templates/layoutTemplate');

const articlesTemplate = require('../templates/articlesTemplate');
const practicesTemplate = require('../templates/practicesTemplate');
const meditationsTemplate = require('../templates/meditationsTemplate');
const podcastsTemplate = require('../templates/podcastsTemplate');

const generateTemplateType = (item, items, type) => {
  switch (type) {
    case 'articles': return articlesTemplate(item, items, type);
    case 'practices': return practicesTemplate(item, items, type);
    case 'meditations': return meditationsTemplate(item, items, type);
    case 'podcasts': return podcastsTemplate(item, items, type);
  }
}

const generateTemplates = (items, type) => {
  for (const item of items) {
    const template = generateTemplateType(item, items, type);
    const templateWithLayout = layoutTemplate(template);

    fse.outputFileSync(`src/content/${type}/${item.slug}.html`, templateWithLayout, [{}]);
  }
};

module.exports = {
  generateTemplates,
}