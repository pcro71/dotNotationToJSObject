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

export default {marital_statusDialog};