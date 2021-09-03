const success = {
  mock: {
    ok: true,
    status: 200,
    data: {
      result: [
        {
          dealsheetNumber: 'V30KA25804',
          dealDescription: 'ALCATEL 1S AGATE GREEN + 10GB DATA X 7 DAYS - (C) + VIDEO TICKET - 3 MONTHS - 1GB @ R169 PM (R40 Finance + R129 Sub on MyRed 500MB 50min',
          dealType: null,
          numberOfAccessory: '0',
          packageCode: 'RD1',
          pricePlan: 'MyRed 500MB 50min',
          tarriffDescription: 'MyRed 500MB 50min',
          addDate: '2020-11-01 13:06:28.0',
          fromDate: '2020-11-06',
          toDate: '2020-12-06',
          contractMonths: 24,
          numberOfPhones: 1,
          financedHnadset: 'Y',
          stockCode: '104047882',
          device: '104047882',
          secondaryProductCode: 104047882,
          handsetInstallment: 40,
          subscriptionValue: 129,
          dealValue: 169,
          groupId: 'ALCATEL-1S',
          channel: 'VODASH',
          cashPayIn: 0
        },
        {
          dealsheetNumber: 'V30KA25805',
          dealDescription: 'ALCATEL 1S AGATE GREEN + 10GB DATA X 7 DAYS - (C) + VIDEO TICKET - 3 MONTHS - 1GB @ R269PM on MyRed 1GB 75min',
          dealType: null,
          numberOfAccessory: '0',
          packageCode: 'RD2',
          pricePlan: 'MyRed 1GB 75min',
          tarriffDescription: 'MyRed 1GB 75min',
          addDate: '2020-11-09 14:25:43.0',
          fromDate: '2020-11-06',
          toDate: '2020-12-06',
          contractMonths: 24,
          numberOfPhones: 1,
          financedHnadset: 'N',
          stockCode: '104047882',
          device: '104047882',
          secondaryProductCode: 104047882,
          handsetInstallment: null,
          subscriptionValue: 279,
          dealValue: null,
          groupId: 'ALCATEL-1S',
          channel: 'VODASH',
          cashPayIn: 0
        },
        {
          dealsheetNumber: 'V30KA25806',
          dealDescription: 'ALCATEL 1S AGATE GREEN + 10GB DATA X 7 DAYS - (C) + VIDEO TICKET - 3 MONTHS - 1GB @ R319 Reduced Sub PM on MyRed 1GB 150min',
          dealType: null,
          numberOfAccessory: '0',
          packageCode: 'RD3',
          pricePlan: 'MyRed 1GB 150min',
          tarriffDescription: 'MyRed 1GB 150min',
          addDate: '2020-11-09 14:25:44.0',
          fromDate: '2020-11-06',
          toDate: '2020-12-06',
          contractMonths: 24,
          numberOfPhones: 1,
          financedHnadset: 'Y',
          stockCode: '104047882',
          device: '104047882',
          secondaryProductCode: 104047882,
          handsetInstallment: -10,
          subscriptionValue: 339,
          dealValue: 329,
          groupId: 'ALCATEL-1S',
          channel: 'VODASH',
          cashPayIn: 0
        }
      ]
    }
  }
};

const expected = {
  data: {
    result: [
      {
        dealsheetNumber: 'V30KA25804',
        dealDescription: 'ALCATEL 1S AGATE GREEN + 10GB DATA X 7 DAYS - (C) + VIDEO TICKET - 3 MONTHS - 1GB @ R169 PM (R40 Finance + R129 Sub on MyRed 500MB 50min',
        dealType: null,
        numberOfAccessory: '0',
        packageCode: 'RD1',
        pricePlan: 'MyRed 500MB 50min',
        tarriffDescription: 'MyRed 500MB 50min',
        addDate: '2020-11-01 13:06:28.0',
        fromDate: '2020-11-06',
        toDate: '2020-12-06',
        contractMonths: 24,
        numberOfPhones: 1,
        financedHnadset: 'Y',
        stockCode: '104047882',
        device: '104047882',
        secondaryProductCode: 104047882,
        handsetInstallment: 40,
        subscriptionValue: 129,
        dealValue: 169,
        groupId: 'ALCATEL-1S',
        channel: 'VODASH',
        cashPayIn: 0
      },
      {
        dealsheetNumber: 'V30KA25805',
        dealDescription: 'ALCATEL 1S AGATE GREEN + 10GB DATA X 7 DAYS - (C) + VIDEO TICKET - 3 MONTHS - 1GB @ R269PM on MyRed 1GB 75min',
        dealType: null,
        numberOfAccessory: '0',
        packageCode: 'RD2',
        pricePlan: 'MyRed 1GB 75min',
        tarriffDescription: 'MyRed 1GB 75min',
        addDate: '2020-11-09 14:25:43.0',
        fromDate: '2020-11-06',
        toDate: '2020-12-06',
        contractMonths: 24,
        numberOfPhones: 1,
        financedHnadset: 'N',
        stockCode: '104047882',
        device: '104047882',
        secondaryProductCode: 104047882,
        handsetInstallment: null,
        subscriptionValue: 279,
        dealValue: null,
        groupId: 'ALCATEL-1S',
        channel: 'VODASH',
        cashPayIn: 0
      },
      {
        dealsheetNumber: 'V30KA25806',
        dealDescription: 'ALCATEL 1S AGATE GREEN + 10GB DATA X 7 DAYS - (C) + VIDEO TICKET - 3 MONTHS - 1GB @ R319 Reduced Sub PM on MyRed 1GB 150min',
        dealType: null,
        numberOfAccessory: '0',
        packageCode: 'RD3',
        pricePlan: 'MyRed 1GB 150min',
        tarriffDescription: 'MyRed 1GB 150min',
        addDate: '2020-11-09 14:25:44.0',
        fromDate: '2020-11-06',
        toDate: '2020-12-06',
        contractMonths: 24,
        numberOfPhones: 1,
        financedHnadset: 'Y',
        stockCode: '104047882',
        device: '104047882',
        secondaryProductCode: 104047882,
        handsetInstallment: -10,
        subscriptionValue: 339,
        dealValue: 329,
        groupId: 'ALCATEL-1S',
        channel: 'VODASH',
        cashPayIn: 0
      }
    ]
  }
};

const failure = {
  mock: {
    ok: false,
    error: {
      response: {
        status: 400,
        statusText: 'Bad Request'
      }
    }
  },
  expected: {
    result: {
      status: 400,
      error: 'Bad Request',
      message: 'Bad Request'
    }
  }
};

module.exports = {
  success,
  failure,
  expected
};
