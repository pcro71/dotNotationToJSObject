const fullAddressConfirmationDialog = {
  full_address_confirmation: {
    contextFieldName: "null",
    contextModelName: "leads",
    initialCommandName: "allFieldsPresent",
    commands: {
      allFieldsPresent: {
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
            commands: ["nextCommand:confirmAllFields"]
          },
          invalid: {
            commands: ["addTopics-leads:address,city,state,zip", "nextTopic"]
          }
        }
      },
      confirmAllFields: {
        systemMessage:
          "We have your address as <address>, <city>, <state>, <zip:spelledOut>. Is this correct?",
        userValidators: {
          validators: [
            {
              name: "llmBoolean"
            }
          ],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: ["nextTopic"]
          },
          invalid: {
            systemMessage:
              "I didn't get that.  Is your address <address>, <city>, <state>, <zip:spelledOut>?",
            commands: ["addTopics-leads:address,city,state,zip", "nextTopic"]
          }
        }
      }
    }
  }
};
