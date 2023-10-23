#!/usr/bin/env bash

studentFile="/home/codio/workspace/student_code/circleAreaPartial.js"
newLocation="/home/codio/workspace/.guides/secure/circleAreaPartial.js"

cp $studentFile $newLocation

jest .guides/secure/circleAreaPartial.test.js --notify --config=.guides/secure/jest.config.json
exit 0