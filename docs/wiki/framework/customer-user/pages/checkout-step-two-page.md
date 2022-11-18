# Swag - UI Regression -> Framework -> Customer User -> Pages -> Checkout Step Two Page

<!-- TABLE OF CONTENTS -->

- [Swag - UI Regression -> Framework -> Customer User -> Pages -> Checkout Step Two Page](#swag---ui-regression---framework---customer-user---pages---checkout-step-two-page)
  - [Checkout Step Two Page Definition](#checkout-step-two-page-definition)
    - [Usage](#usage)
    - [Design Concepts](#design-concepts)
    - [Latest Visual Snapshots](#latest-visual-snapshots)
    - [Test Coverage](#test-coverage)

## Checkout Step Two Page Definition

> This is a page class for accessing the Checkout Step Two Page.

- [source](../../../../../src/page-object-model/customer-user/pages/checkout-step-two-page.ts)

> Any change to the location of associated files would require a review of the documentation links.

### Usage

```sh
   const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
    await checkoutStepTwoPage.landedOn();
```

### Design Concepts

> POM implementation

### Latest Visual Snapshots

> The following snapshaots are based our checks for visual regression:

[Chrome](../../../../../src/tests/e2e/__screenshots__/order.spec.ts/checkout-two-e2e-win32.png)

### Test Coverage

> **NOTE** Any change to the source file would require full regression, since this is used widely in the test framework.

- No specific unit tests were created for this file

[Back to Top](#checkout-step-two-page-definition) | [Back to Section Home](../../README.md) | [Back to Wiki Home](../../../README.md)
