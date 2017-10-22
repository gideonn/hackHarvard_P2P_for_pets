(function(window, undefined) {
  var dictionary = {
    "c15ec414-2921-4290-acaf-ef87ca88086d": "Donor_StatPage",
    "d0cf3d3a-afde-450f-9486-fb8a60b51edb": "Pet_Profile",
    "aa5d0fa5-7350-4dd2-80b4-9048bbb7ec89": "3_FirstPage",
    "f6cbebbe-d703-454b-857f-99ef74f11346": "Adopter_Profile",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "1_AppLaunch",
    "8f9f18e4-c0c3-478f-8fd9-7b2a7fe77ef4": "2_profile builder n1",
    "ae749e7a-fb22-45e6-b7c9-03d560206239": "3.More_Profile",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);