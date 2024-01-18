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
            commands: [
              "nextTopic",
              "nextCommand:onFieldPresent"
            ]
          },
          invalid: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: [
              "",
              "nextCommand:onFieldEmpty"
            ]
          },
          extracted: {
            systemMessage: "",
            commands: [
              ""
            ]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: [
              "nextCommand:onFieldPresent"
            ]
          }
        }
      }
    }
  }
};

export default {damagedDialog};