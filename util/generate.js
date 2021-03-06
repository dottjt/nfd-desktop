const axios = require('axios');
const lodash = require('lodash');

const { ARTICLES_URL, PRACTICES_URL, PODCASTS_URL, MEDITATIONS_URL } = require('./const');

const {
  generateTemplates,
} = require('./util/generateTemplates');

const generateArticlesContent = async () => {
  try {
    const response = await axios.get(ARTICLES_URL);
    const items = response.data.data.articles;

    generateTemplates(items, 'articles');
  } catch (error) {
    throw new Error(`generateArticlesContent - ${error}`);
  }
};

const generateArticlesContent = async () => {
  try {
    const response = await axios.get(ARTICLES_URL);
    const items = response.data.data.articles;

    generateTemplates(items, 'articles');
  } catch (error) {
    throw new Error(`generateArticlesContent - ${error}`);
  }
};

const generatePracticesContent = async () => {
  try {
    const response = await axios.get(PRACTICES_URL);
    const items = response.data.data.practices;

    generateTemplates(items, 'practices');
  } catch (error) {
    throw new Error(`generatePracticesContent - ${error}`);
  }
};

const generatePodcastsContent = async () => {
  try {
    const response = await axios.get(PODCASTS_URL);
    const items = response.data.data.podcasts;

    generateTemplates(items, 'podcasts');
  } catch (error) {
    throw new Error(`generatePodcastsContent - ${error}`);
  }
};

const generateMeditationsContent = async () => {
  try {
    const response = await axios.get(MEDITATIONS_URL);
    const items = response.data.data.meditations;

    generateTemplates(items, 'meditations');
  } catch (error) {
    throw new Error(`generateMeditationsContent - ${error}`);
  }
};

generateArticlesContent();
generatePracticesContent();
generatePodcastsContent();
generateMeditationsContent();
