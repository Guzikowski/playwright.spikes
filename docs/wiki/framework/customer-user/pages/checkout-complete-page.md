# Swag - UI Regression -> Framework -> Customer User -> Pages -> Checkout Complete Page

<!-- TABLE OF CONTENTS -->

- [Swag - UI Regression -> Framework -> Customer User -> Pages -> Checkout Complete Page](#swag---ui-regression---framework---customer-user---pages---checkout-complete-page)
  - [Checkout Complete Page Definition](#checkout-complete-page-definition)
    - [Usage](#usage)
    - [Design Concepts](#design-concepts)
    - [Latest Visual Snapshots](#latest-visual-snapshots)
    - [Test Coverage](#test-coverage)

## Checkout Complete Page Definition

> This is a page class for accessing the Checkout Complete Page.

- [source](../../../../../src/page-object-model/customer-user/pages/checkout-complete-page.ts)

> Any change to the location of associated files would require a review of the documentation links.

### Usage

```sh
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await checkoutCompletePage.landedOn();
```

### Design Concepts

> POM implementation

### Latest Visual Snapshots

> The following snapshaots are based our checks for visual regression:

[Chrome](../../../../../src/tests/e2e/order.spec.ts-snapshots/checkout-complete-e2e-win32.png)

### Test Coverage

> **NOTE** Any change to the source file would require full regression, since this is used widely in the test framework.

- No specific unit tests were created for this file

[Back to Top](#checkout-complete-page-definition) | [Back to Section Home](../../README.md) | [Back to Wiki Home](../../../README.md)
