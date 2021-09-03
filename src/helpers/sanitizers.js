function consumptionDetailsSanitizer(
  pastUsageResult) {

  return {
    usageCharacteristic: [
         {
          name: "data",
          value: pastUsageResult.usage.data
         },
         {
          name: "sms",
          value: pastUsageResult.usage.sms
         },
         {
          name: "voice",
          value: pastUsageResult.usage.voice
         },
         {
          name: "averageSpend",
          value: pastUsageResult.billing.averageSpend
         }
      ]
    };

}
module.exports = {
  consumptionDetailsSanitizer
};

