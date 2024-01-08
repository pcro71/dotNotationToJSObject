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
                fieldName: "zip",
              },
            },
          ],
          valid: {
            commands: ["nextCommand:onFieldPresent"],
          },
          invalid: {
            commands: ["nextCommand:onFieldEmpty"],
          },
        },
      },
      onFieldPresent: {
        systemMessage: "Is your zip code <zip_code: spelled out>?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract",
              params: {
                appendAffirmative: ", that's me.",
              },
            },
          ],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: ["nextTopic"],
          },
          invalid: {
            systemMessage: "I'm sorry, ",
            commands: ["nextCommand:onFieldEmpty"],
          },
          extracted: {
            systemMessage: "Great. ",
            commands: ["nextCommand:onFieldPresent"],
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: ["nextCommand:onFieldPresent"],
          },
        },
      },
      onFieldEmpty: {
        systemMessage: ["What is the five digit zip code that you live in?"],
        userValidators: {
          validators: [
            {
              name: "llmExtract",
              params: {
                instructionsOverride:
                  "We asked the user: What is the five digit zip code that you live in?  Please extract and return the five digit zip code from the following user message. The zip code is 5 digits long and may have one or more leading zeros. It also may be separated by whitespace. Note: users will sometimes say oh for zero. Please return the zip code in the format: extracted: zip-code-here.",
              },
            },
            {
              name: "pattern",
              params: {
                pattern: "^[0-9]{5}$",
              },
            },
          ],
          extracted: {
            systemMessage: "Thanks!",
            commands: ["nextCommand:onFieldPresent"],
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: ["nextCommand:onFieldEmpty"],
          },
        },
      },
    },
  },
};
