import * as React from "react"

export default function CostSaver({
  fontFamily,
  fontSize,
  sliderColor,
  sliderBgColor,
}) {
  const [cups, setCups] = React.useState(100)
  const [includeBuild, setIncludeBuild] = React.useState(true)
  const [includeOps, setIncludeOps] = React.useState(true)
  const [isDaily, setIsDaily] = React.useState(true)

  const perCupSaving = (includeBuild ? 0.2 : 0) + (includeOps ? 0.4 : 0)
  const carbonSavedDaily = cups * perCupSaving
  const carbonSavedYearly = carbonSavedDaily * 365
  const dailySavingAUD = (carbonSavedDaily / 1000) * 30
  const yearlySavingAUD = dailySavingAUD * 365

  const displayCarbon = isDaily ? carbonSavedDaily : carbonSavedYearly
  const displaySaving = isDaily ? dailySavingAUD : yearlySavingAUD
  const co2Unit = isDaily ? "kg" : "tons"
  const unit = isDaily ? "per day" : "per year"

  const sliderStyle = {
    width: "100%",
    accentColor: sliderColor,
    cursor: "pointer",
    appearance: "none",
    height: "6px",
    borderRadius: "3px",
    background: sliderBgColor,
    transition: "none",
  }

  const checkboxStyle = {
    accentColor: sliderColor,
    width: 18,
    height: 18,
    cursor: "pointer",
    transition: "none",
  }

  return (
    <div
      style={{
        fontFamily,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "28px",
        width: "100%",
        height: "100%",
        color: "#111",
      }}
    >
      <div style={{ width: "100%", maxWidth: 600, padding: "0 20px" }}>
        <div style={{ width: "100%" }}>
          <label style={{ fontSize, display: "block", marginBottom: 8 }}>
            Daily Cups Sold: {cups}
          </label>
          <input
            type="range"
            min="30"
            max="300"
            step="5"
            value={cups}
            onChange={(e) => setCups(Number(e.target.value))}
            style={sliderStyle}
          />
        </div>

        <div style={{ marginTop: 24 }}>
          <label
            style={{
              display: "block",
              marginBottom: 8,
              fontWeight: 600,
              fontSize,
            }}
          >
            Consulting Option:
          </label>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: fontSize * 0.9,
            }}
          >
            <input
              type="checkbox"
              checked={includeBuild}
              onChange={() => setIncludeBuild(!includeBuild)}
              style={checkboxStyle}
            />
            Change Build & Equipment
          </label>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: fontSize * 0.9,
            }}
          >
            <input
              type="checkbox"
              checked={includeOps}
              onChange={() => setIncludeOps(!includeOps)}
              style={checkboxStyle}
            />
            Change Operations
          </label>
        </div>

        <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
          <button
            onClick={() => setIsDaily(true)}
            style={{
              border: isDaily ? "none" : `2px solid ${sliderColor}`,
              padding: "10px 16px",
              borderRadius: "8px",
              background: isDaily ? sliderColor : "transparent",
              color: isDaily ? "#fff" : sliderColor,
              fontWeight: 600,
              cursor: "pointer",
              fontSize: fontSize * 0.8,
              minWidth: 100,
              transition: "none",
            }}
          >
            Daily
          </button>
          <button
            onClick={() => setIsDaily(false)}
            style={{
              border: isDaily ? `2px solid ${sliderColor}` : "none",
              padding: "10px 16px",
              borderRadius: "8px",
              background: isDaily ? "transparent" : sliderColor,
              color: isDaily ? sliderColor : "#fff",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: fontSize * 0.8,
              minWidth: 100,
              transition: "none",
            }}
          >
            Yearly
          </button>
        </div>
      </div>

      <div style={{ marginTop: 40, textAlign: "center", lineHeight: 1.6 }}>
        <h3 style={{ fontSize: fontSize * 1.1 }}>
          🧾 Estimated {isDaily ? "Daily" : "Yearly"} Savings
        </h3>
        <p style={{ fontSize, fontWeight: 600 }}>
          You can save A${displaySaving.toFixed(2)} {unit}
        </p>
        <p style={{ fontSize, fontWeight: 600 }}>
          You can save{" "}
          {isDaily
            ? displayCarbon.toFixed(1)
            : (displayCarbon / 1000).toFixed(1)}{" "}
          {co2Unit} CO₂e {unit}
        </p>
      </div>
    </div>
  )
}
