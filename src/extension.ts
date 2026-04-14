import * as vscode from "vscode";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "openInSourcegraph.open",
    (uri: vscode.Uri) => {
      const filePath = uri.fsPath;
      const workspaceFolder = vscode.workspace.getWorkspaceFolder(uri);

      if (!workspaceFolder) {
        vscode.window.showErrorMessage("Workspace folder not found.");
        return;
      }

      // Read settings from configuration
      const config = vscode.workspace.getConfiguration("openInSourcegraph");
      const subdomain = config.get<string>(
        "sourcegraphSubdomain",
        "your-subdomain"
      );
      const basePath = config.get<string>("basePath", "your-base-path");
      
      // Extract repository name from workspace folder
      const repoAlias = config.get<string>("repoAlias", "");
      const repoName = repoAlias !== "" ? repoAlias : workspaceFolder.name;

      // Get the file path relative to the repository root
      const relativeFilePath = path.relative(
        workspaceFolder.uri.fsPath,
        filePath
      );

      // Construct the Sourcegraph URL

      // If the subdomain ends in a .com or similar domain ending, do not append .sourcegraph.com
      const suffixes = [".net", ".com", ".org"];
      const subdomainString = suffixes.some(suffix => subdomain.endsWith(suffix)) ? subdomain : `${subdomain}.sourcegraph.com`;
      const sourceGraphUrl = `https://${subdomainString}/${basePath}/${repoName}/-/blob/${relativeFilePath}`;
      // Debugging: log the constructed URL
      console.log("SourceGraph URL:", sourceGraphUrl);

      // Open the URL in the default browser
      vscode.env.openExternal(vscode.Uri.parse(sourceGraphUrl));
    }
  );
  context.subscriptions.push(disposable);
}

export function deactivate() {}
