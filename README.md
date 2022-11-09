
# Subscription Plans (Jump2Digital Hackaton)

##### Price plan cards panel for users to get info and/or subscribe to services.


------------
<div align="center">

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/summary/new_code?id=luisdudamel_hackaton-jump2digital)

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/luisdudamel/hackaton-jump2digital/Audit)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=luisdudamel_hackaton-jump2digital&metric=coverage)](https://sonarcloud.io/summary/new_code?id=luisdudamel_hackaton-jump2digital) 
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=luisdudamel_hackaton-jump2digital&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=luisdudamel_hackaton-jump2digital)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=luisdudamel_hackaton-jump2digital&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=luisdudamel_hackaton-jump2digital)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=luisdudamel_hackaton-jump2digital&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=luisdudamel_hackaton-jump2digital)

</div>

## Usage

<img src="https://i.imgur.com/XfcPwjn.gif" width="200"/>

[![Screen-Recording-2022-11-09-at-19.38.51.gif](https://s1.gifyu.com/images/Screen-Recording-2022-11-09-at-19.38.51.gif)](https://gifyu.com/image/SEV9P)

## Components
  * Button
  * Price Plan (card)
  * Subscriptions Panel
  * Information Form
  * App

### Responsibilities list
  * Button
    * Render a received text
    * Call the received function on click
    
  * Price Plan
    * Render an image
    * Render a text received
    * Render a button component
    * Pass a received function to button component
    * Render a list of items based on data received
  
  * Subscriptions Panel
    * Render 3 price plan components, giving each one a text and a list of items.
    * Render an Information Form component on function call
    * Pass a function to every Price Plan component

  * Information Form
    * Render a form
    * Render a button component
  
  * App
    * Render a Subscriptions Panel component.


## Commands

```shell
    # Installation command
    npm i or npm/yarn i 

    #Running command
    npm start

    #Build command
    npm run build
```

```shell
    # Testing command
    npm run test

    # Testing coverage command
    npm run test:coverage
```

## License 

[MIT](https://opensource.org/licenses/MIT)
