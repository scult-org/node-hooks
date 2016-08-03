var Validate = require('git-validate'),
	utils = require('git-validate/lib/utils'),
	path = require('path');

/* Copy config files for editors */
Validate.copy('files/eslintrc.json', '.eslintrc.json');
Validate.copy('files/eslintignore', '.eslintignore');
Validate.copy('files/editorconfig', '.editorconfig');

/* Install scripts */
Validate.installScript('lint', path.relative(utils.findProjectRoot(), 'node_modules/eslint/bin/eslint.js') + ' .');

/* Install git hooks */
Validate.configureHook('pre-commit', ['lint', 'test']);