# Swag - UI Regression -> Framework -> Customer User -> Workflow -> Order Workflow

<!-- TABLE OF CONTENTS -->

- [Swag - UI Regression -> Framework -> Customer User -> Workflow -> Order Workflow](#swag---ui-regression---framework---customer-user---workflow---order-workflow)
  - [Order Workflow Definition](#order-workflow-definition)
    - [Usage](#usage)
    - [Pages Required](#pages-required)
    - [Defined Workflows](#defined-workflows)
    - [Test Coverage](#test-coverage)

## Order Workflow Definition

> This is a workflow class for ordering related workflows.

- [source](../../../../../src/page-object-model/customer-user/workflows/security-workflows.ts)

> Any change to the location of associated files would require a review of the documentation links.

### Usage

```sh
    // Order Red T-Shirt
    await OrderWorkflow.orderRedTShirt(page);
```

### Pages Required

> The following pages are required to perfrom the workflows:

- [Inventory Page](../pages/inventory-page.md)
- [Cart Page](../pages/cart-page.md)
- [Checkout Step One Page](../pages/checkout-step=one-page.md)
- [Checkout Step Two Page](../pages/checkout-step=two-page.md)
- [Checkout Complete Page](../pages/checkout-complete-page.md)

### Defined Workflows

> The following workflows have been defined in Miro:

- [Order Workflow](https://miro.com/app/board/uXjVPCl73TI=/?moveToWidget=3458764538815636560&cot=14)

### Test Coverage

> **NOTE** Any change to the source file would require full regression, since this is used widely in the test framework.

- No specific unit tests were created for this file

[Back to Top](#order-workflow-definition) | [Back to Section Home](../../README.md) | [Back to Wiki Home](../../../README.md)
