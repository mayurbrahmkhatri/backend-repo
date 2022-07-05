const { genreDao: { getGenreById } } = require('../../../commons/db/dao');
const { messages } = require('../../../commons/util');
/**
 *
 * @param {*} req
 * @param {*} resp
 * @param {*} next
 */
module.exports = async (req, resp, next) => {
  const id = req.params.genreId;
  try {
    const response = await getGenreById(id);
    const answer = {
      data: response,
      msg: messages('getGenreById'),
      status_code: 200,
    };

    resp.status(200).json(answer);
  } catch (error) {
    console.log('Error in get genre Service ', error);
    next(error);
  }
};
