import React from 'react'
import { ChampionSelectCard } from './ChampionSelectCard'
import { champions } from '../../utils/champions'

export function ChampionSelect(): React.JSX.Element {
  return (
    <>
      <h2 className="text-center">Champion Select</h2>
      <div className="grid grid-cols-6 gap-3 text-center px-8 min-h-60 max-h-118 overflow-y-auto">
        {champions.map((champion) => (
          <ChampionSelectCard
            key={champion.championName}
            championName={champion.championName}
            championImage={champion.championImage}
            onClick={() => {
              console.log(`Selected champion: ${champion.championName}`)
            }}
          ></ChampionSelectCard>
        ))}
      </div>
    </>
  )
}
