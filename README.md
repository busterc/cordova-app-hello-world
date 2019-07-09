<!--
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#  KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#
-->

# parcel-cordova-template

Forked from the default Apache Cordova App template: `cordova-app-hello-world`

_Requires Parcel Bundles!_

- Does not contain a `www` directory
  - relies on Parcel to (re-)build it.
- Adds hook to `config.xml`
  - `<hook src="hooks/cordova.js" type="before_compile" />`
- Hook `hooks/cordova.js` modifies `www/index.hml`
  - replaces **`<i hidden>cordova.js</i>`** with `<script src="cordova.js"></script>`

## Usage

```sh
$ cordova create hello com.example.hello HelloWorld --template parcel-cordova-template
```
