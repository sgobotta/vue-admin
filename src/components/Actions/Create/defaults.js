
/**
 * Defaults - Default attributes for the Create view
 *
 * @return {Object} An object containing props and methods
 */
export default () => {
  /**
   * Create View default validations
   */
  const composer = {
    parentPropKeys: [
      'resourceName',
      'redirect',
      'va',
    ],
    childrenAdapter: {
      placeHolder: 'placeHolder',
      source: 'label',
    },
  };

  return {
    composer,
  };
};
