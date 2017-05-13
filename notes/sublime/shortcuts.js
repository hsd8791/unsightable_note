	{
		"keys": ["ctrl+delete"],
		"command": "delete_word",
		"args": {
			"forward": true
		}
	},

	{
		"keys": ["ctrl+shift+delete"],
		"command": "run_macro_file",
		"args": {
			"file": "res://Packages/Default/Delete to Hard EOL.sublime-macro"
		}
	},


	{
		"keys": ["f3"],
		"command": "find_next"
	}, {
		"keys": ["shift+f3"],
		"command": "find_prev"
	}, {
		"keys": ["ctrl+f3"],
		"command": "find_under"
	}, {
		"keys": ["ctrl+shift+f3"],
		"command": "find_under_prev"
	}, {
		"keys": ["alt+f3"],
		"command": "find_all_under"
	}, {
		"keys": ["shift+f3"],
		"command": "find_prev"
	},

	{
		"keys": ["ctrl+r"],
		"command": "show_overlay",
		"args": {
			"overlay": "goto",
			"text": "@"
		}
	},

	{
		"keys": ["ctrl+shift+j"],
		"command": "expand_selection",
		"args": {
			"to": "indentation"
		}
	}, {
		"keys": ["ctrl+shift+a"],
		"command": "expand_selection",
		"args": {
			"to": "tag"
		}
	},


	{
		"keys": ["ctrl+shift+m"],
		"command": "expand_selection",
		"args": {
			"to": "brackets"
		}
	}, {
		"keys": ["ctrl+m"],
		"command": "move_to",
		"args": {
			"to": "brackets"
		}
	},


	然后按Cmd - Shift - K(Win: Ctrl - Shift - ') 就能选中这组标签：