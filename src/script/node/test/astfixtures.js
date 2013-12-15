module.exports = (function() {

    return {
        astEmpty : function() {
            return {
                "entities" : []
            };
        },
        astSimple : function() {
            return {
                "entities" : [{
                    "name" : "a"
                }, {
                    "name" : "b"
                }],
                "arcs" : [[{
                    "kind" : "=>",
                    "from" : "a",
                    "to" : "b",
                    "label" : "a simple script"
                }]]
            };
        },
        astOptions : function() {
            return {
                "options" : {
                    "arcgradient" : "17",
                    "wordwraparcs" : "true",
                    "hscale" : "1.2",
                    "width" : "800"
                },
                "entities" : [{
                    "name" : "a"
                }]
            };
        },
        astNoEntities : function() {
            return {
                "entities" : [],
                "arcs" : [[{
                    "kind" : "---",
                    "label" : "start"
                }], [{
                    "kind" : "...",
                    "label" : "no entities ...",
                }], [{
                    "kind" : "---",
                    "label" : "end"
                }]]
            };
        },
        astWorwraparcstrue : function() {
            return {
                "options" : {
                    "wordwraparcs" : "true",
                },
                "entities" : []
            };
        },
        astBoxArcs : function() {
            return {
                "entities" : [{
                    "name" : "a"
                }, {
                    "name" : "b"
                }, {
                    "name" : "c"
                }, {
                    "name" : "d"
                }],
                "arcs" : [[{
                    "kind" : "note",
                    "from" : "a",
                    "to" : "a",
                }, {
                    "kind" : "box",
                    "from" : "b",
                    "to" : "b",
                }, {
                    "kind" : "abox",
                    "from" : "c",
                    "to" : "c",
                }, {
                    "kind" : "rbox",
                    "from" : "d",
                    "to" : "d",
                }]]
            };
        },
        astMixedAttributes : function() {
            return {
                "entities" : [{
                    "name" : "a",
                    "label" : "miXed",
                    "textbgcolor" : "orange"
                }],
                "arcs" : [[{
                    "kind" : "note",
                    "from" : "a",
                    "to" : "a",
                    "linecolor" : "red",
                    "textcolor" : "blue",
                    "arcskip" : "4"
                }]]

            };
        },
        astColourColor : function() {
            return {
                "entities" : [{
                    "name" : "a",
                    "textcolor" : "green",
                    "textbgcolor" : "cyan",
                    "linecolor" : "#ABCDEF"
                }]
            };
        },
        astAllAttributes : function() {
            return {
                "entities" : [{
                    "name" : "a",
                    "label" : "Label for A",
                    "textcolor" : "green",
                    "textbgcolor" : "cyan",
                    "linecolor" : "#ABCDEF",
                    "arclinecolor" : "violet",
                    "arctextcolor" : "pink",
                    "arctextbgcolor" : "brown",
                    "id" : "Just and id",
                    "idurl" : "http://localhost/idurl",
                    "url" : "http://localhost/url"
                }],
                "arcs" : [[{
                    "kind" : "<<=>>",
                    "from" : "a",
                    "to" : "a",
                    "label" : "Label for a <<=>> a",
                    "textcolor" : "green",
                    "textbgcolor" : "cyan",
                    "linecolor" : "#ABCDEF",
                    "id" : "Just and id",
                    "idurl" : "http://localhost/idurl",
                    "url" : "http://localhost/url"
                }]]
            };
        },
        astBroadcastCounting : function() {
            return {
                "entities" : [{
                    "name" : "a"
                }, {
                    "name" : "b"
                }, {
                    "name" : "c"
                }, {
                    "name" : "d"
                }],
                "arcs" : [[{
                    "kind" : "=>>",
                    "from" : "a",
                    "to" : "b"
                }], [{
                    "kind" : "=>>",
                    "from" : "a",
                    "to" : "*"
                }], [{
                    "kind" : "=>>",
                    "from" : "b",
                    "to" : "*"
                }]]
            };
        },
        astCountingTest : function() {
            return {
                "entities" : [{
                    "name" : "a"
                }, {
                    "name" : "b"
                }, {
                    "name" : "c"
                }, {
                    "name" : "d"
                }, {
                    "name" : "e"
                }, {
                    "name" : "f",
                    "label" : "Rémy"
                }],
                "arcs" : [[{
                    "kind" : "=>>",
                    "from" : "a",
                    "to" : "b"
                }, {
                    "kind" : "<<=>>",
                    "from" : "c",
                    "to" : "d"
                }], [{
                    "kind" : "<<=",
                    "from" : "b",
                    "to" : "a"
                }, {
                    "kind" : "--",
                    "from" : "c",
                    "to" : "d"
                }], [{
                    "kind" : "box",
                    "from" : "a",
                    "to" : "d",
                    "label" : "boxes dont count"
                }], [{
                    "kind" : "=>>",
                    "from" : "e",
                    "to" : "e",
                    "label" : "self references don't count"
                }], [{
                    "kind" : "note",
                    "from" : "c",
                    "to" : "c",
                    "label" : "notes don't count"
                }]]
            };
        },
        astBoxes : function() {
            return {
                "entities" : [{
                    "name" : "a"
                }, {
                    "name" : "b"
                }],
                "arcs" : [[{
                    "kind" : "note",
                    "from" : "a",
                    "to" : "b"
                }], [{
                    "kind" : "box",
                    "from" : "a",
                    "to" : "a"
                }, {
                    "kind" : "rbox",
                    "from" : "b",
                    "to" : "b"
                }], [{
                    "kind" : "abox",
                    "from" : "b",
                    "to" : "a"
                }]]
            };
        }
    };
})();
