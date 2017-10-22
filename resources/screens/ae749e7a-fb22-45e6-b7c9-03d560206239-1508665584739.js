jQuery("#simulation")
  .on("click", ".s-ae749e7a-fb22-45e6-b7c9-03d560206239 .click", function(event, data) {
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
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover": {
                      "attributes": {
                        "opacity": "0.75"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover": {
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
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover": {
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
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover_1 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover_1": {
                      "attributes": {
                        "opacity": "0.75"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover_1": {
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
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover_1 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover_1": {
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
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover_2 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover_2": {
                      "attributes": {
                        "opacity": "0.75"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover_2": {
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
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover_2 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-cover_2": {
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
    } else if(jFirer.is("#s-Label_83")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-Label_83": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-Label_83 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-Label_83 span": {
                      "attributes": {
                        "color": "#80B8F1",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-Image_7 > svg": {
                      "attributes": {
                        "overlay": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-Label_83": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-Label_83 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-Label_83 span": {
                      "attributes": {
                        "color": "#007DFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-Image_7 > svg": {
                      "attributes": {
                        "overlay": "#157EFB"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/aa5d0fa5-7350-4dd2-80b4-9048bbb7ec89",
                    "transition": "slidedown"
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
  .on("pageload", ".s-ae749e7a-fb22-45e6-b7c9-03d560206239 .pageload", function(event, data) {
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
  .on("focusin", ".s-ae749e7a-fb22-45e6-b7c9-03d560206239 .focusin", function(event, data) {
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
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-Input_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-Input_9 input": {
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
  .on("focusout", ".s-ae749e7a-fb22-45e6-b7c9-03d560206239 .focusout", function(event, data) {
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
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-Input_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-ae749e7a-fb22-45e6-b7c9-03d560206239 #s-Input_9 input": {
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