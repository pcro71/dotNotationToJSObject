const fullAddressConfirmationDialog = {
  full_address_confirmation: {
    contextFieldName: "null",
    contextModelName: "leads",
    initialCommandName: "allFieldsPresent",
    commands: {
      isFieldPresent: {
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
            commands: [
              "nextCommand:confirmAllFields"
            ]
          },
          invalid: {
            commands: [
              "addTopics-leads:address,city,state,zip", "nextTopic"
            ]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "We have your address as <address>, <city>, <state>, <zip:spelledOut>. Is this correct?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            }
          ],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: [
              "nextTopic"
            ]
          },
          invalid: {
            systemMessage: "I'm sorry, ",
            commands: [
              "addTopics-leads:address,city,state,zip", "nextTopic"
            ]
          }
        }
      }
    }
  },
};

const fullVehicleConfirmationDialog = {
  full_vehicle_confirmation: {
    contextFieldName: "null",
    contextModelName: "vehicles",
    initialCommandName: "allFieldsPresent",
    commands: {
      isFieldPresent: {
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
            commands: [
              "nextCommand:confirmAllFields"
            ]
          },
          invalid: {
            commands: [
              "addTopics-vehicles:year,make,model", "nextTopic"
            ]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "We have your vehicle as a <year:dateYear> <make> <model>. Is this all correct?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            }
          ],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: [
              "nextTopic"
            ]
          },
          invalid: {
            systemMessage: "I'm sorry, ",
            commands: [
              "addTopics-vehicles:year,make,model", "nextTopic"
            ]
          }
        }
      }
    }
  },
};

const fullNameConfirmationDialog = {
  full_name_confirmation: {
    contextFieldName: "null",
    contextModelName: "leads",
    initialCommandName: "allFieldsPresent",
    commands: {
      isFieldPresent: {
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
            commands: [
              "nextCommand:confirmAllFields"
            ]
          },
          invalid: {
            commands: [
              "addTopics-leads:first_name,last_name", "nextTopic"
            ]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "We have your full name as <first_name> <last_name>. Is this all correct?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            }
          ],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: [
              "nextTopic"
            ]
          },
          invalid: {
            systemMessage: "I'm sorry, ",
            commands: [
              "addTopics-first_name,last_name", "nextTopic"
            ]
          }
        }
      }
    }
  },
};

