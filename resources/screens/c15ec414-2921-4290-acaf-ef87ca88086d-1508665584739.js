jQuery("#simulation")
  .on("click", ".s-c15ec414-2921-4290-acaf-ef87ca88086d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-cover")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover": {
                      "attributes": {
                        "opacity": "0.75"
                      }
                    }
                  },{
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
                      }
                    }
                  },{
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-cover_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover_1 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover_1": {
                      "attributes": {
                        "opacity": "0.75"
                      }
                    }
                  },{
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
                      }
                    }
                  },{
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover_1 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-cover_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover_2 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover_2": {
                      "attributes": {
                        "opacity": "0.75"
                      }
                    }
                  },{
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
                      }
                    }
                  },{
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover_2 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-cover_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-c15ec414-2921-4290-acaf-ef87ca88086d .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Label_34" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","5" ]
                      }," PM" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-c15ec414-2921-4290-acaf-ef87ca88086d .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-Input_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-Input_9 input": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Light',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_9" ],
                    "value": ""
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_48" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-c15ec414-2921-4290-acaf-ef87ca88086d .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-Input_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-c15ec414-2921-4290-acaf-ef87ca88086d #s-Input_9 input": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Light',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_9" ],
                    "value": "Search"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_48" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });