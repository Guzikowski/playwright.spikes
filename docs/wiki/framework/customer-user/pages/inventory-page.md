# Swag - UI Regression -> Framework -> Customer User -> Pages -> Inventory Page

<!-- TABLE OF CONTENTS -->

- [Swag - UI Regression -> Framework -> Customer User -> Pages -> Inventory Page](#swag---ui-regression---framework---customer-user---pages---inventory-page)
  - [Inventory Page Definition](#inventory-page-definition)
    - [Usage](#usage)
    - [Design Concepts](#design-concepts)
    - [Latest Visual Snapshots](#latest-visual-snapshots)
    - [Test Coverage](#test-coverage)

## Inventory Page Definition

> This is a page class for accessing the Inventory Page.

- [source](../../../../../src/page-object-model/customer-user/pages/inventory-page.ts)

> Any change to the location of associated files would require a review of the documentation links.

### Usage

```sh
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.navigateTo();
```

### Design Concepts

> POM implementation

### Latest Visual Snapshots

> The following snapshaots are based our checks for visual regression:

[Chrome](../../../../../src/tests/e2e/__screenshots__/order.spec.ts/inventory-e2e-win32.png)

### Test Coverage

> **NOTE** Any change to the source file would require full regression, since this is used widely in the test framework.

- No specific unit tests were created for this file

[Back to Top](#inventory-page-definition) | [Back to Section Home](../../README.md) | [Back to Wiki Home](../../../README.md)
