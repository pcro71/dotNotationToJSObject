const zipDialog = {
  "zip": {
    "contextFieldName": "\"zip\"",
    "contextModelName": "\"leads\"",
    "initialCommandName": "\"isFieldPresent\"",
    "commands": {
      "isFieldPresent": {
        "systemValidators": {
          "validators": [
            "{name: \"fieldPresent\", params: {fieldName: \"zip\"}}"
          ],
          "valid": {
            "commands": [
              "\"nextCommand:onFieldPresent\""
            ]
          },
          "invalid": {
            "commands": [
              "\"nextCommand:onFieldEmpty\""
            ]
          }
        }
      },
      "onFieldPresent": {
        "systemMessage": "\"We have your zip code as <zip:spelledOut>. Is this correct?\"",
        "userValidators": {
          "validators": [
            "{name: \"llmBooleanOrExtract\", params: {prependInstructions: \"Attempt to extract and return the five digit zip code from the following user message. The zip code is 5 digits long and may be followed by 4 more digits. It also may be separated by whitespace. Note: users will sometimes say oh for zero.\"},{pattern: \"^[0-9]{5}$}\"}}"
          ],
          "valid": {
            "systemMessage": "\"Thank you for confirming!\"",
            "commands": [
              "\"topicComplete\", \"nextTopic\""
            ]
          },
          "invalid": {
            "systemMessage": "\"I'm sorry, \"",
            "commands": "[]\"nextCommand:onFieldEmpty\""
          },
          "extracted": {
            "systemMessage": "\"Great,\"",
            "commands": [
              "\"nextCommand:onFieldPresent\""
            ]
          },
          "unknown": {
            "systemMessage": "\"I'm sorry, I didn't understand that.\"",
            "commands": [
              "\"nextCommand:onFieldEmpty\""
            ]
          }
        }
      },
      "onFieldEmpty": {
        "systemMessage": [
          "\"Could you please tell me your zip code?\""
        ],
        "userValidators": {
          "validators": [
            "{name: \"llmExtract\", params: {prependInstructions: \"Attempt to extract and return the five digit zip code from the following user message. The zip code is 5 digits long and may be followed by 4 more digits. It also may be separated by whitespace. Note: users will sometimes say oh for zero.\"},{pattern: \"^[0-9]{5}$}\"}}"
          ]
        }
      },
      "onFieldempty": {
        "userValidators": {
          "extracted": {
            "systemMessage": "\"Thank you! I have your zip as <zip: spelledOut>\"",
            "commands": [
              "\"topicComplete\", \"nextTopic\""
            ]
          },
          "unknown": {
            "systemMessage": "\"I'm sorry, I didn't catch that.\"",
            "commands": [
              "\"nextCommand:onFieldEmpty\""
            ]
          }
        }
      }
    }
  }
};
export default zipDialog;