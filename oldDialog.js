const fullVehicleConfirmationDialog = {
  full_vehicle_confirmation: {
    required: true,
    contextFieldName: null,
    contextModelName: "vehicles",
    initialCommandName: "allFieldsPresent",
    commands: {
      allFieldsPresent: {
        systemValidators: {
          validators: [
            {
              name: "fieldPresent",
              params: { fieldName: "year" }
            },
            {
              name: "fieldPresent",
              params: { fieldName: "make" }
            },
            {
              name: "fieldPresent",
              params: { fieldName: "model" }
            },
            {
              name: "fieldPresent",
              params: { fieldName: "ownership" }
            },
            {
              name: "fieldPresent",
              params: { fieldName: "annual_mileage" }
            },
            {
              name: "fieldPresent",
              params: { fieldName: "primary_purpose" }
            }
          ],
          valid: {
            commands: ["nextCommand:confirmAllFields"]
          },
          invalid: {
            commands: [
              "addTopics-vehicles:year,make,model,ownership,primary_purpose,annual_mileage",
              "nextTopic"
            ]
          }
        }
      },
      confirmAllFields: {
        systemMessage:
          "We have your vehicle as a <year:dateYear> <make> <model>, that is <ownership>, with a " +
          "primary purpose of <primary_purpose>, and with an average annual mileage of <annual_mileage> miles. Is this all correct?",
        userValidators: {
          validators: [{ name: "llmBoolean" }],
          valid: {
            systemMessage: "Thank you for confirming!",
            commands: ["nextTopic"]
          },
          invalid: {
            systemMessage: "I'm sorry,",
            commands: [
              "addTopics-vehicles:year,make,model,ownership,primary_purpose,annual_mileage",
              "nextTopic"
            ]
          }
        }
      }
    }
  }
};
