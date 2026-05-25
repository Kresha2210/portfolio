export default function Card({ children }) {
  return (
    <div className="glass p-4 rounded-2xl hover:scale-105 transition">
      {children}
    </div>
  );
}