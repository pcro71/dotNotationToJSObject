const first_nameDialog = {
  first_name: {
    contextFieldName: 'first_name',
    contextModelName: 'leads',
    initialCommandName: 'isFieldPresent',
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: 'fieldPresent',
              params: {
                fieldName: 'first_name'
              }
            }
          ],
          valid: {
            commands: [
              'nextCommand:onFieldPresent'
            ]
          },
          invalid: {
            commands: [
              'nextCommand:onFieldEmpty'
            ]
          }
        }
      },
      onFieldPresent: {
        systemMessage: 'We have your name as <first_name>.  Spelled <first_name: spelled out>.  Is that right?',
        userValidators: {
          validators: [
            {
              name: 'llmBoolean',
              params: {
                appendAffirmative: ", that's me."
              }
            }
          ],
          valid: {
            systemMessage: 'Thank you for confirming!',
            commands: [
              'topicComplete", "nextTopic'
            ]
          },
          invalid: {
            systemMessage: "I'm sorry, ",
            commands: [
              'nextCommand:onFieldEmpty'
            ]
          },
          extracted: {
            systemMessage: 'Great,',
            commands: [
              'nextCommand:onFieldPresent'
            ]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't understand that.",
            commands: [
              'nextCommand:onFieldEmpty'
            ]
          }
        }
      },
      onFieldEmpty: {
        systemMessage: [
          'Please say and spell out your legal first name.  For example, Jeffrey J E F F R E Y.'
        ],
        userValidators: {
          validators: [
            {
              name: 'llmExtract',
              params: {
                instructionsOverride: "Attempt to extract the user's first name.  They have been instructed to pronounce their first name and then spell out their first name. Please use these two pieces of data (if available) to correctly extract their first name."
              }
            }
          ]
        }
      },
      onFieldempty: {
        userValidators: {
          extracted: {
            systemMessage: 'Thanks!',
            commands: [
              'topicComplete", "nextTopic'
            ]
          },
          unknown: {
            systemMessage: "I'm sorry, I didn't catch that.",
            commands: [
              'nextCommand:onFieldEmpty'
            ]
          }
        }
      }
    }
  }
};

export default first_nameDialog;