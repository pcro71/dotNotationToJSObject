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
        systemMessage: "You do, do not drive your vehicles for business or commercial purposes, not including driving to and from work.  Correct?",
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
              "nextTopic"
            ]
          },
          invalid: {
            systemMessage: "I'm sorry, ",
            commands: [
              ""
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
      },
      onFieldEmpty: {
        systemMessage: [
          "Aside from driving to and from work, do you use your vehicle for business purposes?"
        ],
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            },
            ""
          ],
          extracted: {
            systemMessage: "Thanks!",
            commands: [
              "nextCommand:onFieldPresent"
            ]
          },
          invalid: {
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

export default {primaryPurposeDialog};