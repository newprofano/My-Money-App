const _ = require('lodash');

module.exports = (req, res, next) => {
  const bundle = res.locals.bundle;

  if (bundle.errors) {
    const erros = partseErrors(bundle.errors);
    res.status(500).json({ erros });
  } else {
    next();
  }
};

const partseErrors = nodeRestfulErrors => {
  const errors = [];

  _.forIn(nodeRestfulErrors, error => errors.push(error.message));
  return errors;
};
