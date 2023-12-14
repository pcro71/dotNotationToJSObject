const first_nameDialog = {
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
            commands: [
              "nextCommand:onFieldPresent"
            ]
          },
          invalid: {
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "We have your name as <first_name>.  Spelled <first_name: spelled out>.  Is that right?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean",
              params: {
                appendAffirmative: ", that's me."
              }
            }
          ],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: [
              "topicComplete", "nextTopic"
            ]
          },
          invalid: {
            systemMessage: "I'm sorry, ",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          },
          extracted: {
            systemMessage: "Great,",
            commands: [
              "nextCommand:onFieldPresent"
            ]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      },
      onFieldEmpty: {
        systemMessage: [
          "Please say and spell out your legal first name.  For example, Jeffrey J E F F R E Y."
        ],
        userValidators: {
          validators: [
            {
              name: "llmExtract",
              params: {
                instructionsOverride: "Attempt to extract the user's first name.  They have been instructed to pronounce their first name and then spell out their first name. Please use these two pieces of data (if available) to correctly extract their first name."
              }
            }
          ]
        }
      },
      onFieldempty: {
        userValidators: {
          extracted: {
            systemMessage: "Thanks!",
            commands: [
              "topicComplete", "nextTopic"
            ]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      }
    }
  },
};

const last_nameDialog = {
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
            commands: [
              "nextCommand:onFieldPresent"
            ]
          },
          invalid: {
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "We have your name as <last_name>. Spelled <last_name: spelled out>.  Is that right?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean",
              params: {
                appendAffirmative: ", that's me."
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
            systemMessage: "Thank you for confirming!",
            commands: [
              "topicComplete", "nextTopic"
            ]
          },
          invalid: {
            systemMessage: "I'm sorry, ",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          },
          extracted: {
            systemMessage: "Great,",
            commands: [
              "nextCommand:onFieldPresent"
            ]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      },
      onFieldEmpty: {
        systemMessage: [
          "Please say and spell out your legal last name.  For example, Smith S M I T H."
        ],
        userValidators: {
          validators: [
            {
              name: "llmExtract",
              params: {
                instructionsOverride: "Attempt to extract the user's last name.  They have been instructed to pronounce their last name and then spell out their last name. Please use these two pieces of data (if available) to correctly extract their last name."
              }
            }
          ]
        }
      },
      onFieldempty: {
        userValidators: {
          extracted: {
            systemMessage: "Thanks!",
            commands: [
              "topicComplete", "nextTopic"
            ]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      }
    }
  },
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
            commands: [
              "nextCommand:onFieldPresent"
            ]
          },
          invalid: {
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "Is your zip code <zip_code: spelled out>?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "pattern",
              params: {
                pattern: "^[0-9]{5}$"
              }
            }
          ],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: [
              "topicComplete", "nextTopic"
            ]
          },
          invalid: {
            systemMessage: "I'm sorry, ",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          },
          extracted: {
            systemMessage: "Great,",
            commands: [
              "nextCommand:onFieldPresent"
            ]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      },
      onFieldEmpty: {
        systemMessage: [
          "What is the five digit zip code that you live in?"
        ],
        userValidators: {
          validators: [
            {
              name: "llmExtract",
              params: {
                instructionsOverride: "We asked the user, 'What is the five digit zip code that you live in?'  Please extract and return the five digit zip code from the following user message. The zip code is 5 digits long and may have one or more leading zeros. It also may be separated by whitespace. Note: users will sometimes say oh for zero."
              }
            },
            {
              name: "pattern",
              params: {
                pattern: "^[0-9]{5}$"
              }
            }
          ]
        }
      },
      onFieldempty: {
        userValidators: {
          extracted: {
            systemMessage: "Thanks!",
            commands: [
              "topicComplete", "nextTopic"
            ]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
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
            commands: [
              "nextCommand:onFieldPresent"
            ]
          },
          invalid: {
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "Do you live in <state>?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "pattern",
              params: {
                pattern: "^[0-9]{5}$"
              }
            }
          ],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: [
              "topicComplete", "nextTopic"
            ]
          },
          invalid: {
            systemMessage: "I'm sorry, ",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          },
          extracted: {
            systemMessage: "Great,",
            commands: [
              "nextCommand:onFieldPresent"
            ]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      },
      onFieldEmpty: {
        systemMessage: [
          "Which state do you live in?"
        ],
        userValidators: {
          validators: [
            {
              name: "llmExtract",
              params: {
                instructionsOverride: "The user has been instructed to provide the state in the United States that they live in.  Please extract the state and return the two digit abbreviation for that US state, e.g., CA when the consumer says California.  For District of Columbia, please return DC."
              }
            }
          ]
        }
      },
      onFieldempty: {
        userValidators: {
          extracted: {
            systemMessage: "Thanks!",
            commands: [
              "topicComplete", "nextTopic"
            ]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      }
    }
  },
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
            commands: [
              "nextCommand:onFieldPresent"
            ]
          },
          invalid: {
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "Do you live in <city>?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "pattern",
              params: {
                pattern: "^[0-9]{5}$"
              }
            }
          ],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: [
              "topicComplete", "nextTopic"
            ]
          },
          invalid: {
            systemMessage: "I'm sorry, ",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          },
          extracted: {
            systemMessage: "Great,",
            commands: [
              "nextCommand:onFieldPresent"
            ]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      },
      onFieldEmpty: {
        systemMessage: [
          "Please say and spell out the city that you live in.  For Example, Des Moines D E S M O I N E S."
        ],
        userValidators: {
          validators: [
            {
              name: "llmExtract",
              params: {
                instructionsOverride: "Please extract the U.S. city that they user says.  They have been instructed to pronounce the city and then spell out the city. Please use these two pieces of data (if available) to correctly extract the city."
              }
            }
          ]
        }
      },
      onFieldempty: {
        userValidators: {
          extracted: {
            systemMessage: "Thanks!",
            commands: [
              "topicComplete", "nextTopic"
            ]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      }
    }
  },
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
            commands: [
              "nextCommand:onFieldPresent"
            ]
          },
          invalid: {
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "Is your address <address>?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "pattern",
              params: {
                pattern: "^[0-9]{5}$"
              }
            }
          ],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: [
              "topicComplete", "nextTopic"
            ]
          },
          invalid: {
            systemMessage: "I'm sorry, ",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          },
          extracted: {
            systemMessage: "Great,",
            commands: [
              "nextCommand:onFieldPresent"
            ]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      },
      onFieldEmpty: {
        systemMessage: [
          "What is your street address?"
        ],
        userValidators: {
          validators: [
            {
              name: "llmExtract",
              params: {
                instructionsOverride: "Please extract the street address that they user says.  Street address typically begin with a number, followed by a name or names and the a street type, e.g., road, street, way, circle, avenue, etc. For example, 1244 telegraph avenue."
              }
            }
          ]
        }
      },
      onFieldempty: {
        userValidators: {
          extracted: {
            systemMessage: "Thanks!",
            commands: [
              "topicComplete", "nextTopic"
            ]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      }
    }
  },
};

