// from https://www.zomato.com/ncr/order-food-online?delivery_subzone=514

export const headers = {
"Accept": '*/*',
"Accept-Encoding":" gzip, deflate, br",
"Accept-Language": "en-US,en;q=0.9",
"Connection": "keep-alive",
"Content-Length": "1583",
"Content-Type": "application/json",
"Cookie": "PHPSESSID=18e3b380d006f2b29653c2f970265d17; csrf=a8fd1371973650e155438d34e23de4b5; fbcity=1; fre=0; rd=1380000; zl=en; fbtrack=54943de2e2be9933dfeecc99da229bec; ltv=110; lty=110; locus=%7B%22addressId%22%3A0%2C%22lat%22%3A28.626451%2C%22lng%22%3A77.213013%2C%22cityId%22%3A1%2C%22ltv%22%3A110%2C%22lty%22%3A%22subzone%22%2C%22fetchFromGoogle%22%3Afalse%2C%22dszId%22%3A514%7D; _gcl_au=1.1.712668233.1706351244; _gid=GA1.2.791312557.1706351244; _fbp=fb.1.1706351247204.431455638; ak_bmsc=EA2841A498430A51A3B493EE8B1BEDF3~000000000000000000000000000000~YAAQlmPUF5qINT+NAQAAD9dUSxYFtBQZ+sQEoU5m+HZHs63ansT3QbvfpidiVQdgCo46RWZh8mPMXARaLixndVCH3lhOGFzh93tD7F9lMrS3z1FZWICtRgb/6J0V2b7Id1eOR7FB8B4D88YbSwminlJuLPJqxbI07mTEHs/OFjzyvqwW9CNk8x9p9y6qc7tXSQWR/Pj2JnRcPtiN6DPF9Pg/fyjFaaMuMrgmYMrJDlSI/KIwTvGVjOG659C22rl5s2OjVyMgiQjl7HeF+D8lh7uSG2VoYYxjNBlYG+cd1SoVzSwY06bzfKQQOy1hCo3lzfDCIi0zQY0QlKjWguLoZWM5ZivX7krFsJzPLlpvQq40W+mndqh6d4OipKxM; _gat_global=1; _gat_city=1; _gat_country=1; _ga_2XVFHLPTVP=GS1.1.1706365869.2.1.1706366966.59.0.0; _ga=GA1.1.460499966.1706351244; AWSALBTG=SLG6+54XV+ZVo4wFB5rE+GCv08oKsW/m22v2jzq00ULvCs8xQ2ctKIhMAwEzLF4156Hm7Szw9zVj3+tJr8eKVV5uj+BIo9CQ17jCb0qT7qe04zU53CQuBMremmlZ/U7p3Sf5+YdNkOLn70pvZa8gHV0H4MJbctm6bp//Y7oqoHK+; AWSALBTGCORS=SLG6+54XV+ZVo4wFB5rE+GCv08oKsW/m22v2jzq00ULvCs8xQ2ctKIhMAwEzLF4156Hm7Szw9zVj3+tJr8eKVV5uj+BIo9CQ17jCb0qT7qe04zU53CQuBMremmlZ/U7p3Sf5+YdNkOLn70pvZa8gHV0H4MJbctm6bp//Y7oqoHK+; _ga_3NH52KS4KE=GS1.2.1706365871.2.1.1706366967.60.0.0; _ga_X6B66E85ZJ=GS1.2.1706365871.2.1.1706366968.60.0.0",
"Host": "www.zomato.com",
"Origin": "https://www.zomato.com",
"Referer": "https://www.zomato.com/ncr/order-food-online?delivery_subzone=514",
"Sec-Fetch-Dest": "empty",
"Sec-Fetch-Mode": "cors",
"Sec-Fetch-Site": "same-origin",
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
"sec-ch-ua": '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
"sec-ch-ua-mobile": "?0",
"sec-ch-ua-platform": "Windows",
"x-zomato-csrft": "a8fd1371973650e155438d34e23de4b5",
}

