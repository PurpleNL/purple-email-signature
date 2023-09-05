import "./snackbar.style.css";
export default function Snackbar({ label }: { label: string }) {
  return (
    <div className="snackbar__container">
      <div className="snackbar__label">{label}</div>
    </div>
  );
}
