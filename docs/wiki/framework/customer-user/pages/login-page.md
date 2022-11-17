# Swag - UI Regression -> Framework -> Customer User -> Pages -> Login Page

<!-- TABLE OF CONTENTS -->

- [Swag - UI Regression -> Framework -> Customer User -> Pages -> Login Page](#swag---ui-regression---framework---customer-user---pages---login-page)
  - [Login Page Definition](#login-page-definition)
    - [Usage](#usage)
    - [Design Concepts](#design-concepts)
    - [Latest Visual Snapshots](#latest-visual-snapshots)
    - [Test Coverage](#test-coverage)

## Login Page Definition

> This is a page class for accessing the Login Page.

- [source](../../../../../src/page-object-model/customer-user/pages/login-page.ts)

> Any change to the location of associated files would require a review of the documentation links.

### Usage

```sh
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo();
```

### Design Concepts

> POM implementation

### Latest Visual Snapshots

> The following snapshaots are based our checks for visual regression:

[Chrome](../../../../../src/tests/e2e/order.spec.ts-snapshots/login-e2e-win32.png) | [Firefox](../../../../../src/tests/e2e/order.spec.ts-snapshots/login-e2e-firefox-win32.png) | [Safari](../../../../../src/tests/e2e/order.spec.ts-snapshots/login-e2e-webkit-win32.png)

### Test Coverage

> **NOTE** Any change to the source file would require full regression, since this is used widely in the test framework.

- No specific unit tests were created for this file

[Back to Top](#login-page-definition) | [Back to Section Home](../../README.md) | [Back to Wiki Home](../../../README.md)
