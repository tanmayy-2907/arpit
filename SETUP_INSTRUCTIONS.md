# Setup Instructions for Faculty Dashboard

## Quick Setup Guide

### Prerequisites
- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Step-by-Step Installation

1. **Download the Project**
   - Download all files from this project
   - Extract to a folder on your computer (e.g., `faculty-dashboard`)

2. **Open Terminal/Command Prompt**
   - Navigate to the project folder:
     ```bash
     cd path/to/faculty-dashboard
     ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Open in Browser**
   - Visit: `http://localhost:5173`
   - The application should load with the purple gradient background

### Files to Copy

Make sure you have all these files in your local project:

**Root Files:**
- `package.json`
- `vite.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `index.html`
- `README.md`

**Source Files (src/):**
- `src/main.jsx`
- `src/App.jsx`
- `src/index.css`

**Components (src/components/):**
- `src/components/AttendanceModal.jsx`
- `src/components/FacultyCommunication.jsx`
- `src/components/MenteeGoals.jsx`
- `src/components/Navbar.jsx`
- `src/components/StudentMessages.jsx`
- `src/components/WeeklySchedule.jsx`

**Pages (src/pages/):**
- `src/pages/Dashboard.jsx`
- `src/pages/Notifications.jsx`
- `src/pages/Profile.jsx`
- `src/pages/Resources.jsx`

### Troubleshooting

**If you get dependency errors:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**If the server won't start:**
- Make sure Node.js is installed: `node --version`
- Check if port 5173 is available
- Try: `npm run dev -- --port 3000`

**If styles don't load:**
- Ensure Tailwind CSS is properly configured
- Check that `src/index.css` contains the Tailwind directives

### Development Commands

- `npm run dev` - Start development server (hot reload)
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Check code quality

### Features to Test

1. **Navigation** - Click through all menu items
2. **Weekly Schedule** - Click on any class to open attendance modal
3. **Attendance System** - Toggle student attendance (red/green boxes)
4. **Responsive Design** - Resize browser window
5. **All Components** - Test mentee goals, messages, faculty communication

The application should work perfectly with the purple gradient background and white components!