export const paylod = {
  "context": "delivery",
  "filters": "{\"searchMetadata\":{\"previousSearchParams\":\"{\\\"PreviousSearchId\\\":\\\"53edab7f-cbc8-458b-bf68-393813aa2192\\\",\\\"PreviousSearchFilter\\\":[\\\"{\\\\\\\"category_context\\\\\\\":\\\\\\\"delivery_home\\\\\\\"}\\\",\\\"\\\"]}\",\"postbackParams\":\"{\\\"processed_chain_ids\\\":[931,20187815,18454466,246,171,18774815,143,1190,19179233],\\\"shown_res_count\\\":9,\\\"search_id\\\":\\\"53edab7f-cbc8-458b-bf68-393813aa2192\\\"}\",\"totalResults\":17562,\"hasMore\":true,\"getInactive\":false},\"dineoutAdsMetaData\":{},\"appliedFilter\":[{\"filterType\":\"category_sheet\",\"filterValue\":\"delivery_home\",\"isHidden\":true,\"isApplied\":true,\"postKey\":\"{\\\"category_context\\\":\\\"delivery_home\\\"}\"}],\"urlParamsForAds\":{}}",
  "addressId": 0,
  "entityId": 110,
  "entityType": "subzone",
  "locationType": "",
  "isOrderLocation": 1,
  "cityId": 1,
  "latitude": "28.6269950000",
  "longitude": "77.2152900000",
  "userDefinedLatitude": 28.626451,
  "userDefinedLongitude": 77.213013,
  "entityName": "Hanuman Road Area, Connaught Place, New Delhi",
  "orderLocationName": "Hanuman Road Area, Connaught Place, New Delhi",
  "cityName": "Delhi NCR",
  "countryId": 1,
  "countryName": "India",
  "displayTitle": "Hanuman Road Area, Connaught Place, New Delhi",
  "o2Serviceable": true,
  "placeId": "ChIJs7xXmkv9DDkRo_1IJRn_4Ys",
  "cellId": "4110939061668020224",
  "deliverySubzoneId": 514,
  "placeType": "GOOGLE_PLACE",
  "placeName": "Hanuman Road Area, Connaught Place, New Delhi",
  "isO2City": true,
  "fetchFromGoogle": false,
  "fetchedFromCookie": true,
  "isO2OnlyCity": false,
  "address_template": [],
  "otherRestaurantsUrl": ""
}

