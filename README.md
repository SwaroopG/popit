
# Welcome to the Pop-it! wiki!


[![Build Status][1]][2]
[![Coverage Status][3]][4]

## Building the Project
**gradle clean build**

## One-shot Build & Run
**gradle clean bootrun
**gradle clean build && java -jar build/libs/popit-1.0-SNAPSHOT.jar**

**Note**: This should build the project and package the archive to build/libs/ folder.
## Running the application from the Jar
**java -jar build/libs/popit-1.0-SNAPSHOT.jar**

## Verify
Application should be available at **http://localhost:8080**


[1]: https://secure.travis-ci.org/SwaroopG/popit.png
[2]: http://www.travis-ci.org/SwaroopG/popit

[3]: https://coveralls.io/repos/SwaroopG/popit/badge.svg
[4]: https://coveralls.io/r/SwaroopG/popit
