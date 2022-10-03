# **_Introduce Structure of Version_**

![Alt 3 parts of version](pic/bandicam%202022-10-03%2017-11-14-343.jpg)

- **Major version**
  - When it has changes may **break codes**, meaning that a major update will cause the previously written codes to fail to work properly.
- **Minor version**
  - The update **adds some new features**, but does **not** affect the operation of previously written programs.
    - However, sometimes there are instances where an engineer makes a mistake and the previous codes do not work properly.
- **Patch**
  - Just fixing **bugs**.

![Alt simbol in front of version](pic/bandicam%202022-10-03%2017-12-54-538.jpg)

- This **prefix** mainly affects How to update the "**npm update**" command.

# **_NPM OutDated & How to Back Old Version_**

![Alt npm outdated](pic/bandicam%202022-10-03%2017-15-02-009.jpg)

- `npm outdated` is used to see if any older versions of the package are being used.
- If nothing is shown above, it means that all packages are using the latest version.

![Alt outdated only forward](pic/bandicam%202022-10-03%2017-17-06-036.jpg)

- `npm outdated` is used to see if the current version is **behind** the wanted and latest version, so above we adjusted the version of slugify in package.json to 1.0.0 and still nothing is shown.

![Alt recover to old version](pic/bandicam%202022-10-03%2017-18-31-518.jpg)

- When we install, use **@** after the package name to specify the version and change the version **not requiring uninstall**.

![Alt outdate and show something](pic/bandicam%202022-10-03%2017-20-05-424.jpg)

- Because the current version is **behind** the latest version so this time `npm outdated` will show some things out.
- Note that `npm outdated` **only provides information**, and does not change the package version.

# **_Prefix Symbols of version_**

![Alt use ~ in front of version](pic/bandicam%202022-10-03%2017-22-44-747.jpg)

![Alt use ^ in front of version](pic/bandicam%202022-10-03%2017-26-19-521.jpg)

![Alt check lock for current version](pic/bandicam%202022-10-03%2017-29-30-805.jpg)

- `npm update` is a command used to update the package, which is affected by the **prefix** setting of version in the package.json file.

# **_Buggy Update Command_**

![Alt buggy update](pic/bandicam%202022-10-03%2017-43-24-716.jpg)

![Alt update need --save to work](pic/bandicam%202022-10-03%2017-45-25-311.jpg)

- Apparently the result of `npm update` myself is different from the result of the lecture video, because there are some **bugs**.
  - `--save` must be added for `npm update` to work properly

# **_Install and Uninstall_**

![Alt install express](pic/bandicam%202022-10-03%2017-30-59-163.jpg)

![Alt uninstall express](pic/bandicam%202022-10-03%2017-33-06-908.jpg)

# **_Never Move/Share node_modules_**

![Alt never move node_modules](pic/bandicam%202022-10-03%2017-36-07-303.jpg)

- There are usually hundreds of modules in **node_modules, never share, copy or move it**.
- We just need to copy the **package.json** and **package-lock.json** files, and then use `npm install` to generate the correct **node_modules** folder with the contents of the files.
  - **package-lock.json** is important, it records the **current version** of each package installed.
  - The package version in **package.json may not be** the currently installed version.
  - **Both** package-lock.json and package.json must be required to generate the exact same node_modules file as before.
