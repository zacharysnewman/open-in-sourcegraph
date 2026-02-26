import * as vscode from "vscode";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "openInSourcegraph.open",
    (uri: vscode.Uri) => {
      const resolvedUri = uri ?? vscode.window.activeTextEditor?.document.uri;

      if (!resolvedUri) {
        vscode.window.showErrorMessage("No file is currently open.");
        return;
      }

      const filePath = resolvedUri.fsPath;
      const workspaceFolder = vscode.workspace.getWorkspaceFolder(resolvedUri);

      if (!workspaceFolder) {
        vscode.window.showErrorMessage("Workspace folder not found.");
        return;
      }

      // Read settings from configuration
      const config = vscode.workspace.getConfiguration("openInSourcegraph");
      const instanceUrl = config.get<string>(
        "instanceUrl",
        "https://sourcegraph.com"
      );
      const basePath = config.get<string>("basePath", "");

      if (!instanceUrl.trim()) {
        vscode.window.showErrorMessage(
          "Open in Sourcegraph: instanceUrl is not configured. Please set it in your settings."
        );
        return;
      }

      // Extract repository name from workspace folder
      const repoName = workspaceFolder.name;

      // Get the file path relative to the repository root
      const relativeFilePath = path.relative(
        workspaceFolder.uri.fsPath,
        filePath
      );

      // Construct the Sourcegraph URL
      const base = instanceUrl.replace(/\/$/, "");
      const pathParts = [basePath, repoName, "-/blob", relativeFilePath]
        .filter(Boolean)
        .join("/");
      const sourceGraphUrl = `${base}/${pathParts}`;

      // Debugging: log the constructed URL
      console.log("SourceGraph URL:", sourceGraphUrl);

      // Open the URL in the default browser
      vscode.env.openExternal(vscode.Uri.parse(sourceGraphUrl));
    }
  );
  context.subscriptions.push(disposable);
}

export function deactivate() {}
