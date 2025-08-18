import React from 'react'
import { ChampionSelectCard } from './ChampionSelectCard'
import { champions } from '../../utils/champions'

export function ChampionSelect(): React.JSX.Element {
  return (
    <div>
      <h2>Champion Select</h2>
      {champions.map((champion) => (
        <ChampionSelectCard
          key={champion.championName}
          championName={champion.championName}
          championImage={champion.championImage}
        >
          <button className="bg-blue-500">Select</button>
        </ChampionSelectCard>
      ))}
    </div>
  )
}
