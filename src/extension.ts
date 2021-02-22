import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "searchpp" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let searchByFilter = vscode.commands.registerCommand('searchpp.searchByFilter', (e) => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage("Searching Current Document's Filetype...");
	});

	context.subscriptions.push(
		searchByFilter
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}
