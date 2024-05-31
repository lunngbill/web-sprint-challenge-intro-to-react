import React, { useState } from 'react'

function Character({data}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [showHomeworld, setShowHomeworld] = useState(false)
  const Homeworldtoggle = () => setShowHomeworld(!showHomeworld)
  return (
    <div className='character-card' onClick={Homeworldtoggle}>
      <h3 className='character-name'>{data.name}</h3>
      {showHomeworld && <p>Planet: <span className='character-planet'>{data.homeworld.name}</span></p>}
      {/* Use the same markup with the same attributes as in the mock */}
    </div>
  )
}

export default Character
