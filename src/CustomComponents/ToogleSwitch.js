import React, { useState } from 'react'
import '../../assets/css/ToogleSwitch.css'

function ToogleSwitch({label}) {
    const [isToggled, setIsToggled] = useState(true);
    const onToggle = () => setIsToggled(!isToggled);
  return (
    <label className="toggle-switch">
    <input type="checkbox" checked={isToggled} onChange={onToggle} />
    <span className="switch" />
  </label>
  )
}

export default ToogleSwitch