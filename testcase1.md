##### Setup
* Card Markup
* Sample json response
 
##### Issue
As a user I want to filter the list of classes. Filtering should be possible by Subject, Grade and Teacher.

It should be possible to select multiple items in each filter. If multiple items inside 1 filter are selected they should be connected with 'OR'. Different filters should be connected with 'AND'.

Example Use-Case:
User selects 'Grade 1' and 'Grade 2' and Subject 'Social Studies'. This should result in (subject = 'Social Studies' AND (grade='Grade 1' OR 'Grade 2')).

###Data:

Subjects:
````json
[
  "Social Studies",
  "21st Century Research",
  "Science"
]
````


Api-Response:
````json
{
  "_links": {
    "self": {
      "href": "\/classes"
    },
    "class.create": {
      "href": "\/api\/groups\/5\/classes\/"
    },
    "class.users.join": {
      "href": "\/api\/groups\/5\/classes\/join\/"
    },
  },
  "_embedded": {
    "class": [
      {
        "id": 5,
        "name": "assumenda",
        "subject": 3,
        "grade": 12,
        "description": "In aspernatur.",
        "schoolYear": 0,
        "_links": {
          "self": {
            "href": "\/api\/classes\/5"
          },
          "class.detail": {
            "href": "\/classes\/5\/5\/modules\/"
          },
          "class.update": {
            "href": "\/api\/groups\/5\/classes\/5\/"
          },
          "class.delete": {
            "href": "\/api\/groups\/5\/classes\/5\/"
          }
        }
      },
      {
        "id": 7,
        "name": "est",
        "subject": 0,
        "grade": 11,
        "description": "Magnam quia.",
        "schoolYear": 3,
        "_links": {
          "self": {
            "href": "\/api\/classes\/7"
          },
          "class.detail": {
            "href": "\/classes\/5\/7\/modules\/"
          },
          "class.update": {
            "href": "\/api\/groups\/5\/classes\/7\/"
          },
          "class.delete": {
            "href": "\/api\/groups\/5\/classes\/7\/"
          }
        },
        "_embedded": {
          "teacher": [
            {
              "id": 32,
              "first": "Marlin",
              "last": "Will",
              "name": "Marlin Will",
              "_links": {
                "self": {
                  "href": "\/api\/users\/32"
                }
              }
            }
          ]
        }
      },
      {
        "id": 6,
        "name": "eum",
        "subject": 1,
        "grade": 2,
        "description": "Et nobis culpa.",
        "schoolYear": 0,
        "_links": {
          "self": {
            "href": "\/api\/classes\/6"
          },
          "class.detail": {
            "href": "\/classes\/5\/6\/modules\/"
          },
          "class.update": {
            "href": "\/api\/groups\/5\/classes\/6\/"
          },
          "class.delete": {
            "href": "\/api\/groups\/5\/classes\/6\/"
          }
        },
        "_embedded": {
          "teacher": [
            {
              "id": 16,
              "first": "Leda",
              "last": "Wiza",
              "name": "Leda Wiza",
              "_links": {
                "self": {
                  "href": "\/api\/users\/16"
                }
              }
            }
          ]
        }
      },
      {
        "id": 10,
        "name": "My Class",
        "subject": 0,
        "grade": 0,
        "description": "kjfghfj",
        "schoolYear": 1,
        "_links": {
          "self": {
            "href": "\/api\/classes\/10"
          },
          "class.detail": {
            "href": "\/classes\/5\/10\/modules\/"
          },
          "class.update": {
            "href": "\/api\/groups\/5\/classes\/10\/"
          },
          "class.delete": {
            "href": "\/api\/groups\/5\/classes\/10\/"
          }
        },
        "_embedded": {
          "teacher": [
            {
              "id": 69,
              "name": "Jovany Jones",
              "first": "Jovany",
              "last": "Jones",
              "_links": {
                "self": {
                  "href": "\/api\/users\/69"
                }
              }
            }
          ]
        }
      },
      {
        "id": 8,
        "name": "ratione",
        "subject": 3,
        "grade": 5,
        "description": "Quas in.",
        "schoolYear": 3,
        "_links": {
          "self": {
            "href": "\/api\/classes\/8"
          },
          "class.detail": {
            "href": "\/classes\/5\/8\/modules\/"
          },
          "class.update": {
            "href": "\/api\/groups\/5\/classes\/8\/"
          },
          "class.delete": {
            "href": "\/api\/groups\/5\/classes\/8\/"
          }
        },
        "_embedded": {
          "teacher": [
            {
              "id": 49,
              "first": "Jovany",
              "last": "Ledner",
              "name": "Jovany Ledner",
              "_links": {
                "self": {
                  "href": "\/api\/users\/49"
                }
              }
            }
          ]
        }
      },
      {
        "id": 9,
        "name": "testing",
        "subject": 0,
        "grade": 0,
        "description": "testing",
        "schoolYear": 1,
        "_links": {
          "self": {
            "href": "\/api\/classes\/9"
          },
          "class.detail": {
            "href": "\/classes\/5\/9\/modules\/"
          },
          "class.update": {
            "href": "\/api\/groups\/5\/classes\/9\/"
          },
          "class.delete": {
            "href": "\/api\/groups\/5\/classes\/9\/"
          }
        }
      }
    ]
  }
}
````

Sample Class-Box-Markup:

````html
<div class="tile tile-background">
  <div class="pill-group light">
    <div class="pill">CLASS_SUBJECT</div>
    <div class="pill">Grade CLASS_GRADE</div>
  </div>

  <div>
    <h3 class="light">CLASS_NAME</h3>
    <div class="element-description light">CLASS_DESCRIPTION</div>
  </div>

  <div class="tile-footer">
    <h4>Teachers</h4>
    <div class="element-description-sm">
      CLASS_TEACHER
    </div>
  </div>
</div>

````