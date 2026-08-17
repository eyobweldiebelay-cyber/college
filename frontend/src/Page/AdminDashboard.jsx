import React, { useState } from 'react';

export default function AdminDashboard() {
  // State to track which sidebar page is currently active
  const [activeTab, setActiveTab] = useState('view');

  return (
    <div style={styles.appContainer}>
      {/* 1. TOP NAVBAR / HEADER */}
      <header style={styles.header}>
        <div style={styles.logo}>Student Management</div>
        <nav style={styles.navLinks}>
          <a href="#about" style={styles.navItem}>About</a>
          <a href="#contact" style={styles.navItem}>Contact</a>
          <a href="#new" style={styles.navItem}>New</a>
        </nav>
      </header>

      {/* BODY LAYOUT (SIDEBAR + MAIN CONTENT) */}
      <div style={styles.bodyLayout}>
        {/* 2. SIDEBAR */}
        <aside style={styles.sidebar}>
          <button
            style={activeTab === 'add' ? { ...styles.sideBtn, ...styles.activeBtn } : styles.sideBtn}
            onClick={() => setActiveTab('add')}
          >
            ➕ Add Student
          </button>
          <button
            style={activeTab === 'delete' ? { ...styles.sideBtn, ...styles.activeBtn } : styles.sideBtn}
            onClick={() => setActiveTab('delete')}
          >
            🗑️ Delete Student
          </button>
          <button
            style={activeTab === 'view' ? { ...styles.sideBtn, ...styles.activeBtn } : styles.sideBtn}
            onClick={() => setActiveTab('view')}
          >
            📋 View Student
          </button>
        </aside>

        {/* 3. MAIN SECTION */}
        <main style={styles.mainContent}>
          {activeTab === 'add' && <AddStudentView />}
          {activeTab === 'delete' && <DeleteStudentView />}
          {activeTab === 'view' && <ViewStudentView />}
        </main>
      </div>
    </div>
  );
}

/* ---------------- DYNAMIC CONTENT COMPONENTS ---------------- */

function AddStudentView() {
  return (
    <div style={styles.card}>
      <h2>Add Student</h2>
      <p>Form to register a new student to the database.</p>
    </div>
  );
}

function DeleteStudentView() {
  return (
    <div style={styles.card}>
      <h2>Delete Student</h2>
      <p>Select a student or enter ID to delete record.</p>
    </div>
  );
}

function ViewStudentView() {
  return (
    <div style={styles.card}>
      <h2>View Students</h2>
      <p>Your database table will be rendered here.</p>
    </div>
  );
}

/* ---------------- INLINE STYLES ---------------- */

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f6f8',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    color: '#fff',
    padding: '0 24px',
    height: '60px',
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
  },
  navItem: {
    color: '#cbd5e1',
    textDecoration: 'none',
    fontWeight: '500',
  },
  bodyLayout: {
    display: 'flex',
    flex: 1,
  },
  sidebar: {
    width: '220px',
    backgroundColor: '#ffffff',
    borderRight: '1px solid #e2e8f0',
    padding: '20px 10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  sideBtn: {
    padding: '12px 16px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: 'transparent',
    color: '#334155',
    textAlign: 'left',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: '500',
  },
  activeBtn: {
    backgroundColor: '#2563eb',
    color: '#ffffff',
  },
  mainContent: {
    flex: 1,
    padding: '30px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
};