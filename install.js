var Validate = require('git-validate');

/* Copy config files for editors */
Validate.copy('files/eslintrc.json', '.eslintrc.json');
Validate.copy('files/eslintignore', '.eslintignore');
Validate.copy('files/editorconfig', '.editorconfig');

/* Install scripts */
Validate.installScript('lint', 'node_modules/eslint/bin/eslint.js .');

/* Install git hooks */
Validate.configureHook('pre-commit', ['lint', 'test']);