in google sheet, run forExport google apps script
Download data to CSV from to_export tab of the masterquestions file into input_all.csv
save file
run master.js
it should cycle through every row, copying it to input.js, where it is cleaned up and pasted to masterDialog.js
remove the "" in:
},
""
]

          to

            },
          ]

Also, clean-up these: "extracted:
you'll see the error messages.

Check by doing a dif where select old_zip first.
