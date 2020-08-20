const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

// index, show, store, update, destroy

module.exports = {
  async index(request, response) {
    const devs = await Dev.find();

    return response.json(devs);
  },
  async store(request, response) {
    const { githubUsername, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ githubUsername });

    if (!dev) {
      const apiResponse = await axios.get(
        `https://api.github.com/users/${githubUsername}`,
      );
      // eslint-disable-next-line no-undef
      const { name = login, avatarUrl, bio } = apiResponse.data;
      const techsArray = parseStringAsArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      dev = await Dev.create({
        githubUsername,
        name,
        avatarUrl,
        bio,
        techs: techsArray,
        location,
      });

      const sendSocketMessageTo = findConnections(
        { latitude, longitude },
        techsArray,
      );

      sendMessage(sendSocketMessageTo, 'new-dev', dev);
    }

    return response.status(201).send(dev);
  },
  async update(request, response) {
    // const { id } = request.params;

    return response.status(200).send('Ok');
  },
};
