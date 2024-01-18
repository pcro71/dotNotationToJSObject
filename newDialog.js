const fullVehicleConfirmationDialog = {
  full_vehicle_confirmation: {
    contextFieldName: "null",
    contextModelName: "vehicles",
    initialCommandName: "allFieldsPresent",
    commands: {
      allFieldsPresent: {
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
            commands: ["nextCommand:confirmAllFields"]
          },
          invalid: {
            commands: ["addTopics-vehicles:year,make,model", "nextTopic"]
          }
        }
      },
      confirmAllFields: {
        systemMessage:
          "We have your vehicle as a <year:dateYear> <make> <model>. Is this all correct?",
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
              "I missed that.  Is your vehicle a <year:dateYear> <make> <model>?",
            commands: ["addTopics-vehicles:year,make,model", "nextTopic"]
          }
        }
      }
    }
  }
};
