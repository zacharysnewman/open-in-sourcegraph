# Open in Sourcegraph

## Overview

**Open in Sourcegraph** is a Visual Studio Code extension that allows you to quickly open files from your project directly in Sourcegraph. With a simple right-click, you can navigate to the corresponding file in your organization's Sourcegraph instance.

## Features

- **Quick Access:** Open any file in Sourcegraph directly from VS Code.
- **Customizable Settings:** Configure the Sourcegraph instance URL and optional base path to match your project's structure.
- **Seamless Integration:** Integrates with the VS Code explorer context menu for easy access.

## Installation

1. **Install the Extension:**

   - Open the Extensions view in VS Code (`Ctrl+Shift+X` or `Cmd+Shift+X`).
   - Search for "**Open in Sourcegraph**".
   - Click **Install** to add the extension to your VS Code.

## Usage

1. **Configure the Extension Settings:**

   - Open VS Code settings (`Ctrl+,` or `Cmd+,`).
   - Search for **Open in Sourcegraph** to find the extension's settings.
   - Set the following configuration options:

     - **Instance URL (`openInSourcegraph.instanceUrl`):**

       - The full URL of your Sourcegraph instance (e.g., `https://sourcegraph.mycompany.com`).

     - **Base Path (`openInSourcegraph.basePath`):** _(optional)_

       - An optional base path inserted between the instance URL and the repository name (e.g., `code.company.com/path`).

2. **Using the Extension:**

   - In the VS Code explorer, right-click on a file and select **Open in Sourcegraph**, or
   - Open a file in the editor and run **Open in Sourcegraph** from the command palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
   - The corresponding file will open in your default web browser via Sourcegraph.

## Configuration Options

### `openInSourcegraph.instanceUrl`

- **Type:** `string`
- **Default:** `"https://sourcegraph.com"`
- **Description:** The full URL of your Sourcegraph instance. Use this for both Sourcegraph Cloud and self-hosted instances.

### `openInSourcegraph.basePath`

- **Type:** `string`
- **Default:** `""`
- **Description:** An optional base path in the Sourcegraph URL after the domain. This may include paths specific to your organization's Sourcegraph setup.

## Example Configuration

### Sourcegraph Cloud

- **Instance URL:** `https://sourcegraph.com`
- **Base Path:** _(leave empty)_

Constructs:
```
https://sourcegraph.com/<workspace-folder>/-/blob/<relativeFilePath>
```

### Self-hosted Sourcegraph

- **Instance URL:** `https://sourcegraph.mycompany.com`
- **Base Path:** `code.company.com/path`

Constructs:
```
https://sourcegraph.mycompany.com/code.company.com/path/<workspace-folder>/-/blob/<relativeFilePath>
```

## Troubleshooting

- **Incorrect URL Structure:**

  - Ensure `instanceUrl` is the full URL including `https://` and no trailing slash.
  - Leave `basePath` empty if your Sourcegraph instance doesn't require one.

## License

This extension is licensed under the MIT License.
