// world_crumpler_tests.js
// Each test's `config` is an Export-JSON-shaped object (no `cells` --
// same shape the Share button produces) and `expected` is the exact,
// deterministic board that config produces after Complete finishes,
// captured by actually running the engine against that seed. Clicking
// a card launches `config` via the page's share-URL mechanism.
window.WorldCrumpler.registerTests([
  {
    "name": "West-Blue Forbid",
    "description": "4x4, red+blue. An X-rule forbids blue whenever a cell's own west neighbor is exactly blue. Rules only see already-decided neighbors, so this checks reproducibility of that mechanic, not a global \"no two blues in a row\" guarantee.",
    "config": {
      "seed": "no-blue-left-01",
      "board": {
        "width": 4,
        "height": 4
      },
      "colors": [
        {
          "name": "red",
          "code": "R"
        },
        {
          "name": "blue",
          "code": "B"
        }
      ],
      "weights": {
        "red": 50,
        "blue": 50
      },
      "supply": "inf",
      "symmetry": "none",
      "brush": "ditto",
      "rules": {
        "red": {},
        "blue": {},
        "x": {
          "?/?/?/eB/?/?/?/?": "nB"
        }
      }
    },
    "expected": [
      "blue",
      "red",
      "red",
      "blue",
      "red",
      "blue",
      "blue",
      "red",
      "blue",
      "red",
      "blue",
      "blue",
      "red",
      "blue",
      "red",
      "blue"
    ]
  },
  {
    "name": "H Symmetry (Ditto)",
    "description": "5x5, four unconstrained colors, H symmetry with Ditto brush points. Verifies the collapse is fully left-right mirror-symmetric.",
    "config": {
      "seed": "mirror-02",
      "board": {
        "width": 5,
        "height": 5
      },
      "colors": [
        {
          "name": "red",
          "code": "R"
        },
        {
          "name": "blue",
          "code": "B"
        },
        {
          "name": "gold",
          "code": "GOL"
        }
      ],
      "weights": {
        "red": 40,
        "green": 25,
        "blue": 20,
        "gold": 15
      },
      "supply": "inf",
      "symmetry": "h",
      "brush": "ditto",
      "rules": {
        "red": {},
        "blue": {},
        "gold": {},
        "x": {}
      }
    },
    "expected": [
      "gold",
      "red",
      "blue",
      "red",
      "gold",
      "blue",
      "blue",
      "red",
      "blue",
      "blue",
      "red",
      "red",
      "blue",
      "red",
      "red",
      "red",
      "red",
      "red",
      "red",
      "red",
      "blue",
      "red",
      "blue",
      "red",
      "blue"
    ]
  },
  {
    "name": "Finite Supply Gaps",
    "description": "4x4, 50% supply, red/green/blue weighted 80/15/5. Blue's supply cap floors to zero, so it never appears; red and green run out too, leaving several cells permanently black.",
    "config": {
      "seed": "scarcity-03",
      "board": {
        "width": 4,
        "height": 4
      },
      "colors": [
        {
          "name": "red",
          "code": "R"
        },
        {
          "name": "green",
          "code": "G"
        },
        {
          "name": "blue",
          "code": "B"
        }
      ],
      "weights": {
        "red": 80,
        "green": 15,
        "blue": 5
      },
      "supply": "50",
      "symmetry": "none",
      "brush": "ditto",
      "rules": {
        "red": {},
        "green": {},
        "blue": {},
        "x": {}
      }
    },
    "expected": [
      null,
      "red",
      "red",
      "red",
      null,
      null,
      "red",
      "red",
      "red",
      null,
      null,
      null,
      null,
      null,
      null,
      "green"
    ]
  }
]);