const cityStateConfirmationDialog = {
  city_state_confirmation: {
    contextFieldName: "null",
    contextModelName: "leads",
    initialCommandName: "allFieldsPresent",
    commands: {
      isFieldPresent: {
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
            commands: [
              "nextCommand:confirmAllFields"
            ]
          },
          invalid: {
            commands: [
              "addTopics-leads:city,state", "nextTopic"
            ]
          }
        }
      },
      onFieldPresent: {
        systemMessage: "Do you live in <city> <state>. Is that right?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            }
          ],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: [
              "nextTopic"
            ]
          },
          invalid: {
            systemMessage: "I'm sorry, ",
            commands: [
              "addTopics-city,state", "nextTopic"
            ]
          }
        }
      }
    }
  },
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
            },
            ""
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
            },
            ""
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
                instructionsOverride: "We asked the user: What is the five digit zip code that you live in?  Please extract and return the five digit zip code from the following user message. The zip code is 5 digits long and may have one or more leading zeros. It also may be separated by whitespace. Note: users will sometimes say oh for zero."
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
            },
            ""
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
            },
            ""
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
            },
            ""
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
              name: "llmBoolean"
            },
            ""
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
                instructionsOverride: "We asked the user for their birth date.  Please extract their birthdate.  User's typically say the month and then provide a number for the day of month and the year.  For example, March 4th, 2000.  Although, they may provide the number for the month as well, e.g., 6 11 1971, would be june 11th 1971.  Please return the extracted data in the format Month, day, year:  June 11, 1971."
              }
            },
            ""
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
                instructionsOverride: "We asked the user about their marital status: Are you single, married or divorced?  Please extract their answer to the question as one of these three options."
              }
            },
            ""
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
        systemMessage: "This phone number is your primary phone number. Correct?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
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
          "What is your primary phone number including area code? Please say one number at a time starting with the area code."
        ],
        userValidators: {
          validators: [
            {
              name: "llmExtract",
              params: {
                instructionsOverride: "We asked the user about their marital status: Are you single, married or divorced?  Please extract their answer to the question as one of these three options."
              }
            },
            {
              name: "pattern",
              params: {
                pattern: "^[2-9][0-9]{2}[2-9][0-9]{6}$"
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
        systemMessage: "We have your email address as <email: spelled out>.  Is that right?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
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
          "Please spell out your personal email address.  For the email provider, you can just say at google dot com or at yahoo dot com."
        ],
        userValidators: {
          validators: [
            {
              name: "llmExtract",
              params: {
                instructionsOverride: "We asked the user the following question: Please spell out your personal email address.  For the email provider, you can just say at google dot com or at yahoo dot com.  Please extract the consumer's email address including the @ sign (don't use the word at instead of @) and then the ESP and a period (sometimes said as dot) and the top level domain.  For example ted_murphy@yahoo.com"
              }
            },
            {
              name: "pattern",
              params: {
                pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
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
        systemMessage: "You [have/have not] served in the military.  Correct?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
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
          "Have you ever served in the US Military?"
        ],
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            ""
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
        systemMessage: "We have it that you [need/don't need] an SR22 or FR44.  Is that correct?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
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
          "Do you require and SR22 or FR44? If you do not know then you most likely do not need this, and just say no."
        ],
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            ""
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
        systemMessage: "It looks like you currently [have/don't have] active insurance at this moment.  Is that correct?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
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
          "Do you have insurance that is active at this moment?"
        ],
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            ""
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

const accidentsDialog = {
  accidents: {
    contextFieldName: "accidents",
    contextModelName: "leads",
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
        systemMessage: "Over the last three years, you have had <accidents> accidents.  Is that correct?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
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
          "How many accidents, either at fault or not at fault, have you had in the last three years?"
        ],
        userValidators: {
          validators: [
            {
              name: "llmExtract",
              params: {
                instructionsOverride: "We asked the user: How many accidents, either at fault or not at fault, have you had in the last three years? Please extract the number of accidents that they respond with as a number, e.g, 3."
              }
            },
            ""
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

const driversAdditionalDialog = {
  drivers_additional: {
    contextFieldName: "drivers_additional",
    contextModelName: "leads",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: {
                fieldName: "drivers_additional"
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
        systemMessage: "There will be <drivers_additional> drivers on your policy.  Is that right?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
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
          "How many drivers will be on your policy?"
        ],
        userValidators: {
          validators: [
            {
              name: "llmExtract",
              params: {
                instructionsOverride: "We asked the user: How many drivers will be on your policy?  Please extract the number of drivers that they respond with as a number, e.g, 3."
              }
            },
            ""
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
        systemMessage: "Your vehicle is a <year>.  Is that right?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
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
          "What is the year of your vehicle?"
        ],
        userValidators: {
          validators: [
            {
              name: "llmExtract",
              params: {
                instructionsOverride: "We asked the user: What is the year of your vehicle? Please extract the year."
              }
            },
            {
              name: "pattern",
              params: {
                pattern: "^(19[6-9]d|20[0-1]d|202[0-4])$"
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
        systemMessage: "The make of your vehicle is <make>.  Correct?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
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
          "What is the make of your vehicle?"
        ],
        userValidators: {
          validators: [
            {
              name: "llmExtract",
              params: {
                instructionsOverride: "We asked the user: What is the make of your vehicle? The make of a vehicle is the manufacturer, e.g., Volvo, General Motors, etc.  Please extract the make."
              }
            },
            ""
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
        systemMessage: "The model of your vehicle is <model>.  Is that right?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
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
          "What is the model of your vehicle?"
        ],
        userValidators: {
          validators: [
            {
              name: "llmExtract",
              params: {
                instructionsOverride: "We asked the user: What is the model of your vehicle? The model of a vehicle refers to a specific version or design of a car made by a manufacturer. Each model has its own unique name or number (and sometimes both) which differentiates it from other models produced by the same manufacturer. For example, Toyota, produces the models Camry, Corolla, RAV4, and Prius. Please extract the model."
              }
            },
            ""
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
        systemMessage: "It looks like you <vehicle_ownership> your vehicle.  Correct?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
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
          "Do you own this vehicle outright, lease the vehicle or are you making payments to a finance company for this vehicle?"
        ],
        userValidators: {
          validators: [
            {
              name: "llmExtract",
              params: {
                instructionsOverride: "We asked the user: Do you own this vehicle outright, lease the vehicle or are you making payments to a finance company for this vehicle? Please extract their answer and return, own, lease or finance."
              }
            },
            ""
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

module.exports = {
fullAddressConfirmationDialog,
fullVehicleConfirmationDialog,
fullNameConfirmationDialog,
cityStateConfirmationDialog,
firstNameDialog,
lastNameDialog,
zipDialog,
stateDialog,
cityDialog,
addressDialog,
homeOwnershipDialog,
birthDateDialog,
maritalStatusDialog,
phoneDialog,
emailDialog,
militaryAffiliationDialog,
sr22Dialog,
currentlyInsuredDialog,
accidentsDialog,
driversAdditionalDialog,
yearDialog,
makeDialog,
modelDialog,
ownershipDialog,
};