export const zomato_data = [
    {
      "type": "restaurant",
      "info": {
        "resId": 20462635,
        "name": "La Pino'z Pizza",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/7/18619067/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/7/18619067/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "4.1",
          "rating_text": "4.1",
          "rating_subtitle": "Very Good",
          "rating_color": "5BA829",
          "votes": "5,227",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "4.2",
              "reviewCount": "151",
              "reviewTextSmall": "151 Reviews",
              "subtext": "151 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "4.2",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "3.9",
              "reviewCount": "5,076",
              "reviewTextSmall": "5,076 Reviews",
              "subtext": "5,076 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "3.9",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹600 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Karol Bagh, New Delhi",
          "address": "Shop 2, Old Rajinder Nagar Market, Karol Bagh, New Delhi",
          "localityUrl": "ncr/karol-bagh-delhi-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/pizza/",
            "name": "Pizza"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/ncr/restaurants/pasta/",
            "name": "Pasta"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            "url": "https://www.zomato.com/ncr/restaurants/beverages/",
            "name": "Beverages"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/cafes/",
            "name": "Cafe"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/italian/",
            "name": "Italian"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹200 for one"
        }
      },
      "order": {
        "deliveryTime": "30 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/ncr/la-pinoz-pizza-karol-bagh-new-delhi/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/ncr/la-pinoz-pizza-karol-bagh-new-delhi/order",
        "clickActionDeeplink": ""
      },
      "distance": "3 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"6c853f5c-756c-463b-9549-25453c0871be\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20462635\",\"element_type\":\"listing\",\"rank\":1}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "50% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": []
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 18492044,
        "name": "Subway",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/7/147/33d108b0aec204dfae335507cc981e30_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/7/147/33d108b0aec204dfae335507cc981e30_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.6",
          "rating_text": "3.6",
          "rating_subtitle": "Good",
          "rating_color": "9ACD32",
          "votes": "6,144",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.4",
              "reviewCount": "231",
              "reviewTextSmall": "231 Reviews",
              "subtext": "231 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.4",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "500"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "3.7",
              "reviewCount": "5,913",
              "reviewTextSmall": "5,913 Reviews",
              "subtext": "5,913 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "3.7",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹400 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Connaught Place, New Delhi",
          "address": "P 3/90, Baba Kharak Singh Marg, Opposite Rivoli Cinema, Connaught Place, New Delhi",
          "localityUrl": "ncr/connaught-place-delhi-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTQzXCJdfSJd",
            "url": "https://www.zomato.com/ncr/restaurants/health-food/",
            "name": "Healthy Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
            "url": "https://www.zomato.com/ncr/restaurants/sandwich/",
            "name": "Sandwich"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/fast-food/",
            "name": "Fast Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyNFwiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/ncr/restaurants/wraps/",
            "name": "Wraps"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
            "url": "https://www.zomato.com/ncr/restaurants/salad/",
            "name": "Salad"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            "url": "https://www.zomato.com/ncr/restaurants/beverages/",
            "name": "Beverages"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹200 for one"
        }
      },
      "order": {
        "deliveryTime": "21 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/ncr/subway-1-connaught-place-new-delhi/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/ncr/subway-1-connaught-place-new-delhi/order",
        "clickActionDeeplink": ""
      },
      "distance": "865 m",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"6c853f5c-756c-463b-9549-25453c0871be\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18492044\",\"element_type\":\"listing\",\"rank\":2}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "50% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": [
        {
          "image": {
            "url": "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
            "aspect_ratio": 2.0625
          },
          "text": "Restaurant partner follows WHO protocol"
        }
      ]
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 18454466,
        "name": "Abdul Ghani Qureshi Kabab Corner - Jama Masjid",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/6/18454466/bbc3aea149b4eb72ed177c6590d5b24e_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/6/18454466/bbc3aea149b4eb72ed177c6590d5b24e_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "4.0",
          "rating_text": "4.0",
          "rating_subtitle": "Very Good",
          "rating_color": "5BA829",
          "votes": "6,611",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "",
              "reviewCount": "0",
              "reviewTextSmall": "0 Reviews",
              "subtext": "Does not offer Dining",
              "color": "",
              "ratingV2": "-",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "grey",
                "tint": "500"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.0",
              "reviewCount": "6,611",
              "reviewTextSmall": "6,611 Reviews",
              "subtext": "6,611 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.0",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹100 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Jama Masjid, New Delhi",
          "address": "Shop 4097/7, Ground Floor, Urdu Bazar, Kotwali, Jama Masjid, New Delhi",
          "localityUrl": "ncr/jama-masjid-delhi-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
            "url": "https://www.zomato.com/ncr/restaurants/kebab/",
            "name": "Kebab"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
            "name": "North Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/ncr/restaurants/biryani/",
            "name": "Biryani"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/fast-food/",
            "name": "Fast Food"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹200 for one"
        }
      },
      "order": {
        "deliveryTime": "49 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/ncr/abdul-ghani-qureshi-kabab-corner-jama-masjid-jama-masjid-new-delhi/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/ncr/abdul-ghani-qureshi-kabab-corner-jama-masjid-jama-masjid-new-delhi/order",
        "clickActionDeeplink": ""
      },
      "distance": "3.7 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"6c853f5c-756c-463b-9549-25453c0871be\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18454466\",\"element_type\":\"listing\",\"rank\":3}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "50% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": [
        {
          "image": {
            "url": "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
            "aspect_ratio": 2.0625
          },
          "text": "Restaurant partner follows WHO protocol"
        }
      ]
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 6284,
        "name": "Bangla Sweet House",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/4/6284/7ee9d6c8a406d64e9fcbbdf33e177ecd_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/4/6284/7ee9d6c8a406d64e9fcbbdf33e177ecd_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "4.2",
          "rating_text": "4.2",
          "rating_subtitle": "Very Good",
          "rating_color": "5BA829",
          "votes": "9,792",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "4.0",
              "reviewCount": "337",
              "reviewTextSmall": "337 Reviews",
              "subtext": "337 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "4.0",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.4",
              "reviewCount": "9,455",
              "reviewTextSmall": "9,455 Reviews",
              "subtext": "9,455 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.4",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹200 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Gole Market, New Delhi",
          "address": "115-117, Bangla Sahib Marg, Gole Market, New Delhi",
          "localityUrl": "ncr/gole-market-delhi-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/ncr/restaurants/mithai/",
            "name": "Mithai"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/street-food/",
            "name": "Street Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
            "name": "North Indian"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹200 for one"
        }
      },
      "order": {
        "deliveryTime": "19 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/ncr/bangla-sweet-house-gole-market-new-delhi/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/ncr/bangla-sweet-house-gole-market-new-delhi/order",
        "clickActionDeeplink": ""
      },
      "distance": "885 m",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"6c853f5c-756c-463b-9549-25453c0871be\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"6284\",\"element_type\":\"listing\",\"rank\":4}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "50% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": [
        {
          "image": {
            "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            "aspect_ratio": 2.66666666667
          },
          "text": "Follows all Max Safety measures to ensure your food is safe"
        }
      ]
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 19780472,
        "name": "Grover Mithaivala",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/7/1987/c5fb7fd5e12f2b4a77855ae93803599a_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/7/1987/c5fb7fd5e12f2b4a77855ae93803599a_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "4.0",
          "rating_text": "4.0",
          "rating_subtitle": "Very Good",
          "rating_color": "5BA829",
          "votes": "7,337",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.5",
              "reviewCount": "27",
              "reviewTextSmall": "27 Reviews",
              "subtext": "27 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.5",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.4",
              "reviewCount": "7,310",
              "reviewTextSmall": "7,310 Reviews",
              "subtext": "7,310 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.4",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹300 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Rajinder Nagar, New Delhi",
          "address": "57/13, Rajinder Nagar, New Delhi",
          "localityUrl": "ncr/rajinder-nagar-delhi-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/ncr/restaurants/mithai/",
            "name": "Mithai"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/street-food/",
            "name": "Street Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            "url": "https://www.zomato.com/ncr/restaurants/desserts/",
            "name": "Desserts"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹200 for one"
        }
      },
      "order": {
        "deliveryTime": "26 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/ncr/grover-mithaivala-rajinder-nagar-new-delhi/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/ncr/grover-mithaivala-rajinder-nagar-new-delhi/order",
        "clickActionDeeplink": ""
      },
      "distance": "3 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"6c853f5c-756c-463b-9549-25453c0871be\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19780472\",\"element_type\":\"listing\",\"rank\":5}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "20% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": [
        {
          "image": {
            "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            "aspect_ratio": 2.66666666667
          },
          "text": "Follows all Max Safety measures to ensure your food is safe"
        }
      ]
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 310448,
        "name": "Burger King",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/8/310078/749216f498eb2ed21ffd317f4bdc8a1d_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/8/310078/749216f498eb2ed21ffd317f4bdc8a1d_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.9",
          "rating_text": "3.9",
          "rating_subtitle": "Good",
          "rating_color": "9ACD32",
          "votes": "23.2K",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.6",
              "reviewCount": "3,110",
              "reviewTextSmall": "3,110 Reviews",
              "subtext": "3,110 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.6",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.2",
              "reviewCount": "20.1K",
              "reviewTextSmall": "20.1K Reviews",
              "subtext": "20.1K Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.2",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹400 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Connaught Place, New Delhi",
          "address": "E-8, Inner Circle, Connaught Place, New Delhi",
          "localityUrl": "ncr/connaught-place-delhi-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
            "url": "https://www.zomato.com/ncr/restaurants/burger/",
            "name": "Burger"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/fast-food/",
            "name": "Fast Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            "url": "https://www.zomato.com/ncr/restaurants/desserts/",
            "name": "Desserts"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/ncr/restaurants/shake/",
            "name": "Shake"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹200 for one"
        }
      },
      "order": {
        "deliveryTime": "27 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/ncr/burger-king-connaught-place-new-delhi/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/ncr/burger-king-connaught-place-new-delhi/order",
        "clickActionDeeplink": ""
      },
      "distance": "1.3 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"6c853f5c-756c-463b-9549-25453c0871be\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"310448\",\"element_type\":\"listing\",\"rank\":6}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "50% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": [
        {
          "image": {
            "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            "aspect_ratio": 2.66666666667
          },
          "text": "Follows all Max Safety measures to ensure your food is safe"
        }
      ]
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 19677790,
        "name": "Haldiram's",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/0/550/9361ee4d0e18519da526b87f81f067ae_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/0/550/9361ee4d0e18519da526b87f81f067ae_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.5",
          "rating_text": "3.5",
          "rating_subtitle": "Good",
          "rating_color": "9ACD32",
          "votes": "2,777",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "2.9",
              "reviewCount": "54",
              "reviewTextSmall": "54 Reviews",
              "subtext": "54 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "2.9",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "yellow",
                "tint": "600"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.0",
              "reviewCount": "2,723",
              "reviewTextSmall": "2,723 Reviews",
              "subtext": "2,723 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.0",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹400 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Janpath, New Delhi",
          "address": "70, Janpath, New Delhi",
          "localityUrl": "ncr/janpath-delhi-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/south-indian/",
            "name": "South Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
            "name": "North Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/street-food/",
            "name": "Street Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/chinese/",
            "name": "Chinese"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            "url": "https://www.zomato.com/ncr/restaurants/beverages/",
            "name": "Beverages"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            "url": "https://www.zomato.com/ncr/restaurants/desserts/",
            "name": "Desserts"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹200 for one"
        }
      },
      "order": {
        "deliveryTime": "33 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/ncr/haldirams-janpath-new-delhi/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/ncr/haldirams-janpath-new-delhi/order",
        "clickActionDeeplink": ""
      },
      "distance": "959 m",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"6c853f5c-756c-463b-9549-25453c0871be\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19677790\",\"element_type\":\"listing\",\"rank\":7}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "50% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": [
        {
          "image": {
            "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            "aspect_ratio": 2.66666666667
          },
          "text": "Follows all Max Safety measures to ensure your food is safe"
        }
      ]
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 4057,
        "name": "Bikanervala",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/1/491/aa50c08ea5ade50a6d1c2d7aca242a1c_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/1/491/aa50c08ea5ade50a6d1c2d7aca242a1c_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.8",
          "rating_text": "3.8",
          "rating_subtitle": "Good",
          "rating_color": "9ACD32",
          "votes": "9,002",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.5",
              "reviewCount": "508",
              "reviewTextSmall": "508 Reviews",
              "subtext": "508 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.5",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.1",
              "reviewCount": "8,494",
              "reviewTextSmall": "8,494 Reviews",
              "subtext": "8,494 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.1",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹500 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Connaught Place, New Delhi",
          "address": "1st Floor, Rajiv Gandhi Handicraft Bhavan, Baba Kharak Singh Marg, Connaught Place, New Delhi",
          "localityUrl": "ncr/connaught-place-delhi-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/ncr/restaurants/mithai/",
            "name": "Mithai"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
            "name": "North Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/south-indian/",
            "name": "South Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/street-food/",
            "name": "Street Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/fast-food/",
            "name": "Fast Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY0XCJdfSJd",
            "url": "https://www.zomato.com/ncr/restaurants/juices/",
            "name": "Juices"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            "url": "https://www.zomato.com/ncr/restaurants/beverages/",
            "name": "Beverages"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹200 for one"
        }
      },
      "order": {
        "deliveryTime": "27 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/ncr/bikanervala-connaught-place-new-delhi/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/ncr/bikanervala-connaught-place-new-delhi/order",
        "clickActionDeeplink": ""
      },
      "distance": "566 m",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"6c853f5c-756c-463b-9549-25453c0871be\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"4057\",\"element_type\":\"listing\",\"rank\":8}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "50% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": [
        {
          "image": {
            "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            "aspect_ratio": 2.66666666667
          },
          "text": "Follows all Max Safety measures to ensure your food is safe"
        }
      ]
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 20641915,
        "name": "The Pizza Kings",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/5/20641915/057c85ce068b075d4b6ece9dfda62c48_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/5/20641915/057c85ce068b075d4b6ece9dfda62c48_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.7",
          "rating_text": "3.7",
          "rating_subtitle": "Good",
          "rating_color": "9ACD32",
          "votes": "2,695",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.4",
              "reviewCount": "4",
              "reviewTextSmall": "4 Reviews",
              "subtext": "4 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.4",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "500"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "3.9",
              "reviewCount": "2,691",
              "reviewTextSmall": "2,691 Reviews",
              "subtext": "2,691 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "3.9",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹600 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Inderlok, New Delhi",
          "address": "945/7B, Shastri Nagar, Inderlok, New Delhi",
          "localityUrl": "ncr/inderlok-delhi-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/pizza/",
            "name": "Pizza"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/ncr/restaurants/pasta/",
            "name": "Pasta"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
            "url": "https://www.zomato.com/ncr/restaurants/sandwich/",
            "name": "Sandwich"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
            "url": "https://www.zomato.com/ncr/restaurants/burger/",
            "name": "Burger"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/fast-food/",
            "name": "Fast Food"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹200 for one"
        }
      },
      "order": {
        "deliveryTime": "45 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/ncr/the-pizza-kings-1-inderlok-new-delhi/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/ncr/the-pizza-kings-1-inderlok-new-delhi/order",
        "clickActionDeeplink": ""
      },
      "distance": "5.9 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"6c853f5c-756c-463b-9549-25453c0871be\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20641915\",\"element_type\":\"listing\",\"rank\":9}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "50% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": []
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 300658,
        "name": "Hira Sweets",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/8/2008/32edfc4b9cee788d3a0921f0f5ea0fa9_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/8/2008/32edfc4b9cee788d3a0921f0f5ea0fa9_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "4.0",
          "rating_text": "4.0",
          "rating_subtitle": "Very Good",
          "rating_color": "5BA829",
          "votes": "8,660",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.9",
              "reviewCount": "516",
              "reviewTextSmall": "516 Reviews",
              "subtext": "516 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.9",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.1",
              "reviewCount": "8,144",
              "reviewTextSmall": "8,144 Reviews",
              "subtext": "8,144 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.1",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹500 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Connaught Place, New Delhi",
          "address": "K 19/21, Connaught Place, New Delhi",
          "localityUrl": "ncr/connaught-place-delhi-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/ncr/restaurants/mithai/",
            "name": "Mithai"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
            "name": "North Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/south-indian/",
            "name": "South Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/chinese/",
            "name": "Chinese"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/pizza/",
            "name": "Pizza"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/street-food/",
            "name": "Street Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
            "url": "https://www.zomato.com/ncr/restaurants/ice-cream/",
            "name": "Ice Cream"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            "url": "https://www.zomato.com/ncr/restaurants/beverages/",
            "name": "Beverages"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹200 for one"
        }
      },
      "order": {
        "deliveryTime": "29 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/ncr/hira-sweets-connaught-place-new-delhi/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/ncr/hira-sweets-connaught-place-new-delhi/order",
        "clickActionDeeplink": ""
      },
      "distance": "1.4 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"6c853f5c-756c-463b-9549-25453c0871be\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"300658\",\"element_type\":\"listing\",\"rank\":10}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "50% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": [
        {
          "image": {
            "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            "aspect_ratio": 2.66666666667
          },
          "text": "Follows all Max Safety measures to ensure your food is safe"
        }
      ]
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 20871385,
        "name": "34 Chowringhee Lane",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/9/349/3f7e10fcd72a9e7de053536384f417ed_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/9/349/3f7e10fcd72a9e7de053536384f417ed_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.7",
          "rating_text": "3.7",
          "rating_subtitle": "Good",
          "rating_color": "9ACD32",
          "votes": "90",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "",
              "reviewCount": "1",
              "reviewTextSmall": "1 Reviews",
              "subtext": "Does not offer Dining",
              "color": "",
              "ratingV2": "-",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "grey",
                "tint": "500"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "3.7",
              "reviewCount": "89",
              "reviewTextSmall": "89 Reviews",
              "subtext": "89 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "3.7",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹300 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Connaught Place, New Delhi",
          "address": "Ground Floor, R.K Ashram Metro Station, Connaught Place, New Delhi",
          "localityUrl": "ncr/connaught-place-delhi-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/ncr/restaurants/rolls/",
            "name": "Rolls"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/ncr/restaurants/momos/",
            "name": "Momos"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/fast-food/",
            "name": "Fast Food"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹200 for one"
        }
      },
      "order": {
        "deliveryTime": "24 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/ncr/34-chowringhee-lane-1-connaught-place-new-delhi/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/ncr/34-chowringhee-lane-1-connaught-place-new-delhi/order",
        "clickActionDeeplink": ""
      },
      "distance": "1.5 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"6c853f5c-756c-463b-9549-25453c0871be\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20871385\",\"element_type\":\"listing\",\"rank\":11}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "40% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": []
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 19721665,
        "name": "Blue Tokai Coffee Roasters",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/5/19721665/3f43aca13a73638ec912ca914758999f_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/5/19721665/3f43aca13a73638ec912ca914758999f_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.8",
          "rating_text": "3.8",
          "rating_subtitle": "Good",
          "rating_color": "9ACD32",
          "votes": "1,362",
          "subtext": "REVIEW",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.3",
              "reviewCount": "91",
              "reviewTextSmall": "91 Reviews",
              "subtext": "91 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.3",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "500"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.2",
              "reviewCount": "1,271",
              "reviewTextSmall": "1,271 Reviews",
              "subtext": "1,271 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.2",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹600 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Connaught Place, New Delhi",
          "address": "Shop 44, N Block, Connaught Place, New Delhi",
          "localityUrl": "ncr/connaught-place-delhi-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
            "url": "https://www.zomato.com/ncr/restaurants/cafes/",
            "name": "Cafe"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/ncr/restaurants/coffee/",
            "name": "Coffee"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMVwiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/ncr/restaurants/american/",
            "name": "American"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
            "url": "https://www.zomato.com/ncr/restaurants/sandwich/",
            "name": "Sandwich"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            "url": "https://www.zomato.com/ncr/restaurants/desserts/",
            "name": "Desserts"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            "url": "https://www.zomato.com/ncr/restaurants/beverages/",
            "name": "Beverages"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹200 for one"
        }
      },
      "order": {
        "deliveryTime": "26 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/ncr/blue-tokai-coffee-roasters-connaught-place-new-delhi/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/ncr/blue-tokai-coffee-roasters-connaught-place-new-delhi/order",
        "clickActionDeeplink": ""
      },
      "distance": "1.3 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"6c853f5c-756c-463b-9549-25453c0871be\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19721665\",\"element_type\":\"listing\",\"rank\":12}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "50% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": [
        {
          "image": {
            "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            "aspect_ratio": 2.66666666667
          },
          "text": "Follows all Max Safety measures to ensure your food is safe"
        }
      ]
    }
  ]

