const fullAddressConfirmationDialog = {
  full_address_confirmation: {
    contextFieldName: "null",
    contextModelName: "leads",
    initialCommandName: "allFieldsPresent",
    commands: {
      allFieldsPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "address"
              }
            },
            {
              name: "fieldPresent",
              params: {
                fieldName: "city"
              }
            },
            {
              name: "fieldPresent",
              params: {
                fieldName: "state"
              }
            },
            {
              name: "fieldPresent",
              params: {
                fieldName: "zip"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:confirmAllFields"]
          },
          invalid: {
            commands: ["addTopics-leads:address,city,state,zip", "nextTopic"]
          }
        }
      },
      confirmAllFields: {
        systemMessage:
          "We have your address as <address>, <city>, <state>, <zip:spelledOut>. Is this correct?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            }
          ],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: ["nextTopic"]
          },
          invalid: {
            systemMessage:
              "I didn't get that.  Is your address <address>, <city>, <state>, <zip:spelledOut>?",
            commands: ["addTopics-leads:address,city,state,zip", "nextTopic"]
          }
        }
      }
    }
  }
};

const fullVehicleConfirmationDialog = {
  full_vehicle_confirmation: {
    contextFieldName: "null",
    contextModelName: "vehicles",
    initialCommandName: "allFieldsPresent",
    commands: {
      allFieldsPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "year"
              }
            },
            {
              name: "fieldPresent",
              params: {
                fieldName: "make"
              }
            },
            {
              name: "fieldPresent",
              params: {
                fieldName: "model"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:confirmAllFields"]
          },
          invalid: {
            commands: ["addTopics-vehicles:year,make,model", "nextTopic"]
          }
        }
      },
      confirmAllFields: {
        systemMessage:
          "We have your vehicle as a <year:dateYear> <make> <model>. Is this all correct?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            }
          ],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: ["nextTopic"]
          },
          invalid: {
            systemMessage:
              "I missed that.  Is your vehicle a <year:dateYear> <make> <model>?",
            commands: ["addTopics-vehicles:year,make,model", "nextTopic"]
          }
        }
      }
    }
  }
};

const fullNameConfirmationDialog = {
  full_name_confirmation: {
    contextFieldName: "null",
    contextModelName: "leads",
    initialCommandName: "allFieldsPresent",
    commands: {
      allFieldsPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "first_name"
              }
            },
            {
              name: "fieldPresent",
              params: {
                fieldName: "last_name"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:confirmAllFields"]
          },
          invalid: {
            commands: ["addTopics-leads:first_name,last_name", "nextTopic"]
          }
        }
      },
      confirmAllFields: {
        systemMessage:
          "We have your legal name as <first_name> <last_name>. Is that correct?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            }
          ],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: ["nextTopic"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't get that. Is your full name legal <first_name> <last_name>?",
            commands: ["addTopics-first_name,last_name", "nextTopic"]
          }
        }
      }
    }
  }
};

const cityStateConfirmationDialog = {
  city_state_confirmation: {
    contextFieldName: "null",
    contextModelName: "leads",
    initialCommandName: "allFieldsPresent",
    commands: {
      allFieldsPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "city"
              }
            },
            {
              name: "fieldPresent",
              params: {
                fieldName: "state"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:confirmAllFields"]
          },
          invalid: {
            commands: ["addTopics-leads:city,state", "nextTopic"]
          }
        }
      },
      confirmAllFields: {
        systemMessage: "Do you live in <city> <state>. Is that right?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            }
          ],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: ["nextTopic"]
          },
          invalid: {
            systemMessage: "I missed that.  Do you live in <city> <state>?",
            commands: ["addTopics-city,state", "nextTopic"]
          }
        }
      }
    }
  }
};

const driversLicense_StateConfirmationDialog = {
  drivers_license__state_confirmation: {
    contextFieldName: "null",
    contextModelName: "drivers",
    initialCommandName: "allFieldsPresent",
    commands: {
      allFieldsPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "license_state"
              }
            },
            {
              name: "fieldPresent",
              params: {
                fieldName: "license_number"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:confirmAllFields"]
          },
          invalid: {
            commands: [
              "addTopics-leads: license_state, license_number",
              "nextTopic"
            ]
          }
        }
      },
      confirmAllFields: {
        systemMessage:
          "We show that you have a <license_state> driver license with the number: <license_number: spelled out>.  Correct?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            }
          ],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: ["nextTopic"]
          },
          invalid: {
            systemMessage:
              "I didn't get that. Do you have a <license_state> driver license with the number: <license_number: spelled out>. ",
            commands: ["addTopics-city,state", "nextTopic"]
          }
        }
      }
    }
  }
};

