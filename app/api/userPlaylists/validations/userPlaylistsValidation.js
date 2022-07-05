const { userPlaylistsSchema } = require('./usePlaylistsSchema');

module.exports = {
  userPlaylistsSchema: async (req, res, next) => {
    const value = await userPlaylistsSchema.validate(req.body);
    if (value.error) {
      res.json({
        success: 0,
        message: value.error.details[0].message,
        status_code: 400,
      });
    } else {
      next();
    }
  },
};
