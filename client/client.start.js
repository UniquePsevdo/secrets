const shell = require('shelljs');

if (!shell.which('git')) {
	shell.echo('Sorry, this script requires git');
	shell.exit(1);
}
const command = `start "" "%SYSTEMDRIVE%\\Program Files (x86)\\Git\\bin\\sh.exe" -login -i -l -c "sh -c 'npm start; exec sh'"`;
shell.exec(command, function(code, stdout, stderr) {
	console.log('Exit code:', code);
	console.log('Program output:', stdout);
	console.log('Program stderr:', stderr);
});
