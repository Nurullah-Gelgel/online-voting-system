# Online Voting System

This project is an **Online Voting System** that enables users to vote securely in an online environment. It is designed to ensure fairness, transparency, and security in the voting process using a web-based platform.

## Features

- **User Registration & Authentication:** Users can register and log in securely.
- **Create & Manage Polls:** Admin users can create new polls, manage existing polls, and set voting dates.
- **Real-Time Voting:** Users can vote in real-time for active polls.
- **Secure Voting Process:** Each user can vote only once in a poll.
- **Result Display:** Voting results are displayed transparently once the poll ends.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Technologies](#technologies)
4. [Contributing](#contributing)
5. [License](#license)

---

## Installation

To run this project locally, follow these steps:

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/download/)
- [MySQL](https://www.mysql.com/downloads/)

### Setup

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Nurullah-Gelgel/online-voting-system.git
   cd online-voting-system
2. Install the necessary dependencies:

   ```bash
   npm install
Configure the database connection:

Create a MySQL database.
Rename the .env.example file to .env and update the database credentials.
Run the database migrations to set up the necessary tables:

  ```bash
  npx sequelize-cli db:migrate

Start the application:
npm start
