# Displaying `localhost`

You may find yourself in need of `localhost`. Codio handles this in a [unique way](https://docs.codio.com/develop/develop/ide/boxes/overview.html#important-localhost-configuration-information). `localhost` should be set to `0.0.0.0`. To view the output on `localhost`, use a `Preview` tab in the `Open Tabs` section of the layout settings.

![localhost 3000](.guides/img/localhost_3000.png)

Each Codio box is given a unique name (found in the terminal). Instead of having to refer to randomly generated domain name, Codio uses `{{domain3000}}` instead. If the box domain is `imitateoctober-apropostrivial`, then `{{domain3000}}` would generate the URL `https://imitateoctober-apropostrivial-3000.codio.io/`. The `3000` refers to the port, and it can be modified if needed. 

<details><summary><strong>Box Domain</strong></summary>The box domain is listed when you launch a terminal tab.<img src=".guides/img/box_domain.png" /></details>