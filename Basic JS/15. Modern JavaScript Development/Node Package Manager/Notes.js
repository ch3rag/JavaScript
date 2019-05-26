// PACKAGES
// A package is just a directory with one or more files of code, as well as a package.json file
// that contains information about the code in the package.

// DEPENDENCIES
// When you start to use more modules, you’ll find that some of them depend on other modules to
// work. These are known as dependencies.


// npm allows you to install JavaScript packages onto your machine. Some packages
// rely on other packages, so npm acts as a dependency manager. For example, if
// you use npm to install a package, it will also install all the packages that the
// original package depends on as well.

// NPM VERSION
// >> npm --version

// UPGRADE TO LASTEST
// >> npm install -g npm@latest

// SEARCHING FOR PACKAGES
// To find a package, you can use the search command
// >> npm search test

// CREATING A NEW PACKAGES
// TO INITIALIZE A DIRECTORY AS PACKAGE DIRECTORY
// >> npm init

// CREATING PACKAGE.JSON WITHOUT GOING THROUGH QUESTIONS AND SETTING ALL DEFAULT VALUES
// >> npm init --yes

// TO INSTALL PACKAGES LOCALLY
// >> npm install package_name

// TO INSTALL PACKAGE AS DEVELOPMENT DEPENDENCY
// >> npm install package_name --save-dev

// INSTALLING A SPECIFIC VERSION
// >> npm install package_name@version

// VERSION SEMANTICS
// major.minor.patch

// SETTING DEFAULT INIT VALUES
// >> npm config set property_name value
// Example: >> npm config set init-author-name "Chirag Singh Rajput"

// LISTING GLOBAL CONFIG
// >> npm config ls -l

// INSTALLING PACKAGES GLOBALLY
// >> npm install --global lodash
// >> npm install -g lodash

// LIST ALL THE INSTALL PACKAGES
// >> npm list

// LIST ONLY THOSE YOU HAVE INSTALLED
// >> npm list --depth=0

// LIST GLOBAL PACKAGES
// >> npm list -g
// >> npm list --global
// >> npm list -g --depth=0

// LIST OUTDATED PACKAGES
// >> npm outdated
// >> npm outdated -g

// UPDATE PACKAGES
// ALL
// >> npm update
// SPECIFIC
// >> npm update package_name
// GOBAL
// >> npm update -g
// >> npm update -g package_name

