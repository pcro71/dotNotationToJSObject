const last_nameDialog = {
  last_name: {
    contextFieldName: 'last_name',
    contextModelName: 'leads',
    initialCommandName: 'isFieldPresent',
    commands: {
      isFieldPresent: {
        systemValidators: {
          validators: [
            {
              name: 'fieldPresent',
              params: {
                fieldName: 'last_name'
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
        systemMessage: 'We have your name as <last_name>. Spelled <last_name: spelled out>.  Is that right?',
        userValidators: {
          validators: [
            {
              name: 'llmBoolean',
              params: {
                appendAffirmative: ", that's me."
              }
            },
            {
              name: 'pattern',
              params: {
                pattern: '^[0-9]{5}$'
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
          'Please say and spell out your legal last name.  For example, Smith S M I T H.'
        ],
        userValidators: {
          validators: [
            {
              name: 'llmExtract',
              params: {
                instructionsOverride: "Attempt to extract the user's last name.  They have been instructed to pronounce their last name and then spell out their last name. Please use these two pieces of data (if available) to correctly extract their last name."
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
  },
  '': ''
};

export default {last_nameDialog};