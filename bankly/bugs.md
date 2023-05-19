### Bug 1:

- Description: Missing throw statement for invalid credentials.
- File: models/user.js
- Line: 71

---

### Bug 2:

- Description: Duplicate module exports of app.
- File: app.js
- Line: 36

---

### Bug 3:

- Description: Sensitive information returned in DB query.
- File: models/users.js
- Line: 82

---

### Bug 4:

- Description: decode needed to be replaced with verify in middleware/auth.js.
- File: middleware/auth.js
- Line: 53

---

### Bug 5:

- Description: Missing throw statement.
- File: models/user.js
- Line: 115

---

### Bug 6:

- Description: Query missing await keyword.
- File: routes/auth.js
- Line: 51

---

### Bug 7:

- Description: Add OR operator to allow current users to edit their own profile as well as admins.
- File: routes/users.js
- Line: 70
