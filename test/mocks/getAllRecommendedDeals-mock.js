
const mockParams = {
  query: {
    accessory: undefined,
    accountDealFlag: undefined,
    channel: 'ONLINE',
    dealValueLowerLimit: undefined,
    dealerGroup: undefined,
    dealerId: undefined,
    dealsheetNumber: undefined,
    device: 'Samsung 10',
    deviceManufacturer: 'Samsung',
    deviceType: undefined,
    duration: undefined,
    financedThresholdAmount: undefined,
    interactSessionId: undefined,
    msisdn: '0811234673',
    pricePlan: undefined,
    rowStart: '0',
    rowEnd: '10',
    simOnly: 'Y',
    sortBy: undefined,
    stockCode: undefined,
    subChannel: undefined,
    tariffLimit: undefined,
    tariffLowerLimit: undefined,
    originID: 'iStore',
    thirdParty: 'Y'
  }
};

const success = {
  mock: {
    ok: true,
    status: 200,
    data:
    {
      dealId: 624026,
      deviceId: 7665,
      cvmCampaignId: '0',
      dealShortDescription: 'Acer Aspire I5 + Extra 2GB data between midnight and 5am & Free R10 000 Top Dog Educational Voucher',
      seoUrl: '/cloud/shopping/product-details/huawei_r218h_mobile_wifi',
      channel: 'CBU',
      message: null,
      dealComponents: null,
      packageDetail: {
        packageId: 1010,
        packageDescription: '2GB  Data Top Up Price Plan',
        packageTypeId: 0,
        includedSms: 0,
        displayTheme: 'Airtime',
        contractType: 'TOPUP_AIRTIME',
        links: []
      },
      specialDeal: null,
      dealsheet: {
        commissionRating: 4,
        dataAllocation: 2448.0,
        dealsheetNumber: 'DV1NN70482',
        deviceManufacturer: 'Samsung',
        deviceTypeSubGroup: 'Other Smart Phone',
        cashPayIn: 0.0,
        multiLineFlag: 'N',
        paymentMethod: 'M',
        nonRemovableVas: [
          {
            nrvAdditionalCommissionRating: 3.0,
            nrvAmount: 1031.0,
            nrvCode: 'VID10003516',
            nrvEppixCode: 'BD081',
            nrvVoiceAllocation: 0.0,
            nrvType: 1
          },
          {
            nrvAdditionalCommissionRating: 1.0,
            nrvAmount: 44.0,
            nrvCode: 'VID10003526',
            nrvEppixCode: 'BV101',
            nrvVoiceAllocation: 50.0,
            nrvType: 2
          }
        ]
      },
      special: false,
      imageUrl: 'https://d134xzevazi2sp.cloudfront.net/content/sales/devices/images/Huawei/Huawei-R218h-Mobile-WiFi-108015144-front-large.png',
      deviceColor: 'White',
      deviceModel: 'Huawei R218h Mobile WiFi',
      links: [
        {
          rel: 'get-device-for-deal',
          href: 'https://vod-ms-zuul-gateway.ms.vodacom.corp:80/cloud/cloud/proxied/vod-ms-devices/public-services/shopping/CBU/device/7665'
        }
      ],
      preSelectedDealModel: null,
      mah: true,
      preSelectedDeal: false
    }
  },
  expected: {
    result:
    {
      dealId: 624026,
      deviceId: 7665,
      cvmCampaignId: '0',
      dealShortDescription: 'Acer Aspire I5 + Extra 2GB data between midnight and 5am & Free R10 000 Top Dog Educational Voucher',
      seoUrl: '/cloud/shopping/product-details/huawei_r218h_mobile_wifi',
      channel: 'CBU',
      message: null,
      dealComponents: null,
      packageDetail: {
        packageId: 1010,
        packageDescription: '2GB  Data Top Up Price Plan',
        packageTypeId: 0,
        includedSms: 0,
        displayTheme: 'Airtime',
        contractType: 'TOPUP_AIRTIME',
        links: []
      },
      specialDeal: null,
      dealsheet: {
        commissionRating: 4,
        dataAllocation: 2448.0,
        dealsheetNumber: 'DV1NN70482',
        deviceManufacturer: 'Samsung',
        deviceTypeSubGroup: 'Other Smart Phone',
        cashPayIn: 0.0,
        multiLineFlag: 'N',
        paymentMethod: 'M',
        nonRemovableVas: [
          {
            nrvAdditionalCommissionRating: 3.0,
            nrvAmount: 1031.0,
            nrvCode: 'VID10003516',
            nrvEppixCode: 'BD081',
            nrvVoiceAllocation: 0.0,
            nrvType: 1
          },
          {
            nrvAdditionalCommissionRating: 1.0,
            nrvAmount: 44.0,
            nrvCode: 'VID10003526',
            nrvEppixCode: 'BV101',
            nrvVoiceAllocation: 50.0,
            nrvType: 2
          }
        ]
      },
      special: false,
      imageUrl: 'https://d134xzevazi2sp.cloudfront.net/content/sales/devices/images/Huawei/Huawei-R218h-Mobile-WiFi-108015144-front-large.png',
      deviceColor: 'White',
      deviceModel: 'Huawei R218h Mobile WiFi',
      links: [
        {
          rel: 'get-device-for-deal',
          href: 'https://vod-ms-zuul-gateway.ms.vodacom.corp:80/cloud/cloud/proxied/vod-ms-devices/public-services/shopping/CBU/device/7665'
        }
      ],
      preSelectedDealModel: null,
      mah: true,
      preSelectedDeal: false
    }
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
  mockParams,
  success,
  failure
};
