import CostSaver from "./CostSaver"

export default function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Inter, sans-serif" }}>
      <h1>Cofferoo Carbon Calculator ☕️</h1>
      <CostSaver
        fontFamily="Inter, sans-serif"
        fontSize={18}
        sliderColor="#7E9260"
        sliderBgColor="#E0E0E0"
      />
    </div>
  )
}
