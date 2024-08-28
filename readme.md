# modal-library-rc

A simple customizable modal component for react application.

## Table of Content

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)

## Features

- **Customizable**: Style the modal for different usecases (success, warning, danger, info).
- **Lightweight**

## Installation

```bash
# Using npm:
npm install romch-modal-library
```

## Usage

```bash
import React, { useState } from 'react';
import Modal from 'romch-modal-library'

function App() {
 const [isOpen, setIsOpen] = useState(false);

 <Modal
  type="success"
  title="Add title"
  isOpen={isOpen}
  onClose={() => setIsClosed(false)}
 >
   Content here!
 <Modal />
 }

export default App;
```

## Props

| Prop                        | Type        | Description                                                                                                      | Required | Default |
|-----------------------------|-------------|------------------------------------------------------------------------------------------------------------------|----------|---------|
| `isOpen`                    | `boolean`   | Controls the visibility of the modal.                                                                            | Yes      | —       |
| `onClose`            | `function`  | Callback function invoked to request closing the modal (e.g., when Xmark is pressed or ESC is pressed).        | Yes      | —       |
| `title`              | `string`    | Title                                                                       | No      | —       |
| `children`                  | `ReactNode` | Elements to be rendered inside the modal.                                                                        | Yes      | —       |


