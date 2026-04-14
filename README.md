# Open in Sourcegraph

## Overview
This repo was forked from https://github.com/zacharysnewman/open-in-sourcegraph to add a few features.

**Open in Sourcegraph** is a Visual Studio Code extension that allows you to quickly open files from your project directly in Sourcegraph. With a simple right-click, you can navigate to the corresponding file in your organization's Sourcegraph instance.

## Features

- **Quick Access:** Open any file in Sourcegraph directly from VS Code.
- **Customizable Settings:** Configure the Sourcegraph subdomain and base path to match your project's structure.
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

     - **Sourcegraph Subdomain (`openInSourcegraph.sourcegraphSubdomain`):**

       - The subdomain of your Sourcegraph instance (e.g., "company").

     - **Base Path (`openInSourcegraph.basePath`):**

       - The base path used in the Sourcegraph URL (e.g., "code.company.com/path").

2. **Using the Extension:**

   - In the VS Code explorer, right-click on a file.
   - Select **Open in Sourcegraph** from the context menu.
   - The corresponding file will open in your default web browser via Sourcegraph.

## Configuration Options

The extension can be customized through the following settings:

### `openInSourcegraph.sourcegraphSubdomain`

- **Type:** `string`
- **Default:** "your-subdomain"
- **Description:** The subdomain of your Sourcegraph instance. For example, if your Sourcegraph URL is `https://company.sourcegraph.com`, set this to "company".

### `openInSourcegraph.basePath`

- **Type:** `string`
- **Default:** "your-base-path"
- **Description:** The base path in the Sourcegraph URL after the domain. This may include paths specific to your organization's Sourcegraph setup.

### `openInSourcegraph.repositoryAlias`
- **Type:** `string`
- **Default:** ""
- **Description:** "Optional: If your repository's name on sourcegraph is different from the name on your local environment, you may need to set this variable to the sourcegraph path."

## Example Configuration

You should configure the extension settings as follows:

- **Sourcegraph Subdomain:**

  "company"

- **Base Path:**

  "code.company.com/path"

With these settings, the extension constructs the Sourcegraph URL as:

```
https://company.sourcegraph.com/code.company.com/path/<workspace-folder>/-/blob/<relativeFilePath>
```

## Troubleshooting

- **Incorrect URL Structure:**

  - Double-check your `sourcegraphSubdomain` and `basePath` settings to ensure they match your organization's Sourcegraph URL structure.

## License

This extension is licensed under the MIT License.
