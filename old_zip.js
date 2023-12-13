const zipDialog = {
  zip: {
    required: true,
    contextFieldName: "zip",
    contextModelName: "leads",
    initialCommandName: "isFieldPresent",
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: { fieldName: "zip" }
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
        systemMessage: "We have your zip code as <zip:spelledOut>. Is this correct?",
        userValidators: {
          validators: [
            {
              name: "llmBooleanOrExtract",
              params: {
                prependInstructions:
                  "Attempt to extract and return the zip code from the following user message. " +
                  "The zip code is 5 digits long and may be followed by 4 more digits. It also may be separated by whitespace."
              }
            }
          ],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: ["nextTopic"]
          },
          invalid: {
            systemMessage: "I'm sorry, ",
            commands: ["nextCommand:onFieldEmpty"]
          },
          extracted: {
            systemMessage: "Great,",
            commands: ["nextCommand:onFieldPresent"]
          }
        }
      },
      onFieldEmpty: {
        systemMessage: "Could you please tell me your zip code?",
        userValidators: {
          validators: [
            {
              name: "llmExtract",
              params: {
                prependInstructions:
                  "Attempt to extract and return the zip code from the following user message. " +
                  "The zip code is 5 digits long and may be followed by 4 more digits. It also may be separated by whitespace."
              }
            },
            {
              name: "pattern",
              params: {
                pattern: "^[0-9]{5}(?:-[0-9]{4})?$"
              }
            }
          ],
          valid: {
            systemMessage: "Thank you.",
            commands: ["nextCommand:onFieldPresent"]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't quite understand that.",
            commands: ["nextCommand:onFieldEmpty"]
          }
        }
      }
    }
  }
};