const excludedDriverNameLicenseConfirmationDialog = {
  excluded_driver_name_license_confirmation: {
    contextFieldName: "null",
    contextModelName: "drivers",
    initialCommandName: "allFieldsPresent",
    commands: {
      allFieldsPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "first_name"
              }
            },
            {
              name: "fieldPresent",
              params: {
                fieldName: "last_name"
              }
            },
            {
              name: "fieldPresent",
              params: {
                fieldName: "license_state"
              }
            },
            {
              name: "fieldPresent",
              params: {
                fieldName: "license_number"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:confirmAllFields"]
          },
          invalid: {
            commands: [
              "addTopics-leads:first_name, last_name, license_state, license_number",
              "nextTopic"
            ]
          }
        }
      },
      confirmAllFields: {
        systemMessage:
          "We show the excluded driver <first_name> <last_name> as having a <license_state> drivers license with the number: <license_number: spelled out>.  Correct?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            }
          ],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: ["nextTopic"]
          },
          invalid: {
            systemMessage:
              "I didn't get that. Does the excluded driver have a first name of <first_name> and a last name of <last_name>, and have a license issued by <license_state> and driver license with the number: <license_number: spelled out>.",
            commands: ["addTopics-city,state", "nextTopic"]
          }
        }
      }
    }
  }
};

