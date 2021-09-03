function getModelsDetailsHelper(arrayElement) {
  return {
    name: 'model',
    valueType: 'string',
    productSpecCharacteristicValue: {
      value: arrayElement.model
    }
  };
}

module.exports = getModelsDetailsHelper;
