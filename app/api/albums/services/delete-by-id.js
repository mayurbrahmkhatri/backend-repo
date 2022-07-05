const { albumsDao: { deleteById } } = require('../../../commons/db/dao');
const logger = require('../../../logger');
const { messages } = require('../../../commons/util');
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */
module.exports = async (req, resp, next) => {
  const { id } = req.params;
  try {
    await deleteById(id);

    resp.status(200).send(messages('deleteAlbumById'));
  } catch (error) {
    logger.log('Error in delete album Service ', error);
    next(error);
  }
};
