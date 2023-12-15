commands: {
  isFieldPresent: {
    systemValidators: {
      validators: [
        {
          name: "fieldPresent",
          params: { fieldName: "military_service" } // example! not sure if this is the actual field name
        }
      ],
      valid: {
        // the name of the "valid" command next command callback can be anything, it just needs to be defined in the commands object
        commands: ["nextCommand:hasMilitaryService"] 
      },
      invalid: {
        // same for "invalid", it can be anything
        commands: ["nextCommand:noMilitaryService"]
      }
    }
  },
  hasMilitaryService: {
    systemMessage: "You have served in the military. Correct?"
    userValidators: {
      // ...omitted, put your validators here and decide what to do if they pass, fail, unknown, etc.
    }
  },
  noMilitaryService: {
    systemMessage: "You have not served in the military. Correct?",
    userValidators: {
      // ...omitted, put your validators here and decide what to do if they pass, fail, unknown, etc.
    }
  }
}
}