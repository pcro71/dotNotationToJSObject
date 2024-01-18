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
      onFieldEmpty: {
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            }
          ],
          valid: {
            systemMessage: "Thanks!",
            commands: [
              "nextCommand:onFieldPresent"
            ]
          },
          invalid: {
            systemMessage: "Got it.",
            commands: [
              "nextCommand:onFieldPresent"
            ]
          }
        }
      }
    }
  },
};

export default {damagedDialog};