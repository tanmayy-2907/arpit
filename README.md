# Faculty Dashboard Application

A modern, responsive faculty dashboard built with React and Vite, featuring attendance management, student communication, and resource sharing.

## Features

- **Weekly Schedule Management**: View and manage weekly class schedules
- **Attendance System**: Interactive attendance marking with visual feedback
- **Student Communication**: Send announcements and messages to students
- **Mentee Goal Tracking**: Monitor and track student progress
- **Faculty Communication**: Coordinate with other faculty members
- **Resource Management**: Share and access educational resources
- **Profile Management**: Update faculty profile information
- **Notifications**: Stay updated with important alerts

## Tech Stack

- **Frontend**: React 18 + JavaScript (JSX)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Installation

1. **Clone or download this project to your local machine**

2. **Navigate to the project directory**:
   ```bash
   cd faculty-dashboard
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser and visit**: `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
faculty-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── AttendanceModal.jsx
│   │   ├── FacultyCommunication.jsx
│   │   ├── MenteeGoals.jsx
│   │   ├── Navbar.jsx
│   │   ├── StudentMessages.jsx
│   │   └── WeeklySchedule.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Notifications.jsx
│   │   ├── Profile.jsx
│   │   └── Resources.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Key Features

### Attendance System
- Click on any class in the weekly schedule to open attendance modal
- Visual student grid with red (absent) and green (present) indicators
- Bulk actions: Mark all present/absent
- Real-time attendance statistics
- Save functionality for persistence

### Responsive Design
- Mobile-first approach
- Clean, professional interface
- Purple gradient background with white components
- Consistent typography and spacing

## Dependencies

All required dependencies are listed in `package.json` and will be installed with `npm install`.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes.