import React from 'react'

export default function App() {
  return (
    <main className="min-h-screen p-6 text-center">
      <h1 className="text-4xl font-bold">Hi, I’m Agoth Bol Wek</h1>
      <p className="mt-2 text-lg">Web & Mobile Developer | AI Enthusiast | Cybersecurity‑Minded Programmer</p>
      <img src="/family.jpg" alt="Agoth's Family" className="mx-auto my-6 rounded-2xl shadow-lg w-full max-w-lg" />
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <ul className="mt-4 space-y-2">
          <li>✅ Digital Visa/Passport Application Portal</li>
          <li>✅ Inventory & Supply Chain Management System</li>
          <li>✅ E-Learning Platform</li>
          <li>✅ Donation & Campaign Tracker</li>
        </ul>
      </section>
      <footer className="mt-10 text-sm text-gray-600">
        📧 agothbol29@gmail.com | 📞 +254711881798 / +21129336110
      </footer>
    </main>
  )
}