const home_ownershipDialog = {
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
            commands: [
              "nextCommand:onFieldPresent"
            ]
          },
          invalid: {
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "You [own/do not own] your current residence.  Correct?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "pattern",
              params: {
                pattern: "^[0-9]{5}$"
              }
            }
          ],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: [
              "topicComplete", "nextTopic"
            ]
          },
          invalid: {
            systemMessage: "I'm sorry, ",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          },
          extracted: {
            systemMessage: "Great,",
            commands: [
              "nextCommand:onFieldPresent"
            ]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      },
      onFieldEmpty: {
        systemMessage: [
          "Do you own this residence?"
        ],
        userValidators: {
          validators: [
            {
              name: "llmBoolean",
              params: {}
            }
          ]
        }
      },
      onFieldempty: {
        userValidators: {
          extracted: {
            systemMessage: "Thanks!",
            commands: [
              "topicComplete", "nextTopic"
            ]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      }
    }
  },
};


const birth_dateDialog = {
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
            commands: [
              "nextCommand:onFieldPresent"
            ]
          },
          invalid: {
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "Is your birth date <birth_date>?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "pattern",
              params: {
                pattern: "^[0-9]{5}$"
              }
            }
          ],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: [
              "topicComplete", "nextTopic"
            ]
          },
          invalid: {
            systemMessage: "I'm sorry, ",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          },
          extracted: {
            systemMessage: "Great,",
            commands: [
              "nextCommand:onFieldPresent"
            ]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      },
      onFieldEmpty: {
        systemMessage: [
          "Please say your birthdate.  For example, March 17th, 1992"
        ],
        userValidators: {
          validators: [
            {
              name: "llmExtract",
              params: {
                instructionsOverride: "We asked the user for the birth date.  Please extract their birthdate.  User's typically say the month and then provide a number for the day of month and the year.  For example, March 4th, 2000.  Although, they may provide the number for the month as well, e.g., 6 11 1971, would be june 11th 1971.  Please return the extracted data in the format Month, day, year:  June 11, 1971."
              }
            }
          ]
        }
      },
      onFieldempty: {
        userValidators: {
          extracted: {
            systemMessage: "Thanks!",
            commands: [
              "topicComplete", "nextTopic"
            ]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      }
    }
  },
};

const marital_statusDialog = {
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
            commands: [
              "nextCommand:onFieldPresent"
            ]
          },
          invalid: {
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "You are currently <marital_status>.  Is that correct?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            {
              name: "pattern",
              params: {
                pattern: "^[0-9]{5}$"
              }
            }
          ],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: [
              "topicComplete", "nextTopic"
            ]
          },
          invalid: {
            systemMessage: "I'm sorry, ",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          },
          extracted: {
            systemMessage: "Great,",
            commands: [
              "nextCommand:onFieldPresent"
            ]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      },
      onFieldEmpty: {
        systemMessage: [
          "Are you single, married or divorced?"
        ],
        userValidators: {
          validators: [
            {
              name: "llmExtract",
              params: {
                instructionsOverride: "We asked the user about their marital status, "Are you single, married or divorced?"  Please extract their answer to the question as one of these three options."
              }
            }
          ]
        }
      },
      onFieldempty: {
        userValidators: {
          extracted: {
            systemMessage: "Thanks!",
            commands: [
              "topicComplete", "nextTopic"
            ]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: [
              "nextCommand:onFieldEmpty"
            ]
          }
        }
      }
    }
  },
};

module.exports = {
  first_nameDialog,
  last_nameDialog,
  zipDialog,
  stateDialog,
  cityDialog,
  addressDialog,
  home_ownershipDialog,
  birth_dateDialog,
  marital_statusDialog};