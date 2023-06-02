# Innovation Project - GestFina App

This project was generated with [Expo](https://docs.expo.dev/). To create a new project with Expo, run `npx create-expo-app my-app`.

## Description

The project aims to help you manage your finances.

## Installation

1.  Clone this repository using the following command: `git clone https://github.com/yeffreydev/gestFina-innovationProject.git`
2.  Install the dependencies by running one of the following commands: `yarn install` **or** `npm install`

## Usage

To run the project, use the following command: `yarn start` **or** `npx expo start`

## Features

The project uses React Navigation for navigation and consists of 3 screens:

### Home Screen

This screen contains the dashboard, which displays a summary of income and expenses. You will also find a button to add a new transaction and a scrollable list of existing transactions. Clicking on a transaction will open a modal with the transaction details, where you can delete or edit it.

### New Transaction Screen

This screen provides a form to create a new transaction. The available fields are: amount, description, category (selectable through a picker), and date. You will also find an "Add" button to save the transaction.

### Transaction Edit Screen

In this screen, an existing transaction is passed through props and displayed in a shared form with the New Transaction screen. Here, you can edit the transaction fields and save the changes using the "Save" button.

## Data Storage

Transaction data is saved in an SQLite database on Android devices.

That's it! Now you can start using and exploring the project
