"# my-hng-stage-task1" 
Here’s a **clean, professional README.md** for your `string-analyzer` project 👇

---

# 🧠 String Analyzer API

A simple and efficient **RESTful API** built with **Node.js** and **Express** that analyzes strings and provides various computed properties such as palindrome check, length, unique characters, SHA256 hash, and more.

The project uses a **Map-based in-memory data store** (no external database) with optional **file-based persistence** support.

---

## 🚀 Features

* Analyze any string and return:

  * String length
  * Palindrome check
  * Unique character count
  * Word count
  * SHA256 hash
  * Character frequency map
* Retrieve all analyzed strings with **filtering options**
* Fetch analysis for a specific string
* Delete a string record
* Lightweight **in-memory Map store** (no database required)
* Follows **MVC architecture** for clean code structure

---

## 🧩 Project Structure

```
string-analyzer/
│
├── src/
│   ├── controllers/
│   │   └── stringController.js
│   ├── routes/
│   │   └── stringRoutes.js
│   ├── utils/
│   │   └── analyzeString.js
│   ├── data/
│   │   └── database.js
│   ├── app.js
│   └── server.js
│
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/string-analyzer.git
cd string-analyzer
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Server

```bash
node src/server.js
```

### 4️⃣ Environment Variables

You can configure a `.env` file in the project root:

```
PORT=3000
```

---

## 📡 API Endpoints

### 🔹 Create / Analyze String

**POST** `/strings`

**Request Body**

```json
{
  "value": "madam"
}
```

**Response**

```json
{
  "id": "c1d9f50f86825a1a2302ec2449c17196",
  "value": "madam",
  "properties": {
    "length": 5,
    "is_palindrome": true,
    "unique_characters": 3,
    "word_count": 1,
    "sha256_hash": "c1d9f50f86825a1a2302ec2449c17196...",
    "character_frequency_map": {
      "m": 2,
      "a": 2,
      "d": 1
    }
  },
  "created_at": "2025-10-22T16:00:00.000Z"
}
```

---

### 🔹 Get All Strings (with optional filters)

**GET** `/strings`

**Query Parameters (optional):**

| Parameter            | Description                          | Example                         |
| -------------------- | ------------------------------------ | ------------------------------- |
| `is_palindrome`      | true / false                         | `/strings?is_palindrome=true`   |
| `min_length`         | Minimum string length                | `/strings?min_length=5`         |
| `max_length`         | Maximum string length                | `/strings?max_length=10`        |
| `word_count`         | Match specific word count            | `/strings?word_count=2`         |
| `contains_character` | Match if string contains a character | `/strings?contains_character=a` |

---

### 🔹 Get Specific String

**GET** `/strings/:string_value`

Example:
`/strings/madam`

---

### 🔹 Delete a String

**DELETE** `/strings/:string_value`

Example:
`/strings/madam`

Response:
`204 No Content`

---

## 🧠 How It Works

1. Each string is analyzed using `analyzeString.js`.
2. The analysis data is stored in a `Map` (in-memory).
3. The **SHA256 hash** of the string serves as a unique ID.
4. The controller handles all CRUD operations.
5. Filtering is handled via query parameters.

---

## 💾 Optional Enhancement

If you want your data to **persist after a restart**, you can extend the project to:

* Save the Map data into a `data.json` file after every update.
* Load it from that file when the app starts.

I can show you how to add this feature if you’d like.

---

## 🧰 Tech Stack

* **Node.js**
* **Express.js**
* **JavaScript (ES6)**
* **Crypto** (for hashing)
* **CORS**
* **dotenv**

---

## 🧑‍💻 Example Testing Tools

* **Postman**
* **cURL**
* **Thunder Client (VS Code)**

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

