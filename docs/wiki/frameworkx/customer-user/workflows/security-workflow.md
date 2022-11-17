# Swag - UI Regression -> Framework -> Customer User -> Workflow -> Security Workflow

<!-- TABLE OF CONTENTS -->

- [Swag - UI Regression -> Framework -> Customer User -> Workflow -> Security Workflow](#swag---ui-regression---framework---customer-user---workflow---security-workflow)
  - [Security Workflow Definition](#security-workflow-definition)
    - [Usage](#usage)
    - [Pages Required](#pages-required)
    - [Defined Workflows](#defined-workflows)
    - [Test Coverage](#test-coverage)

## Security Workflow Definition

> This is a workflow class for security related workflows.

- [source](../../../../../src/page-object-model/customer-user/workflows/security-workflows.ts)

> Any change to the location of associated files would require a review of the documentation links.

### Usage

```sh
    // login
    await SecurityWorkflow.login(page);
    // logout
    await SecurityWorkflow.logout(page);
```

### Pages Required

> The following pages are required to perfrom the workflows:

- [Login Page](../pages/login-page.md)
- [Inventory Page](../pages/inventory-page.md)

### Defined Workflows

> The following workflows have been defined in Miro:

- [Login Workflow](https://miro.com/app/board/uXjVPCl73TI=/?moveToWidget=3458764538815636412&cot=14)
- [Logout Workflow](https://miro.com/app/board/uXjVPCl73TI=/?moveToWidget=3458764538815636698&cot=14)

### Test Coverage

> **NOTE** Any change to the source file would require full regression, since this is used widely in the test framework.

- No specific unit tests were created for this file

[Back to Top](#security-workflow-definition) | [Back to Section Home](../../README.md) | [Back to Wiki Home](../../../README.md)