const firstNameDialog = {
  first_name: {
    contextFieldName: "first_name",
    contextModelName: "leads",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "first_name"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "Please say and spell out your legal first name.  For example, Jeffrey J E F F R E Y.",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract",
              params: {
                appendAffirmative: ", that's me."
              }
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "Attempt to extract the user's first name.  They have been instructed to pronounce their first name and then spell out their first name. Please use these two pieces of data (if available) to correctly extract their first name and return it in the format: extracted: name-here."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. Please slowly say and spell out your first name again.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage:
              "I'm sorry, I didn't understand that. Is your first name as <first_name>? Spelled <first_name: spelled out>",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const lastNameDialog = {
  last_name: {
    contextFieldName: "last_name",
    contextModelName: "leads",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "last_name"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "Please say and spell out your legal last name.  For example, Smith S M I T H.",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract",
              params: {
                appendAffirmative: ", that's me."
              }
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "Attempt to extract the user's last name.  They have been instructed to pronounce their last name and then spell out their last name. Please use these two pieces of data (if available) to correctly extract their last name and return it in the format: extracted: name-here."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. Please slowly say your last name again.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage:
              "I didn't catch that.  Is your last name <last_name>. Spelled <last_name: spelled out>?",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const zipDialog = {
  zip: {
    contextFieldName: "zip",
    contextModelName: "leads",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "zip"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "What is the five digit zip code that you live in?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: What is the five digit zip code that you live in?  Please extract and return the five digit zip code from the following user message. The zip code is 5 digits long and may have one or more leading zeros. It also may be separated by whitespace. Note: users will sometimes say oh for zero. Please return the zip code in the format: extracted: zip-code-here."
              }
            },
            {
              name: "pattern",
              params: {
                pattern: "^[0-9]{5}$"
              }
            }
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. What is your five digit zip code?",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: `I'm sorry, I didn't understand that. "Is your zip code <zip: spelled out>?`,
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const stateDialog = {
  state: {
    contextFieldName: "state",
    contextModelName: "leads",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "state"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "Which state do you live in?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "The user has been instructed to provide the state in the United States that they live in.  Please extract the state and return the two digit abbreviation for that US state, e.g., CA when the consumer says California.  For District of Columbia, please return DC.  Please return the State abbreviation in the format: extracted: state-abbreviation-here.  Here is the list of US states with their abbreviation:  Alabama: AL, Alaska: AK, Arizona: AZ, Arkansas: AR, California: CA, Colorado: CO, Connecticut: CT, Delaware: DE, District of Columbia: DC, Florida: FL, Georgia: GA, Hawaii: HI, Idaho: ID, Illinois: IL, Indiana: IN, Iowa: IA, Kansas: KS, Kentucky: KY, Louisiana: LA, Maine: ME, Maryland: MD, Massachusetts: MA, Michigan: MI, Minnesota: MN, Mississippi: MS, Missouri: MO, Montana: MT, Nebraska: NE, Nevada: NV, New Hampshire: NH, New Jersey: NJ, New Mexico: NM, New York: NY, North Carolina: NC, North Dakota: ND, Ohio: OH, Oklahoma: OK, Oregon: OR, Pennsylvania: PA, Rhode Island: RI, South Carolina: SC, South Dakota: SD, Tennessee: TN, Texas: TX, Utah: UT, Vermont: VT, Virginia: VA, Washington: WA, West Virginia: WV, Wisconsin: WI, Wyoming: WY."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. Which state do you live in?",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: `I'm sorry, I didn't understand that. "Do you live in <state>?`,
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const cityDialog = {
  city: {
    contextFieldName: "city",
    contextModelName: "leads",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "city"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "Please say and spell out the city that you live in.  For Example, Des Moines D E S space M O I N E S.",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "Please extract the U.S. city that they user says.  They have been instructed to pronounce the city and then spell out the city. Please use these two pieces of data (if available) to correctly extract the city.  Please return the format: extracted: city-here."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. Which city do you live in?",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage:
              "I'm sorry, I didn't understand that. Do you live in <city>",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const addressDialog = {
  address: {
    contextFieldName: "address",
    contextModelName: "leads",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "address"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "What is your street address?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "Please extract the street address that they user says.  Street address typically begin with a number, followed by a name or names and the a street type, e.g., road, street, way, circle, avenue, etc. For example, 1244 telegraph avenue.   Please return the format: extracted: address-here."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. What is your street address?",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage:
              "I'm sorry, I didn't understand that. Is your address <address>?",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const addressSixMonthsDialog = {
  address_six_months: {
    contextFieldName: "address_six_months",
    contextModelName: "leads",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "address_six_months"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      hasAddressSixMonths: {
        systemMessage:
          "Have you lived at this address for the last six months?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "llmBoolean"
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "",
            commands: [""]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const homeTypeDialog = {
  home_type: {
    contextFieldName: "home_type",
    contextModelName: "leads",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "home_type"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "Would you describe your residence as a single family home, townhouse, condo or mobile home?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: Would you describe your residence as a single family home, townhouse, condo or mobile home?  Please extract which option they chose and return the format: extracted: townhouse."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. Is your current residence as a single family home, townhouse, condo or mobile home?",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage:
              "I'm sorry, I didn't understand that. Is your current residence a <home_type>.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const homeOwnershipDialog = {
  home_ownership: {
    contextFieldName: "home_ownership",
    contextModelName: "leads",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "home_ownership"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      hasHomeOwnership: {
        systemMessage: "Do you own your residence?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "llmBoolean"
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "",
            commands: [""]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const birthDateDialog = {
  birth_date: {
    contextFieldName: "birth_date",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "birth_date"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "Please say your birthdate.  For example, March 17th, 1992",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user for their birth date.  Please extract their birthdate.  User's typically say the month and then provide a number for the day of month and the year.  For example, March 4th, 2000.  Although, they may provide the number for the month as well, e.g., 6 11 1971, would be june 11th 1971.  Please return the extracted data in the format: extracted: Month, day, year .e.g.,  June 11, 1971."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. What is your birth date?",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage:
              "I'm sorry, I didn't understand that. Is your birth date <birth_date>?",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const maritalStatusDialog = {
  marital_status: {
    contextFieldName: "marital_status",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "marital_status"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "Are you single, married or divorced?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user about their marital status: Are you single, married or divorced?  Please extract their answer to the question as one of these three options in the format:  extracted: data-here."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. Are you single, married or divorced?",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage:
              "I'm sorry, I didn't understand that. You are currently <marital_status>. Correct?",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const phoneDialog = {
  phone: {
    contextFieldName: "phone",
    contextModelName: "leads",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "phone"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "What is your primary phone number including area code? Please say one number at a time starting with the area code.",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user for their primary phone number.  Please extract their 10 digit US phone number starting with the area code and ignoring the lead 1 if there are 11 digits.  Please format the extracted 10 digit phone number as:  extracted: 10-digit-phone-number-here."
              }
            },
            {
              name: "pattern",
              params: {
                pattern: "^[2-9][0-9]{2}[2-9][0-9]{6}$"
              }
            }
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. Is this number that you are calling from you primary phone number?",
            commands: ["", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "",
            commands: [""]
          },
          unknown: {
            systemMessage:
              "I'm sorry, I didn't understand that. This phone number is your primary phone number. Correct?",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const emailDialog = {
  email: {
    contextFieldName: "email",
    contextModelName: "leads",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "email"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "Please spell out your primary email address.  For the email provider, you can just say at google dot com or at yahoo dot com.",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user the following question: Please spell out your personal email address.  For the email provider, you can just say at google dot com or at yahoo dot com.  Please extract the consumer's email address including the @ sign (don't use the word at instead of @) and then the ESP and a period (sometimes said as dot) and the top level domain.  For example ted_murphy@yahoo.com.  Please format the extracted email as:  extracted: email-here."
              }
            },
            {
              name: "pattern",
              params: {
                pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
              }
            }
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. Please slowly say your email address, spelling out the part before the at sign.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage:
              "I'm sorry, I didn't understand that.  Your email address as <email: spelled out>.  Correct?",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const militaryAffiliationDialog = {
  military_affiliation: {
    contextFieldName: "military_affiliation",
    contextModelName: "leads",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "military_affiliation"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:hasMilitary"]
          },
          invalid: {
            commands: ["nextCommand:noMilitary"]
          }
        }
      },
      hasMilitaryAffiliation: {
        systemMessage:
          "Are you currently serving or have you ever served in the US Military?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "llmBoolean"
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "",
            commands: [""]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const policyTypeDialog = {
  policy_type: {
    contextFieldName: "policy_type",
    contextModelName: "leads",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "policy_type"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "Are you looking to get an Auto Policy or a motorcycle policy?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: Are you looking to get an Auto Policy or a motorcycle policy? Please extract the answer and return either Auto or Motorcycle in the format: extracted: data-here."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. Are you looking to get an auto or a motorcycle policy?",
            commands: ["", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "",
            commands: [""]
          },
          unknown: {
            systemMessage:
              "I'm sorry, I didn't understand that. You are looking to get an <policy_type> policy.  Correct?",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const policyStartTodayTomorrowDialog = {
  policy_start_today_tomorrow: {
    contextFieldName: "policy_start_date",
    contextModelName: "leads",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "policy_start_today_tomorrow"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      hasPolicyStartTodayTomorrow: {
        systemMessage:
          "Do you want the start date for your policy to be today or tomorrow?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: Do you want the start date for your policy to be today or tomorrow? Please extract the answer and return either today, tomorrow or neither in the format: extracted: data-here."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const policyStartDateDialog = {
  policy_start_date: {
    contextFieldName: "policy_start_date",
    contextModelName: "leads",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "policy_start_date"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      hasPolicyStartDate: {
        systemMessage:
          "What is the preferred start date for your insurance policy?",
        userValidators: {
          validators: [
            {
              name: ""
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: What is the preferred start date for your insurance policy?  Please extract the date.  User's typically say the month and then provide a number for the day of month and the year.  For example, March 4th, 2000.  Although, they may provide the number for the month as well, e.g., 1 11 2024, would be January 11th, 2024.  Please return the extracted data in the format: extracted: Month, day, year, .e.g.,  January 22, 2024."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const licenseStatusDialog = {
  license_status: {
    contextFieldName: "license_status",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "license_status"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      hasLicenseStatus: {
        systemMessage:
          "Do you have a valid and current drivers license, permit or neither?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: Do you have a valid and current drivers license, permit or neither?  Please extract their answer in the format: extracted: drivers license, permit, or neither."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const licenseStateDialog = {
  license_state: {
    contextFieldName: "license_state",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "license_state"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "Which US state or foreign country issued your valid driver's license?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: Which US state or foreign country issued your valid driver's license?  Please extract their answer to the question.  In the case of U.S. states, please extract the state and return the two digit abbreviation for that US state, e.g., CA when the consumer says California.  For District of Columbia, please return DC. Please return the State abbreviation in the format: extracted: state-abbreviation-here.  Here is the list of US states with their abbreviation:  Alabama: AL, Alaska: AK, Arizona: AZ, Arkansas: AR, California: CA, Colorado: CO, Connecticut: CT, Delaware: DE, District of Columbia: DC, Florida: FL, Georgia: GA, Hawaii: HI, Idaho: ID, Illinois: IL, Indiana: IN, Iowa: IA, Kansas: KS, Kentucky: KY, Louisiana: LA, Maine: ME, Maryland: MD, Massachusetts: MA, Michigan: MI, Minnesota: MN, Mississippi: MS, Missouri: MO, Montana: MT, Nebraska: NE, Nevada: NV, New Hampshire: NH, New Jersey: NJ, New Mexico: NM, New York: NY, North Carolina: NC, North Dakota: ND, Ohio: OH, Oklahoma: OK, Oregon: OR, Pennsylvania: PA, Rhode Island: RI, South Carolina: SC, South Dakota: SD, Tennessee: TN, Texas: TX, Utah: UT, Vermont: VT, Virginia: VA, Washington: WA, West Virginia: WV, Wisconsin: WI, Wyoming: WY."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. Which state issued you your driver's license?",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage:
              "I'm sorry, I didn't understand that. Your driver's license is from <license_state>.  Correct?",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const licenseNumberDialog = {
  license_number: {
    contextFieldName: "license_number",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "license_number"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "Including letters and or numbers, what is your driver's license number?  Please say letters as the letter with a word example.  For example, A as in apple.",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: Including letters and or numbers, what is your driver's license number?  Please say letters as the letter with a word example.  For example, A as in apple. Please extract their license number as a string of numbers and/or letters.  If the person says A as in Apple or something similar, just return that letter.  Please return the driver's license number in the format: extracted: A3785490."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. Please slowly spell out your license number.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage:
              "I'm sorry, I didn't understand that. Your driver's license number is <license_number: spelledOut>. correct?",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const licenseRevokedDialog = {
  license_revoked: {
    contextFieldName: "license_revoked",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "license_revoked"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      hasLicenseRevoked: {
        systemMessage:
          "Has your license been suspended or revoked in the last five years?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "llmBoolean"
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "",
            commands: [""]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const sr22Dialog = {
  sr_22: {
    contextFieldName: "sr_22",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "sr_22"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      hasSr22: {
        systemMessage:
          "Do you require and SR22 or FR44? If you do not know then you most likely do not need this, and just say no.",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "llmBoolean"
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "",
            commands: [""]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const currentlyInsuredDialog = {
  currently_insured: {
    contextFieldName: "currently_insured",
    contextModelName: "leads",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "currently_insured"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      hasCurrentlyInsured: {
        systemMessage:
          "Do you have an insurance policy that is active at this moment?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "llmBoolean"
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "",
            commands: [""]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const lapseInSixMonthsDialog = {
  lapse_in_six_months: {
    contextFieldName: "lapse_in_six_months",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "lapse_in_six_months"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      hasLapseInSixMonths: {
        systemMessage:
          "[if yes] Have you continuously had insurance for the last 6 months without a lapse in coverage?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "llmBoolean"
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "",
            commands: [""]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const lapseOverFifteenDaysDialog = {
  lapse_over_fifteen_days: {
    contextFieldName: "lapse_over_fifteen_days",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "lapse_over_fifteen_days"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      hasLapseOverFifteenDays: {
        systemMessage:
          "[if no] Was your lapse in coverage greater than 15 days?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "llmBoolean"
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "",
            commands: [""]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const lapseReasonDialog = {
  lapse_reason: {
    contextFieldName: "lapse_reason",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "lapse_reason"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      hasLapseReason: {
        systemMessage:
          "What was the reason for your lapse in coverage?  You can say did not drive, did not own a vehicle, traveled abroad, medical condition or something else.",
        userValidators: {
          validators: [
            {
              name: ""
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: What was the reason for your lapse in coverage?  You can say did not drive, did not own a vehicle, traveled abroad, medical condition or something else. Please extract their answer in the format: extracted: vehicle, traveled abroad, medical condition or something else."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const lapseReasonOtherDialog = {
  lapse_reason_other: {
    contextFieldName: "lapse_reason",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "lapse_reason_other"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      hasLapseReasonOther: {
        systemMessage:
          "If the reason for your lapse in coverage was something else, what was it?",
        userValidators: {
          validators: [
            {
              name: ""
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: If the reason for your lapse in coverage was something else, what was it?. Please extract their answer in the format: extracted: lapse-in-coverage-reason."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const driverCourseDialog = {
  driver_course: {
    contextFieldName: "driver_course",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "driver_course"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      hasDriverCourse: {
        systemMessage:
          "Have you completed a defensive driving course in the last three years?  This should not be confused with traffic school to prevent a ticket from being reported.",
        userValidators: {
          validators: [
            {
              name: ""
            },
            {
              name: "llmBoolean"
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const driverCourseDateDialog = {
  driver_course_date: {
    contextFieldName: "driver_course_date",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "driver_course_date"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      hasDriverCourseDate: {
        systemMessage:
          "(if yes) When did you complete the defensive driving course?",
        userValidators: {
          validators: [
            {
              name: ""
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: When did you complete the defensive driving course? Please extract the date that they provide.  User's typically say the month and then provide a number for the day of month and the year.  For example, March 4th, 2020.  Although, they may provide the number for the month as well, e.g., 3 4 2020, would be March 4, 2020.  Please return the extracted data as Month, day, year:  June 11, 1971, in the format: extracted: Month, day, year, .e.g.,  January 22, 2024."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const accidentsDialog = {
  accidents: {
    contextFieldName: "accidents",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "accidents"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "How many accidents, either at fault or not at fault, have you had in the last three years?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: How many accidents, either at fault or not at fault, have you had in the last three years? Please extract the number of accidents that they respond with as a number, e.g, 3.  Please extract their answer in the format: extracted: #."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. How many accidents have you had in the last three years regardless of fault?",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage:
              "I'm sorry, I didn't understand that. In the last three years have you had <accidents> accidents?",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const accidentsAtFaultDialog = {
  accidents_at_fault: {
    contextFieldName: "accidents_at_fault",
    contextModelName: "incidents",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "accidents_at_fault"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "Were you considered to be at fault in the accident?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "llmBoolean"
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. What type of accident were you involved in?",
            commands: ["", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "",
            commands: [""]
          },
          unknown: {
            systemMessage:
              "I'm sorry, I didn't understand that. You were involved in a <incidents.type>.  Correct?",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const accidentDateDialog = {
  accident_date: {
    contextFieldName: "incident_date",
    contextModelName: "incidents",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "accident_date"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "On what year and date did you have [accident reference: most recent] accident?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: On which year and date did you have your accident?  Please extract the date that they provide.  User's typically say the month and then provide a number for the day of month and the year.  For example, March 4th, 2020.  Although, they may provide the number for the month as well, e.g., 3 4 2020, would be March 4, 2020.  Please return the data in the format Month, day, year:  June 11, 2022, in the format: extracted: Month, day, year, .e.g.,  January 22, 2022."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. What was the date of the accident?",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage:
              "I'm sorry, I didn't understand that. The date of the accident was <incidents.incident_date>.  Correct?",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const claimsDialog = {
  claims: {
    contextFieldName: "claims",
    contextModelName: "incidents",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "claims"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "Including windshield, roadside, and towing, how many non accident claims have you made in the last 5 years?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: How many non accident claims have you made in the last 5 years?  Please extract the number of claims that they respond with as a number, e.g, 3.  Please extract their answer in the format: extracted: #."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const claimDateDialog = {
  claim_date: {
    contextFieldName: "incident_date",
    contextModelName: "incidents",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "claim_date"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "What was the date of your claim?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: What was the date of your claim?  Please extract the date that they provide.  User's typically say the month and then provide a number for the day of month and the year.  For example, March 4th, 2020.  Although, they may provide the number for the month as well, e.g., 3 4 2020, would be March 4, 2020.  Please return the data in the format Month, day, year:  June 11, 2022, in the format: extracted: Month, day, year .e.g.,  January 22, 2022."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const claimGreaterThan1kDialog = {
  claim_greater_than_1k: {
    contextFieldName: "claim_greater_than_1k",
    contextModelName: "incidents",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "claim_greater_than_1k"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "Was the claim for more than one thousand dollars?",
        userValidators: {
          validators: [
            {
              name: ""
            },
            {
              name: "llmBoolean"
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const violationsDialog = {
  violations: {
    contextFieldName: "violations",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "violations"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "How many traffic tickets or moving violations have you had in the last three years?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: How many traffic tickets or moving violations have you had in the last three years?  Please extract the number that they respond with as a number, e.g, 3.   Please extract their answer in the format: extracted: #."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const violationDateDialog = {
  violation_date: {
    contextFieldName: "incident_date",
    contextModelName: "incidents",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "violation_date"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "What was the date of your most recent traffic ticket?",
        userValidators: {
          validators: [
            {
              name: ""
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: What was the date of your most recent traffic ticket?  Please extract the date that they provide.  User's typically say the month and then provide a number for the day of month and the year.  For example, March 4th, 2020.  Although, they may provide the number for the month as well, e.g., 3 4 2020, would be March 4, 2020.  Please return the data in the format Month, day, year:  June 11, 2022, in the format: extracted: Month, day, year .e.g.,  January 22, 2022."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const violationTypeDialog = {
  violation_type: {
    contextFieldName: "violation_type",
    contextModelName: "violations",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "violation_type"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "What was the reason for your ticket or violation?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: What was the reason for your ticket or violation?  Please take the users response and select the closest match from the following options: arterial violation, attempt to elude officer, backing illegally, careless driving, child safety restraint, deviate lane/cross centerline, driving against traffic/one way, driving while intoxicated/drugs, driving without lights, driving the wrong side of hwy/road, failure to dim lights, failure to give signal, failure to keep vehicle under control, failure to obey sign/signal, failure to dim lights, failure to give signal, failure to keep vehicle under control, failure to obey sign/signal, failure to report accident/leave scene, failure to stop after accident, failure to stop for a school bus, failure yield right of way to vehicle or pedestrian in an emergency zone, following too close, hit and run, illegal turn, illegal/unlawful use of license, implied consent, improper lane change, improper lane use, imprudent speed/driving, inattentive driving, miscellaneous minor violation, neg homicide/manslaughter, negligent driving, miscellaneous minor violation, negligent homicide/manslaughter, negligent driving, obstructing traffic, open container, operating after revocation, operating after suspension, operating without a license, operating on expired license, parking on highway/street, passing illegally/improper, racing/sp contest/drag racing, reckless driving, refusal of breath/blood test, speed, too fast for conditions, unnecessary acceleration, vehicle used in/with felony, vehicular assault, violation license restriction. Please extract their answer in the format: extracted: ticket-reason."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const driversDialog = {
  drivers: {
    contextFieldName: "drivers",
    contextModelName: "leads",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "drivers"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "How many drivers will be on your policy?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: How many drivers will be on your policy?  Please extract the number of drivers that they respond with as a number, e.g, 3.   Please extract their answer in the format: extracted: #."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const householdMemberNotOnPolicyDialog = {
  household_member_not_on_policy: {
    contextFieldName: "excluded_from_policy",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "household_member_not_on_policy"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "Are there people living in your household fifteen years of age or older who will not be on the policy?  This includes children off at college.",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmBoolean"
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const householdMemberNotOnPolicyDrivingDialog = {
  household_member_not_on_policy_driving: {
    contextFieldName: "null",
    contextModelName: "null",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "household_member_not_on_policy_driving"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "Will any of those people be driving the vehicle?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "llmBoolean"
            },
            ""
          ],
          valid: {
            systemMessage:
              "Thanks! We will need to get their name, date of birth and license number.",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "",
            commands: [""]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const excludedFromPolicyDialog = {
  excluded_from_policy: {
    contextFieldName: "excluded_from_policy",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "excluded_from_policy"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "How many people living in your household fifteen years or older will be excluded from the policy?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: How many people living in your household fifteen years or older will be excluded from the policy?  Please extract the number of people that they respond with as a number, e.g, 3.   Please extract their answer in the format: extracted: #."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "",
            commands: [""]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const excludedDriverFirstNameDialog = {
  excluded_driver_first_name: {
    contextFieldName: "first_name",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "excluded_driver_first_name"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "Please say and spell out the legal first name of the excluded driver.",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "Attempt to extract the user's first name.  They have been instructed to pronounce their first name and then spell out their first name. Please use these two pieces of data (if available) to correctly extract their first name. Please extract their answer in the format: first_name."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "",
            commands: [""]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const excludedDriverLastNameDialog = {
  excluded_driver_last_name: {
    contextFieldName: "last_name",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "excluded_driver_last_name"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "Please say and spell out the legal last name of the excluded driver.",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "Attempt to extract the user's last name.  They have been instructed to pronounce their last name and then spell out their last name. Please use these two pieces of data (if available) to correctly extract their last name. Please extract their answer in the format: extracted: last_name."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "",
            commands: [""]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const excludedDriverBirthDateDialog = {
  excluded_driver_birth_date: {
    contextFieldName: "birth_date",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "excluded_driver_birth_date"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "What is the birthdate of the excluded driver?  For example, March 18th, 1998.",
        userValidators: {
          validators: [
            {
              name: ""
            },
            {
              name: "",
              params: {
                instructionsOverride:
                  "We asked the user for the year in which someone was born.  Please extract their birthdate.  User's typically say the month and then provide a number for the day of month and the year.  For example, March 4th, 2000.  Although, they may provide the number for the month as well, e.g., 6 11 1971, would be june 11th 1971.  Please return the data in the format Month, day, year:  June 11, 2022, in the format: extracted: Month, day, year .e.g.,  January 22, 2022."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const excludedDriverLicenseStateDialog = {
  excluded_driver_license_state: {
    contextFieldName: "license_state",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "excluded_driver_license_state"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "Which country or state issued [excluded driver reference, possessive] valid driver's license?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: Which US state or foreign country issued an excluded driver's valid driver's license? Please extract their answer to the question.  In the case of U.S. states, please extract the state and return the two digit abbreviation for that US state, e.g., CA when the consumer says California.  For District of Columbia, please return DC. Please return the State abbreviation in the format: extracted: state-abbreviation-here.  Here is the list of US states with their abbreviation:  Alabama: AL, Alaska: AK, Arizona: AZ, Arkansas: AR, California: CA, Colorado: CO, Connecticut: CT, Delaware: DE, District of Columbia: DC, Florida: FL, Georgia: GA, Hawaii: HI, Idaho: ID, Illinois: IL, Indiana: IN, Iowa: IA, Kansas: KS, Kentucky: KY, Louisiana: LA, Maine: ME, Maryland: MD, Massachusetts: MA, Michigan: MI, Minnesota: MN, Mississippi: MS, Missouri: MO, Montana: MT, Nebraska: NE, Nevada: NV, New Hampshire: NH, New Jersey: NJ, New Mexico: NM, New York: NY, North Carolina: NC, North Dakota: ND, Ohio: OH, Oklahoma: OK, Oregon: OR, Pennsylvania: PA, Rhode Island: RI, South Carolina: SC, South Dakota: SD, Tennessee: TN, Texas: TX, Utah: UT, Vermont: VT, Virginia: VA, Washington: WA, West Virginia: WV, Wisconsin: WI, Wyoming: WY."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "",
            commands: [""]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const excludedDriverLicenseNumberDialog = {
  excluded_driver_license_number: {
    contextFieldName: "license_number",
    contextModelName: "drivers",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "excluded_driver_license_number"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "Including letters and or numbers, what is license number for the excluded driver?  Please say letters as the letter with a word example.  For example, A as in apple.",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: Including letters and or numbers, what is your driver's license number?  Please say letters as the letter with a word example.  For example, A as in apple. Please extract their license number as a string of numbers and/or letters.  If the person says A as in Apple or something similar, just return that letter.   Please return the driver's license number in the format: extracted: A3785490."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const haveVinDialog = {
  have_vin: {
    contextFieldName: "null",
    contextModelName: "null",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "have_vin"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "Do you have the vehicle identification number or vin number?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmBoolean"
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const haveRegistrationPolicyDialog = {
  have_registration_policy: {
    contextFieldName: "null",
    contextModelName: "null",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "have_registration_policy"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "Do you currently have access to your registration or current insurance information? The vin number for the vehicle can be found on those documents.",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "llmBoolean"
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "",
            commands: [""]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const vinDialog = {
  vin: {
    contextFieldName: "vin",
    contextModelName: "vehicles",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "vin"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "What is the 17 character VIN number for the vehicle?  Please say letters as the letter with a word example.  For example, A as in apple.",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: What is the 17 character VIN number for the vehicle?  Please say letters as the letter with a word example.  For example, A as in apple.  Please extract the VIN.  A standard VIN is 17 characters long and includes a combination of digits and capital letters. It's important to note that the letters I (i), O (o), and Q (q) are not used in VINs to avoid confusion with the numbers 1 and 0. Please return the VIN, vehicle identification number, in the format: extracted: 1HGCM82633A004352"
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const yearDialog = {
  year: {
    contextFieldName: "year",
    contextModelName: "vehicles",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "year"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "What is the year of your vehicle?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: What is the year of your vehicle? Please extract the year. Please extract the model in the format: extracted: model."
              }
            },
            {
              name: "pattern",
              params: {
                pattern: "^(19[6-9]d|20[0-1]d|202[0-4])$"
              }
            }
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. What year is your vehicle?",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage:
              "I'm sorry, I didn't understand that.  Your vehicle is a <year>.  Correct?",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const makeDialog = {
  make: {
    contextFieldName: "make",
    contextModelName: "vehicles",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "make"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "What is the make of your vehicle?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: What is the make of your vehicle? The make of a vehicle is the manufacturer, e.g., Volvo, General Motors, etc.  Please extract the make in the format: extracted: make."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. What is the make of your vehicle?",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage:
              "I'm sorry, I didn't understand that. The make of your vehicle is <make>.  Correct?",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const modelDialog = {
  model: {
    contextFieldName: "model",
    contextModelName: "vehicles",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "model"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "What is the model of your vehicle?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: What is the model of your vehicle? The model of a vehicle refers to a specific version or design of a car made by a manufacturer. Each model has its own unique name or number (and sometimes both) which differentiates it from other models produced by the same manufacturer. For example, Toyota, produces the models Camry, Corolla, RAV4, and Prius.  Please extract the model in the format: extracted: model."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. What is the model of your vehicle?",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage:
              "I'm sorry, I didn't understand that. The make of your vehicle is <model>.  Correct?",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const ownershipDialog = {
  ownership: {
    contextFieldName: "ownership",
    contextModelName: "vehicles",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "ownership"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "Do you own this vehicle outright, lease the vehicle or are you making payments to a finance company for this vehicle?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: Do you own this vehicle outright, lease the vehicle or are you making payments to a finance company for this vehicle? Please extract their answer and return, own, lease or finance in the following format: extracted: vehicle-ownership-answer."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const financeCompanyDialog = {
  finance_company: {
    contextFieldName: "finance_company",
    contextModelName: "vehicles",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "finance_company"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "(if financing) What is the name of the Finance Company?  The financing company is the company that you make your monthly car notes to, or your monthly car payments out to. ",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the consumer: What is the name of the Finance Company?  Please extract the name of the company and return in the following format: extracted: finance-company-name."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. What is the name of the finance company for you vehicle?",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage:
              "I'm sorry, I didn't understand that.  Is the finance company for your vehicle <finance_company>?",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const vehiclesDialog = {
  vehicles: {
    contextFieldName: "vehicles",
    contextModelName: "leads",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "vehicles"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      onFieldPresent: {
        systemMessage:
          "How many vehicles would you like to add to your policy?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract"
            },
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: How many vehicles would you like to add to your policy?  Please extract the number of vehicles that they respond with as a number, e.g, 3. Please extract their answer in the format: extracted: #."
              }
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage:
              "I'm sorry, I didn't catch that. How many vehicles would you like to insure under your polilcy?",
            commands: ["nextCommand:onFieldEmpty", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const primaryPurposeDialog = {
  primary_purpose: {
    contextFieldName: "primary_purpose",
    contextModelName: "vehicles",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "primary_purpose"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      hasPrimaryPurpose: {
        systemMessage:
          "Aside from driving to and from work, do you use your vehicle for business purposes?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "llmBoolean"
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "",
            commands: [""]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

const damagedDialog = {
  damaged: {
    contextFieldName: "damaged",
    contextModelName: "vehicles",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "damaged"
              }
            }
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      },
      hasDamaged: {
        systemMessage: "Does the vehicle currently have any unrepaired damage?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "llmBoolean"
            },
            ""
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: ["nextTopic", "nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["", "nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "",
            commands: [""]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      }
    }
  }
};

module.exports = {
  fullAddressConfirmationDialog,
  fullVehicleConfirmationDialog,
  fullNameConfirmationDialog,
  cityStateConfirmationDialog,
  driversLicense_StateConfirmationDialog,
  excludedDriverNameLicenseConfirmationDialog,
  firstNameDialog,
  lastNameDialog,
  zipDialog,
  stateDialog,
  cityDialog,
  addressDialog,
  addressSixMonthsDialog,
  homeTypeDialog,
  homeOwnershipDialog,
  birthDateDialog,
  maritalStatusDialog,
  phoneDialog,
  emailDialog,
  militaryAffiliationDialog,
  policyTypeDialog,
  policyStartTodayTomorrowDialog,
  policyStartDateDialog,
  licenseStatusDialog,
  licenseStateDialog,
  licenseNumberDialog,
  licenseRevokedDialog,
  sr22Dialog,
  currentlyInsuredDialog,
  lapseInSixMonthsDialog,
  lapseOverFifteenDaysDialog,
  lapseReasonDialog,
  lapseReasonOtherDialog,
  driverCourseDialog,
  driverCourseDateDialog,
  accidentsDialog,
  accidentsAtFaultDialog,
  accidentDateDialog,
  claimsDialog,
  claimDateDialog,
  claimGreaterThan1kDialog,
  violationsDialog,
  violationDateDialog,
  violationTypeDialog,
  driversDialog,
  householdMemberNotOnPolicyDialog,
  householdMemberNotOnPolicyDrivingDialog,
  excludedFromPolicyDialog,
  excludedDriverFirstNameDialog,
  excludedDriverLastNameDialog,
  excludedDriverBirthDateDialog,
  excludedDriverLicenseStateDialog,
  excludedDriverLicenseNumberDialog,
  haveVinDialog,
  haveRegistrationPolicyDialog,
  vinDialog,
  yearDialog,
  makeDialog,
  modelDialog,
  ownershipDialog,
  financeCompanyDialog,
  vehiclesDialog,
  primaryPurposeDialog,
  damagedDialog
};
