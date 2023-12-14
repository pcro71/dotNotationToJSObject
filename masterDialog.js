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
  "": ""
};

export default {addressDialog};

module.exports = {
  first_nameDialog,
  last_nameDialog,
  zipDialog,
  stateDialog,
  cityDialog,
  addressDialog,
};