---
home: true
title: Snyk's User Documentation
heroImage: /images/hero.png
actions:
  - text: Get Started
    link: /guide/getting-started.html
    type: primary
  - text: Introduction 
    link: /main/introduction.html
    type: secondary
footer: Snyk Inc. | We're simply the best! Around! No one's ever gonna bring me down! | Copywrite 2022
---

### As Easy as 1, 2, 3... possibly 4, 5, 6, 7, 8, 9... etc.

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```bash
# Before installing the Snyk CLI using npm, be sure you have installed the prerequisites:
# Install the latest version of npm in your local environment, using Node version 12 or later. See What version of Node is required for Snyk? for the steps to update Node.
# To run Snyk on Alpine Linux, first install libstdc++. See How can I use CLI on an Alpine operating system? for more information.

# install in snyk
npm install snyk -g

```

  </CodeGroupItem>
  <CodeGroupItem title="YARN">

```bash
# install in your project
yarn global add snyk

```

  </CodeGroupItem>
  <CodeGroupItem title="STANDALONE EXECUTABLES">

```bash
# install in your project
curl https://static.snyk.io/cli/latest/snyk-macos -o snyk
chmod +x ./snyk
mv ./snyk /usr/local/bin/
```

  </CodeGroupItem>
  <CodeGroupItem title="HOMEBREW">

```bash
# Install Snyk CLI from Snyk tap with Homebrew by running:
brew tap snyk/tap
brew install snyk
```

  </CodeGroupItem>
  <CodeGroupItem title="SCOOP">

```bash
# Install Snyk CLI from the Snyk bucket with Scoop on Windows:
scoop bucket add snyk https://github.com/snyk/scoop-snyk
scoop install snyk
```

  </CodeGroupItem>
  <CodeGroupItem title="DOCKER">

```bash
# Install Snyk CLI in a Docker image
docker run -it
    -e "SNYK_TOKEN=<TOKEN>"
    -v "<PROJECT_DIRECTORY>:/project"
    -v "/home/user/.gradle:/home/node/.gradle"
  snyk/snyk-cli:gradle-5.4 test --org=my-org-name
```

  </CodeGroupItem>
</CodeGroup>

